import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080909]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c8ff00]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* HERO CARD */}
        <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#15171c]">

          {/* Subtle background glow */}
          <div className="pointer-events-none absolute right-[20%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#c8ff00]/5 blur-[100px]" />

          <div className="grid min-h-80 items-center lg:grid-cols-[1.2fr_0.8fr]">

            {/* =========================
                LEFT CONTENT
            ========================= */}
            <div className="relative z-10 px-6 py-10 sm:px-8 lg:px-10">

              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-2">

                <span className="h-[2px] w-6 bg-[#c8ff00]" />

                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#c8ff00] sm:text-[10px]">
                  Workout Library
                </span>

              </div>


              {/* Heading */}
              <h1 className="max-w-155 text-4xl font-black uppercase leading-[0.9] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[58px]">

                Train With Intent. Log
                <br />

                Every Set
                <span className="text-[#c8ff00]">.</span>

              </h1>


              {/* Description */}
              <p className="mt-5 max-w-xl text-xs leading-5 text-zinc-400 sm:text-sm">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today's plan, and watch the week's work add up.
              </p>


              {/* CTA */}
              <div className="mt-6">

                <Link
                  href="#library"
                  className="group inline-flex items-center gap-3 rounded-md bg-[#c8ff00] px-5 py-3 text-[10px] font-black uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#d8ff4d] hover:shadow-[0_0_25px_rgba(200,255,0,0.2)]"
                >

                  Browse Workouts

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#c8ff00] transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight size={13} />
                  </span>

                </Link>

              </div>

            </div>


            {/* =========================
                RIGHT IMAGE
            ========================= */}
            <div className="relative hidden h-full min-h-[320px] items-end justify-center lg:flex">

              {/* Image Glow */}
              <div className="absolute bottom-10 right-20 h-52 w-52 rounded-full bg-[#c8ff00]/10 blur-[80px]" />


              {/* Workout Image */}
              <div className="relative z-10 h-[310px] w-97.5">

                <Image
                  src=""
                  alt="Workout illustration"
                  fill
                  priority
                  className="object-contain object-bottom"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}