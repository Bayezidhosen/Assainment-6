import Link from "next/link";
import { ArrowLeft, Check, BookmarkPlus } from "lucide-react";
import { getWorkout } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

export default async function WorkoutDetails({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-12">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-[#ccff00]"
        >
          <ArrowLeft size={18} />
          BACK TO LIBRARY
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
            {workout.image ? (
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full min-h-[500px] w-full object-cover"
              />
            ) : (
              <div className="flex min-h-[500px] items-center justify-center text-9xl">
                🏋️
              </div>
            )}
          </div>

          {/* Details */}
          <div className="py-5">

            <div className="flex flex-wrap gap-2">
              {workout.category?.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-black text-black"
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-4xl font-black uppercase sm:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-5 leading-7 text-zinc-400">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800">

              <Spec label="Equipment" value={workout.equipment} />
              <Spec label="Difficulty" value={workout.difficulty} />
              <Spec label="Sets" value={workout.sets} />
              <Spec label="Reps" value={workout.reps} />
              <Spec label="Duration" value={`${workout.duration} min`} />
              <Spec label="Calories" value={`${workout.calories} kcal`} />
              <Spec label="Rating" value={workout.rating} />

            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="text-xl font-black">
                INSTRUCTIONS
              </h2>

              <ol className="mt-4 space-y-4">
                {workout.instructions?.map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-4 text-zinc-400"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] font-black text-black">
                      {index + 1}
                    </span>

                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />

          </div>
        </div>
      </div>
    </main>
  );
}

function Spec({ label, value }) {
  return (
    <div className="flex justify-between border-b border-zinc-800 px-5 py-4 last:border-0">
      <span className="text-xs font-bold uppercase text-zinc-500">
        {label}
      </span>

      <span className="font-bold">
        {value || "—"}
      </span>
    </div>
  );
}