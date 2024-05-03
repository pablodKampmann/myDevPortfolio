"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdDesignServices } from "react-icons/md";

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
      example: "Technologies",
    },
    spa: {
      example: "Tecnologías",
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
      example: "text-white",
    },
    light: {
      example: "text-black",
    }
  }

  let classes;
  if (tone === "dark") {
    classes = classesTones.dark;
  } else if (tone === "light") {
    classes = classesTones.light;
  }

  //HOVER IMAGES
  const [firstImageHover, setFirstImageHover] = useState(false);

  function handleHoverFirstImage() {
    // setFirstImageHover(true);

  }



  return (
    <div className='text-white flex justify-center items-center h-full pb-[4%]'>
      <div className='flex  h-[84%] border-4 relative border-gray-900 bg-blue-950 bg-opacity-20 rounded-lg w-[65%]  shadow-2xl text-lg justify-center items-center '>
        <div className='overflow-y-auto bg-transparent  overflow-x-hidden flex flex-col h-full '>
          <div className='bg-emerald-600 bg-opacity-30 flex  items-center text-left pl-4 text-xl  rounded-tl  py-2 p '>
            Proyectos <MdDesignServices className='ml-2' />
          </div>

          <div className=''>
            <div className='flex group hover:bg-opacity-10 hover:bg-blue-950 transition duration-500 justify-center hover:py-10 border-transparent hover:border-b-2 hover:border-t-2 hover:border-white hover:border-opacity-5  p-8 items-center'>
              <div className='font-bold group-hover:w-[30%] w-[40%] transition-all duration-500'>
                My RoomMate App <span className='text-emerald-900'>(Mobile)</span>
                <p className='w-full text-sm transition-all transform duration-500 text-balance font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id dapibus est. Ut posuere tincidunt eros, ut pharetra tortor porta a. Sed at turpis cursus, tempus magna eu, fermentum sapien. Integer dictum.</p>
                <p onClick={() => window.open("https://dental-agenda.vercel.app/", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-300 mt-4'>https://dental-agenda.vercel.app/</p>
                <p onClick={() => window.open("https://github.com/pablodKampmann/dental-agenda", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-300 mt-4'>https://github.com/pablodKampmann/dental-agenda</p>
              </div>
              <Image className="rounded-lg object-cover group-hover:h-[300px] group-hover:w-[70%] ml-10 trasform transition-all duration-500 w-[60%] h-[250px]" quality={100} width={1920} height={1080} priority={true} src='/dentalAgenda-image.png' alt="dentalAgenda-image" />
            </div>

            <div className='flex group hover:bg-opacity-10 hover:bg-blue-950 transition duration-500 justify-center hover:py-10 border-transparent hover:border-b-2 hover:border-t-2 hover:border-white hover:border-opacity-5  p-8 items-center'>
              <Image className="rounded-lg object-cover group-hover:h-[360px] group-hover:w-[60%] mr-20 trasform transition-all duration-500 w-[60%] h-[250px]" quality={100} width={1920} height={1080} priority={true} src='/MyRoomMate-image.png' alt="MyRoomMate-image" />
              <div className='font-bold group-hover:w-[30%] w-[40%] transition-all duration-500'>
                My RoomMate App <span className='text-emerald-900'>(Mobile)</span>
                <p className='w-full text-sm transition-all transform duration-500 text-balance font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id dapibus est. Ut posuere tincidunt eros, ut pharetra tortor porta a. Sed at turpis cursus, tempus magna eu, fermentum sapien. Integer dictum.</p>
                <p onClick={() => window.open("https://dental-agenda.vercel.app/", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-300 mt-4'>https://dental-agenda.vercel.app/</p>
                <p onClick={() => window.open("https://github.com/pablodKampmann/dental-agenda", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-300 mt-4'>https://github.com/pablodKampmann/dental-agenda</p>
              </div>
            </div>

            <div className='flex group hover:bg-opacity-10 hover:bg-blue-950 transition duration-500 justify-center hover:py-10 border-transparent hover:border-b-2 hover:border-t-2 hover:border-white hover:border-opacity-5  p-8 items-center'>
              <div className='font-bold group-hover:w-[30%] w-[40%] transition-all duration-500'>
                Dental Agenda App
                <p className='w-full text-sm transition-all transform duration-500 text-balance font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend placerat suscipit. Sed viverra ante porttitor mi viverra aliquet. Aliquam id dapibus est. Ut posuere tincidunt eros, ut pharetra tortor porta a. Sed at turpis cursus, tempus magna eu, fermentum sapien. Integer dictum.</p>
                <p onClick={() => window.open("https://dental-agenda.vercel.app/", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-300 mt-4'>https://dental-agenda.vercel.app/</p>
                <p onClick={() => window.open("https://github.com/pablodKampmann/dental-agenda", "_blank")} className='text-xs cursor-pointer text-emerald-500 transition duration-300 hover:text-emerald-300 mt-4'>https://github.com/pablodKampmann/dental-agenda</p>
              </div>
              <Image className="rounded-lg group-hover:h-[300px] group-hover:w-[70%] ml-8 trasform transition-all duration-500 w-[60%] h-[230px]" quality={100} width={1920} height={920} priority={true} src='/dentalAgenda-image.png' alt="dentalAgenga-image" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}