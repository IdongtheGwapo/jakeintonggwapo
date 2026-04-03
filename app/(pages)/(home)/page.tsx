import Image from "next/image";
import Link from "next/link";
import About from "@/components/features/About";
import { projects } from "@/components/features/projects";
export default function Homepage() {
    return (
        <div className="bg-gray-200 justify-center items-center">
            <h1 className="text-center text-4xl font-bold p-5">Homepage</h1>
            <div className="grid grid-cols-2 gap-5 mb-10 border-b-1 p-5 flex items-center justify-items-center">
                <Image className="rounded-full w-100 h-100 p-5" src="/jake1.jpg" alt="Homepage Image" width={300} height={300} />
                <div className="">
                    <h1 className="text-2xl rounded-lg font-bold mb-1">Hi im Jake!</h1>
                    <p className="text-lg mb-5">I&apos;m a passionate web developer creating amazing web experiences.</p>
                    <Link href="/project">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">
                            View my work
                        </button>
                    </Link>
                </div>
            </div>

            <About />

            <div className="border-t-1 p-5 text-center" >
                <h1 className="text-4xl text-center font-bold p-5">My Project</h1>

                <div className="grid grid-cols-3 gap-20 p-20">
                    {projects.slice(0, 3).map((project) => (
                        <div key={project.id} className="border bg-white p-5 rounded-lg shadow">
                            <Image src={project.image} alt={project.title} width={300} height={200} className="mb-5 h-50 w-100 rounded" />
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
                <button className="px-4 p-2 bg-blue-500 text-white rounded mt-3 hover:bg-blue-600 transition">
                    <Link href="/project">
                        View all projects
                    </Link>
                </button>
            </div>
        </div>
    )
}