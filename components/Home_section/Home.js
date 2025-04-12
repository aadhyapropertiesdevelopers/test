import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className="min-h-screen bg-cover bg-center bg-gray-900 bg-[url('/images/comingBg.png')]">
            <div className="flex-grow flex flex-col justify-center items-center space-y-12">
                {/* Logos Side by Side */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    {/* First Image with Light Opacity */}
                    <Image
                        src="/images/Fuland.png"
                        alt="Kids Funland Fair Logo"
                        width={700}
                        height={700}
                        className=" sm:w-96 sm:h-96"
                        priority
                    />
                </div>

                {/* Coming Soon Text */}
                <div className="text-center px-4">
                    {/* Animated Highlighted Location */}
                    <h2 className="text-3xl sm:text-8xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-bounce">
                        Vijayawada
                    </h2>

                    <h1 className="text-4xl uppercase sm:text-5xl font-bold text-blue-800 mt-2">
                        Coming Soon
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-xl ml-10 mt-2">
                        {` We're crafting something exciting. Stay tuned for updates!`}
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full text-center space-y-3 py-6">
                <div className="flex justify-center gap-4">
                    <Link href="https://www.facebook.com/profile.php?id=61574916703014" target="_blank" rel="noopener noreferrer" className='p-2 transform transition-transform duration-300 hover:scale-[2] rounded-lg'>
                        <Icon icon="ic:baseline-facebook" className='w-6 h-6 text-blue-700' />
                    </Link>
                    <Link href="http://wa.me/919032952244" target="_blank" rel="noopener noreferrer" className='p-2 transform transition-transform duration-300 hover:scale-[2] rounded-lg'>
                        <Icon icon="ic:baseline-whatsapp" className='w-6 h-6 text-green-700' />
                    </Link>
                    <Link href="https://www.instagram.com/globalgrandeurevents/" target="_blank" rel="noopener noreferrer" className='p-2 transform transition-transform duration-300 hover:scale-[2] rounded-lg'>
                        <Icon icon="mdi:instagram" className='w-6 h-6 text-pink-600' />
                    </Link>
                    <Link href="https://x.com/GgEvents25" target="_blank" rel="noopener noreferrer" className='p-2 transform transition-transform duration-300 hover:scale-[2] rounded-lg'>
                        <Icon icon="line-md:twitter" className='w-6 h-6 text-blue-500' />
                    </Link>
                    <Link href="https://www.youtube.com/@GlobalGrandeurEvents" target="_blank" rel="noopener noreferrer" className='p-2 transform transition-transform duration-300 hover:scale-[2] rounded-lg'>
                        <Icon icon="line-md:youtube" className='w-6 h-6 text-red-500' />
                    </Link>
                    <Link href="https://www.tumblr.com/settings/account" target="_blank" rel="noopener noreferrer" className='p-2 transform transition-transform duration-300 hover:scale-[2] rounded-lg'>
                        <Icon icon="typcn:social-tumbler" className='w-6 h-6 text-blue-800' />
                    </Link>
                    <Link href="mailto:GLOBALGRANDEUREVENTS@GMAIL.COM" className='p-2 transform transition-transform duration-300 hover:scale-[2] rounded-lg'>
                        <Icon icon="weui:email-outlined" className='w-6 h-6 text-gray-700' />
                    </Link>
                </div>

                <div className="text-sm text-muted-foreground flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 mt-4">
                    <Link href="tel:+919121979563">
                        <Button variant="link" className="flex items-center gap-2">
                            <Phone className="w-12 h-12 text-blue-600" />
                            <span className='tracking-wider' style={{ letterSpacing: '0.2rem' }}>+91 9121979563</span>
                        </Button>
                    </Link>
                    <Link href="mailto:GLOBALGRANDEUREVENTS@GMAIL.COM">
                        <Button variant="link" className="flex items-center gap-2">
                            <Mail className="w-12 h-12 text-rose-500" />
                            <span style={{ letterSpacing: '0.2rem' }}>GLOBALGRANDEUREVENTS@GMAIL.COM</span>
                        </Button>
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Home;
