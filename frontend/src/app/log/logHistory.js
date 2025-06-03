"use client";
import { useState, useEffect } from "react";
import ConfirmaModal from "@/ components/confirmationModal";
import Toast from "@/ components/Toast";

export default function LogHistoryPage() {
    const [logs, setLogs ] = useState([]);
    const [modalOPen, setModalOpen] = useState(false);
    const [selectedLogId, setSelectedLogId] = useState(null);
    const [toastMessage, setToastMessage] = useState("")

    useEffect(() => {
        const storedLogs = JSON.parse(localStorage.getItem("workoutlogs")) || [];
        setLogs(storedLogs.reverse());
    }, []);
    
    const showDeleteModal = (id) => {
        setSelectedLogId(id);
        setModalOpen(true);
    }

    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this log?");
        if (!confirmed) return;

    const updatedLogs = logs.filter((log) => log.id !== id);
    localStorage.setItem("workoutLogs", JSON.stringify(updatedLogs.slice().reverse()));
    setLogs(updatedLogs);
    setModalOpen(false);
    setToastMessage("Log deleted Successfully");
  };

    return (
        <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">📜 Workout Logs History</h2>
        {logs.length === 0 ? (
            <p className="text-gray-600">No logs yet. Go log a workout!</p>
        ) : (
<div className="space-y-6">
          {logs.map((log) => (
            <div key={log.id} className="border p-4 rounded shadow-sm relative">
              <div className="flex justify-between items-start">
                <div>
                <h3 className="font-semibold text-lg">{log.plan}</h3>
                <span className="text-sm text-gray-500">{log.date}</span>
                </div>
                <button
                  onClick={() => showDeleteModal(log.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  🗑️ Delete
                </button>
              </div>
              <ul className="mt-3 list-disc list-inside">
                {log.exercises.map((ex, idx) => (
                  <li key={idx}>
                    <span className="font-medium">{ex.exercise}</span>: {ex.sets} sets × {ex.reps} reps
                    {ex.notes && ` — ${ex.notes}`}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <ConfirmaModal
        open = {modalOPen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
        flag="delete"
    />

    {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    )}
    </div>
    );
}
