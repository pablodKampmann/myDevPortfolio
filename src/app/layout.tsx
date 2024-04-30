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

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen overflow-y-hidden relative bg-blue-950 bg-opacity-20">
          <div className="absolute left-9 bottom-[18%] rounded-full bg-emerald-600 h-40 w-1 "></div>
          <div className="absolute left-9 bottom-[46%] rounded-full bg-emerald-600 h-4 w-1 "></div>
          <div className="absolute left-9 bottom-[54%] rounded-full bg-emerald-600 h-16 w-1 "></div>
          <div className="absolute right-9 bottom-[50%] rounded-full bg-emerald-600 h-16 w-1 "></div>
          <div className="absolute -right-5 bottom-[68%] font-semibold text-emerald-400 transform rotate-90">@pablokampmann</div>
          <div className="absolute right-9 bottom-[80%] rounded-full bg-emerald-600 h-8 w-1 "></div>
          <ToneMode />
          <LanguageOptions language={language} handleLanguageChange={handleLanguageChange} />
          <NavBar language={language} />
          {children}
        </div>
      </body>
    </html>
  );
}
