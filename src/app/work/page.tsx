"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

  return (
    <div className='text-white flex justify-center items-center h-full pb-[4%]'>
      <div className='flex h-[84%] border-4 relative border-gray-900 bg-blue-950 bg-opacity-20 rounded-lg w-[60%] p-8 shadow-2xl text-lg justify-center items-center flex-col'>
        <div className=' overflow-y-auto'>
          <div className='absolute -rotate-90 -left-[215px] px-16 py-1.5 bg-emerald-600 bg-opacity-20 font-medium border-gray-900 border-4 text-4xl rounded-t-lg ' >Mis Proyectos</div>
          <div className='flex justify-center items-center'>
            <div className='font-bold'>
              Dental Agenda App
              <p className='w-full text-sm transition-all transform duration-300 text-balance font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend placerat suscipit. Sed viverra ante porttitor mi viverra aliquet. Aliquam id dapibus est. Ut posuere tincidunt eros, ut pharetra tortor porta a. Sed at turpis cursus, tempus magna eu, fermentum sapien. Integer dictum.</p>
            </div>
            <Image className="rounded-lg hover:scale-125 cursor-pointer ml-8 hover:mr-8 trasform transitiond duration-300 w-[400px] h-[200px]" quality={100} width={1920} height={900} priority={true} src='/adminPanel-image.png' alt="adminPanel-image" />
          </div>
          <div className='flex justify-center mt-16 items-center'>
            <div className='font-bold'>
              Dental Agenda App
              <p className='w-full text-sm transition-all transform duration-300 text-balance font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend placerat suscipit. Sed viverra ante porttitor mi viverra aliquet. Aliquam id dapibus est. Ut posuere tincidunt eros, ut pharetra tortor porta a. Sed at turpis cursus, tempus magna eu, fermentum sapien. Integer dictum.</p>
            </div>
            <Image className="rounded-lg hover:scale-125 cursor-pointer ml-8 hover:mr-8 trasform transitiond duration-300 w-[400px] h-[200px]" quality={100} width={1920} height={900} priority={true} src='/adminPanel-image.png' alt="adminPanel-image" />
          </div>
          <div className='flex justify-center mt-16 items-center'>
            <div className='font-bold'>
              Dental Agenda App
              <p className='w-full text-sm transition-all transform duration-300 text-balance font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend placerat suscipit. Sed viverra ante porttitor mi viverra aliquet. Aliquam id dapibus est. Ut posuere tincidunt eros, ut pharetra tortor porta a. Sed at turpis cursus, tempus magna eu, fermentum sapien. Integer dictum.</p>
            </div>
            <Image className="rounded-lg hover:scale-125 cursor-pointer ml-8 hover:mr-8 trasform transitiond duration-300 w-[400px] h-[200px]" quality={100} width={1920} height={900} priority={true} src='/adminPanel-image.png' alt="adminPanel-image" />
          </div>
        </div>
      </div>
    </div>
  );
}