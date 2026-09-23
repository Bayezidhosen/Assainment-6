import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Clock3,
  Flame,
  Star,
  Dumbbell,
} from "lucide-react";

import { getWorkout } from "../../lib/api";
import WorkoutActions from "../../components/WorkoutActions";

export default async function WorkoutDetails({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#080909] px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* Back Button */}
        <Link
          href="/#library"
          className="mb-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-500 transition hover:text-[#c8ff00]"
        >
          <ArrowLeft size={16} />
          Back to Library
        </Link>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">

          {/* ================= IMAGE ================= */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111313]">

            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[650px]">

              <Image
                src={workout.image}
                alt={workout.name}
                fill
                className="h-full w-full object-cover"
              />

            </div>

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8">

              <div className="flex items-center gap-2">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c8ff00] text-black">
                  <Dumbbell size={18} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    FitLog Workout
                  </p>

                  <p className="text-sm font-black uppercase text-white">
                    Exercise #{workout.id}
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col justify-center py-2">

            {/* Categories */}
            <div className="flex flex-wrap gap-2">

              {workout.muscleGroups?.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
                >
                  {group}
                </span>
              ))}

            </div>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
              {workout.description}
            </p>

            {/* Quick Stats */}
            <div className="mt-7 flex flex-wrap gap-5">

              <QuickStat
                icon={<Clock3 size={16} />}
                value={`${workout.duration} min`}
              />

              <QuickStat
                icon={<Flame size={16} />}
                value={`${workout.caloriesBurned} kcal`}
              />

              <QuickStat
                icon={
                  <Star
                    size={16}
                    className="fill-[#c8ff00] text-[#c8ff00]"
                  />
                }
                value={workout.rating}
              />

            </div>

            {/* Specs */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111313]">

              <Spec
                label="Equipment"
                value={workout.equipment}
              />

              <Spec
                label="Difficulty"
                value={workout.difficulty}
              />

              <Spec
                label="Sets"
                value={workout.sets}
              />

              <Spec
                label="Reps"
                value={workout.reps}
              />

              <Spec
                label="Duration"
                value={`${workout.duration} min`}
              />

              <Spec
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
              />

              <Spec
                label="Rating"
                value={workout.rating}
              />

            </div>

            {/* Instructions */}
            <div className="mt-9">

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-7 bg-[#c8ff00]" />

                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-[#c8ff00]">
                  Instructions
                </h2>

              </div>

              <ol className="mt-5 space-y-4">

                {workout.instructions?.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c8ff00] text-xs font-black text-black">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-zinc-400">
                      {instruction}
                    </p>

                  </li>
                ))}

              </ol>

            </div>

            {/* Action Buttons */}
            <WorkoutActions workout={workout} />

          </div>

        </div>

      </div>
    </main>
  );
}


/* ================= QUICK STAT ================= */

function QuickStat({ icon, value }) {
  return (
    <div className="flex items-center gap-2 text-sm font-bold text-zinc-300">
      <span className="text-[#c8ff00]">
        {icon}
      </span>

      {value}
    </div>
  );
}


/* ================= SPEC ROW ================= */

function Spec({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-white/10 px-5 py-4 last:border-0 sm:px-6">

      <span className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-500">
        {label}
      </span>

      <span className="text-right text-sm font-bold text-white">
        {value || "—"}
      </span>

    </div>
  );
}