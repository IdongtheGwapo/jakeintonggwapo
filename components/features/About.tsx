import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="p-10">
            <h1 className="text-4xl text-center font-bold mb-10">About</h1>
            <div className="grid grid-cols-2 justify-items-center items-center">
                <Image 
                    src="/jake.jpg" 
                    alt="About Image" 
                    width={300} 
                    height={300} 
                    className="rounded-lg p-5 h-60 w-60"
                />
                <div className="text-center md:text-left px-10">
                    <p className="text-lg mb-4">
                        I am a passionate web developer with experience in creating modern, responsive websites and applications.
                    </p>
                    <Link href="/contact">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                            Contact me
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}