export default function Contact() {
    return (

        <div className=" bg-gray-200 p-5">
            <h1 className="text-5xl p-10 font-bold text-center">
                Let&apos;s get in touch
            </h1>
            <div className="flex gap-10 justify-center items-center">
                <div className="gap-6 bg-white">
                    <div className="border-1 rounded-lg w-100 p-6">
                        <h1 className="text-3xl font-bold">Email</h1>
                        <p className="hover:text-blue-500 mb-5 text-lg">
                            jakeclifford39@gmail.com
                        </p>
                        <h1 className="text-3xl font-bold">Phone</h1>
                        <p className="hover:text-blue-500 text-lg">
                            0920 756 7911
                        </p>
                    </div>
                </div>

                <div className="border-1 w-150 bg-white rounded-lg p-6">
                    <h2 >Your Name</h2>
                    <input type="text" placeholder="Your Name" className="border rounded-lg px-4 py-2 mb-4 w-full" />
                    <h2 >Your Email</h2>
                    <input type="email" placeholder="Your Email" className="border rounded-lg px-4 py-2 mb-4 w-full" />
                    <h2 >Your Message</h2>
                    <textarea placeholder="Your Message" className="border rounded-lg px-4 py-2 mb-4 w-full h-32"></textarea>
                    <button className="h-10 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
                </div>
            </div>
        </div>

    )
}