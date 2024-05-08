'use client'

import { Inconsolata } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import LanguageOptions from "./components/languageOptions";
import React, { useState, useEffect } from 'react';
import ToneMode from "./components/toneMode";
import Loading from "./components/loading";

const inter = Inconsolata({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //LANGUAGE
  const [language, setLanguage] = useState<string>('eng')

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
  const [tone, setTone] = useState<string>('dark');
  const [classesTones, setClassesTones] = useState<any>(null);
  const [colorMain, setColorMain] = useState<string>('emerald');

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

  useEffect(() => {
    const updateClassesTones = () => {
      let bgLinesColor = '';
      switch (colorMain) {
        case 'emerald':
          bgLinesColor = tone === 'dark' ? "bg-emerald-600" : "bg-emerald-500";
          break;
        case 'rose':
          bgLinesColor = tone === 'dark' ? "bg-rose-600" : "bg-rose-500";
          break;
        case 'blue':
          bgLinesColor = tone === 'dark' ? "bg-blue-600" : "bg-blue-500";
          break;
        case 'yellow':
          bgLinesColor = tone === 'dark' ? "bg-yellow-600" : "bg-yellow-500";
          break;
        default:
          break;
      }

      setClassesTones({
        dark: {
          bgMainColor: "bg-blue-950",
          bgMainOpacity: "bg-opacity-20",
          bgLinesColor: bgLinesColor,
        },
        light: {
          bgMainColor: "bg-zinc-100",
          bgMainOpacity: "bg-opacity-90",
          bgLinesColor: bgLinesColor,
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

  const handleColorMainChange = (newColor: string) => {
    setColorMain(newColor);
    localStorage.setItem('colorMain', newColor);
    window.dispatchEvent(new Event("storage"));
  };

  //LOADING
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (classesTones) {
      setIsLoading(false);
    }
  }, [classesTones]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isLoading ? (
          <div className={`h-screen overflow-y-hidden relative ${classes?.bgMainColor} transition duration-200 ${classes?.bgMainOpacity}`}>
            <div className={`absolute left-9 bottom-[14%] rounded-full ${classes?.bgLinesColor} h-40 w-1 `}></div>
            <div className={`absolute left-9 bottom-[41%] rounded-full ${classes?.bgLinesColor} h-4 w-1 `}></div>
            <div className={`absolute left-9 bottom-[48%] rounded-full ${classes?.bgLinesColor} h-16 w-1 `}></div>
            <div className={`absolute right-9 bottom-[50%] rounded-full ${classes?.bgLinesColor} h-16 w-1 `}></div>
            <div className={`absolute -right-5 bottom-[68%] font-semibold text-${colorMain}-500 transform rotate-90`}>@pablokampmann</div>
            <div className={`absolute right-9 bottom-[80%] rounded-full ${classes?.bgLinesColor} h-8 w-1 `}></div>
            <ToneMode tone={tone} colorMain={colorMain} handleToneChange={handleToneChange} />
            <LanguageOptions tone={tone} language={language} colorMain={colorMain} handleLanguageChange={handleLanguageChange} />
            <NavBar tone={tone} language={language} colorMain={colorMain} handleColorChange={handleColorMainChange} />
            {children}
          </div>
        ) : (
          <Loading />
        )}
      </body>
    </html>
  );
}
