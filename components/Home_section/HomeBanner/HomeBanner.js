"use client";
import React, { useEffect, useState } from 'react';
import DockDemo from '../../Animation/SocialLinks';
import Footer from '../../Footer';
import { AuroraText } from '@/components/magicui/aurora-text';
import AnimationButton from '../../Animation/AnimationButton';
import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Header from '../../Header';

const HomeBanner = () => {

    const getTargetDate = () => {
        const now = new Date();
        const nextMonth = now.getMonth() === 11 ? 0 : now.getMonth() + 1;
        const nextYear = nextMonth === 0 ? now.getFullYear() + 1 : now.getFullYear();
        return new Date(nextYear, nextMonth, 25, 0, 0, 0);
    };

    const targetDate = getTargetDate();

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const openGoogleMaps = () => {
        // Replace with your actual venue coordinates or address
        const address = encodeURIComponent("40-5-6A, valluru, Valluru Purnachandra Rao Rd, Brindavan Colony, Sriram Nagar, Labbipet, Vijayawada, Andhra Pradesh 520010");
        window.open(`https://g.co/kgs/5nH75ib`, '_blank');
    };


    return (
        <div className="min-h-screen bg-cover bg-center bg-black/10 bg-blend-overlay bg-[url('/images/Homeanner.png')] text-black flex flex-col">
            {/* Main Content - Vertically centered and horizontally aligned to start */}
            <Header />
            <div className="flex-grow flex  justify-start px-6 md:px-12 py-12">
                <div className="max-w-4xl space-y-4">
                    <h1 className="text-4xl md:text-6xl uppercase font-bold">
                        <AuroraText>India's largest KARNIVAL</AuroraText>
                    </h1>

                    <div className="text-xl md:text-2xl font-medium">
                        <p>Vijayawada's ultimate family entertainment extravaganza!</p>
                    </div>

                    <div className="px-3 py-3 rounded-lg inline-block my-2">
                        <p className="text-4xl italic text-blue-800 uppercase font-semibold">Summer Vibes</p>
                    </div>

                    {/* Event Date */}
                    <div className="px-6 py-3 rounded-lg inline-block my-2">
                        <p className="text-4xl text-red-800 uppercase font-semibold">May 31st - 1st June , <span className='text-4xl font-bold'>2025</span></p>
                    </div>

                    {/* Address Information with Map Icon */}
                    <Card className="bg-white/5 p-4 relative shadow-none rounded-lg max-w-md flex items-start justify-between hover:bg-white/30 transition-colors">
                        <div>
                            <p className="font-bold uppercase">a Convention Centre a/c</p>
                            <p onClick={openGoogleMaps} className='cursor-pointer'>40-5-6A,MG Road, Vijayawada, Andhra Pradesh 520010</p>
                            <div className='flex gap-3 mt-2 font-bold items-center text-red-600'>
                                <Link href="https://wa.me/919701352244" target="_blank" rel="noopener noreferre">+91 9701352244</Link>
                                <Link href="https://wa.me/919032952244" target="_blank" rel="noopener noreferre">+91 9032952244</Link>
                            </div>
                            <p className='text-red-600 font-bold'>globalgrandeurevents@gmail.com</p>
                        </div>
                        <div className='bg-white rounded-md p-2 shadow-md'>
                            <MapPin className="h-6 w-6" />
                        </div>
                    </Card>

                    {/* Countdown Timer */}
                    <div className="flex gap-4 my-6">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="bg-white/30 p-3 rounded-lg text-center min-w-[70px]">
                                <div className="text-2xl md:text-3xl font-bold">
                                    {value.toString().padStart(2, '0')}
                                </div>
                                <div className="text-xs uppercase">{unit}</div>
                            </div>
                        ))}
                    </div>

                    <div className='flex gap-4 items-center'>
                        <AnimationButton buttonText={"Register"} />
                        <AnimationButton buttonText={"Booking Tickets"} />
                    </div>
                </div>
            </div>

            {/* Footer at Bottom */}
            {/* <div className="w-full px-4 pb-4">
                <Footer />
            </div> */}
        </div>
    );
};

export default HomeBanner;

// "use client";
// import React, { useEffect, useState } from 'react';
// import DockDemo from '../../Animation/SocialLinks';
// import Footer from '../../Footer';
// import { SparklesText } from '@/components/magicui/sparkles-text';
// import { AuroraText } from '@/components/magicui/aurora-text';
// import { ConfettiButton } from '@/components/magicui/confetti';
// import AnimationButton from '../../Animation/AnimationButton';

// const HomeBanner = () => {
//     const [isClient, setIsClient] = useState(false);

//     const getTargetDate = () => {
//         const now = new Date();
//         const nextMonth = now.getMonth() === 11 ? 0 : now.getMonth() + 1;
//         const nextYear = nextMonth === 0 ? now.getFullYear() + 1 : now.getFullYear();
//         return new Date(nextYear, nextMonth, 25, 0, 0, 0);
//     };

//     const targetDate = getTargetDate();

//     const calculateTimeLeft = () => {
//         const now = new Date();
//         const difference = targetDate - now;

//         if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

//         return {
//             days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//             minutes: Math.floor((difference / 1000 / 60) % 60),
//             seconds: Math.floor((difference / 1000) % 60),
//         };
//     };

//     const [timeLeft, setTimeLeft] = useState({
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0
//     });

//     useEffect(() => {
//         setIsClient(true);
//         setTimeLeft(calculateTimeLeft());

//         const timer = setInterval(() => {
//             setTimeLeft(calculateTimeLeft());
//         }, 1000);

//         return () => clearInterval(timer);
//     }, [targetDate]);

//     const formattedDate = targetDate.toLocaleDateString('en-US', {
//         day: 'numeric',
//         month: 'long',
//         year: 'numeric',
//     });

//     return (
//         <div className="min-h-screen bg-cover bg-center bg-black/20 bg-blend-overlay bg-[url('/images/Homeanner.png')] text-white flex flex-col">
//             {/* Main Content */}
//             <div className="flex-grow container mx-auto px-4 py-12">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                     {/* Left Column - Event Info */}
//                     <div className="space-y-8">
//                         <div className="space-y-4">
//                             <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
//                                 <AuroraText>Kids Funland Fair</AuroraText>
//                             </h1>
//                             <p className="text-2xl font-semibold">MAY 31 & JUNE 1</p>

//                             <div className="flex flex-wrap gap-4 text-xl">
//                                 {['SHOPPING', 'FOOD', 'FUN', 'MUSIC', 'PETSHOW', 'RAMP WALK', 'GAMES'].map((item, index) => (
//                                     <span key={index} className="bg-white/20 px-3 py-1 rounded-full">{item}</span>
//                                 ))}
//                             </div>

//                             <p className="text-lg md:text-xl mt-4">
//                                 Vijayawada's most extravagant family entertainment event!
//                             </p>
//                         </div>

//                         {/* Countdown Timer */}
//                         <div className="mt-8">
//                             <p className="text-lg">We're counting down to the big event:</p>
//                             <p className="text-xl font-semibold mb-4">{formattedDate}</p>
//                             <div className="flex gap-4">
//                                 {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
//                                     <div key={index} className="bg-white/30 p-3 rounded-lg text-center min-w-[80px]">
//                                         <div className="text-3xl font-bold">
//                                             {isClient ? timeLeft[unit] : '--'}
//                                         </div>
//                                         <div className="text-sm uppercase">{unit}</div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <div className="mt-8 space-y-4">
//                             <AnimationButton buttonText={"Book a Free Ticket"} />
//                             <DockDemo />
//                         </div>
//                     </div>

//                     {/* Right Column - Sponsorship Info */}
//                     <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
//                         <h2 className="text-3xl font-bold mb-6 text-center">Sponsorship Opportunities</h2>

//                         <div className="space-y-6">
//                             <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 p-4 rounded-lg">
//                                 <h3 className="text-xl font-bold">Powered By Sponsor</h3>
//                                 <p className="text-2xl font-bold my-2">₹600,000</p>
//                                 <ul className="list-disc pl-5 space-y-1">
//                                     <li>Official "Powered by" status with logo placement</li>
//                                     <li>18 sqm prime location booth</li>
//                                     <li>Inclusion in all marketing collateral</li>
//                                     <li>Homepage logo on event website</li>
//                                 </ul>
//                             </div>

//                             <div className="bg-gradient-to-r from-blue-500/30 to-teal-500/30 p-4 rounded-lg">
//                                 <h3 className="text-xl font-bold">Co-Sponsored By</h3>
//                                 <p className="text-2xl font-bold my-2">₹500,000</p>
//                                 <ul className="list-disc pl-5 space-y-1">
//                                     <li>Prominent logo display at venue</li>
//                                     <li>9 sqm prime location booth</li>
//                                     <li>1-hour presentation slot</li>
//                                     <li>Website homepage logo</li>
//                                 </ul>
//                             </div>

//                             <div className="bg-gradient-to-r from-yellow-500/30 to-orange-500/30 p-4 rounded-lg">
//                                 <h3 className="text-xl font-bold">Entertainment Sponsor</h3>
//                                 <p className="text-2xl font-bold my-2">₹300,000</p>
//                                 <ul className="list-disc pl-5 space-y-1">
//                                     <li>Exclusive Fun Zone branding</li>
//                                     <li>Inclusion in advertising campaigns</li>
//                                     <li>9 sqm prime location booth</li>
//                                     <li>Website homepage logo</li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="mt-8 text-center">
//                             <p className="text-lg">Contact us for sponsorship:</p>
//                             <p className="text-xl font-semibold">globalgrandeurevents@gmail.com</p>
//                             <p className="text-xl font-semibold mt-2">+91 9121979563</p>
//                             <p className="mt-4">www.globalgrandeurevents.com</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Event Description */}
//                 <div className="mt-16 bg-black/40 p-8 rounded-xl">
//                     <h2 className="text-3xl font-bold mb-6 text-center">About Kids Funland Fair</h2>
//                     <div className="grid md:grid-cols-2 gap-8">
//                         <div>
//                             <p className="mb-4">
//                                 Global Grandeur Events offers a prestigious platform called Kids Funland Fair,
//                                 for your brand to achieve unparalleled visibility and engagement through
//                                 exclusive sponsorship opportunities.
//                             </p>
//                             <p className="mb-4">
//                                 The special value sponsorships are categorized as Powered By Sponsorship,
//                                 Co-Sponsored By & Silver Sponsorship, Ticketing sponsor, and entertainment sponsor.
//                             </p>
//                         </div>
//                         <div>
//                             <p className="mb-4">
//                                 For the very first time in Vijayawada, Global Grandeur Events is coming up with
//                                 something exuberant, extravagant and extraordinary.
//                             </p>
//                             <p>
//                                 Presenting "Kids Funland Fair", a fair of a lifetime. Come over to this magic land
//                                 to experience fun, food, live music, lots of shopping, awesome games and activities -
//                                 a total family entertainer. Don't miss out!!!
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer */}
//             <div className="w-full px-4 pb-4 mt-auto">
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default HomeBanner;