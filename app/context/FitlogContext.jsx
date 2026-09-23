"use client";

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const FitlogContext = createContext();

export function FitlogProvider({ children }) {
  const [plan, setPlan] = useState(() => {
    if (typeof window === "undefined") return [];

    const storedPlan = localStorage.getItem("fitlog-plan");
    return storedPlan ? JSON.parse(storedPlan) : [];
  });
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined") return [];

    const storedSaved = localStorage.getItem("fitlog-saved");
    return storedSaved ? JSON.parse(storedSaved) : [];
  });

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  function addToPlan(workout) {
    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 lifts");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Workout already added");
      return;
    }

    setPlan([...plan, workout]);

    toast.success("Added to today's plan");
  }

  function saveWorkout(workout) {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Already saved");
      return;
    }

    setSaved([...saved, workout]);

    toast.success("Saved for later");
  }

  function removeFromPlan(id) {
    setPlan(plan.filter((item) => item.id !== id));
    toast.success("Workout removed");
  }

  function removeSaved(id) {
    setSaved(saved.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  }

  function markAsDone(id) {
    setPlan(
      plan.map((item) =>
        item.id === id
          ? { ...item, done: true }
          : item
      )
    );

    toast.success("Workout marked as done");
  }

  return (
    <FitlogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeSaved,
        markAsDone,
      }}
    >
      {children}
    </FitlogContext.Provider>
  );
}

export function useFitlog() {
  return useContext(FitlogContext);
}