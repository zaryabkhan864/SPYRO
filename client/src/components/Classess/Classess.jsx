import React from 'react';
import cc1 from '../../Images/cc3.png';
import cc2 from '../../Images/cc2.png';
import cc3 from '../../Images/cc1.png';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import classessBG from '../../Images/classessBG.png';
import OneSideCurveButtonWithOutline from '../Buttons/OneSideCurveButtonWithOutline';

const Classess = () => {
    const cardData = [
        {
            category: "Yoga",
            title: "Strength & Sweat",
            students: 29,
            duration: "2H",
            instructor: "Esther Howard",
            classes: 30,
            difficulty: "Beginner",
            image: cc1
        },
        {
            category: "Fitness",
            title: "Total Body Burnout",
            students: 34,
            duration: "4H",
            instructor: "Wade Warren",
            classes: 45,
            difficulty: "Medium",
            image: cc2
        },
        {
            category: "Yoga",
            title: "Bootcamp Challenge",
            students: 60,
            duration: "3H",
            instructor: "Robert Fox",
            classes: 52,
            difficulty: "Hard",
            image: cc3
        }
    ];
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center pb-20"
            style={{ backgroundImage: `url(${classessBG})` }} // Set background image
        >
            <div className="flex flex-col items-center">

                <div className="text-center">
                    <h1 className="text-white font-Outfit font-semibold text-48px  py-20">Classes</h1>
                </div>
                <div className="flex justify-center flex-wrap gap-4 text-white">
                    {cardData.map((card, index) => (
                        <div key={index} className="bg-transparent w-72">
                            <div className="relative flex justify-center text-center mb-5">
                                <div className="relative">
                                    <div className="absolute inset-x-0 -left-2 -right-2 -bottom-2 h-1/2 bg-orange-500 rounded rounded-tr-[50px]" style={{ clipPath: "polygon(0 33%, 100% 0, 100% 100%, 0 100%)" }}></div>
                                    <img className="relative z-10 w-full h-auto" src={card.image} alt={card.title} />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between font-Outfit font-medium text-16px">
                                    <span>{card.category}</span>
                                    <span>{card.students} Students</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-Outfit font-semibold text-24px">{card.title}</span>
                                    <span className="font-Outfit font-medium text-16px">{card.duration}</span>
                                </div>
                                <div className="pt-2 font-Outfit font-medium text-16px">
                                    <p><span>Instructor:</span><span> {card.instructor}</span></p>
                                    <ul className="list-disc pl-5 text-white">
                                        <li>
                                            <div className="flex justify-between w-full">
                                                <span>No. of Classes:</span><span>{card.classes}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex justify-between w-full">
                                                <span>Difficulty:</span><span>{card.difficulty}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <OneSideCurveButton />
                                    <OneSideCurveButtonWithOutline />
                                </div>
                            </div>
                        </div>
                    ))}



                    {/* 
                    <div className="bg-transparent w-72">
                        <div className="relative flex justify-center text-center mb-5">
                            <div className="relative">
                                <div className="absolute inset-x-0 -left-2 -right-2 -bottom-2 h-1/2 bg-orange-500 rounded rounded-tr-[50px]" style={{ clipPath: "polygon(0 33%, 100% 0, 100% 100%, 0 100%)" }}></div>
                                <img className="relative z-10 w-full h-auto" src={cc2} alt="life style" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-Outfit font-medium text-16px">
                                <span>Yoga</span>
                                <span>29 Students</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-Outfit font-semibold text-24px">Strength & Sweat</span>
                                <span className="font-Outfit font-medium text-16px">2H</span>
                            </div>
                            <div className="pt-2 font-Outfit font-medium text-16px">
                                <p><span>Instructor:</span><span> Esther Howard</span></p>
                                <ul className="list-disc pl-5 text-white">
                                    <li>
                                        <div className="flex justify-between w-full">
                                            <span>No. of Classes:</span><span>30</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex justify-between w-full">
                                            <span>Difficulty:</span><span>Beginner</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-between mt-4">
                                <OneSideCurveButton />
                                <OneSideCurveButtonWithOutline />
                            </div>
                        </div>
                    </div>
                    <div className="bg-transparent w-72">
                        <div className="relative flex justify-center text-center mb-5">
                            <div className="relative">
                                <div className="absolute inset-x-0 -left-2 -right-2 -bottom-2 h-1/2 bg-orange-500 rounded rounded-tr-[50px]" style={{ clipPath: "polygon(0 33%, 100% 0, 100% 100%, 0 100%)" }}></div>
                                <img className="relative z-10 w-full h-auto" src={cc3} alt="life style" />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between font-Outfit font-medium text-16px">
                                <span>Yoga</span>
                                <span>29 Students</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-Outfit font-semibold text-24px">Strength & Sweat</span>
                                <span className="font-Outfit font-medium text-16px">2H</span>
                            </div>
                            <div className="pt-2 font-Outfit font-medium text-16px">
                                <p><span>Instructor:</span><span> Esther Howard</span></p>
                                <ul className="list-disc pl-5 text-white">
                                    <li>
                                        <div className="flex justify-between w-full">
                                            <span>No. of Classes:</span><span>30</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex justify-between w-full">
                                            <span>Difficulty:</span><span>Beginner</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-between mt-4">
                                <OneSideCurveButton />
                                <OneSideCurveButtonWithOutline />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default Classess;
