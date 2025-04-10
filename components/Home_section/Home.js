import React from 'react'
import Image from 'next/image'

const Home = () => {
    return (
        <div className="h-screen w-full bg-[url('/images/ComingSoon.png')] bg-cover bg-center flex items-center justify-center">
            {/* Main Content */}
            <div className="text-center bg-black/60 text-white p-8 border-2 border-dashed border-gray-400 rounded-lg">
                <Image src="/images/logo.jpg" alt="Logo" width={240} height={240} className="rounded-md shadow-lg mx-auto" />

                <h1 className="text-4xl font-bold mb-4 mt-4">Coming Soon</h1>
                <p className="text-lg">
                    We're working hard to bring something amazing. Stay tuned!
                </p>
            </div>
        </div>
    )
}

export default Home