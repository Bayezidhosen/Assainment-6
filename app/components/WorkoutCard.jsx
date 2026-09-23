import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-[#ccff00]"
    >

      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-zinc-800">
        {workout.image ? (
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-6xl">
            🏋️
          </div>
        )}
      </div>

      <div className="p-5">

        {/* Category */}
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

        <h3 className="mt-4 text-xl font-black">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center gap-4 border-t border-zinc-800 pt-4 text-xs text-zinc-400">

          <span className="flex items-center gap-1">
            <Clock size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.calories} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={14} />
            {workout.rating}
          </span>

        </div>
      </div>
    </Link>
  );
}