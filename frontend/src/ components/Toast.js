"use client";
import { useEffect, useState } from "react";

export default function Toast({message, onClose}){
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        },3000);
        return ()=> clearTimeout(timer);
    }, [onClose]);

    if(!visible) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
            {message}
        </div>
    )
}