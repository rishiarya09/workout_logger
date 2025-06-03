"use client";
import { useState } from "react";
import { exercises } from "../../../lib/data";

export default function PlansPage() {
  const [planName, setPlanName] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [plans, setPlans] = useState([]);

  const toggleExercise = (name) => {
    setSelectedExercises((prev) =>
      prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
    );
  };

  const savePlan = () => {
    if (!planName || selectedExercises.length === 0) return;
    setPlans([...plans, { name: planName, exercises: selectedExercises }]);
    setPlanName("");
    setSelectedExercises([]);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Create Workout Plan</h2>

      <input
        className="border p-2 mb-2 w-full"
        placeholder="Plan Name"
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
      />

      <div className="mb-4">
        {exercises.map((ex, i) => (
          <label key={i} className="block">
            <input
              type="checkbox"
              checked={selectedExercises.includes(ex.name)}
              onChange={() => toggleExercise(ex.name)}
            />{" "}
            {ex.name}
          </label>
        ))}
      </div>

      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={savePlan}>
        Save Plan
      </button>

      <div className="mt-4">
        <h3 className="font-bold">Saved Plans</h3>
        {plans.map((p, i) => (
          <div key={i} className="mt-2 p-2 border rounded">
            <strong>{p.name}</strong>
            <ul className="list-disc ml-4">
              {p.exercises.map((e, idx) => <li key={idx}>{e}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
