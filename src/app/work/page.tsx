'use client'

import React, { useState, useEffect } from 'react';

export default function Work() {
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
      option_1: "Languages",
      option_2: "Frameworks",
      option_3: "BackEnd",
      category_1: "Primary",
      category_2: "Secondary",
    },
    spa: {
      technologies: "Tecnologías",
      info: "Las siguientes son algunas de las tecnologías con las que tengo experiencia y que suelo utilizar en mi trabajo habitual. Estoy familiarizado con ellas y las utilizo regularmente para llevar a cabo tareas y proyectos relacionados con el desarrollo web y la gestión de datos:",
      experience: "Experiencia",
      option_1: "Languajes",
      option_2: "Frameworks",
      option_3: "BackEnd",
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

  return (
    <div className='text-white flex flex-col justify-center items-center h-full pb-[6%]'>
      
    </div>
  );
}