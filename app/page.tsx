import Hero from "../app/components/Hero";
import WorkoutGrid from "../app/components/WorkoutGrid";
import { getWorkouts } from "../app/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main>
      <Hero />

      <WorkoutGrid workouts={workouts} />
    </main>
  );
}