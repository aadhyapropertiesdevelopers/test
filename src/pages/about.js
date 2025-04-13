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
        { name: "Aarav Mehta", role: "Event Director", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Sneha Reddy", role: "Creative Head", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Vikram Joshi", role: "Operations Lead", img: "https://randomuser.me/api/portraits/men/75.jpg" },
        { name: "Meera Kapoor", role: "Safety Officer", img: "https://randomuser.me/api/portraits/women/63.jpg" },
        { name: "Rohan Desai", role: "Logistics Manager", img: "https://randomuser.me/api/portraits/men/12.jpg" },
        { name: "Divya Nair", role: "Kids Zone Manager", img: "https://randomuser.me/api/portraits/women/29.jpg" }
    ];
    const highlights = [
        {
            icon: <FerrisWheel className="w-6 h-6 text-white" />,
            text: "50+ Rides",
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
        { name: "ToyLand", logo: "/partner1.png", url: "#" },
        { name: "FunSnacks", logo: "/partner2.png", url: "#" },
        { name: "Adventure Gear", logo: "/partner3.png", url: "#" },
        { name: "KidSafe", logo: "/partner4.png", url: "#" },
        { name: "HappyRides", logo: "/partner5.png", url: "#" },
        { name: "SmartPlay", logo: "/partner6.png", url: "#" }
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
        <div className="min-h-screen bg-cover bg-center bg-black/10 bg-blend-overlay p-6 md:p-10 flex items-center justify-center flex-col bg-[url('/images/about.jpg')]">

            <header className="text-center mb-10">
                <div className="inline-flex items-center justify-center mb-4">
                    <Sparkles className="text-pink-400 mr-2" />
                    <span className="text-sm font-medium text-pink-600">Fun for the whole family</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">FunLand</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Where magical moments and unforgettable memories are created for families of all ages
                </p>
            </header>

            {/* Tabs */}
            <Tabs defaultValue="vision" className="max-w-6xl mx-auto w-full space-y-6">
                <TabsList className="flex justify-center flex-wrap gap-2 mb-6">
                    <TabsTrigger value="vision">Our Vision</TabsTrigger>
                    <TabsTrigger value="highlights">Highlights</TabsTrigger>
                    <TabsTrigger value="team">Team</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="partners">Partners</TabsTrigger>
                </TabsList>

                <TabsContent value="vision">
                    <div className="bg-white/70 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                                <Star className="w-4 h-4 text-pink-500" />
                            </div>
                            Our Vision
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            To be the premier family entertainment destination...
                        </p>
                    </div>
                </TabsContent>

                <TabsContent value="highlights">
                    <div className="bg-white/70 p-8 rounded-2xl shadow-sm border border-gray-100">
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
                    <div className="p-6 rounded-2xl border border-gray-200 bg-white/80">
                        <Marquee pauseOnHover className="[--duration:30s] gap-6">
                            {teamMembers.map((member, idx) => (
                                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border w-64 mx-2">
                                    <div className="h-48 bg-gradient-to-r from-pink-100 to-indigo-100 flex items-center justify-center">
                                        <Image src={member.img} alt={member.name} width={200} height={200} className="w-32 h-32 rounded-full border-4 border-white object-cover" />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                        <p className="text-indigo-500 mt-1 text-sm">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </TabsContent>

                <TabsContent value="reviews">
                    <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">What Families Say</h2>

                        <Marquee pauseOnHover className="[--duration:40s] gap-6">
                            {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, i) => {
                                const first = reviews[i * 2]; const second = reviews[i * 2 + 1];
                                return (
                                    <div key={i} className="flex flex-col sm:flex-row gap-6 w-fit flex-shrink-0">
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
                    <div className="bg-white/80 p-6 rounded-2xl border border-gray-200">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Valued Partners</h2>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {partners.map((partner, index) => (
                                <Link key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
                                    <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md w-28 h-16 flex items-center justify-center border">
                                        <Image src={partner.logo} alt={partner.name} width={200} height={200} className="h-10 object-contain opacity-80 group-hover:opacity-100" />
                                    </div>
                                    <p className="text-center text-xs text-gray-500 mt-2 group-hover:text-indigo-500">
                                        {partner.name}
                                    </p>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <button className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-pink-400 to-indigo-400 text-white font-medium rounded-full hover:shadow-md text-sm">
                                Become a Partner <ChevronRight className="ml-2 w-3 h-3" />
                            </button>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default About;
