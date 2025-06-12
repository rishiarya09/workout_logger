const API_URL = "http://localhost:3001";

export async function getAllExercises(params) {
  const res = await fetch(`${API_URL}/exercise`);
  if (!res.ok) throw new Error("Failed to fetch the exercises");
  return res.json();
}

export async function getAllExerciseCategories() {
  const res = await fetch(`${API_URL}/exercise_categories`);
  if (!res.ok) throw new Error("Failed to fetch the exercise categories");
  return res.json();
}

export async function addExercise(exercise) {
  const response = await fetch(`${API_URL}/exercise`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(exercise),
  });
  if (!response.ok) throw new Error("Failed to add exercise");
  return response.json();
}

export async function addCategory(category) {
  const response = await fetch(`${API_URL}/exercise_categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  if (!response.ok) throw new Error("Failed to add category");
  return response.json();
}
