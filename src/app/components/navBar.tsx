import { SiVorondesign } from "react-icons/si";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import { usePathname } from 'next/navigation'
interface NavBarProps {
    language: string;
}

export default function NavBar({ language }: NavBarProps) {
    const pathname = usePathname();
    
    const languageTexts = {
        eng: {
            about: "About me",
            work: "My work",
            experience: "Experience",   
            technologies: "Technologies",
            contact: "CONTACT ME",
        },
        spa: {
            about: "Acerca de mi",
            work: "Mi trabajo",
            experience: "Experiencia",
            technologies: "Tecnologías",
            contact: "Contactame",
        }
    };

    let texts;
    if (language === "eng") {
        texts = languageTexts.eng;
    } else if (language === "spa") {
        texts = languageTexts.spa;
    }
    
    return (
        <div className="w-full flex justify-between items-center bg-blue-950 border-b-2 border-emerald-700 bg-opacity-20 h-[10%] ">
            <SiVorondesign size={40} className="text-emerald-600 animate-[spin_5s_ease-in-out_infinite] ml-4 flex justify-start items-center" />
            <div className="flex space-x-4 justify-end items-center mr-4">
                <Link href={'/'} prefetch={true}>
                    <div className={`${pathname === '/about' ? 'bg-emerald-900 bg-opacity-40 ' : 'hover:bg-emerald-900'} cursor-pointer  py-2 px-3 rounded-xl transition duration-150  w-full whitespace-nowrap`}><span className="text-emerald-500">01. </span>{texts?.about}</div>
                </Link>
                <Link href={'/work'} prefetch={true}>
                    <div className={`${pathname === '/work' ? 'bg-emerald-900 bg-opacity-40' : 'hover:bg-emerald-900'} cursor-pointer py-2 px-3 rounded-xl transition duration-150  w-full whitespace-nowrap`}><span className="text-emerald-500">02. </span>{texts?.work}</div>
                </Link>
                <Link href={'/experience'} prefetch={true}>
                    <div className={`${pathname === '/experience' ? 'bg-emerald-900 bg-opacity-40' : 'hover:bg-emerald-900'} cursor-pointer py-2 px-3 rounded-xl transition duration-150  w-full whitespace-nowrap`}><span className="text-emerald-500">03. </span>{texts?.experience}</div>
                </Link>
                <Link href={'/tech'} prefetch={true}>
                    <div className={`${pathname === '/tech' ? 'bg-emerald-900 bg-opacity-40' : 'hover:bg-emerald-900'} cursor-pointer py-2 px-3 rounded-xl transition duration-150  w-full whitespace-nowrap`}><span className="text-emerald-500">04. </span>{texts?.technologies}</div>
                </Link>
                <div className="bg-transparent font-semibold whitespace-nowrap white tracking-widest border-2 text-lg text-emerald-500 hover:border-white hover:bg-emerald-700 hover:text-white transition duration-150 cursor-pointer flex justify-center items-center border-emerald-600 rounded-md py-2 px-4 ">{texts?.contact}<IoIosSend className="ml-2" size={26} /></div>
            </div>
        </div>
    );
}
