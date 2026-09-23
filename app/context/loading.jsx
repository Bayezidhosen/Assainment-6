export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-zinc-950">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-[#ccff00]" />

        <p className="mt-5 font-bold text-zinc-400">
          Loading workouts…
        </p>
      </div>
    </div>
  );
}