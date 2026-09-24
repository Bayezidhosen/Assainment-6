import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080909]">

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#15171c]">

          <div className="grid min-h-[320px] items-center lg:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT */}
            <div className="relative z-10 px-6 py-10 sm:px-8 lg:px-10">

              <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-[#c8ff00]">
                Workout Library
              </p>

              <h1 className="max-w-[620px] text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[58px]">
                Train With Intent. Log
                <br />
                Every Set
                <span className="text-[#c8ff00]">.</span>
              </h1>

              <p className="mt-5 max-w-xl text-xs leading-5 text-zinc-400 sm:text-sm">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today's plan, and watch the week's work add up.
              </p>

              <Link
                href="#library"
                className="group mt-6 inline-flex items-center gap-3 rounded-md bg-[#c8ff00] px-5 py-3 text-[10px] font-black uppercase text-black"
              >
                Browse Workouts

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[#c8ff00]">
                  <ArrowRight size={13} />
                </span>
              </Link>

            </div>


            {/* RIGHT IMAGE */}
            <div className="relative hidden min-h-[320px] items-end justify-center lg:flex">

              {/* RIGHT IMAGE */}
<div className="relative hidden min-h-80 items-end justify-center lg:flex">

  <Image
    src="/assets/banner.png"
    alt="Workout illustration"
    width={350}
    height={350}
    priority
    className="relative z-10 h-80 w-87.5 object-contain object-bottom"
  />

</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}