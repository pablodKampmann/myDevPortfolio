import { SiVorondesign } from "react-icons/si";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { MdOutlineCancel } from "react-icons/md";

interface NavBarProps {
    tone: string;
    language: string;
    colorMain: string;
    handleColorChange: (language: string) => void;
}

export default function NavBar({ tone, language, colorMain, handleColorChange }: NavBarProps) {
    const pathname = usePathname();
    const [showOptions, setShowOptions] = useState(false);

    //LANGUAGE
    const languageTexts = {
        eng: {
            about: "About me",
            work: "My work",
            experience: "Experience",
            technologies: "Technologies",
            contact: "CONTACT ME",
        },
        spa: {
            about: "Acerca de mi",
            work: "Mi trabajo",
            experience: "Experiencia",
            technologies: "Tecnologías",
            contact: "CONTACTAME",
        }
    };

    let texts;
    if (language === "eng") {
        texts = languageTexts.eng;
    } else if (language === "spa") {
        texts = languageTexts.spa;
    }

    //TONE
    const [classesTones, setClassesTones] = useState<any>(null);

    useEffect(() => {
        const updateClassesTones = () => {
            let bgHoverButtons = '';
            let borderColor = '';
            let textIcon = '';
            let bgPageSelected = '';
            let textColorNumber = '';
            let hoverButtton = '';
            
            switch (colorMain) {
                case 'emerald':
                    bgHoverButtons = tone === 'dark' ? "bg-emerald-600" : "bg-emerald-500";
                    borderColor = tone === 'dark' ? "border-emerald-700" : "border-emerald-500";
                    textIcon = tone === 'dark' ? "text-emerald-600" : "text-emerald-500";
                    bgPageSelected = tone === 'dark' ? "bg-emerald-900" : "bg-emerald-900";
                    textColorNumber = tone === 'dark' ? "text-emerald-500" : "text-emerald-500";
                    hoverButtton = tone === 'dark' ? "hover:bg-emerald-700" : "hover:bg-emerald-700";
                    break;
                case 'rose':
                    bgHoverButtons = tone === 'dark' ? "bg-rose-600" : "bg-rose-500";
                    borderColor = tone === 'dark' ? "border-rose-700" : "border-rose-500";
                    textIcon = tone === 'dark' ? "text-rose-600" : "text-rose-500";
                    bgPageSelected = tone === 'dark' ? "bg-rose-900" : "bg-rose-900";
                    textColorNumber = tone === 'dark' ? "text-rose-500" : "text-rose-500";
                    hoverButtton = tone === 'dark' ? "hover:bg-rose-700" : "hover:bg-rose-700";
                    break;
                case 'blue':
                    bgHoverButtons = tone === 'dark' ? "bg-blue-600" : "bg-blue-500";
                    borderColor = tone === 'dark' ? "border-blue-700" : "border-blue-500";
                    textIcon = tone === 'dark' ? "text-blue-600" : "text-blue-500";
                    bgPageSelected = tone === 'dark' ? "bg-blue-900" : "bg-blue-900";
                    textColorNumber = tone === 'dark' ? "text-blue-500" : "text-blue-500";
                    hoverButtton = tone === 'dark' ? "hover:bg-blue-700" : "hover:bg-blue-700";
                    break;
                case 'yellow':
                    bgHoverButtons = tone === 'dark' ? "bg-yellow-500" : "bg-yellow-500";
                    borderColor = tone === 'dark' ? "border-yellow-500" : "border-yellow-500";
                    textIcon = tone === 'dark' ? "text-yellow-500" : "text-yellow-500";
                    bgPageSelected = tone === 'dark' ? "bg-yellow-900" : "bg-yellow-900";
                    textColorNumber = tone === 'dark' ? "text-yellow-500" : "text-yellow-500";
                    hoverButtton = tone === 'dark' ? "hover:bg-yellow-500" : "hover:bg-yellow-500";
                    break;
                default:
                    break;
            }

            setClassesTones({
                dark: {
                    bgMain: "bg-blue-950",
                    bgMainOpacity: "bg-opacity-20",
                    textMain: "text-white",
                    bgOpacityButtonPressed: "bg-opacity-40",
                    bgHoverButtons: bgHoverButtons,
                    borderColor: borderColor,
                    textIcon: textIcon,
                    bgColorButtons: "bg-white",
                    bgPageSelected: bgPageSelected,
                    textColorNumber: textColorNumber,
                    hoverButtton: hoverButtton,
                },
                light: {
                    bgMain: "bg-white",
                    bgMainOpacity: "bg-opacity-100",
                    textMain: "text-black",
                    bgOpacityButtonPressed: "bg-opacity-20",
                    bgHoverButtons: bgHoverButtons,
                    borderColor: borderColor,
                    textIcon: textIcon,
                    bgColorButtons: "bg-black",
                    bgPageSelected: bgPageSelected,
                    textColorNumber: textColorNumber,
                    hoverButtton: hoverButtton,
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

    //COLORS OPTIONS
    const [isClick, setIsClick] = useState(false);
    const [showCancelButton, setShowCancelButton] = useState(false);

    useEffect(() => {
        if (isClick) {
            setIsClick(false);
            setShowCancelButton(true);
            setShowOptions(true);
        }
    }, [isClick]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowOptions(false);
            setShowCancelButton(false);
        }, 5000);

        return () => clearTimeout(timeoutId);

    }, [showOptions]);

    return (
        <div className={`w-full flex justify-between items-center ${classes?.bgMain} border-b-2 ${classes?.borderColor} transition select-none duration-200 ${classes?.bgMainOpacity} h-[10%] `} >

            <div className="ml-4 flex justify-center items-center">
                {showCancelButton ? (
                    <div className="cursor-pointer hover:bg-white transition duration-300 hover:bg-opacity-10 p-1 rounded-full">
                        <MdOutlineCancel onClick={() => { setShowOptions(false); setShowCancelButton(false) }} size={40} className={`${classes?.textIcon} `} />
                    </div>
                ) : (
                    <div className="cursor-pointer hover:bg-white transition duration-300 hover:bg-opacity-10 p-1 rounded-full">
                        <SiVorondesign onClick={() => setIsClick(true)} size={40} className={`${classes?.textIcon} ${isClick ? '' : 'animate-[spin_5s_ease-in-out_infinite] hover:animate-none '}  `} />
                    </div>
                )}

                <div onClick={() => { setShowOptions(false); setShowCancelButton(false) }} className={`${showOptions ? 'opacity-100 animate-move-from-left ' : 'opacity-0'} transition-opacity border-2 ${classes?.borderColor} duration-500 absolute  top-[12%] left-[1%] w-[220px] h-[100px] flex flex-col justify-center items-center bg-white bg-opacity-10 shadow-2xl rounded-xl`}>
                    <h1 className="text-xs text-white mb-2.5 w-[80%] text-balance text-center">Seleccione el color primario de la interfaz</h1>
                    <div className="flex justify-center items-center space-x-4">
                        <button onClick={() => { handleColorChange('emerald'); setShowOptions(false); setShowCancelButton(false); }} className={`${colorMain === 'emerald' ? 'w-8 h-8 border-4 border-white' : 'w-6 h-6 hover:scale-125 transition duration-150'} bg-emerald-600  rounded-full`}></button>
                        <button onClick={() => { handleColorChange('rose'); setShowOptions(false); setShowCancelButton(false); }} className={`${colorMain === 'rose' ? 'w-8 h-8 border-4 border-white' : 'w-6 h-6 hover:scale-125 transition duration-150'} bg-rose-800 rounded-full`}></button>
                        <button onClick={() => { handleColorChange('blue'); setShowOptions(false); setShowCancelButton(false); }} className={`${colorMain === 'blue' ? 'w-8 h-8 border-4 border-white' : 'w-6 h-6 hover:scale-125 transition duration-150'} bg-blue-800 rounded-full`}></button>
                        <button onClick={() => { handleColorChange('yellow'); setShowOptions(false); setShowCancelButton(false); }} className={`${colorMain === 'yellow' ? 'w-8 h-8 border-4 border-white' : 'w-6 h-6 hover:scale-125 transition duration-150'} bg-yellow-500 rounded-full`}></button>
                    </div>
                </div>

            </div>

            <div className={`${classes?.textMain} flex space-x-4  justify-end items-center mr-4`}>
                <Link href={'/'} prefetch={true}>
                    <div className={`${pathname === '/' ? `${classes?.bgPageSelected}  ${classes?.bgOpacityButtonPressed} ` : `hover:${classes?.bgHoverButtons} ${classes?.bgColorButtons} bg-opacity-[2%]`} cursor-pointer  focus:outline-none  py-2 px-3 rounded-lg transition duration-150  w-full whitespace-nowrap`}><span className={`${classes?.textColorNumber}`}>01. </span>{texts?.about}</div>
                </Link>
                <Link href={'/work'} prefetch={true}>
                    <div className={`${pathname === '/work' ? `${classes?.bgPageSelected}  ${classes?.bgOpacityButtonPressed}` : `hover:${classes?.bgHoverButtons} ${classes?.bgColorButtons} bg-opacity-[2%]`} cursor-pointer focus:outline-none py-2 px-3 rounded-lg transition duration-150  w-full whitespace-nowrap`}><span className={`${classes?.textColorNumber}`}>02. </span>{texts?.work}</div>
                </Link>
                <Link href={'/experience'} prefetch={true}>
                    <div className={`${pathname === '/experience' ? `${classes?.bgPageSelected}  ${classes?.bgOpacityButtonPressed}` : `hover:${classes?.bgHoverButtons} ${classes?.bgColorButtons} bg-opacity-[2%]`} cursor-pointer focus:outline-none py-2 px-3 rounded-lg transition duration-150  w-full whitespace-nowrap`}><span className={`${classes?.textColorNumber}`}>03. </span>{texts?.experience}</div>
                </Link>
                <Link href={'/tech'} prefetch={true}>
                    <div className={`${pathname === '/tech' ? `${classes?.bgPageSelected}  ${classes?.bgOpacityButtonPressed}` : `hover:${classes?.bgHoverButtons} ${classes?.bgColorButtons} bg-opacity-[2%]`} cursor-pointer focus:outline-none py-2 px-3 rounded-lg transition duration-150  w-full whitespace-nowrap`}><span className={`${classes?.textColorNumber}`}>04. </span>{texts?.technologies}</div>
                </Link>
                <div className={`bg-transparent font-semibold whitespace-nowrap white tracking-widest border-2 text-lg ${classes.textColorNumber} hover:border-white ${classes?.hoverButtton} hover:bg-opacity-70 hover:text-white transition duration-150 cursor-pointer flex justify-center items-center ${classes?.borderColor} rounded-md py-2 px-4 `}>{texts?.contact}<IoIosSend className="ml-2" size={26} /></div>
            </div>

        </div >
    );
}
