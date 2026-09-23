const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid workout data");
    }

    return data;
  } catch (error) {
    console.error("GET WORKOUTS ERROR:", error);

    throw new Error("Failed to load workout library");
  }
}

export async function getWorkout(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Workout API Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("GET WORKOUT ERROR:", error);

    throw new Error("Failed to load workout");
  }
}