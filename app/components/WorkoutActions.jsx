"use client";

import { Check, BookmarkPlus } from "lucide-react";
import toast from "react-hot-toast";

import { useFitlog } from "../context/FitlogContext";

export default function WorkoutActions({ workout }) {
  const {
    plan,
    saved,
    setPlan,
    setSaved,
  } = useFitlog();

  function handleAddToPlan() {
    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 lifts.");
      return;
    }

    const alreadyAdded = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.error("This workout is already in today's plan.");
      return;
    }

    setPlan([...plan, workout]);

    toast.success("Added to today's plan");
  }

  function handleSave() {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.error("This workout is already saved.");
      return;
    }

    setSaved([...saved, workout]);

    toast.success("Saved for later");
  }

  return (
    <div className="mt-9 flex flex-col gap-3 sm:flex-row">

      {/* Add to Plan */}
      <button
        onClick={handleAddToPlan}
        disabled={plan.length >= 5}
        className="flex flex-1 items-center justify-center gap-2 bg-[#c8ff00] px-5 py-4 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff4d] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Check size={18} />

        {plan.length >= 5
          ? "Plan Full"
          : "Add to Today's Plan"}
      </button>

      {/* Save */}
      <button
        onClick={handleSave}
        className="flex flex-1 items-center justify-center gap-2 border border-white/15 bg-white/2 px-5 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
      >
        <BookmarkPlus size={18} />

        Save for Later
      </button>

    </div>
  );
}