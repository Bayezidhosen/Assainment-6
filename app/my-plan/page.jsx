"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useFitlog } from "../context/FitlogContext";
import { Clock, Flame, Star } from "lucide-react";

export default function MyPlan() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeSaved,
    markAsDone,
  } = useFitlog();

  const [activeTab, setActiveTab] = useState("plan");

  const currentList = activeTab === "plan" ? plan : saved;

  const minutes = plan.reduce(
    (total, item) => total + Number(item.duration || 0),
    0
  );

  const calories = plan.reduce(
    (total, item) => total + Number(item.calories || 0),
    0
  );

  return (
    <main className="min-h-screen bg-zinc-950 px-5 py-16">

      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-black tracking-[0.3em] text-[#ccff00]">
          YOUR WORKOUT
        </p>

        <h1 className="mt-3 text-5xl font-black">
          MY PLAN
        </h1>

        <p className="mt-3 text-zinc-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          <Metric
            title="EXERCISES"
            value={plan.length}
          />

          <Metric
            title="MINUTES"
            value={minutes}
          />

          <Metric
            title="CALORIES"
            value={calories}
          />

        </div>

        {/* Tabs */}
        <div className="mt-12 flex border-b border-zinc-800">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-6 py-4 font-black ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-zinc-500"
            }`}
          >
            TODAY'S PLAN
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-6 py-4 font-black ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-zinc-500"
            }`}
          >
            SAVED
          </button>
        </div>

        {/* List */}
        <div className="mt-8 space-y-4">

          {currentList.length === 0 ? (
            <EmptyState />
          ) : (
            currentList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                activeTab={activeTab}
                onRemove={
                  activeTab === "plan"
                    ? removeFromPlan
                    : removeSaved
                }
                onDone={markAsDone}
              />
            ))
          )}

        </div>

      </div>
    </main>
  );
}

function Metric({ title, value }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="text-xs font-bold text-zinc-500">
        {title}
      </p>

      <p className="mt-2 text-4xl font-black text-[#ccff00]">
        {value}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-zinc-700 py-20 text-center">

      <h2 className="text-2xl font-black">
        NOTHING HERE YET
      </h2>

      <p className="mt-3 text-zinc-500">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-[#ccff00] px-6 py-3 font-black text-black"
      >
        GO TO WORKOUTS
      </Link>

    </div>
  );
}

function PlanCard({
  workout,
  activeTab,
  onRemove,
  onDone,
}) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 md:flex-row md:items-center">

      <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-zinc-800 md:w-40">
        {workout.image && (
          <Image
            src={workout.image}
            alt={workout.name}
            width={160}
            height={112}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="flex-1">

        <h3 className="text-xl font-black">
          {workout.name}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {workout.equipment}
        </p>

        <div className="mt-3 flex gap-4 text-xs text-zinc-400">

          <span>
            <Clock size={14} className="inline" />{" "}
            {workout.duration} min
          </span>

          <span>
            <Flame size={14} className="inline" />{" "}
            {workout.calories} kcal
          </span>

          <span>
            <Star size={14} className="inline" />{" "}
            {workout.rating}
          </span>

        </div>

      </div>

      <div className="flex flex-wrap gap-2">

        <Link
          href={`/workout/${workout.id}`}
          className="border border-zinc-700 px-4 py-2 text-sm font-bold"
        >
          VIEW DETAILS
        </Link>

        {activeTab === "plan" && (
          <button
            onClick={() => onDone(workout.id)}
            className="bg-[#ccff00] px-4 py-2 text-sm font-black text-black"
          >
            MARK AS DONE
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          className="border border-red-500 px-4 py-2 text-sm font-bold text-red-400"
        >
          X
        </button>

      </div>

    </div>
  );
}