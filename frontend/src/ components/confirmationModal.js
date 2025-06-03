"use client";
import React from "react";



export default function ConfirmaModal({open, onConfirm, onClose, flag}) {
    if(!open) return null;

    const message = flag === 'save' ? 'save' : 'delete';
    return (
        <div className="fixed inset-0 flex item-center justify-center bg-black bg-opacity-30 z-50 ">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-semibold mb-4">Confirm {message}</h2>
                <p className="mb-6">Are you sure you want to {message} this log?</p>
                <div className="flexx justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="pxx-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                            Cancel
                        </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                        >
                                Delete
                    </button>
                </div>
            </div>
        </div>
    )
}