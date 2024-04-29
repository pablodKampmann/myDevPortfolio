import { MdLanguage } from "react-icons/md";
import React, { useState } from 'react';

export default function LanguageOptions() {
    const [open, setOpen] = useState(false);

    return (
        <div className="absolute  bottom-3 right-3">
            <MdLanguage onClick={() => open = true} size={34} className={`${open ? 'text-black' : 'text-emerald-600'}  transform hover:scale-110 transition duration-150 cursor-pointer`} />

        </div>
    );
}
