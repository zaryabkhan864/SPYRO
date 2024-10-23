import React from 'react';
import c1Image from '../../Images/c1.png';
import c2Image from '../../Images/c2.png';
import c3Image from '../../Images/c3.png';
import c4Image from '../../Images/c4.png';

const Moves = () => {
    return (
        <div className='bg-[#1E1E1E] py-10'>
            <div className="container mx-auto">
                <div className="flex justify-center text-center mb-10">
                    <h1 className="font-Outfit font-semibold text-48px text-white">Find what moves you</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 bg-transparent ">
                    {/* GYM Section */}
                    <div className="md:col-span-2 flex flex-col justify-between bg-transparent rounded-tl-[60px] h-full">
                        <div className="bg-transparent text-white rounded-lg overflow-hidden h-full rounded-tl-[60px] flex flex-col">
                            <div className="rounded-tl-[60px] relative h-full">
                                <img
                                    src={c1Image}
                                    alt="Gym"
                                    className="w-full h-full object-cover border-t-2 border-l-2 border-r-2 border-transparent"
                                    style={{
                                        borderImage: 'linear-gradient(to right, #FF4300, #FF6400) 1',
                                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                                    }}
                                />
                            </div>

                            <div className="pt-6 flex flex-grow space-x-10">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3">GYM</h2>
                                </div>
                                <div>
                                    <p className="font-Outfit font-light text-14px ">
                                        Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zumba Section */}
                    <div className="h-full flex flex-col">
                        <div className="relative rounded-tl-[60px] overflow-hidden h-full">
                            <img src={c2Image} alt="Zumba" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl">
                                Zumba
                            </div>
                        </div>
                    </div>

                    {/* Yoga Section */}
                    <div className="h-full flex flex-col">
                        <div className="relative rounded-tl-[60px] overflow-hidden h-full">
                            <img src={c3Image} alt="Yoga" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl">
                                Yoga
                            </div>
                        </div>
                    </div>

                    {/* Martial Arts Section */}
                    <div className="h-full flex flex-col">
                        <div className="relative rounded-tl-[60px] overflow-hidden h-full">
                            <img src={c4Image} alt="Martial Arts" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl">
                                Martial Arts
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Moves;
