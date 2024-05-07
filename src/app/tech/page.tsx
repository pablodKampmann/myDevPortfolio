'use client'

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { GrTechnology } from "react-icons/gr";
import { TbArrowWaveRightUp } from "react-icons/tb";

export default function Tech() {
    const [option, setOption] = useState('languages');
    const [category, setCategory] = useState('primary');
    const imageBlur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8XwMAAoABfYJLKisAAAAASUVORK5CYII='

    //LISTENER DEL LOCALSTORAGE
    useEffect(() => {
        const handleItemChange = () => {
            const storedLanguage = localStorage.getItem('language');
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
            const storedTone = localStorage.getItem('tone');
            if (storedTone) {
                setTone(storedTone);
            }
        };

        window.addEventListener('storage', handleItemChange);

        return () => {
            window.removeEventListener('storage', handleItemChange);
        };
    }, []);

    //LANGUAGE
    const [language, setLanguage] = useState<string>('eng')

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
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
    const [tone, setTone] = useState<string>('dark')

    useEffect(() => {
        const storedTone = localStorage.getItem('tone');
        if (storedTone) {
            setTone(storedTone);
        }
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
            <h1 className="text-4xl bg-emerald-600 px-4 bg-opacity-30 py-4 flex justify-center items-center rounded-md">{texts?.technologies} <GrTechnology size={32} className="ml-4 bg-white bg-opacity-90 p-1 rounded-full text-emerald-700" /></h1>
            <h1 className="text-base text-center mt-4 w-[50%]">{texts?.info}</h1>
            <TbArrowWaveRightUp size={50} className="text-emerald-600 opacity-20 mt-6 mb-6 rotate-90" />
            <div className="flex justify-center select-none space-x-4 items-center">
                <button onClick={() => setOption('languages')} className={`${option === 'languages' ? 'bg-emerald-600' : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md text-lg  px-2 py-1 cursor-pointer`}>{texts?.option_1}</button>
                <button onClick={() => setOption('frontend')} className={`${option === 'frontend' ? 'bg-emerald-600' : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md text-lg  px-2 py-1 cursor-pointer`}>{texts?.option_2}</button>
                <button onClick={() => setOption('backend')} className={`${option === 'backend' ? 'bg-emerald-600' : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200  rounded-md text-lg  px-2 py-1 cursor-pointer`}>{texts?.option_3}</button>
            </div>
            <div className={`${option === 'languages' && category !== 'secondary' && 'w-[840px]'} ${option === 'languages' && category === 'secondary' && 'w-[450px]'} ${option === 'frontend' && 'w-[450px]'} ${option === 'backend' && 'w-[720px]'} ${classes?.bgColorImages} ${classes?.bgOpacityImages} select-none transition-width ease-in-out duration-300  flex relative border-4 rounded-lg shadow-2xl ${classes?.borderImagesColor} px-6 py-6 mt-2 justify-center items-center`}>
                {option === 'languages' && (
                    <div>
                        <div className="absolute space-x-2 flex text-sm justify-center items-center top-0.5 left-2">
                            <button onClick={() => setCategory('primary')} className={`${category === 'primary' ? `${classes?.textColorCategory} underline` : `${classes?.textColorClass}`}  mr-2 cursor-pointer`}>
                                {texts?.category_1}
                            </button>
                            /
                            <button onClick={() => setCategory('secondary')} className={`${category === 'secondary' ? `${classes?.textColorCategory} underline` : `${classes?.textColorClass}`}   cursor-pointer`}>
                                {texts?.category_2}
                            </button>
                        </div>
                        {category === 'primary' && (
                            <div className="space-x-6 flex justify-center mt-4 items-center">
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='tailwind-icon.svg' alt="tailwind-icon" />
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='html-icon.svg' alt="html-icon" />
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='typescript-icon.svg' alt="typescript-icon" />
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='css-icon.svg' alt="css-icon" />
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='javascript-icon.svg' alt="javascript-icon" />
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='git-icon.svg' alt="git-icon" />
                            </div>
                        )}
                        {category === 'secondary' && (
                            <div className="space-x-6 flex justify-center  mt-4 items-center">
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='c-icon.svg' alt="c-icon" />
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='php-icon.svg' alt="php-icon" />
                                <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='python-icon.svg' alt="python-icon" />
                            </div>
                        )}
                    </div>
                )}
                {option === 'frontend' && (
                    <div className="space-x-6 flex justify-center mt-4 items-center">
                        <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='nextjs-icon.svg' alt="nextjs-icon" />
                        <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='react-icon.svg' alt="react-icon" />
                        <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='astro-icon.svg' alt="astro-icon" />
                    </div>
                )}
                {option === 'backend' && (
                    <div className="space-x-6 flex justify-center mt-4 items-center">
                        <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='nodejs-icon.svg' alt="nodejs-icon" />
                        <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='firebase-icon.svg' alt="firebase-icon" />
                        <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='mongodb-icon.svg' alt="mongodb-icon" />
                        <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='mysql-icon.svg' alt="mysql-icon" />
                        <Image placeholder='blur' blurDataURL={imageBlur} className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='microsoftsql-icon.svg' alt="microsoftsql-icon" />
                    </div>
                )}
            </div>
        </div>
    );
}