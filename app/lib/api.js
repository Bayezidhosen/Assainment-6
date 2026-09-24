const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts() {
  try {
    const response = await fetch(API_URL, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("GET WORKOUTS ERROR:", error);
    return [];
  }
}

export async function getWorkout(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("GET WORKOUT ERROR:", error);
    return null;
  }
}