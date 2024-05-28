import { SiVorondesign } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";

export default function Loading() {
    return (
        <div className="h-screen flex-col bg-blue-950 bg-opacity-20 space-y-8 select-none w-full flex justify-center items-center">
            <FaConnectdevelop className='text-emerald-600 animate-[spin_1.5s_ease-out_infinite]' size={180} />
            <h1 className='bg-emerald-500 text-lg bg-opacity-20 shadow-2xl py-1 px-2 rounded'>Please wait</h1>
        </div>
    );
}
