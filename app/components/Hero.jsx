import Link from "next/link";
import { ArrowDownRight, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080909]">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c8ff00]/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-20">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#c8ff00]" />

            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#c8ff00]">
              Workout Library
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[78px]">

            Train With
            <span className="block text-[#c8ff00]">
              Intent.
            </span>

            Log Every
            <span className="block">
              Set.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          {/* CTA */}
          <div className="mt-9">
            <Link
              href="#library"
              className="group inline-flex items-center gap-3 bg-[#c8ff00] px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#d8ff4d]"
            >
              Browse Workouts

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[#c8ff00] transition-transform group-hover:translate-x-1 group-hover:-rotate-45">
                <ArrowDownRight size={16} />
              </span>
            </Link>
          </div>

          {/* Small Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">

            <div>
              <p className="text-2xl font-black text-white">
                12
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Exercises
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-white">
                5
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Daily Limit
              </p>
            </div>

            <div>
              <p className="text-2xl font-black text-[#c8ff00]">
                100%
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Focus
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">

          {/* Main Image Container */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900">

            {/* Replace this emoji with Figma image later */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#c8ff00]/30 bg-[#c8ff00]/10">
                <Dumbbell
                  size={70}
                  strokeWidth={1.5}
                  className="text-[#c8ff00]"
                />
              </div>

            </div>

            {/* Top Label */}
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                FITLOG / 001
              </span>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">

              <div className="flex items-end justify-between gap-5">

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c8ff00]">
                    Today's Focus
                  </p>

                  <h2 className="mt-2 text-2xl font-black uppercase text-white">
                    Train Hard
                  </h2>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c8ff00] text-black">
                  <ArrowDownRight size={22} />
                </div>

              </div>

            </div>

          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 -left-3 rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 shadow-2xl sm:-left-6">

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Weekly Progress
            </p>

            <div className="mt-2 flex items-center gap-3">

              <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-700">
                <div className="h-full w-[72%] bg-[#c8ff00]" />
              </div>

              <span className="text-xs font-black text-[#c8ff00]">
                72%
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}