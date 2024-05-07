import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
interface ToneOptionsProps {
    tone: string;
    handleToneChange: (tone: string) => void;
}

export default function ToneMode({ tone, handleToneChange }: ToneOptionsProps) {

    function handleClick() {
        if (tone === 'dark') {
            handleToneChange('light');
        } else if (tone === 'light') {
            handleToneChange('dark');
        }
    }

    return (
        <button onClick={handleClick} className="absolute bottom-4 bg-emerald-600 hover:bg-emerald-500 transition duration-150 cursor-pointer p-2 rounded-full left-4">
            {tone === 'dark' ? (
                <MdDarkMode size={30} className="text-black" />
            ) : (
                <MdOutlineDarkMode size={30} className="text-white" />
            )}
        </button>
    );
}
