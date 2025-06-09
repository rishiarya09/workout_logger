export const catagories = ["Chest", "Back", "Legs", "Arms"];
export const exercises = [
  {
    id: 0,
    name: "Bench Press",
    description: "Bench press for chest",
    catagory: "Chest",
    video_url: "",
  },
  {
    id: 1,
    name: "Deadlift",
    Description: "Deadlift for Back",
    catagory: "Back",
    video_url: "",
  },
];

// Logs Page - structure to save this in the log Page.

export const log = [
  {
    exercise: "Bench Press",
    sets: [
      {
        weight: "10",
        reps: "12",
      },
      {
        weight: "20",
        reps: "12",
      },
      {
        weight: "20",
        reps: "12",
      },
    ],
  },
  {
    exercise: "Deadlift",
    sets: [
      {
        weight: "10",
        reps: "12",
      },
      {
        weight: "20",
        reps: "12",
      },
      {
        weight: "20",
        reps: "12",
      },
    ],
  },
  {
    exercise: "Leg Press",
    sets: [
      {
        weight: "10",
        reps: "12",
      },
      {
        weight: "20",
        reps: "12",
      },
      {
        weight: "20",
        reps: "12",
      },
    ],
  },
];

// Logs History Page - expected history object

export const logsHistory = [
  {
    id: 0,
    plan: "Chest Day",
    date: "2025-06-04T01:30:21.851Z",
    exercises: log,
  },
];

// Manage Plan page - used to create new plan
// retrive list of all exercises (receive them Group by category) first.
// retrive all saved plans with exercises group by catagory.
// Create plan

const create_plan = {
  planName: "plan Name",
  exercise: exercises,
};
