"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FitlogContext = createContext(null);

export function FitlogProvider({ children }) {
  const getStoredValue = (key) => {
    if (typeof window === "undefined") return [];

    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : [];
    } catch (error) {
      console.error("Failed to load FitLog data:", error);
      return [];
    }
  };

  const [plan, setPlan] = useState(() =>
    getStoredValue("fitlog-plan")
  );
  const [saved, setSaved] = useState(() =>
    getStoredValue("fitlog-saved")
  );

  /*
  ==========================================
  SAVE PLAN
  ==========================================
  */

  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan]);

  /*
  ==========================================
  SAVE SAVED WORKOUTS
  ==========================================
  */

  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved]);

  /*
  ==========================================
  ADD TO TODAY'S PLAN
  ==========================================
  */

  const addToPlan = (workout) => {
    setPlan((currentPlan) => {
      // Maximum 5 workouts
      if (currentPlan.length >= 5) {
        return currentPlan;
      }

      // Prevent duplicate
      const alreadyExists =
        currentPlan.some(
          (item) => item.id === workout.id
        );

      if (alreadyExists) {
        return currentPlan;
      }

      return [
        ...currentPlan,
        {
          ...workout,
          done: false,
        },
      ];
    });
  };

  /*
  ==========================================
  SAVE FOR LATER
  ==========================================
  */

  const saveWorkout = (workout) => {
    setSaved((currentSaved) => {
      const alreadyExists =
        currentSaved.some(
          (item) => item.id === workout.id
        );

      if (alreadyExists) {
        return currentSaved;
      }

      return [
        ...currentSaved,
        workout,
      ];
    });
  };

  /*
  ==========================================
  REMOVE FROM PLAN
  ==========================================
  */

  const removeFromPlan = (id) => {
    setPlan((currentPlan) =>
      currentPlan.filter(
        (item) => item.id !== id
      )
    );
  };

  /*
  ==========================================
  REMOVE FROM SAVED
  ==========================================
  */

  const removeFromSaved = (id) => {
    setSaved((currentSaved) =>
      currentSaved.filter(
        (item) => item.id !== id
      )
    );
  };

  /*
  ==========================================
  CHECK PLAN
  ==========================================
  */

  const isInPlan = (id) => {
    return plan.some(
      (item) => item.id === id
    );
  };

  /*
  ==========================================
  CHECK SAVED
  ==========================================
  */

  const isSaved = (id) => {
    return saved.some(
      (item) => item.id === id
    );
  };

  return (
    <FitlogContext.Provider
      value={{
        plan,
        saved,
        setPlan,
        setSaved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitlogContext.Provider>
  );
}

/*
==========================================
CUSTOM HOOK
==========================================
*/

export function useFitlog() {
  const context =
    useContext(FitlogContext);

  if (!context) {
    throw new Error(
      "useFitlog must be used inside FitlogProvider"
    );
  }

  return context;
}