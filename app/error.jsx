"use client";

export default function Error({ reset }) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-zinc-950 text-center">

      <div>
        <h1 className="text-3xl font-black">
          SOMETHING WENT WRONG
        </h1>

        <p className="mt-3 text-zinc-500">
          We couldn't load the workout library.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 bg-[#ccff00] px-6 py-3 font-black text-black"
        >
          TRY AGAIN
        </button>
      </div>

    </div>
  );
}