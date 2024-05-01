'use client'

import { Inconsolata } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import LanguageOptions from "./components/languageOptions";
import React, { useState, useEffect } from 'react';
import ToneMode from "./components/toneMode";

const inter = Inconsolata({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    window.dispatchEvent(new Event("storage"));
  };

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
    const storedTone = localStorage.getItem('tone');
    if (storedTone) {
      setTone(storedTone);
    }
  }, []);

  const handleToneChange = (newTone: string) => {
    setTone(newTone);
    localStorage.setItem('tone', newTone);
    window.dispatchEvent(new Event("storage"));
  };

  //TONE
  let bgMainColor = "";
  let bgMainOpacity = "";
  let bgLinesColor = "";

  if (tone === "dark") {
    bgMainColor = "bg-blue-950";
    bgMainOpacity = "bg-opacity-20";
    bgLinesColor = "bg-emerald-600";

  } else if (tone === "light") {
    bgMainColor = "bg-zinc-100		";
    bgMainOpacity = "bg-opacity-90";
    bgLinesColor = "bg-emerald-500";
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`h-screen overflow-y-hidden relative ${bgMainColor} transition duration-200 ${bgMainOpacity}`}>
          <div className={`absolute left-9 bottom-[18%] rounded-full ${bgLinesColor} h-40 w-1 `}></div>
          <div className={`absolute left-9 bottom-[46%] rounded-full ${bgLinesColor} h-4 w-1 `}></div>
          <div className={`absolute left-9 bottom-[54%] rounded-full ${bgLinesColor} h-16 w-1 `}></div>
          <div className={`absolute right-9 bottom-[50%] rounded-full ${bgLinesColor} h-16 w-1 `}></div>
          <div className={`absolute -right-5 bottom-[68%] font-semibold text-emerald-500 transform rotate-90`}>@pablokampmann</div>
          <div className={`absolute right-9 bottom-[80%] rounded-full ${bgLinesColor} h-8 w-1 `}></div>
          <ToneMode tone={tone} handleToneChange={handleToneChange} />
          <LanguageOptions tone={tone} language={language} handleLanguageChange={handleLanguageChange} />
          <NavBar tone={tone} language={language} />
          {children}
        </div>
      </body>
    </html>
  );
}
