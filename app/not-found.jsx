import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-zinc-950 px-5 text-center">

      <div>
        <p className="text-8xl font-black text-[#ccff00]">
          404
        </p>

        <h1 className="mt-5 text-3xl font-black">
          WORKOUT NOT FOUND
        </h1>

        <p className="mt-3 text-zinc-500">
          The workout you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block bg-[#ccff00] px-6 py-3 font-black text-black"
        >
          BACK TO LIBRARY
        </Link>
      </div>

    </main>
  );
}