import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111313] transition duration-300 hover:-translate-y-1 hover:border-[#c8ff00]/50"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#c8ff00] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
            >
              {group}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-black uppercase tracking-tight text-white">
          {workout.name}
        </h3>

        <p className="mt-2 truncate text-sm text-zinc-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-zinc-400">

          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <Star
              size={14}
              className="fill-[#c8ff00] text-[#c8ff00]"
            />
            {workout.rating}
          </span>

        </div>
      </div>
    </Link>
  );
}