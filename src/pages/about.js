import React from 'react';
import {
    FerrisWheel, Clapperboard, Utensils, ShoppingBag, BookOpenText,
    Baby, Star, ChevronRight, Sparkles
} from 'lucide-react';
import { Marquee } from '@/components/magicui/marquee';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    const teamMembers = [
        { name: "T Aruna Kumari", role: "CEO", img: "/images/01.png" },
        { name: "Vivek Kumar", role: "Director", img: "/images/02.png" },
        { name: "Shivani Raj", role: "COO", img: "/images/03.png" },
        { name: " Uday Kumar Y", role: "Head Marcom", img: "/images/04.png" },
        { name: "Tanishka Raj", role: "Executive Director", img: "/images/05.png" },
    ];
    const highlights = [
        {
            icon: <FerrisWheel className="w-6 h-6 text-white" />,
            text: "100+ Rides",
            color: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white"
        },
        {
            icon: <Clapperboard className="w-6 h-6 text-white" />,
            text: "Live Shows",
            color: "bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white"
        },
        {
            icon: <Utensils className="w-6 h-6 text-white" />,
            text: "Food Court",
            color: "bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white"
        },
        {
            icon: <ShoppingBag className="w-6 h-6 text-white" />,
            text: "Shopping",
            color: "bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white"
        },
        {
            icon: <BookOpenText className="w-6 h-6 text-white" />,
            text: "Workshops",
            color: "bg-gradient-to-br from-yellow-800 via-yellow-700 to-yellow-600 text-white"
        },
        {
            icon: <Baby className="w-6 h-6 text-white" />,
            text: "Toddler Zone",
            color: "bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 text-white"
        }
    ];

    const partners = [
        { name: "Kids World", logo: "/images/Partner-01.jpg", url: "#" },
        { name: "Convention Center", logo: "/images/Partner-02.jpg", url: "#" },
        { name: "Adventure Gear", logo: "/partner3.png", url: "#" },
        { name: "KidSafe", logo: "/partner4.png", url: "#" },
    ];
    const reviews = [
        {
            name: "Rahul Sharma",
            handle: "@happyParent",
            img: "https://randomuser.me/api/portraits/men/22.jpg",
            text: "My kids loved the rides! Staff was super friendly and the facilities were spotless.",
            rating: 5
        },
        {
            name: "Priya Patel",
            handle: "@funSeeker",
            img: "https://randomuser.me/api/portraits/women/33.jpg",
            text: "Kept both my toddler and teenager entertained all day. Worth every penny!",
            rating: 5
        },
        {
            name: "Ananya Gupta",
            handle: "@momOfTwo",
            img: "https://randomuser.me/api/portraits/women/55.jpg",
            text: "The safety measures gave me peace of mind while my kids had fun.",
            rating: 4
        },
        {
            name: "Manoj Verma",
            handle: "@weekendDad",
            img: "https://randomuser.me/api/portraits/men/45.jpg",
            text: "A perfect place for a family weekend. Great vibes and well-organized.",
            rating: 5
        },
        {
            name: "Simran Kaur",
            handle: "@simplySimran",
            img: "https://randomuser.me/api/portraits/women/24.jpg",
            text: "Loved the shows and the shopping section. My daughter had a blast!",
            rating: 4
        }
    ];


    return (
        <div className="min-h-screen bg-cover bg-center bg-black/10 bg-blend-overlay p-6 md:p-10 flex items-center justify-center flex-col bg-[url('/images/aboutbglg.png')]">
            <header className="text-center mb-10">
                <div className="inline-flex items-center justify-center mb-4">
                    <Sparkles className="text-pink-400 mr-2" />
                    <span className="text-sm font-medium text-pink-600">Fun for the whole family</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Kids Funland Fair</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Where magical moments and unforgettable memories are created for families of all ages
                </p>
            </header>

            {/* Tabs */}
            <Tabs defaultValue="vision" className="max-w-6xl mx-auto w-full space-y-6">
                <TabsList className="flex justify-center h-32 md:h-16 flex-wrap gap-2 mb-6 bg-gradient-to-r from-transparent via-white/30 to-transparent p-2 rounded-xl">
                    <TabsTrigger
                        value="vision"
                        className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white px-4 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-200"
                    >
                        Our Vision
                    </TabsTrigger>
                    <TabsTrigger
                        value="highlights"
                        className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white px-4 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-200"
                    >
                        Highlights
                    </TabsTrigger>
                    <TabsTrigger
                        value="team"
                        className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white px-4 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-200"
                    >
                        Team
                    </TabsTrigger>
                    <TabsTrigger
                        value="reviews"
                        className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white px-4 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-200"
                    >
                        Reviews
                    </TabsTrigger>
                    <TabsTrigger
                        value="partners"
                        className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white px-4 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-200"
                    >
                        Partners
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="vision">
                    <div className="bg-white/20 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                                <Star className="w-4 h-4 text-pink-500" />
                            </div>
                            Our Vision
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-h-40 md:max-h-none overflow-y-auto">
                            ...an event management company with an exclusive understanding of how an event is organised and executed; Be it a grand wedding, large scale exhibition or a corporate event. Turning your vision into reality, we will exceed all your expectations. With a wealth of experience behind us, we combine our passion and expertise to deliver a world class service to our clients. From intimate gatherings to private events, we aim to create a unique and memorable experience for every individual.
                            If you are thinking about hosting an event, Kids Funland Fair is here to offer you premium services that take your event to a whole new level.
                        </p>
                    </div>
                </TabsContent>

                <TabsContent value="highlights">
                    <div className="bg-white/20 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Park Highlights</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {highlights.map((item, idx) => (
                                <div key={idx} className={`${item.color} p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center`}>
                                    <div className="mb-2">{item.icon}</div>
                                    <p className="font-medium text-lg text-center">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="team">
                    <div className="p-6 rounded-2xl">
                        <Marquee pauseOnHover className="[--duration:30s] gap-6">
                            {teamMembers.map((member, idx) => (
                                <div
                                    key={idx}
                                    className=" rounded-xl overflow-hidden shadow-sm hover:shadow-md border w-64 mx-2"
                                >
                                    <div className="relative h-72 hover:text-white">
                                        {/* Gradient overlay and text */}
                                        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white/50 hover:to-purple-400"></div>

                                        {/* Image */}
                                        <Image src={member.img} alt={member.name} width={200} height={200} className="w-full h-full  object-cover" />

                                        {/* Text on image */}
                                        <div className="absolute bottom-4 left-0 right-0 z-20 text-center px-4">
                                            <h3 className="text-lg font-semibold uppercase">{member.name}</h3>
                                            <p className="text-sm font-semibold">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>

                </TabsContent>

                <TabsContent value="reviews">
                    <div className="bg-white/20 p-6 rounded-2xl border border-gray-200">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">What Families Say</h2>
                        <Marquee pauseOnHover className="[--duration:40s] gap-6">
                            {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, i) => {
                                const first = reviews[i * 2]; const second = reviews[i * 2 + 1];
                                return (
                                    <div key={i} className="flex gap-4">
                                        {[first, second].map(
                                            (review, idx) =>
                                                review && (
                                                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm w-80">
                                                        <div className="flex items-center gap-4 mb-4">
                                                            <Image src={review.img} alt={review.name} width={100} height={100} className="w-10 h-10 rounded-full" />
                                                            <div>
                                                                <h4 className="font-semibold text-gray-800">
                                                                    {review.name}
                                                                </h4>
                                                                <p className="text-xs text-gray-500">{review.handle}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex mb-3">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} className={`w-3 h-3 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                                                            ))}
                                                        </div>
                                                        <p className="text-gray-600 text-sm">{review.text}</p>
                                                    </div>
                                                )
                                        )}
                                    </div>
                                );
                            })}
                        </Marquee>
                    </div>
                </TabsContent>

                <TabsContent value="partners">
                    <div className="bg-white/20 p-6 rounded-2xl border border-gray-200">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Valued Partners</h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {partners.map((partner, index) => (
                                <Link
                                    key={index}
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center"
                                >
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md w-52 h-20 flex items-center justify-center border">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={400}
                                            height={400}
                                            className="h-auto w-full object-contain opacity-80 group-hover:opacity-100"
                                        />
                                    </div>
                                    <p className="text-center text-lg text-gray-900 mt-2 group-hover:text-indigo-700">
                                        {partner.name}
                                    </p>
                                </Link>
                            ))}
                        </div>
                        {/* <div className="mt-6 text-center">
                            <button className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-pink-400 to-indigo-400 text-white font-medium rounded-full hover:shadow-md text-sm">
                                Become a Partner <ChevronRight className="ml-2 w-3 h-3" />
                            </button>
                        </div> */}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default About;
