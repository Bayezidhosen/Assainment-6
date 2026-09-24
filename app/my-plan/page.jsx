"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Check,
  ChevronDown,
  Clock3,
  Flame,
  Star,
  X,
  ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";

import { useFitlog } from "../context/FitlogContext";

export default function MyPlan() {
  const {
    plan = [],
    saved = [],
    setPlan,
    setSaved,
  } = useFitlog();

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  /*
  ======================================================
  CURRENT LIST
  ======================================================
  */

  const currentList =
    activeTab === "plan" ? plan : saved;

  /*
  ======================================================
  SORT
  ======================================================
  */

  const sortedList = useMemo(() => {
    const list = [...currentList];

    if (sortBy === "duration") {
      return list.sort(
        (a, b) =>
          Number(a.duration || 0) -
          Number(b.duration || 0)
      );
    }

    if (sortBy === "calories") {
      return list.sort(
        (a, b) =>
          Number(
            a.caloriesBurned ||
              a.calories ||
              0
          ) -
          Number(
            b.caloriesBurned ||
              b.calories ||
              0
          )
      );
    }

    if (sortBy === "rating") {
      return list.sort(
        (a, b) =>
          Number(b.rating || 0) -
          Number(a.rating || 0)
      );
    }

    return list;
  }, [currentList, sortBy]);

  /*
  ======================================================
  TOTAL MINUTES
  ======================================================
  */

  const totalMinutes = plan.reduce(
    (total, workout) =>
      total + Number(workout.duration || 0),
    0
  );

  /*
  ======================================================
  TOTAL CALORIES
  ======================================================
  */

  const totalCalories = plan.reduce(
    (total, workout) =>
      total +
      Number(
        workout.caloriesBurned ||
          workout.calories ||
          0
      ),
    0
  );

  /*
  ======================================================
  REMOVE WORKOUT
  ======================================================
  */

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      setPlan(
        plan.filter(
          (item) => item.id !== id
        )
      );

      toast.success(
        "Removed from today's plan"
      );
    } else {
      setSaved(
        saved.filter(
          (item) => item.id !== id
        )
      );

      toast.success(
        "Removed from saved"
      );
    }
  };

  /*
  ======================================================
  MARK AS DONE
  ======================================================
  */

  const handleDone = (id) => {
    setPlan(
      plan.map((item) =>
        item.id === id
          ? {
              ...item,
              done: true,
            }
          : item
      )
    );

    toast.success(
      "Workout marked as done"
    );
  };

  return (
    <main className="min-h-screen bg-[#0b0d10] text-white">

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="mx-auto max-w-350 px-5 py-10 sm:px-8 lg:px-10 lg:py-12">

        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <section>

          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            MY PLAN
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>

        </section>


        {/* =================================================
            METRICS
        ================================================= */}

        <section className="mt-7 grid overflow-hidden rounded-xl border border-white/10 bg-[#12151b] sm:grid-cols-3">

          {/* Exercises */}

          <Metric
            title="Exercises"
            value={plan.length}
          />

          {/* Minutes */}

          <Metric
            title="Minutes"
            value={totalMinutes}
          />

          {/* Calories */}

          <Metric
            title="Calories"
            value={totalCalories}
          />

        </section>


        {/* =================================================
            TABS + SORT
        ================================================= */}

        <section className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}

          <div className="flex w-fit rounded-lg border border-white/10 bg-[#12151b] p-1">

            {/* Today's Plan */}

            <button
              onClick={() =>
                setActiveTab("plan")
              }
              className={`rounded-md px-5 py-2 text-[11px] font-medium transition ${
                activeTab === "plan"
                  ? "bg-[#242a33] text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>


            {/* Saved */}

            <button
              onClick={() =>
                setActiveTab("saved")
              }
              className={`rounded-md px-5 py-2 text-[11px] font-medium transition ${
                activeTab === "saved"
                  ? "bg-[#242a33] text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>


          {/* Sort */}

          <div className="flex items-center gap-2">

            <span className="text-[11px] text-zinc-500">
              Sort By
            </span>

            <div className="relative">

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="appearance-none rounded-lg border border-white/10 bg-[#12151b] py-2 pl-4 pr-9 text-[11px] text-zinc-300 outline-none"
              >

                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>

              </select>

              <ChevronDown
                size={13}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
              />

            </div>

          </div>

        </section>


        {/* =================================================
            WORKOUT LIST
        ================================================= */}

        <section className="mt-4">

          {sortedList.length === 0 ? (

            <EmptyState />

          ) : (

            <div className="space-y-3">

              {sortedList.map(
                (workout) => (
                  <WorkoutCard
                    key={workout.id}
                    workout={workout}
                    activeTab={activeTab}
                    onRemove={handleRemove}
                    onDone={handleDone}
                  />
                )
              )}

            </div>

          )}

        </section>

      </div>


      {/* {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="">

        <div className="mx-auto flex max-w-350 flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">

          {/* Logo */}

          <div className="flex items-center gap-2">

            <span className="text-lg text-[#c8ff00]">
              
            </span>

            <span className="text-sm font-black">
              
            </span>

          </div>


          {/* Copyright */}

          <p className="text-[10px] text-zinc-500">
            
          </p>

        </div>

      </footer>

    </main>
  );
}


/* ======================================================
   METRIC COMPONENT
====================================================== */

function Metric({ title, value }) {
  return (
    <div className="border-b border-white/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">

      <p className="text-[10px] text-zinc-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-black text-white">
        {value}
      </p>

    </div>
  );
}


/* ======================================================
   WORKOUT CARD
====================================================== */

function WorkoutCard({
  workout,
  activeTab,
  onRemove,
  onDone,
}) {
  const calories =
    workout.caloriesBurned ||
    workout.calories ||
    0;

  return (
    <article
      className={`grid gap-5 rounded-xl border bg-[#12151b] p-4 transition hover:border-white/20 sm:grid-cols-[150px_1fr] lg:grid-cols-[150px_1fr_auto] ${
        workout.done
          ? "border-[#c8ff00]/30"
          : "border-white/10"
      }`}
    >

      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="relative h-32 overflow-hidden rounded-lg bg-[#1b1e24]">

        <Image
          src={workout.image}
          alt={
            workout.name ||
            "Workout"
          }
          fill
          sizes="(max-width: 640px) 100vw, 150px"
          className="object-cover"
        />

      </div>


      {/* =================================================
          WORKOUT INFORMATION
      ================================================= */}

      <div className="min-w-0">

        {/* Category */}

        <div className="flex flex-wrap gap-2">

          {getTags(workout).map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#c8ff00]/10 px-2.5 py-1 text-[8px] font-bold uppercase text-[#c8ff00]"
              >
                {tag}
              </span>
            )
          )}

        </div>


        {/* Workout Name */}

        <h2 className="mt-3 text-lg font-black uppercase text-white">
          {workout.name}
        </h2>


        {/* Equipment */}

        <p className="mt-1 text-xs text-zinc-500">
          {formatEquipment(
            workout.equipment
          )}
        </p>


        {/* Stats */}

        <div className="mt-4 flex flex-wrap items-center gap-4 text-[10px] text-zinc-400">

          {/* Duration */}

          <span className="flex items-center gap-1">

            <Clock3 size={13} />

            {workout.duration || 0}
            {" "}
            min

          </span>


          {/* Calories */}

          <span className="flex items-center gap-1">

            <Flame size={13} />

            {calories} kcal

          </span>


          {/* Rating */}

          <span className="flex items-center gap-1">

            <Star
              size={13}
              className="fill-[#c8ff00] text-[#c8ff00]"
            />

            {workout.rating || "—"}

          </span>

        </div>

      </div>


      {/* =================================================
          ACTION BUTTONS
      ================================================= */}

      <div className="flex flex-wrap items-center gap-2 lg:flex-col lg:justify-center">

        {/* View Details */}

        <Link
          href={`/workout/${workout.id}`}
          className="flex items-center justify-center gap-1.5 rounded-md border border-white/10 px-4 py-2.5 text-[9px] font-bold uppercase text-zinc-300 transition hover:border-[#c8ff00] hover:text-[#c8ff00]"
        >

          View Details

          <ArrowRight size={12} />

        </Link>


        {/* Mark as Done */}

        {activeTab === "plan" &&
          !workout.done && (

            <button
              onClick={() =>
                onDone(workout.id)
              }
              className="flex items-center justify-center gap-1.5 rounded-md bg-[#c8ff00] px-4 py-2.5 text-[9px] font-black uppercase text-black transition hover:bg-[#d8ff4d]"
            >

              <Check size={12} />

              Mark as Done

            </button>

          )}


        {/* Done */}

        {activeTab === "plan" &&
          workout.done && (

            <span className="flex items-center justify-center gap-1.5 rounded-md bg-[#c8ff00]/10 px-4 py-2.5 text-[9px] font-black uppercase text-[#c8ff00]">

              <Check size={12} />

              Done

            </span>

          )}


        {/* Remove */}

        <button
          onClick={() =>
            onRemove(workout.id)
          }
          className="flex items-center justify-center rounded-md border border-white/10 p-2.5 text-zinc-500 transition hover:border-red-500/40 hover:text-red-400"
          title="Remove"
        >

          <X size={14} />

        </button>

      </div>

    </article>
  );
}


/* ======================================================
   EMPTY STATE
====================================================== */

function EmptyState() {
  return (
    <div className="flex min-h-55 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#0f1216] px-5 text-center">

      <h2 className="text-lg font-black uppercase text-white">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 text-[10px] text-zinc-500">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/#library"
        className="mt-5 rounded-full bg-[#c8ff00] px-6 py-2.5 text-[10px] font-black text-black transition hover:bg-[#d8ff4d]"
      >
        Go to workouts
      </Link>

    </div>
  );
}


/* ======================================================
   GET TAGS
====================================================== */

function getTags(workout) {

  if (
    Array.isArray(
      workout.muscleGroups
    )
  ) {
    return workout.muscleGroups;
  }

  if (
    Array.isArray(
      workout.category
    )
  ) {
    return workout.category;
  }

  if (
    typeof workout.category ===
    "string"
  ) {
    return [workout.category];
  }

  if (
    typeof workout.muscleGroup ===
    "string"
  ) {
    return [workout.muscleGroup];
  }

  return [];
}


/* ======================================================
   FORMAT EQUIPMENT
====================================================== */

function formatEquipment(
  equipment
) {

  if (
    Array.isArray(equipment)
  ) {
    return equipment.join(", ");
  }

  return (
    equipment ||
    "No equipment"
  );
}