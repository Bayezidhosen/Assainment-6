"use client";

import { useState } from "react";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutGrid({ workouts }) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    return a[sortBy] - b[sortBy];
  });

  return (
    <section
      id="library"
      className="bg-zinc-950 px-5 py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-black tracking-[0.3em] text-[#ccff00]">
              EXPLORE
            </p>

            <h2 className="mt-2 text-4xl font-black">
              THE LIBRARY
            </h2>

            <p className="mt-2 text-zinc-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm font-bold"
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

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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