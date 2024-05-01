'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { GrTechnology } from "react-icons/gr";
import { TbArrowWaveRightUp } from "react-icons/tb";

export default function Tech() {
    const [option, setOption] = useState('languages');
    const [category, setCategory] = useState('primary');
    const [loadingImages, setLoadingImages] = useState(true);

    //LANGUAGE
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            return storedLanguage || 'eng';
        } else {
            return 'eng';
        }
    });

    useEffect(() => {
        const handleLanguageChange = () => {
            const storedLanguage = localStorage.getItem('language');
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
        };

        window.addEventListener('storage', handleLanguageChange);

        return () => {
            window.removeEventListener('storage', handleLanguageChange);
        };
    }, []);

    const languageTexts = {
        eng: {
            technologies: "Technologies",
            info: "The following are some of the technologies that I have experience with and that I often use in my regular work. I am familiar with them and use them regularly to carry out tasks and projects related to web development and data management:",
            option_1: "Languages & Tools",
            option_2: "Frontend",
            option_3: "Backend",
            category_1: "Primary",
            category_2: "Secondary",
        },
        spa: {
            technologies: "Tecnologías",
            info: "Las siguientes son algunas de las tecnologías con las que tengo experiencia y que suelo utilizar en mi trabajo habitual. Estoy familiarizado con ellas y las utilizo regularmente para llevar a cabo tareas y proyectos relacionados con el desarrollo web y la gestión de datos:",
            experience: "Experiencia",
            option_1: "Languajes & Herramientas",
            option_2: "Frontend",
            option_3: "Backend",
            category_1: "Primarios",
            category_2: "Secundarios",
        }
    };

    let texts;
    if (language === "eng") {
        texts = languageTexts.eng;
    } else if (language === "spa") {
        texts = languageTexts.spa;
    }

    //TONE
    const [tone, setTone] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedTone = localStorage.getItem('tone');
            return storedTone || 'dark';
        } else {
            return 'dark';
        }
    });

    useEffect(() => {
        const handleToneChange = () => {
            const storedTone = localStorage.getItem('tone');
            if (storedTone) {
                setTone(storedTone);
            }
        };

        window.addEventListener('storage', handleToneChange);

        return () => {
            window.removeEventListener('storage', handleToneChange);
        };
    }, []);

    const classesTones = {
        dark: {
            textColorClass: "text-white",
            borderImagesColor: 'border-gray-900',
            hoverOpacityButtons: 'hover:bg-opacity-10',
            hoverColorButtons: 'hover:bg-white',
            textColorCategory: 'text-emerald-400',
            bgColorImages: 'bg-blue-950',
            bgOpacityImages: 'bg-opacity-20',
        },
        light: {
            textColorClass: "text-black",
            borderImagesColor: 'border-gray-400',
            hoverOpacityButtons: 'hover:bg-opacity-20',
            hoverColorButtons: 'hover:bg-gray-400',
            textColorCategory: 'text-emerald-600',
            bgColorImages: 'bg-white',
            bgOpacityImages: 'bg-opacity-90',
        }
    }

    let classes;
    if (tone === "dark") {
        classes = classesTones.dark;
    } else if (tone === "light") {
        classes = classesTones.light;
    }

    return (
        <div className={`${classes?.textColorClass} flex flex-col justify-center items-center h-full pb-[6%]`}>
            <h1 className="text-4xl bg-emerald-600 px-4 bg-opacity-20 py-4 flex justify-center items-center rounded-md">{texts?.technologies} <GrTechnology size={32} className="ml-4 bg-white bg-opacity-90 p-1 rounded-full text-emerald-700" /></h1>
            <h1 className="text-base text-center mt-4 w-[50%]">{texts?.info}</h1>
            <TbArrowWaveRightUp size={50} className="text-emerald-600 opacity-20 mt-6 mb-6 rotate-90" />
            <div className="flex justify-center select-none space-x-4 items-center">
                <div onClick={() => setOption('languages')} className={`${option === 'languages' ? 'bg-emerald-600' : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md text-lg  px-2 py-1 cursor-pointer`}>{texts?.option_1}</div>
                <div onClick={() => setOption('frontend')} className={`${option === 'frontend' ? 'bg-emerald-600' : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md text-lg  px-2 py-1 cursor-pointer`}>{texts?.option_2}</div>
                <div onClick={() => setOption('backend')} className={`${option === 'backend' ? 'bg-emerald-600' : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200  rounded-md text-lg  px-2 py-1 cursor-pointer`}>{texts?.option_3}</div>
            </div>
            <div className={`${classes?.bgColorImages} ${classes?.bgOpacityImages} select-none transition-width ease-in-out duration-300 ${option === 'languages' && category !== 'secondary' && 'w-[720px]'} ${option === 'languages' && category === 'secondary' && 'w-[450px]'} ${option === 'frontend' && 'w-[450px]'} ${option === 'backend' && 'w-[720px]'} flex relative border-4 rounded-lg shadow-2xl ${classes?.borderImagesColor} px-6 py-6 mt-2 justify-center items-center`}>
                {option === 'languages' && (
                    <div>
                        <div className="absolute space-x-2 flex text-sm justify-center items-center top-0.5 left-2">
                            <div onClick={() => setCategory('primary')} className={`${category === 'primary' ? `${classes?.textColorCategory} underline` : `${classes?.textColorClass}`}  mr-2 cursor-pointer`}>
                                {texts?.category_1}
                            </div>
                            /
                            <div onClick={() => setCategory('secondary')} className={`${category === 'secondary' ? `${classes?.textColorCategory} underline` : `${classes?.textColorClass}`}   cursor-pointer`}>
                                {texts?.category_2}
                            </div>
                        </div>
                        {category === 'primary' && (
                            <div className="space-x-6 flex justify-center mt-4 items-center">
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='tailwind-icon.svg' alt="tailwind-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='html-icon.svg' alt="html-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='typescript-icon.svg' alt="typescript-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='css-icon.svg' alt="css-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='javascript-icon.svg' alt="javascript-icon" />
                            </div>
                        )}
                        {category === 'secondary' && (
                            <div className="space-x-6 flex justify-center  mt-4 items-center">
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='c-icon.svg' alt="c-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='php-icon.svg' alt="php-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='python-icon.svg' alt="python-icon" />
                            </div>
                        )}
                    </div>
                )}
                {option === 'frontend' && (
                    <div className="space-x-6 flex justify-center mt-4 items-center">
                        <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='nextjs-icon.svg' alt="nextjs-icon" />
                        <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='react-icon.svg' alt="react-icon" />
                        <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='astro-icon.svg' alt="astro-icon" />
                    </div>
                )}
                {option === 'backend' && (
                    <div className="space-x-6 flex justify-center mt-4 items-center">
                        <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='nodejs-icon.svg' alt="nodejs-icon" />
                        <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='firebase-icon.svg' alt="firebase-icon" />
                        <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='mongodb-icon.svg' alt="mongodb-icon" />
                        <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='mysql-icon.svg' alt="mysql-icon" />
                        <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='microsoftsql-icon.svg' alt="microsoftsql-icon" />
                    </div>
                )}
            </div>
        </div>
    );
}