import { SiVorondesign } from "react-icons/si";
import { IoIosSend } from "react-icons/io";

export default function NavBar() {
    return (
        <div className="w-full flex justify-between items-center bg-blue-950 border-b-2 border-emerald-700 bg-opacity-20 h-[10%] ">
            <SiVorondesign size={40} className="text-emerald-600 animate-[spin_5s_ease-in-out_infinite] ml-4 flex justify-start items-center" />
            <div className="flex space-x-4 justify-end items-center mr-4">
                <div className="cursor-pointer hover:bg-emerald-900 py-2 px-3 rounded-xl transition duration-150  w-full whitespace-nowrap"><span className="text-emerald-500">01. </span>About me</div>
                <div className="cursor-pointer hover:bg-emerald-900 py-2 px-3 rounded-xl transition duration-150  w-full whitespace-nowrap"><span className="text-emerald-500">02. </span>Experience</div>
                <div className="cursor-pointer hover:bg-emerald-900 py-2 px-3 rounded-xl transition duration-150  w-full whitespace-nowrap"><span className="text-emerald-500">03. </span>Tecnologies</div>
                <div className="bg-transparent font-semibold whitespace-nowrap white tracking-widest border-2 text-lg text-emerald-500 hover:border-white hover:bg-emerald-700 hover:text-white transition duration-150 cursor-pointer flex justify-center items-center border-emerald-600 rounded-md py-2 px-4 ">CONTACT ME<IoIosSend className="ml-2" size={26} /></div>
            </div>
        </div>
    );
}
