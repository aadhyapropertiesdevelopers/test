import { Marquee } from '@/components/magicui/marquee';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icon } from '@iconify/react';
import {
    Baby,
    BookOpenText,
    Clapperboard,
    FerrisWheel,
    ShoppingBag,
    Sparkles,
    Star,
    Utensils
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    const teamMembers = [
        { name: "T Aruna Kumari", role: "CEO", img: "/images/01.png" },
        { name: "Shivani Raj", role: "COO", img: "/images/02.png" },
        { name: "Tanishka Raj", role: "Executive Director", img: "/images/03.png" },
        { name: "Vivek Kumar", role: "Director", img: "/images/04.png" },
        { name: " Uday Kumar Y", role: "Head Marcom", img: "/images/05.png" },
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
        // { name: "Kids World", logo: "/images/Partner-01.jpg", url: "#" },
        { name: "Leap Robots", logo: "/images/Partner-02.png", url: "https://leaprobots.com/" },
        { name: "BirthRight", logo: "/images/Partner-03.jpg", url: "https://www.rainbowhospitals.in/" },
        // { name: "KidSafe", logo: "/partner4.png", url: "#" },
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
        <div className="min-h-screen bg-cover bg-center bg-black/10 bg-blend-overlay py-24 px-6 md:py-10 flex items-center justify-center flex-col bg-[url('/images/aboutbglg.png')]">
            <header className="text-center mb-10">
                <div className="inline-flex items-center justify-center mb-4">
                    <Sparkles className="text-pink-400 mr-2" />
                    <span className="text-sm font-medium text-pink-600">Fun for the whole family</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 uppercase">Kids Funland Fair</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Where magical moments and unforgettable memories are created for families of all ages
                </p>
            </header>

            {/* Tabs */}
            <Tabs defaultValue="highlights" className="max-w-6xl mx-auto w-full space-y-6">
                <TabsList className="flex justify-center h-32 md:h-16 flex-wrap gap-2 mb-6 bg-gradient-to-r from-transparent via-white/30 to-transparent p-2 rounded-xl">
                    <TabsTrigger
                        value="highlights"
                        className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white px-4 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-200"
                    >
                        Highlights
                    </TabsTrigger>
                    <TabsTrigger
                        value="about"
                        className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white px-4 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-200"
                    >
                        About us
                    </TabsTrigger>
                    <TabsTrigger
                        value="vision"
                        className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white px-4 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-200"
                    >
                        Our Vision
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

                <TabsContent value="about">
                    <div className="bg-white/20 p-8 max-h-96 overflow-auto rounded-2xl shadow-sm border border-gray-100 space-y-10">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full">
                                    <Icon icon="mdi:information-outline" className="w-6 h-6 text-white" />
                                </div>
                                About Global Grandeur Events
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                <span className="font-bold">Global Grandeur Events</span> brings you Vijayawada’s most spectacular family festival – the <span className="font-semibold text-purple-800">Kids Funland Fair</span>! With a passion for community, creativity, and celebration, we craft magical experiences for children and families through games, music, entertainment, and delicious food.
                            </p>
                        </div>

                        {/* Event Overview with Icons */}
                        <div className="space-y-4 text-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-full">
                                    <Icon icon="emojione:star" className="text-white w-5 h-5" />
                                </div>
                                <p className="font-semibold text-lg">Kids Funland Fair – Where Magic Meets Memories!</p>
                            </div>
                            <p className="text-base">
                                Step into Vijayawada’s most awaited family extravaganza – the Kids Funland Fair! Organized by Global Grandeur Events, this two-day carnival on <strong>May 31 & June 1, 2025</strong>, promises non-stop joy, laughter, and unforgettable experiences for kids and families alike.
                            </p>
                            <p className="text-base">
                                From thrilling games and colorful entertainment zones to live music, delicious food stalls, pet shows, and ramp walks – the fair is designed to be a vibrant mix of fun, learning, and celebration.
                            </p>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    <div className="bg-gradient-to-r from-pink-500 to-purple-700 p-2 rounded-full">
                                        <Icon icon="fluent:highlight-accent-24-filled" className="text-white w-5 h-5" />
                                    </div>
                                    Highlights:
                                </h3>
                                <ul className="list-none space-y-1 pl-2">
                                    <li className="flex items-start gap-2">
                                        <div className="bg-gradient-to-r from-purple-600 to-pink-400 p-2 rounded-full">
                                            <Icon icon="mdi:tent" className="text-white w-5 h-5" />
                                        </div>
                                        Carnival Fun Zone: With puppet shows, magic tricks, tattoos, balloon twisting & more!
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 p-2 rounded-full">
                                            <Icon icon="mdi:paw" className="text-white w-5 h-5" />
                                        </div>
                                        Pet Show & Ramp Walk: A stage for adorable pets and stylish kids.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-gradient-to-r from-green-600 to-teal-500 p-2 rounded-full">
                                            <Icon icon="mdi:shopping-outline" className="text-white w-5 h-5" />
                                        </div>
                                        Shopping Stalls: Explore an array of toys, fashion, crafts, and more.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-2 rounded-full">
                                            <Icon icon="mdi:music-note" className="text-white w-5 h-5" />
                                        </div>
                                        Live Music & Dance: Groove to electrifying performances and family sing-alongs.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-full">
                                            <Icon icon="mdi:food" className="text-white w-5 h-5" />
                                        </div>
                                        Food Fiesta: Savor lip-smacking treats from top vendors.
                                    </li>
                                </ul>
                            </div>

                            <p className="text-base mt-4">
                                {`  Whether you're a parent looking for the perfect weekend escape or a brand wanting to connect with thousands of families, <strong>Kids Funland Fair</strong> is “the fair of a lifetime” you won't want to miss.`}
                            </p>

                            <div className="space-y-1 text-sm md:text-base font-medium mt-4">
                                <p className="flex items-center gap-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-2 rounded-full">
                                        <Icon icon="mdi:map-marker" className="text-white w-5 h-5" />
                                    </div>
                                    <Link href="https://www.google.com/maps/search/?q=A%C2%2FC+Convention+Centre%2C+Benz+Circle%2C+Vijayawada" passHref>
                                        <span className="hover:underline cursor-pointer">Venue: A/C Convention Centre, Benz Circle, Vijayawada</span>
                                    </Link>
                                </p>
                                <p className="flex items-center gap-2">
                                    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 p-2 rounded-full">
                                        <Icon icon="mdi:calendar-range" className="text-white w-5 h-5" />
                                    </div>
                                    <span>Dates: May 31 & June 1, 2025</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <div className="bg-gradient-to-r from-green-600 to-lime-500 p-2 rounded-full">
                                        <Icon icon="mdi:phone" className="text-white w-5 h-5" />
                                    </div>
                                    <Link href="tel:+919701352244">
                                        <span className="hover:underline cursor-pointer">Contact: 97013 52244</span>
                                    </Link> /
                                    <Link href="tel:+919032952244">
                                        <span className="hover:underline cursor-pointer"> 90329 52244</span>
                                    </Link>
                                </p>
                                <p className="flex items-center gap-2">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
                                        <Icon icon="mdi:web" className="text-white w-5 h-5" />
                                    </div>
                                    <Link href="mailto:info@globalgrandeurevents.com">
                                        <span className="hover:underline cursor-pointer">Email: info@globalgrandeurevents.com</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="vision">
                    <div className="bg-white/20 p-8 rounded-2xl shadow-sm border border-gray-100 space-y-10">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                                    <Star className="w-4 h-4 text-pink-500" />
                                </div>
                                Our Vision
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-h-40 md:max-h-none overflow-y-auto">
                                ...an event management company with an exclusive understanding of how an event is organised and executed;
                                Be it a grand wedding, large scale exhibition or a corporate event. Turning your vision into reality, we will
                                exceed all your expectations. With a wealth of experience behind us, we combine our passion and expertise to deliver
                                a world class service to our clients. From intimate gatherings to private events, we aim to create a unique and
                                memorable experience for every individual. If you are thinking about hosting an event, Global Grandeur Events is here to
                                offer you premium services that take your event to a whole new level.
                            </p>
                        </div>
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
                                    <div className="relative h-72 text-white hover:text-gray-400">
                                        {/* Gradient overlay and text */}
                                        {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white/50 hover:to-purple-400"></div> */}

                                        {/* Image */}
                                        <Image src={member.img} alt={member.name} width={200} height={200} className="w-full h-full  object-cover" />

                                        {/* Text on image */}
                                        <div className="absolute bottom-0 left-0 right-0 z-20 text-center px-4 bg-black/60 p-2 m-2 rounded-lg">
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {partners.map((partner, index) => (
                                <Link key={index} href={partner.url} passHref target='_blank'>
                                    <div className="group flex flex-col items-center">
                                        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md w-full h-32 flex items-center justify-center border">
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
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </TabsContent>

            </Tabs>
        </div>
    );
};

export default About;
