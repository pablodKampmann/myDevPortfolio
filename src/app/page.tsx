'use client'

import Image from "next/image";
import { FaQuestion } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";

function handleMailTo(params:type) {
  
}

export default function Home() {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center bg-black bg-opacity-50">
      <div onClick={() => { window.location.href = 'mailto:pablo7kamp@gmail.com'; }} className="absolute  cursor-pointer group hover:bg-opacity-50 transtion duration-150 bottom-2 right-2 p-2 rounded-lg bg-white text-black">
        <div className="-top-16 font-medium animate-[bounce_0.5s_ease-in-out_infinite] whitespace-nowrap text-sm flex justify-center items-center group-hover:opacity-100 opacity-0 transition duration-500 right-1 text-white absolute">
          Click to chat with me
          <IoChatbubbles size={50} className="ml-2" />
        </div>
        By <span className="font-bold">@Pablo_Kampmann</span>  <br />
        pablo7kamp@gmail.com
      </div>
      <div className="absolute top-2 right-2 hover:bg-opacity-70 transition duration-150 bg-blue-900 bg-opacity-40 p-2 rounded-full cursor-pointer border-2 border-gray-700 shadow-2xl">
        <FaQuestion className="text-white" size={26} />
      </div>
      <div className="flex justify-center items-center select-none border shadow-2xl px-6 py-4 rounded-xl bg-white space-x-6 mt-8">
        <h1 className="text-4xl font-light text-blue-800">Portafolio <span className="text-black text-xl">for:</span></h1>
        <a target="_blank" href="https://creativemarket.com/"><img className="w-36 h-42 focus:outline-none hover:opacity-50 transition duration-150" src="/creative-market-icon.png" alt="" /></a>
      </div>
      <div className="flex justify-center items-center w-[15%] my-8">
        <div className="w-1/2 rounded-full h-1 bg-white "></div>
        <div className="w-2 mx-4 rounded-full h-1 bg-white "></div>
        <div className="w-1/2 rounded-full h-1 bg-white "></div>
      </div>
      <div className="flex space-x-6 select-none border-2 border-gray-700  bg-blue-900 bg-opacity-40 p-4 rounded-xl">
        <h1 className="text-blue-700 tracking-tighter	 font-medium text-2xl flex justify-center items-center">My work:</h1>
        <a target="_blank" className="bg-white text-black p-4 font-medium rounded-xl hover:bg-opacity-50 transition duration-200" href="/login">Login Page</a>
        <a target="_blank" className="bg-white text-black p-4 rounded-xl  font-medium hover:bg-opacity-50 transition duration-200" href="/register">Register Page</a>
        <a target="_blank" className="bg-white text-black p-4 rounded-xl  font-medium hover:bg-opacity-50 transition duration-200" href="/register">Admin Page</a>
      </div>
    </div>
  );
}
