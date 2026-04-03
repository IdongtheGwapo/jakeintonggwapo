import { projects } from "@/components/features/projects";
import Image from "next/image";
export default function Project() {
    return(
        <div className="bg-gray-200 " >
            <h1 className="text-4xl text-center font-bold p-5">My Project</h1>

            <div className="grid grid-cols-2 gap-20 p-20">
                {projects.map((project) => (
                    <div key={project.id} className="border text-center bg-white p-5 rounded-lg shadow">
                        <Image src={project.image} alt={project.title} width={300} height={200} className="mb-5 h-50 w-100 rounded" />
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <p>{project.description}</p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-3 hover:bg-blue-600 transition">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}