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
    const classesTones = {
        dark: {
            bgColor: "bg-blue-950",
            bgOpacity: "bg-opacity-20",
            textColor: "text-white",
            bgIconColor: "bg-gray-100",
            bgIconOpacity: "bg-opacity-15",
            textIconColor: "text-emerald-600",
            hoverButtonColor: "hover:bg-emerald-800",
        },
        light: {
            bgColor: "bg-white",
            bgOpacity: "bg-opacity-100",
            textColor: "text-black",
            bgIconColor: "bg-white",
            bgIconOpacity: "bg-opacity-90",
            textIconColor: "text-emerald-500",
            hoverButtonColor: "hover:bg-emerald-600",
        }
    }

    let classes;
    if (tone === "dark") {
        classes = classesTones.dark;
    } else if (tone === "light") {
        classes = classesTones.light;
    }

    return (
        <div onClick={() => setOpen(!open)} className={`${open ? `${classes?.bgColor} ${classes?.bgOpacity} rounded-lg` : `${classes?.bgIconColor} ${classes?.bgIconOpacity} hover:bg-opacity-25  rounded-full p-1`} absolute ${classes?.textColor}  transition duration-200 bottom-3 right-3 z-10`}>
            <div className={`${open ? 'border-2 py-4 px-4' : 'cursor-pointer'}  select-none flex flex-col relative  border-emerald-600 shadow-2xl rounded-lg  justify-center items-center`}>
                {open && (
                    <div className="absolute cursor-pointer text-2xl -top-1 right-2">x</div>
                )}
                <MdLanguage size={38} className={`${classes?.textIconColor}`} />
                {open && language === "eng" && (
                    "Select Language"
                )}
                {open && language === "spa" && (
                    "Seleccionar Idioma"
                )}
                {open && (
                    <div className="flex border-t-2 w-full space-y-2  flex-col">
                        <div onClick={() => handleLanguageChange('eng')} className={`${language === 'eng' ? 'text-emerald-500 hover:text-black' : ''} mt-2 rounded px-1 cursor-pointer py-0.5 ${classes?.hoverButtonColor}`}>1. English</div>
                        <div onClick={() => handleLanguageChange('spa')} className={`${language === 'spa' ? 'text-emerald-500 hover:text-black' : ''} px-1 rounded py-0.5 hover:bg-emerald-800 cursor-pointer ${classes?.hoverButtonColor}`}>2. Español</div>
                    </div>
                )}
            </div>
        </div>
    );
}
