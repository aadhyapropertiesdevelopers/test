// "use client";

// import { Card } from '@/components/ui/card';
// import { MapPin } from 'lucide-react';
// import Link from 'next/link';
// import AnimationButton from '../../components/Animation/AnimationButton';
// import Header from '../../components/Header';
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion'; // Import motion from framer-motion
// import { Icon } from '@iconify/react';

// const HomeBanner = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   const openGoogleMaps = () => {
//     window.open(`https://g.co/kgs/5nH75ib`, '_blank');
//   };

//   useEffect(() => {
//     // Set the event date (May 31st, 2025)
//     const eventDate = new Date('2025-05-31T00:00:00').getTime();

//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const distance = eventDate - now;

//       if (distance > 0) {
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         setTimeLeft({ days, hours, minutes, seconds });
//       }
//     };

//     // Update immediately
//     updateTimer();

//     // Update every second
//     const timer = setInterval(updateTimer, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen bg-cover bg-center bg-black/10 bg-blend-overlay 
//     bg-[url('/images/sm.png')]       
//     sm:bg-[url('/images/sm.png')]      
//     md:bg-[url('/images/md.png')]      
//     lg:bg-[url('/images/lg.png')]      
//     text-black flex flex-col">
//         <Header />
//         <motion.div
//           className="flex-grow flex justify-start items-center px-6 md:px-12 py-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="max-w-4xl">
//             <motion.h1
//               className="text-4xl md:text-5xl uppercase font-bold bg-gradient-to-r from-purple-800 via-pink-700 to-teal-600 text-transparent bg-clip-text"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.3 }}
//             >
//               Kids Funland Fair
//             </motion.h1>

//             <motion.div
//               className="text-xl mt-2 font-medium"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//             >
//               <p>{`Vijayawada's ultimate family entertainment Games/Music/Food`}</p>
//             </motion.div>

//             <motion.div
//               className="px-4 bg-white/20 py-3 rounded-lg inline-block my-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.7 }}
//             >
//               <p className="text-3xl text-fuchsia-800 uppercase font-bold">  {` India's largest KARNIVAL`}</p>
//               <p className="text-2xl text-slate-600 uppercase font-semibold ">
//                 May 31<sup className="text-sm align-super">st</sup> - 1<sup className="text-sm align-super">st</sup> June,
//                 <span className="text-4xl font-bold"> 2025</span>
//               </p>
//             </motion.div>

//             {/* Address Information with Map Icon */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.9 }}
//             >
//               <Card className="bg-white/20 p-4 relative shadow-none rounded-lg max-w-md flex items-start justify-between hover:bg-white/30 transition-colors">
//                 <div>
//                   <p className="font-bold uppercase">a Convention Centre a/c</p>
//                   <p onClick={openGoogleMaps} className='cursor-pointer'>40-5-6A,MG Road, Vijayawada, Andhra Pradesh 520010</p>
//                   <div className='flex gap-3 mt-2 font-bold items-center text-green-600'>
//                     <Link href="https://wa.me/919701352244" target="_blank" rel="noopener noreferre" className='flex gap-2 items-center'>
//                       <Icon icon='ic:baseline-whatsapp' className="text-xl text-green-700" />
//                       +91 9701352244
//                     </Link>
//                     <Link href="https://wa.me/919032952244" target="_blank" rel="noopener noreferre" className='flex gap-2 items-center'>
//                       <Icon icon='ic:baseline-whatsapp' className="text-xl text-green-700" />
//                       +91 9032952244
//                     </Link>
//                   </div>
//                   <Link href='mailto:globalgrandeurevents@gmail.com'
//                     target="_blank"
//                     rel="noopener noreferrer" className='text-red-600 font-bold'>globalgrandeurevents@gmail.com</Link>
//                 </div>
//                 <div onClick={openGoogleMaps} className='bg-white cursor-pointer rounded-md p-2 shadow-md'>
//                   <MapPin className="h-6 w-6" />
//                 </div>
//               </Card>
//             </motion.div>

//             {/* Countdown Timer */}
//             <motion.div
//               className="max-w-md"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1.1 }}
//             >
//               <h3 className="font-semibold text-lg mb-2">Event Starts In:</h3>
//               <div className="flex gap-4">
//                 <div className="text-center bg-white/20 p-4 rounded-lg">
//                   <div className="text-2xl font-bold">{timeLeft.days}</div>
//                   <div className="text-sm">Days</div>
//                 </div>
//                 <div className="text-center bg-white/20 p-4 rounded-lg">
//                   <div className="text-2xl font-bold">{timeLeft.hours}</div>
//                   <div className="text-sm">Hours</div>
//                 </div>
//                 <div className="text-center bg-white/20 p-4 rounded-lg">
//                   <div className="text-2xl font-bold">{timeLeft.minutes}</div>
//                   <div className="text-sm">Minutes</div>
//                 </div>
//                 <div className="text-center bg-white/20 p-4 rounded-lg">
//                   <div className="text-2xl font-bold">{timeLeft.seconds}</div>
//                   <div className="text-sm">Seconds</div>
//                 </div>
//               </div>
//             </motion.div>

//             <div className='flex gap-4 items-center'>
//               <AnimationButton buttonText={"Register"} />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default HomeBanner;
'use client';

import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import AnimationButton from '../../components/Animation/AnimationButton';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const HomeBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const openGoogleMaps = () => window.open('https://g.co/kgs/5nH75ib', '_blank');

  useEffect(() => {
    const eventDate = new Date('2025-05-31T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* <div className="min-h-screen bg-cover bg-center relative bg-[#fef7f1] text-black flex flex-col overflow-hidden"> */}
      <div className="min-h-screen bg-cover bg-center 
      bg-[url('/images/sm.png')] 
      sm:bg-[url('/images/sm.png')] 
      md:bg-[url('/images/md.png')] 
      lg:bg-[url('/images/lg02.png')] 
      flex flex-col text-[#333]">
        <Header />

        {/* Decorative Elements */}
        <div className="absolute w-24 h-24 bg-yellow-200 rounded-full top-10 left-5 blur-2xl opacity-70 animate-bounce"></div>
        <div className="absolute w-32 h-32 bg-pink-300 rounded-full bottom-10 right-10 blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute w-20 h-20 bg-blue-200 rounded-full top-1/2 left-1/3 blur-lg opacity-50 animate-wiggle"></div>

        <motion.div
          className="flex-grow flex justify-center md:justify-start items-center px-6 md:px-12 py-24 md:py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-4xl gap-6 md:gap-24 flex flex-col md:flex-row justify-between items-center">
            <div>
              <motion.div
                className="my-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Card className="bg-white/60 backdrop-blur-md p-3 rounded-xl max-w-md border-dashed border-2 border-yellow-300 shadow-md">
                  <div>
                    <p className="font-bold uppercase text-pink-600">A Convention Centre A/C</p>
                    <p onClick={openGoogleMaps} className="cursor-pointer text-blue-800 hover:underline">40-5-6A, MG Road, Vijayawada, AP 520010</p>
                    <div className="flex gap-4 mt-2 font-bold items-center text-green-700">
                      <Link href="https://wa.me/919701352244" target="_blank" className="flex items-center gap-2">
                        <Icon icon="ic:baseline-whatsapp" className="text-xl" />
                        +91 9701352244
                      </Link>
                      <Link href="https://wa.me/919032952244" target="_blank" className="flex items-center gap-2">
                        <Icon icon="ic:baseline-whatsapp" className="text-xl" />
                        +91 9032952244
                      </Link>
                    </div>
                    <Link href="mailto:globalgrandeurevents@gmail.com" className="text-red-500 font-bold block mt-1">globalgrandeurevents@gmail.com</Link>
                  </div>
                  <div onClick={openGoogleMaps} className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>
                </Card>
              </motion.div>

              {/* Countdown */}
              <motion.div
                className="max-w-md mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-xl text-purple-700">Event Starts In:</h3>

                  {/* Arrow icon wrapped in Link */}
                  <Link href="/schedule" target='_blank' passHref>
                    <motion.div
                      className="flex items-center cursor-pointer text-purple-600 hover:text-purple-700 transition"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className=" text-lg font-semibold text-purple-700">Program Schedule</span>
                      <Icon icon="ic:baseline-arrow-forward" className="text-lg" />
                    </motion.div>
                  </Link>
                </div>

                <div className="flex gap-4">
                  {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
                    <div key={label} className="bg-white/70 px-4 py-3 rounded-2xl text-center border-2 border-dashed border-pink-300 shadow-lg">
                      <div className="text-2xl font-extrabold text-purple-700">{Object.values(timeLeft)[index]}</div>
                      <div className="text-sm text-slate-700">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="flex gap-6 items-center flex-wrap">
                <AnimationButton buttonText="Register" className="bg-gradient-to-r from-pink-400 via-yellow-300 to-teal-400 text-white rounded-full shadow-lg hover:scale-105 transition" />
                <div className="flex gap-4">
                  {socialLinks.map(({ name, href, icon, bg, hover }) => (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-full ${bg} text-white flex items-center justify-center shadow-xl ${hover}`}
                      style={{
                        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
                        border: '3px dashed white',
                      }}
                    >
                      <Icon icon={icon} className="text-2xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div className="bg-white/40 p-4 md:bg-transparent"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className='flex justify-center'>
                <Image src="/images/Fuland.png" width={400} height={400} alt="Logo" className="w-96 h-auto drop-shadow-lg" />
              </div>
              <div className='text-center'>
                <p className="text-2xl uppercase font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-teal-500 text-transparent bg-clip-text">{`Vijayawada's ultimate family`} <br /> entertainment</p>
                <p className="text-2xl text-slate-600 uppercase font-semibold">
                  May 31<sup className="text-sm align-super">st</sup> - June 1<sup className="text-sm align-super">st</sup>,
                  <span className="text-4xl font-bold ml-2">2025</span>
                </p>
                <Link href="/about">
                  <h1 className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text mt-2">
                    Games / Music / Food / 50+ Activities / 70+ Stallsl
                  </h1>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomeBanner;

// Social Icons
const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61575017804597',
    icon: 'ic:baseline-facebook',
    bg: 'bg-[#4D8AF0]',
    hover: 'hover:bg-[#3b75da]',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kidsfunlandfair/?igsh=MXRyM3VobXBiNGN0Yw%3D%3D#',
    icon: 'mdi:instagram',
    bg: 'bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-500',
    hover: 'hover:opacity-90',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919032952244',
    icon: 'ic:baseline-whatsapp',
    bg: 'bg-[#25D366]',
    hover: 'hover:bg-[#20ba5a]',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@globalgrandeurevents?si=Oux8jDmaxz_fAybP',
    icon: 'line-md:youtube',
    bg: 'bg-[#FF4B4B]',
    hover: 'hover:bg-[#e13f3f]',
  },
];
// 'use client';

// import { Card } from '@/components/ui/card';
// import { MapPin } from 'lucide-react';
// import Link from 'next/link';
// import AnimationButton from '../../components/Animation/AnimationButton';
// import Header from '../../components/Header';
// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Icon } from '@iconify/react';
// import Image from 'next/image';

// const HomeBanner = () => {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

//   const openGoogleMaps = () => window.open('https://g.co/kgs/5nH75ib', '_blank');

//   useEffect(() => {
//     const eventDate = new Date('2025-05-31T00:00:00').getTime();

//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const distance = eventDate - now;

//       if (distance > 0) {
//         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//         setTimeLeft({ days, hours, minutes, seconds });
//       }
//     };

//     updateTimer();
//     const timer = setInterval(updateTimer, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       {/* <div className="min-h-screen bg-cover bg-center relative bg-[#fef7f1] text-black flex flex-col overflow-hidden"> */}
//       <div className="min-h-screen bg-cover bg-center 
//       bg-[url('/images/sm.png')] 
//       sm:bg-[url('/images/sm.png')] 
//       md:bg-[url('/images/md.png')] 
//       lg:bg-[url('/images/lg02.png')] 
//       flex flex-col text-[#333]">
//         <Header />

//         {/* Decorative Elements */}
//         <div className="absolute w-24 h-24 bg-yellow-200 rounded-full top-10 left-5 blur-2xl opacity-70 animate-bounce"></div>
//         <div className="absolute w-32 h-32 bg-pink-300 rounded-full bottom-10 right-10 blur-xl opacity-60 animate-pulse"></div>
//         <div className="absolute w-20 h-20 bg-blue-200 rounded-full top-1/2 left-1/3 blur-lg opacity-50 animate-wiggle"></div>

//         <motion.div
//           className="flex-grow flex justify-start items-center px-6 md:px-12 py-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <div className="max-w-4xl">
//             <motion.div className="flex items-center gap-6 flex-wrap"
//               initial={{ y: -50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.3 }}
//             >
//               <Image src="/images/Fuland.png" width={400} height={400} alt="Logo" className="w-60 h-auto drop-shadow-lg" />
//               <div>
//                 <p className="text-2xl uppercase font-bold bg-gradient-to-r from-pink-600 via-yellow-400 to-teal-500 text-transparent bg-clip-text">Vijayawada's ultimate family entertainment</p>
//                 <p className="text-2xl text-slate-600 uppercase font-semibold">
//                   May 31<sup className="text-sm align-super">st</sup> - June 1<sup className="text-sm align-super">st</sup>,
//                   <span className="text-4xl font-bold ml-2">2025</span>
//                 </p>
//                 <h1 className="text-2xl md:text-3xl uppercase font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text mt-2">Games / Music / Food</h1>
//               </div>
//             </motion.div>

//             <motion.div
//               className="my-6"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.9 }}
//             >
//               <Card className="bg-white/60 backdrop-blur-md p-5 rounded-xl max-w-md border-dashed border-2 border-yellow-300 shadow-md">
//                 <div>
//                   <p className="font-bold uppercase text-pink-600">A Convention Centre A/C</p>
//                   <p onClick={openGoogleMaps} className="cursor-pointer text-blue-800 hover:underline">40-5-6A, MG Road, Vijayawada, AP 520010</p>
//                   <div className="flex gap-4 mt-2 font-bold items-center text-green-700">
//                     <Link href="https://wa.me/919701352244" target="_blank" className="flex items-center gap-2">
//                       <Icon icon="ic:baseline-whatsapp" className="text-xl" />
//                       +91 9701352244
//                     </Link>
//                     <Link href="https://wa.me/919032952244" target="_blank" className="flex items-center gap-2">
//                       <Icon icon="ic:baseline-whatsapp" className="text-xl" />
//                       +91 9032952244
//                     </Link>
//                   </div>
//                   <Link href="mailto:globalgrandeurevents@gmail.com" className="text-red-500 font-bold block mt-1">globalgrandeurevents@gmail.com</Link>
//                 </div>
//                 <div onClick={openGoogleMaps} className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer">
//                   <MapPin className="h-6 w-6 text-pink-600" />
//                 </div>
//               </Card>
//             </motion.div>

//             {/* Countdown */}
//             <motion.div
//               className="max-w-md mb-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1.1 }}
//             >
//               <h3 className="font-semibold text-xl mb-3 text-purple-700">Event Starts In:</h3>
//               <div className="flex gap-4">
//                 {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
//                   <div key={label} className="bg-white/70 px-4 py-3 rounded-2xl text-center border-2 border-dashed border-pink-300 shadow-lg">
//                     <div className="text-2xl font-extrabold text-purple-700">{Object.values(timeLeft)[index]}</div>
//                     <div className="text-sm text-slate-700">{label}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <div className="flex gap-6 items-center flex-wrap">
//               <AnimationButton buttonText="Register" className="bg-gradient-to-r from-pink-400 via-yellow-300 to-teal-400 text-white rounded-full shadow-lg hover:scale-105 transition" />
//               <div className="flex gap-4">
//                 {socialLinks.map(({ name, href, icon, bg, hover }) => (
//                   <motion.a
//                     key={name}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.15, rotate: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`w-12 h-12 rounded-full ${bg} text-white flex items-center justify-center shadow-xl ${hover}`}
//                     style={{
//                       boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
//                       border: '3px dashed white',
//                     }}
//                   >
//                     <Icon icon={icon} className="text-2xl" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default HomeBanner;

// // Social Icons
// const socialLinks = [
//   {
//     name: 'Facebook',
//     href: 'https://www.facebook.com/profile.php?id=61575017804597',
//     icon: 'ic:baseline-facebook',
//     bg: 'bg-[#4D8AF0]',
//     hover: 'hover:bg-[#3b75da]',
//   },
//   {
//     name: 'Instagram',
//     href: 'https://www.instagram.com/kidsfunlandfair/?igsh=MXRyM3VobXBiNGN0Yw%3D%3D#',
//     icon: 'mdi:instagram',
//     bg: 'bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-500',
//     hover: 'hover:opacity-90',
//   },
//   {
//     name: 'WhatsApp',
//     href: 'https://wa.me/919032952244',
//     icon: 'ic:baseline-whatsapp',
//     bg: 'bg-[#25D366]',
//     hover: 'hover:bg-[#20ba5a]',
//   },
//   {
//     name: 'YouTube',
//     href: 'https://youtube.com/@globalgrandeurevents?si=Oux8jDmaxz_fAybP',
//     icon: 'line-md:youtube',
//     bg: 'bg-[#FF4B4B]',
//     hover: 'hover:bg-[#e13f3f]',
//   },
// ];

