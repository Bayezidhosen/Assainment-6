"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useFitlog } from "../context/FitlogContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { plan, saved } = useFitlog();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080909]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-19 max-w-350 items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg  text-black">
            
          </div>
          <Image src="/logo.png" alt="FITLOG logo" width={30} height={36} priority />

          <span className="text-xl font-black tracking-tight">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">

          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-wider text-[#c8ff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-bold uppercase tracking-wider text-zinc-400 transition hover:text-white"
          >
            My Plan
          </Link>

        </div>

        {/* Desktop Counters */}
        <div className="hidden items-center gap-3 sm:flex">

          <Link
            href="/my-plan"
            className="rounded-full bg-[#c8ff00] px-4 py-2 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#d9ff45]"
          >
            Plan&nbsp; {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
          >
            Saved&nbsp; {saved.length}
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#080909] px-5 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-white/5 px-4 py-3 text-sm font-bold uppercase text-[#c8ff00]"
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-white/5 px-4 py-3 text-sm font-bold uppercase text-zinc-300"
            >
              My Plan
            </Link>

            <div className="flex gap-3 pt-2">

              <Link
                href="/my-plan"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-[#c8ff00] px-4 py-3 text-center text-xs font-black uppercase text-black"
              >
                Plan {plan.length}
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-white/20 px-4 py-3 text-center text-xs font-black uppercase"
              >
                Saved {saved.length}
              </Link>

            </div>

          </div>

        </div>
      )}
    </header>
  );
}