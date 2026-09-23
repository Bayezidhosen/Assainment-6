"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { useFitlog } from "../context/FitlogContext";

export default function Navbar() {
  const { plan, saved } = useFitlog();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="text-[#ccff00]" />
          <span className="font-black tracking-wider">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-semibold text-zinc-300 transition hover:text-[#ccff00]"
          >
            WORKOUT
          </Link>

          <Link
            href="/my-plan"
            className="font-semibold text-zinc-300 transition hover:text-[#ccff00]"
          >
            MY PLAN
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-black text-black"
          >
            PLAN {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-zinc-600 px-4 py-2 text-sm font-black"
          >
            SAVED {saved.length}
          </Link>
        </div>

      </nav>
    </header>
  );
}