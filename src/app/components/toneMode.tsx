import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import React, { useState } from 'react';

export default function ToneMode() {
    const [mode, setMode] = useState('dark');

    return (
        <div className="absolute bottom-4 bg-emerald-600 hover:bg-emerald-500 transition duration-150 cursor-pointer p-2 rounded-full left-4">
            {mode === 'dark' ? (
                <MdDarkMode onClick={() => setMode('light')} size={30} className="text-black" />
            ) : (
                <MdOutlineDarkMode onClick={() => setMode('dark')} size={30} className="text-white" />
            )}
        </div>
    );
}
