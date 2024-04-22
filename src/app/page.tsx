import Image from "next/image";

export default function Home() {
  return (
      <div className="h-screen flex space-x-6 justify-center items-center">
        <a className="bg-white text-black p-4 rounded-xl hover:bg-opacity-50 transition duration-200" href="/login">Login</a>
        <a className="bg-white text-black p-4 rounded-xl hover:bg-opacity-50 transition duration-200" href="/register">Register</a>
      </div>
  );
}
