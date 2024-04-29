'use client'

import Image from "next/image";
import React, { useState } from 'react';

export default function Page() {
    const [option, setOption] = useState('languages');

    return (
        <div className='text-white flex flex-col justify-center items-center h-full pb-24'>
            <h1 className="text-4xl bg-emerald-600  bg-opacity-40 p-2 rounded-md">Tecnologías</h1>
            <h1 className="text-base text-center mt-4 w-[40%]">Las siguientes son algunas de las tecnologías con las que tengo experiencia y que suelo utilizar en mi trabajo habitual. Estoy familiarizado con ellas y las utilizo regularmente para llevar a cabo tareas y proyectos relacionados con el desarrollo web y la gestión de datos:</h1>
            <div className="flex justify-center space-x-4 mt-12 items-center">
                <div onClick={() => setOption('languages')} className={`${option === 'languages' ? 'bg-emerald-600' : 'hover:bg-white hover:bg-opacity-10'} rounded-md text-lg  px-2 py-1 cursor-pointer`}>Languajes</div>
                <div onClick={() => setOption('frameworks')} className={`${option === 'frameworks' ? 'bg-emerald-600' : 'hover:bg-white hover:bg-opacity-10'} rounded-md text-lg  px-2 py-1 cursor-pointer`}>Frameworks</div>
                <div onClick={() => setOption('backEnd')} className={`${option === 'backEnd' ? 'bg-emerald-600' : 'hover:bg-white hover:bg-opacity-10'} rounded-md text-lg  px-2 py-1 cursor-pointer`}>BackEnd</div>
            </div>
            <div className="flex space-x-6 border-2 rounded-lg border-gray-900 px-6 py-4 mt-2 justify-center items-center">
                <Image className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2" quality={100} width={110} height={110} priority={true} src='tailwind-icon.svg' alt="tailwind-icon" />
                <Image className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2" quality={100} width={100} height={100} priority={true} src='html-icon.svg' alt="html-icon" />
                <Image className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2" quality={100} width={100} height={100} priority={true} src='css-icon.svg' alt="css-icon" />
                <Image className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2" quality={100} width={100} height={100} priority={true} src='typescript-icon.svg' alt="typescript-icon" />
                <Image className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2" quality={100} width={90} height={90} priority={true} src='javascript-icon.svg' alt="javascript-icon" />
            </div>
            <div className="flex space-x-6 border-2 rounded-lg border-gray-900 px-6 py-4 mt-2 justify-center items-center">
                <Image className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2" quality={100} width={70} height={70} priority={true} src='c-icon.svg' alt="c-icon" />
                <Image className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2" quality={100} width={70} height={70} priority={true} src='php-icon.svg' alt="php-icon" />
                <Image className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-2" quality={100} width={70} height={70} priority={true} src='python-icon.svg' alt="python-icon" />
            </div>
        </div>
    );
}