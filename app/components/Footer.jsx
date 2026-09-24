import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e1014]">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5 py-5 sm:px-8">

        <div className="flex items-center gap-2">
          <span className="text-lg text-[#c8ff00]">
            <Image src="/logo.png" alt="FitLog logo" width={24} height={24} />
          </span>

          <span className="text-sm font-black text-white">
            FITLOG
          </span>
        </div>

        <p className="text-right text-[10px] text-zinc-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}