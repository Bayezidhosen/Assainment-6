"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutGrid({ workouts }) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="border-b border-white/10 bg-[#080909] px-5 py-20 sm:px-8"
    >
      <div className="mx-auto max-w-350">

        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-7 bg-[#c8ff00]" />

              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c8ff00]">
                Explore
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
              The Library
            </h2>

            <p className="mt-3 text-sm text-zinc-500 sm:text-base">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="appearance-none rounded-full border border-white/15 bg-[#111313] py-3 pl-5 pr-11 text-xs font-black uppercase tracking-wide text-white outline-none transition focus:border-[#c8ff00]"
            >
              <option value="duration">
                Sort By Duration
              </option>

              <option value="calories">
                Sort By Calories
              </option>

              <option value="rating">
                Sort By Rating
              </option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
          </div>

        </div>

        {/* Workout Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>

      </div>
    </section>
  );
}