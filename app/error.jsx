"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#080909] px-5 text-center">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#c8ff00]">
          FitLog
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase text-white">
          Something Went Wrong
        </h1>

        <p className="mt-4 text-zinc-500">
          We can&apos;t load the workout library.
        </p>

        {process.env.NODE_ENV === "development" && (
          <p className="mx-auto mt-4 max-w-xl text-sm text-red-400">
            {error?.message}
          </p>
        )}

        <button
          onClick={() => reset()}
          className="mt-8 bg-[#c8ff00] px-8 py-4 text-sm font-black uppercase text-black hover:bg-[#d8ff4d]"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}