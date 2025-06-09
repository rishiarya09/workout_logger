"use client";
import { useEffect, useState } from "react";
import { exercises } from "../../../lib/data";

export default function PlansPage() {
  const [planName, setPlanName] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [plans, setPlans] = useState([]);

  // Use useEffect to retrive list of exercises with id's,

  const toggleExercise = (ex) => {
    setSelectedExercises((prev) => {
      const selectedEx = ex.name;
      const exerciseFlag = prev.some((exe) => exe.name === selectedEx);
      if (exerciseFlag) {
        return prev.filter((e) => e.name !== selectedEx);
      } else {
        return [...prev, ex];
      }
    });
  };

  const savePlan = () => {
    if (!planName || selectedExercises.length === 0) return;
    setPlans([...plans, { name: planName, exercises: selectedExercises }]);
    setPlanName("");
    setSelectedExercises([]);
  };

  useEffect(() => {
    console.log(plans);
  });

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
              checked={selectedExercises.some((obj) => obj.name === ex.name)}
              onChange={() => toggleExercise(ex)}
            />{" "}
            {ex.name}
          </label>
        ))}
      </div>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={savePlan}
      >
        Save Plan
      </button>

      <div className="mt-4">
        <h3 className="font-bold">Saved Plans</h3>
        {plans.map((p, i) => (
          <div key={i} className="mt-2 p-2 border rounded">
            <strong>{p.name}</strong>
            <ul className="list-disc ml-4">
              {p.exercises.map((e, idx) => (
                <li key={idx}>{e.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
