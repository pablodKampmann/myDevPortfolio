import { MdLanguage } from "react-icons/md";
import React, { useState } from 'react';

interface LanguageOptionsProps {
    tone: string;
    language: string;
    handleLanguageChange: (language: string) => void;
}

export default function LanguageOptions({ tone, language, handleLanguageChange }: LanguageOptionsProps) {
    const [open, setOpen] = useState(false);

    //TONE
    let bgColorClass = "";

    if (tone === "dark") {
        bgColorClass = "bg-blue-950";
    } else if (tone === "light") {
        bgColorClass = "bg-blue-100";
    }

    return (
        <div onClick={() => setOpen(!open)} className={`${open ? `${bgColorClass} bg-opacity-20` : 'bg-gray-100 bg-opacity-15 hover:bg-opacity-25  rounded-full p-1'} absolute transition duration-200 bottom-3 right-3 z-10`}>
            <div className={`${open ? 'border-2 py-4 px-4' : 'cursor-pointer'} flex flex-col relative  border-emerald-600  rounded-lg  justify-center items-center`}>
                {open && (
                    <div className="absolute cursor-pointer text-2xl -top-1 right-2">x</div>
                )}
                <MdLanguage size={38} className=" text-emerald-600" />
                {open && language === "eng" && (
                    "Select Language"
                )}
                {open && language === "spa" && (
                    "Seleccionar Idioma"
                )}
                {open && (
                    <div className="flex border-t-2 w-full space-y-2  flex-col">
                        <div onClick={() => handleLanguageChange('eng')} className={`${language === 'eng' ? 'text-emerald-400' : ''} mt-2 rounded px-1 cursor-pointer py-0.5 hover:bg-emerald-800`}>1. English</div>
                        <div onClick={() => handleLanguageChange('spa')} className={`${language === 'spa' ? 'text-emerald-400' : ''} px-1 rounded py-0.5 hover:bg-emerald-800 cursor-pointer`}>2. Español</div>
                    </div>
                )}
            </div>
        </div>
    );
}
