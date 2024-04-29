import { MdLanguage } from "react-icons/md";
import React, { useState } from 'react';

interface LanguageOptionsProps {
    language: string;
    setLanguage: (language: string) => void;
}

export default function LanguageOptions({ language, setLanguage }: LanguageOptionsProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute bottom-2 right-3">
            <div onClick={() => setOpen(!open)} className={`${open ? 'border-2 py-4 px-4' : ''} flex flex-col cursor-pointer border-emerald-600  rounded-lg  justify-center items-center`}>
                <MdLanguage onClick={() => setOpen(!open)} size={38} className={`${open ? ' mr-2' : ''} text-emerald-600 mb-2 transform hover:scale-110 transition duration-150 cursor-pointer`} />
                {open && (
                    "Seleccionar Idioma"
                )}
                {open && (
                    <div className="flex border-t-2 w-full space-y-2  flex-col">
                        <div onClick={() => setLanguage('eng')} className={`${language === 'eng' ? 'text-emerald-400' : ''} mt-2 px-1 py-0.5 hover:bg-emerald-800`}>1. English</div>
                        <div onClick={() => setLanguage('spn')} className={`${language === 'spn' ? 'text-emerald-400' : ''} px-1 py-0.5 hover:bg-emerald-800`}>2. Español</div>
                    </div>
                )}
            </div>
        </div>
    );
}
