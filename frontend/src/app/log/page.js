"use client";
import { useState } from "react";
const savedPlans = [
  {
    name: "Push Day",
    exercises: ["Bench Press", "Overhead Press", "Tricep Dips"],
  },
  {
    name: "Pull Day",
    exercises: ["Deadlift", "Barbell Row", "Pull-ups"],
  },
];

export default function LogWorkoutPage() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [logData, setLogData] = useState([]);

  const handlePlanSelected = (planSelected) => {
    console.log(planSelected);
    setSelectedPlan(planSelected);
    const plan = savedPlans.find((p) => p.name === planSelected);
    if (plan) {
      const intialLogs = plan.exercises.map((e) => ({
        exercise: e,
        sets: [{ weight: "", reps: "" }],
      }));
      setLogData(intialLogs);
    }
  };

  const handleChange = (index, setIndex, field, value) => {
    const updated = [...logData];
    updated[index].sets[setIndex][field] = value;
    setLogData(updated);
  };

  const handleSet = (exerciseIdx, setIdx = 0, action) => {
    const updated = [...logData];
    if (action === "add") {
      updated[exerciseIdx].sets.push({ weight: "", reps: "" });
    } else if (action === "remove") {
      updated[exerciseIdx].sets.length > 1
        ? updated[exerciseIdx].sets.splice(setIdx, 1)
        : alert("Each Exercise must have at least one set.");
    }
    setLogData(updated);
  };
  const handleSubmit = () => {
    console.log("Workout Log:");
    const newLog = {
      date: new Date().toISOString(),
      plan: selectedPlan,
      exercises: logData,
    };

    const exisitingLogs = JSON.parse(localStorage.getItem("workoutlogs")) || [];
    exisitingLogs.push(newLog);
    localStorage.setItem("workoutLogs", JSON.stringify(exisitingLogs));

    alert("Workout logged in console! ✅");
    // Optional: Save to Local Storage or Firebase here
    setSelectedPlan("");
    setLogData([]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Log Your Workout</h2>
      {/* Plan Selector */}

      <select
        className="border p-2 rounded w-full mb-4"
        value={selectedPlan}
        onChange={(e) => handlePlanSelected(e.target.value)}
      >
        <option value="">Select Plan</option>
        {savedPlans.map((plan, i) => (
          <option key={i} value={plan.name}>
            {plan.name}
          </option>
        ))}
      </select>

      {/* Log Inputs */}
      {logData.length > 0 && (
        <div className="space-x-4">
          {logData.map((entry, idx) => (
            <div key={idx} className="p-4 m-4 border rounded">
              <h3 className="font-semibold">{entry.exercise}</h3>
              {entry.sets.map((set, setIdx) => (
                <div key={setIdx} className="flex space-x-2 mt-2">
                  <input
                    className="border p-2 w-1/3"
                    placeholder="Weight"
                    value={set.weight}
                    onChange={(e) =>
                      handleChange(idx, setIdx, "weight", e.target.value)
                    }
                  />
                  <input
                    className="border p-2 w-1/3"
                    placeholder="Reps"
                    value={set.reps}
                    onChange={(e) =>
                      handleChange(idx, setIdx, "reps", e.target.value)
                    }
                  />
                  <button
                    className="text-red-600 text-xl hover:text-red-800"
                    onClick={() => handleSet(idx, setIdx, "remove")}
                    title="Remove Set"
                  >
                    ❌
                  </button>
                </div>
              ))}

              <button
                className="mt-2 text-sm text-blue-600 underline"
                onClick={() => handleSet(idx, 0, "add")}
              >
                ➕ Add Set
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Submit */}
      {selectedPlan && (
        <button
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
          onClick={handleSubmit}
        >
          Submit Workout
        </button>
      )}
    </div>
  );
}
