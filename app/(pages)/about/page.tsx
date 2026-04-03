import Image from "next/image";

export default function Aboutme(){
    return(
        <div className=" bg-gray-200 justify-center items-center">
            <h1 className="text-4xl text-center font-bold p-5">About</h1>
            <div className="grid grid-cols-2 justify-items-center items-center">
            <Image src="/jake.jpg" alt="About Image" width={300} height={300} className="rounded-lg h-90 w-100 mt-5" />
            <div>
            <p className="text-lg p-5">I am a passionate web developer with experience in creating modern, responsive websites and applications. I specialize in front-end development and have a strong background in JavaScript, React, and Next.js. I am dedicated to delivering high-quality work and continuously improving my skills to stay up-to-date with the latest industry trends.</p>
            </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold p-5 text-center">Skills</h1>
                <ul className="border bg-white flex gap-10 p-5 justify-center items-center text-lg p-3">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                </ul>
            </div>
            <div className="p-10">
                <h1 className="text-4xl font-bold p-5 text-center">Experience</h1>
                <ul className="flex flex-col gap-10 text-lg p-5">
                    <li className="border bg-white flex p-5 rounded-lg">
                        <h2 className="text-2xl font-bold">Web Developer</h2>
                        <p>Developed and maintained responsive websites using React and Next.js. Collaborated with cross-functional teams to deliver high-quality projects on time.</p>
                    </li>
                    <li className="border bg-white flex p-5 rounded-lg">
                        <h2 className="text-2xl font-bold">Front-end Developer</h2>
                        <p>Worked on various client projects, creating visually appealing and user-friendly websites. Utilized HTML, CSS, and JavaScript to implement interactive features.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}