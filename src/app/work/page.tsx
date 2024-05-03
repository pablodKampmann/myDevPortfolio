"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdDesignServices } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

export default function Work() {

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
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage || 'eng';
    } else {
      return 'eng';
    }
  });

  const languageTexts = {
    eng: {
      title: "Projects",
      info_1: "Administrative application for a health clinic, especially oriented to the area of ​​dentistry. This tool provides a comprehensive solution for managing patients, shifts, medical records, treatments, finances, among others.",
      info_2: "Social mobile application that helps you find a roommate. It offers various forms of interaction, such as 'matches', likes, chats and user profiles, thus facilitating the search and choice of the ideal partner.",
      info_3: "Completely responsive template that includes a login page, a registration page and its two mobile versions.",
      category_1: "Desktop",
      category_2: "Mobile",
    },
    spa: {
      title: "Proyectos",
      info_1: "Aplicación administrativa para una clínica de salud, especialmente orientada al área de odontología. Esta herramienta proporciona una solución integral para la gestión de pacientes, turnos, historias clínicas, tratamientos, finanzas, entre otras.",
      info_2: "Aplicación móvil social que te ayuda a conseguir compañero de piso. Ofrece diversas formas de interacción, como 'matches', likes, chats y perfiles de usuarios, facilitando así la búsqueda y elección del compañero ideal.",
      info_3: "Template completamente responsive que incluye una página de inicio de sesión, otra de registro y sus dos versiones móviles.",
      category_1: "Escritorio",
      category_2: "Móvil",
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

  const classesTones = {
    dark: {
      textColorMain: "text-white",
      borderColorProjectsCont: "border-gray-900",
      bgColorProjectsCont: "bg-blue-950",
      bgOpacityProjectsCont: "bg-opacity-20",
      bgHoverColorProject: "hover:bg-blue-950",
      bgHoverOpacityProject: "hover:bg-opacity-20",
      borderHoverColorProject: "hover:border-white",
      borderHoverOpacityProject: "hover:border-opacity-5",
      bgOpacityTitle: "bg-opacity-40",
      bgOpacityLinks: "bg-opacity-10",
      opacityImages: "opacity-50",
    },
    light: {
      textColorMain: "text-black",
      borderColorProjectsCont: "border-gray-400",
      bgColorProjectsCont: "bg-white",
      bgOpacityProjectsCont: "bg-opacity-90",
      bgHoverColorProject: "hover:bg-gray-300",
      bgHoverOpacityProject: "hover:bg-opacity-30",
      borderHoverColorProject: "hover:border-gray-950",
      borderHoverOpacityProject: "hover:border-opacity-30",
      bgOpacityTitle: "bg-opacity-80",
      bgOpacityLinks: "bg-opacity-100",
      opacityImages: "opacity-70",
    }
  }

  let classes;
  if (tone === "dark") {
    classes = classesTones.dark;
  } else if (tone === "light") {
    classes = classesTones.light;
  }

  return (
    <div className={`${classes?.textColorMain} flex justify-center items-center h-full pb-[4%]`}>
      <div className={`flex  h-[84%] border-4 relative ${classes?.borderColorProjectsCont} ${classes?.bgColorProjectsCont} ${classes?.bgOpacityProjectsCont} rounded-lg w-[65%]  shadow-2xl text-lg justify-center items-center `}>
        <div className='overflow-y-auto bg-transparent  overflow-x-hidden flex flex-col h-full '>
          <div className={`bg-emerald-600 ${classes?.bgOpacityTitle} font-semibold flex border-b-2 ${classes?.borderColorProjectsCont}  items-center text-left pl-7 text-3xl  rounded-tl  py-2 p `}>
            {texts?.title} <MdDesignServices className='ml-2' />
          </div>
          <div className=''>

            <div className={`flex group ${classes?.bgHoverOpacityProject} ${classes?.bgHoverColorProject} transition duration-500 justify-center hover:py-10 border-transparent hover:border-b-2  ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject}  p-8 items-center`}>
              <div className='font-bold group-hover:w-[30%] w-[40%] transition-all duration-200'>
                My RoomMate App <span className='text-emerald-800'>({texts?.category_1})</span>
                <p className='w-full text-sm transition-all transform duration-200 text-balance font-normal text-left'>{texts?.info_1}</p>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center '>Deploy <GrDeploy className='ml-2' /></h2>
                  <p onClick={() => window.open("https://dental-agenda.vercel.app/", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-400 '>https://dental-agenda.vercel.app/</p>
                </div>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center'>Repo <FaGithub className='ml-2' /></h2>
                  <p onClick={() => window.open("https://github.com/pablodKampmann/dental-agenda", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-400'>https://github.com/pablodKampmann/dental-agenda</p>
                </div>
              </div>
              <Image className={`${classes?.opacityImages} rounded-lg group-hover:opacity-100 shadow-2xl object-cover group-hover:h-[300px] group-hover:w-[70%] ml-10 trasform transition-all duration-200 w-[60%] h-[250px]`} quality={100} width={1919} height={917} priority={true} src='/dentalAgenda-image.png' alt="dentalAgenda-image" />
            </div>

            <div className={`flex group ${classes?.bgHoverOpacityProject} ${classes?.bgHoverColorProject} transition duration-500 justify-center hover:py-10 border-transparent hover:border-b-2 hover:border-t-2 ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject}  p-8 items-center`}>
              <Image className={`${classes?.opacityImages} rounded-lg shadow-2xl opacity-50 group-hover:opacity-100 object-cover group-hover:h-[330px] group-hover:w-[65%] mr-12 trasform transition-all duration-200 w-[60%] h-[280px]`} quality={100} width={1920} height={1080} priority={true} src='/MyRoomMate-image.png' alt="MyRoomMate-image" />
              <div className='font-bold group-hover:w-[30%] w-[40%] transition-all duration-200'>
                My RoomMate App <br /> <span className='text-emerald-800'>({texts?.category_1} & {texts?.category_2})</span>
                <p className='w-full text-sm transition-all transform duration-200 text-balance font-normal text-left'>{texts?.info_2}</p>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center '>Deploy <GrDeploy className='ml-2' /></h2>
                  <p onClick={() => window.open("https://myroommate.vercel.app/", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-400 '>https://myroommate.vercel.app/</p>
                </div>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center'>Repo <FaGithub className='ml-2' /></h2>
                  <p onClick={() => window.open("https://github.com/pablodKampmann/myRoomMate-Copy", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-400'>https://github.com/pablodKampmann/myRoomMate-Copy</p>
                </div>
              </div>
            </div>

            <div className={`flex group ${classes?.bgHoverOpacityProject} ${classes?.bgHoverColorProject} transition duration-500 justify-center hover:py-10 border-transparent  hover:border-t-2 ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject}  p-8 items-center`}>
              <div className='font-bold group-hover:w-[30%] w-[40%] transition-all duration-200'>
                Login & Register Template <br /><span className='text-emerald-800'>({texts?.category_1} & {texts?.category_2})</span>
                <p className='w-full text-sm transition-all transform duration-200 text-balance font-normal text-left'>{texts?.info_3}</p>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center '>Deploy <GrDeploy className='ml-2' /></h2>
                  <p onClick={() => window.open("https://login-register-template.vercel.app/login", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-400 '>https://login-register-template.vercel.app/login</p>
                </div>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center'>Repo <FaGithub className='ml-2' /></h2>
                  <p onClick={() => window.open("https://github.com/pablodKampmann/login-register-template", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-400'>https://github.com/pablodKampmann/login-register-template</p>
                </div>
              </div>
              <Image className={`${classes?.opacityImages} rounded-lg shadow-2xl opacity-50 group-hover:opacity-100 object-cover group-hover:h-[300px] group-hover:w-[70%] ml-10 trasform transition-all duration-200 w-[60%] h-[250px]`} quality={100} width={1919} height={918} priority={true} src='/loginAndRegister-image.png' alt="loginAndRegister-image" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}