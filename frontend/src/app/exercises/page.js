"use client";
import { useState } from "react";
import { catagories, exercises as initialExercises } from "../../../lib/data";

export default function ExercisePage() {
    const [exerciseList, setExerciseList ] = useState(initialExercises);
    const [newExercise, setNewExercise ] = useState({name: "", description: "", category: "", video_url: ""});

    const handleAdd = () => {
        if(!newExercise.name || !newExercise.category) return;
        setExerciseList([...exerciseList, newExercise]);
        setNewExercise({nname: "", description: "", category: "", video_url: ""});
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4"> Manage Exercise</h2>

         <div className="mb-4 space-y-2">
        <input
          className="border p-2 rounded w-full"
          placeholder="Exercise Name"
          value={newExercise.name}
          onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
        />
        <input className="border p-2 rounded w-full" placeholder="Add description or steps to perform" value={newExercise.description} onChange={(e) => setNewExercise({ ...newExercise, description: e.target.value})} />
        <input className="border p-2 rounded w-full" placeholder="Add video url for reference" value={newExercise.video_url} onChange={(e) => setNewExercise({ ...newExercise, video_url: e.target.value})} />
        <select
          className="border p-2 rounded w-full"
          value={newExercise.category}
          onChange={(e) => setNewExercise({ ...newExercise, category: e.target.value })}
        >          <option value="">Select Category</option>
          {catagories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
        </select>
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Exercise
        </button>
        </div>    
        <ul className="list-disc ml-4">
        {exerciseList.map((ex, i) => (
          <li key={i}>{ex.name} - <span className="text-gray-500">{ex.category}</span></li>
        ))}
      </ul>
        </div>
    );
}