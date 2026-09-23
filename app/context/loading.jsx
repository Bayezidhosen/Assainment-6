export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#080909]">
      <div className="text-center">

        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-zinc-800 border-t-[#c8ff00]" />

        <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
          Loading workouts…
        </p>

      </div>
    </main>
  );
}