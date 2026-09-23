"use client";

import { Check, BookmarkPlus } from "lucide-react";
import { useFitlog } from "@/context/FitlogContext";

export default function WorkoutActions({ workout }) {
  const { addToPlan, saveWorkout } = useFitlog();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

      <button
        onClick={() => addToPlan(workout)}
        className="flex flex-1 items-center justify-center gap-2 bg-[#ccff00] px-5 py-4 font-black text-black"
      >
        <Check size={20} />
        ADD TO TODAY'S PLAN
      </button>

      <button
        onClick={() => saveWorkout(workout)}
        className="flex flex-1 items-center justify-center gap-2 border border-zinc-700 px-5 py-4 font-black"
      >
        <BookmarkPlus size={20} />
        SAVE FOR LATER
      </button>

    </div>
  );
}