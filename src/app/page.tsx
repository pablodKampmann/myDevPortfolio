"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutMe() {

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
      example: "Projects",
    },
    spa: {
      example: "Projects",
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
      example: "Projects",
    },
    light: {
      example: "Projects",
    }
  }

  let classes;
  if (tone === "dark") {
    classes = classesTones.dark;
  } else if (tone === "light") {
    classes = classesTones.light;
  }

  return (
    <div className='text-white flex flex-col justify-center items-center h-full pb-[6%]'>
      <div className='w-[50%] h-[60%] relative bg-white bg-opacity-10 rounded-2xl shadow-2xl'>
        <h1 className='text-emerald-600 font-semibold text-2xl absolute top-6 left-10'>Mi nombre es Pablo Kampmann</h1>
        <Image className={`rounded-full absolute -top-10 -right-10 shadow-2xl object-cover w-[200px] h-[200px]`} quality={100} width={959} height={1280} priority={true} src='/me-image.jpeg' alt="me-image" />
      </div>
    </div>
  );
}