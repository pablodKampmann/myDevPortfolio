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
            const storedColorMain = localStorage.getItem('colorMain');
            if (storedColorMain) {
                setColorMain(storedColorMain);
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
    const [classesTones, setClassesTones] = useState<any>(null);
    const [colorMain, setColorMain] = useState<string>('emerald');

    useEffect(() => {
        const storedTone = localStorage.getItem('tone');
        if (storedTone) {
            setTone(storedTone);
        }
    }, []);

    useEffect(() => {
        const updateClassesTones = () => {
            let bgColorTitle = '';
            let textColorArrow = '';
            let textColorCategory = '';
            let textColorTitleIcon = '';

            switch (colorMain) {
                case 'emerald':
                    bgColorTitle = tone === 'dark' ? "bg-emerald-600" : "bg-emerald-600";
                    textColorArrow = tone === 'dark' ? "text-emerald-600" : "text-emerald-600";
                    textColorCategory = tone === 'dark' ? "text-emerald-400" : "text-emerald-600";
                    textColorTitleIcon = tone === 'dark' ? "text-emerald-700" : "text-emerald-700";

                    break;
                case 'rose':
                    bgColorTitle = tone === 'dark' ? "bg-rose-600" : "bg-rose-600";
                    textColorArrow = tone === 'dark' ? "text-rose-600" : "text-rose-600";
                    textColorCategory = tone === 'dark' ? "text-rose-400" : "text-rose-600";
                    textColorTitleIcon = tone === 'dark' ? "text-rose-700" : "text-rose-700";

                    break;
                case 'blue':
                    bgColorTitle = tone === 'dark' ? "bg-blue-600" : "bg-blue-600";
                    textColorArrow = tone === 'dark' ? "text-blue-600" : "text-blue-600";
                    textColorCategory = tone === 'dark' ? "text-blue-400" : "text-blue-600";
                    textColorTitleIcon = tone === 'dark' ? "text-blue-700" : "text-blue-700";

                    break;
                case 'yellow':
                    bgColorTitle = tone === 'dark' ? "bg-yellow-600" : "bg-yellow-600";
                    textColorArrow = tone === 'dark' ? "text-yellow-600" : "text-yellow-600";
                    textColorCategory = tone === 'dark' ? "text-yellow-400" : "text-yellow-600";
                    textColorTitleIcon = tone === 'dark' ? "text-yellow-700" : "text-yellow-700";

                    break;
                default:
                    break;
            }

            setClassesTones({
                dark: {
                    textColorClass: "text-white",
                    borderImagesColor: 'border-gray-900',
                    hoverOpacityButtons: 'hover:bg-opacity-10',
                    hoverColorButtons: 'hover:bg-white',
                    textColorCategory: textColorCategory,
                    bgColorImages: 'bg-blue-950',
                    bgOpacityImages: 'bg-opacity-20',
                    bgColorTitle: bgColorTitle,
                    textColorArrow: textColorArrow,
                    textColorTitleIcon: textColorTitleIcon,
                },
                light: {
                    textColorClass: "text-black",
                    borderImagesColor: 'border-gray-400',
                    hoverOpacityButtons: 'hover:bg-opacity-20',
                    hoverColorButtons: 'hover:bg-gray-400',
                    textColorCategory: textColorCategory,
                    bgColorImages: 'bg-white',
                    bgOpacityImages: 'bg-opacity-90',
                    bgColorTitle: bgColorTitle,
                    textColorArrow: textColorArrow,
                    textColorTitleIcon: textColorTitleIcon,

                }
            });
        };

        updateClassesTones();
    }, [colorMain, tone]);

    let classes;
    if (tone === "dark") {
        classes = classesTones?.dark;
    } else if (tone === "light") {
        classes = classesTones?.light;
    }

    //COLOR MAIN
    useEffect(() => {
        const storedTone = localStorage.getItem('colorMain');
        if (storedTone) {
            setColorMain(storedTone);
        }
    }, []);

    return (
        <div className={`${classes?.textColorClass} flex flex-col  justify-center items-center h-full pb-[6%]`}>
            <h1 className={`text-4xl ${classes?.bgColorTitle} px-4 bg-opacity-30 py-4 flex justify-center items-center rounded-md`}>{texts?.technologies} <GrTechnology size={32} className={`ml-4 bg-white bg-opacity-90 p-1 rounded-full ${classes?.textColorTitleIcon}`} /></h1>
            <h1 className="laptop:text-base desktop:text-lg text-center mt-4 w-[50%]">{texts?.info}</h1>
            <TbArrowWaveRightUp size={50} className={`${classes?.textColorArrow} opacity-20 mt-6 mb-6 rotate-90`} />
            <div className="flex justify-center select-none space-x-4 items-center">
                <button onClick={() => setOption('languages')} className={`${option === 'languages' ? `${classes?.bgColorTitle}` : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md laptop:text-lg desktop:text-xl  px-2 py-1 cursor-pointer`}>{texts?.option_1}</button>
                <button onClick={() => setOption('frontend')} className={`${option === 'frontend' ? `${classes?.bgColorTitle}` : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200 rounded-md laptop:text-lg desktop:text-xl px-2 py-1 cursor-pointer`}>{texts?.option_2}</button>
                <button onClick={() => setOption('backend')} className={`${option === 'backend' ? `${classes?.bgColorTitle}` : `${classes?.hoverColorButtons} ${classes?.hoverOpacityButtons}`} transition duration-200  rounded-md laptop:text-lg desktop:text-xl px-2 py-1 cursor-pointer`}>{texts?.option_3}</button>
            </div>
            <div className={`${option === 'languages' && category !== 'secondary' && 'w-[840px]'} ${option === 'languages' && category === 'secondary' && 'w-[450px]'} ${option === 'frontend' && 'w-[450px]'} ${option === 'backend' && 'w-[720px]'} ${classes?.bgColorImages} ${classes?.bgOpacityImages} select-none transition-width ease-in-out duration-300  flex relative rounded-lg  shadow-2xl  px-6 py-6 mt-2 justify-center items-center`}>
                {option === 'languages' && (
                    <div>
                        <div className="absolute space-x-2 flex laptop:text-sm desktop:text-base justify-center items-center top-0.5 left-2">
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
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='tailwind-icon.svg' alt="tailwind-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='html-icon.svg' alt="html-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='typescript-icon.svg' alt="typescript-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='css-icon.svg' alt="css-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='javascript-icon.svg' alt="javascript-icon" />
                                <Image className="transition-transform duration-300 w-[110px] h-[110px] transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='git-icon.svg' alt="git-icon" />
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