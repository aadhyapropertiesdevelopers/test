import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Music, PenTool, Wand2, Theater, Users, Gamepad, ShoppingBag, Award } from 'lucide-react';
import AnimationButton from '../../components/Animation/AnimationButton';

// Event data
const eventsDay1 = [
    {
        title: 'Drawing Competition',
        icon: PenTool,
        time: '10:00 AM – 1:00 PM',
        ageGroups: ['4–6 yrs', '7–10 yrs', '11–14 yrs'],
        color: 'bg-yellow-200'
    },
    {
        title: 'Singing Competition',
        icon: Music,
        time: '11:00 AM – 1:00 PM',
        ageGroups: ['All age groups'],
        color: 'bg-blue-200'
    },
    {
        title: 'Magic Show',
        icon: Wand2,
        time: '2:00 PM – 3:00 PM',
        color: 'bg-purple-200'
    },
    {
        title: 'Puppet Show',
        icon: Theater,
        time: '3:00 PM – 4:00 PM',
        color: 'bg-green-200'
    },
    {
        title: 'Dance Competition',
        icon: Users,
        time: '4:00 PM – 8:00 PM',
        ageGroups: ['5–7 yrs', '8–11 yrs', '12–14 yrs'],
        color: 'bg-pink-200'
    }
];

const eventsDay2 = [
    {
        title: 'Puppet Show',
        icon: Theater,
        time: '10:30 AM',
        color: 'bg-green-200'
    },
    {
        title: 'Robotics',
        icon: Gamepad,
        time: '11:30 AM',
        color: 'bg-blue-200'
    },
    {
        title: 'Magic Show',
        icon: Wand2,
        time: '12:30 PM',
        color: 'bg-purple-200'
    },
    {
        title: 'SLZ Programs',
        icon: Users,
        time: '1:30 PM',
        color: 'bg-yellow-200'
    },
    {
        title: 'Games',
        icon: Gamepad,
        time: '2:30 PM',
        color: 'bg-orange-200'
    },
    {
        title: 'Fashion Show',
        icon: ShoppingBag,
        time: '4:00 PM – 8:00 PM',
        color: 'bg-pink-200'
    },
    {
        title: 'Prize Distribution',
        icon: Award,
        time: 'After Fashion Show',
        color: 'bg-indigo-200'
    }
];

const KidsFunFestivalSchedule = () => {
    const [activeDay, setActiveDay] = useState(1);

    // Generate clouds for background
    const clouds = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 70}%`,
        left: `${Math.random() * 90}%`,
        size: Math.random() * 50 + 50,
        delay: Math.random() * 20,
    }));

    // Generate balloons for background
    const balloons = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 90}%`,
        color: ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400'][Math.floor(Math.random() * 6)],
        delay: Math.random() * 5,
    }));

    // Animals for tabs
    const animals = [
        { id: 1, name: "Day 1", emoji: "🦁" },
        { id: 2, name: "Day 2", emoji: "🐯" }
    ];

    return (
        <div className="relative h-screen xs:py-16 md:py-2 justify-center overflow-hidden bg-gradient-to-b from-green-200 to-green-100 p-4 font-sans flex flex-col">
            {/* Clouds in background */}
            {clouds.map((cloud) => (
                <div
                    key={`cloud-${cloud.id}`}
                    className="absolute bg-white rounded-full opacity-80"
                    style={{
                        width: `${cloud.size}px`,
                        height: `${cloud.size * 0.6}px`,
                        top: cloud.top,
                        left: cloud.left,
                        filter: 'blur(8px)',
                        animation: `float ${10 + cloud.delay}s ease-in-out infinite`,
                    }}
                />
            ))}

            {/* Floating balloons */}
            {balloons.map((balloon) => (
                <div
                    key={`balloon-${balloon.id}`}
                    className={`absolute bottom-0 w-8 h-10 ${balloon.color} rounded-full opacity-70`}
                    style={{
                        left: balloon.left,
                        animation: `float-up ${15 + balloon.delay}s linear infinite`,
                    }}
                >
                    <div className="h-4 w-1 bg-gray-400 mx-auto -mb-3"></div>
                </div>
            ))}

            {/* Main content container */}
            <div className=" w-full mx-auto relative z-10 flex flex-col  px-2">

                <div className='absolute right-0'>
                    <div className="w-36 h-36 bg-red-500 rounded-full shadow-xl border-2 border-dashed text-white border-white flex flex-col justify-center items-center text-center p-4">
                        <h3 className="font-bold">Entry Pass</h3>
                        <p className='font-bold text-4xl'>299</p>
                        <h3 className='font-bold'>Kids</h3>
                    </div>
                </div>

                <div className="text-center mb-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-1">
                        <span className="text-yellow-300">★</span>
                        <span className="text-pink-600">Kids Funland Fair</span>
                        <span className="text-yellow-300">★</span>
                    </h1>
                    <p className="text-lg text-black font-semibold drop-shadow">May 31st - June 1st</p>
                </div>

                {/* Day selector */}
                <div className="flex justify-center mb-2">
                    <div className="bg-white p-1 rounded-full shadow-lg flex gap-2">
                        {animals.map((animal) => (
                            <button
                                key={animal.id}
                                onClick={() => setActiveDay(animal.id)}
                                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-200 ${activeDay === animal.id
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-md transform scale-105'
                                    : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                <span className="text-xl">{animal.emoji}</span>
                                <span className="font-medium">{animal.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events List */}
                <div className="bg-white bg-opacity-40 rounded-3xl p-4 shadow-xl border-2 border-dashed border-green-800 overflow-hidden flex-1 w-full">
                    <div className="flex items-center justify-between mb-4">
                        <ChevronLeft className="h-6 w-6 text-purple-600 cursor-pointer"
                            onClick={() => setActiveDay(activeDay === 1 ? 2 : 1)} />

                        <h2 className="text-2xl gap-4 flex items-center font-extrabold text-center">
                            <Calendar className="inline mr-1 text-blue-600 h-5 w-5" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                                {activeDay === 1 ? 'May 31st – Day 1' : 'June 1st – Day 2'}
                            </span>
                        </h2>

                        <ChevronRight className="h-6 w-6 text-purple-600 cursor-pointer"
                            onClick={() => setActiveDay(activeDay === 1 ? 2 : 1)} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-1 max-h-full">
                        {(activeDay === 1 ? eventsDay1 : eventsDay2).map((event, index) => {
                            const Icon = event.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${event.color} p-2 rounded-xl shadow-md transition-transform hover:shadow-lg border-2 border-white`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white h-14 w-14 flex justify-center items-center p-2 rounded-full shadow-md">
                                            <Icon className="h-8 w-8 text-purple-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-purple-900 mb-2">{event.title}</h3>
                                            <p className="text-lg text-purple-800 font-medium mb-2">{event.time}</p>
                                            {event.ageGroups && (
                                                <div className="flex flex-wrap gap-2 mt-0">
                                                    {event.ageGroups.map((age, i) => (
                                                        <span key={i} className="bg-white bg-opacity-60 text-md py-1 px-3 rounded-full text-purple-800">
                                                            {age}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='mt-2'>
                        <AnimationButton
                            buttonText="  Application Form"
                            className="bg-gradient-to-r from-pink-400 via-yellow-300 to-teal-400 text-white rounded-full shadow-lg hover:scale-105 transition"
                        />
                    </div>
                </div>

                {/* Mascot */}
                <div className="absolute bottom-2 right-2">
                    <div className="relative">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <div className="text-4xl">🐼</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS animations */}
            <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100vh); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
        </div>
    );
};

export default KidsFunFestivalSchedule;