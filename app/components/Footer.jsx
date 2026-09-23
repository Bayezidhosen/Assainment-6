import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2 font-black">
          <Dumbbell className="text-[#ccff00]" />
          FITLOG
        </div>

        <p className="text-sm text-zinc-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}