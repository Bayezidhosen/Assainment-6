import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">

        {/* Content */}
        <div>
          <p className="mb-5 text-sm font-black tracking-[0.3em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <span className="block text-[#ccff00]">
              LOG EVERY SET.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 font-black text-black transition hover:scale-105"
          >
            BROWSE WORKOUTS
            <ArrowDownRight size={20} />
          </Link>
        </div>

        {/* Hero Visual */}
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
            <div className="flex h-full items-center justify-center">
              <span className="text-8xl">🏋️</span>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-zinc-700 bg-zinc-900 px-5 py-4">
            <p className="text-xs text-zinc-500">TODAY'S FOCUS</p>
            <p className="font-black text-[#ccff00]">
              TRAIN HARD
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}