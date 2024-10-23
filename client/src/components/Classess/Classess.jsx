import React from 'react';
import cc1 from '../../Images/cc3.png';
import cc2 from '../../Images/cc2.png';
import cc3 from '../../Images/cc1.png';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
import classessBG from '../../Images/classessBG.png';

const Classess = () => {
    return (
        <div
            id="classess"
            className="w-full min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${classessBG})` }} // Set background image
        >
            <div className="flex flex-col items-center">

                <div className="text-center">
                    <h1 className="text-white text-3xl">Classes</h1>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="bg-transparent w-72">
                        <img className="w-full" src={cc1} alt="Class 1" />
                        <div className="pt-4">
                            <div className="flex justify-between text-gray-900 font-bold">
                                <span>Yoga</span>
                                <span>29 Students</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Strength & Sweat</span>
                                <span>2H</span>
                            </div>
                            <div className="pt-2 text-gray-600">
                                <p><span>Instructor:</span><span> Esther Howard</span></p>
                                <ul className="list-none p-0">
                                    <li className="flex justify-between"><span>No. of Classes:</span><span>30</span></li>
                                    <li className="flex justify-between"><span>Difficulty:</span><span>Beginner</span></li>
                                </ul>
                            </div>
                            <div className="flex justify-between mt-4 text-gray-500">
                                <OneSideCurveButton />
                                <button className="bg-orange-500 text-white px-4 py-2 rounded transform skew-x-6">Start a free trial</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-transparent w-72">
                        <img className="w-full" src={cc2} alt="Class 2" />
                        <div className="pt-4">
                            <div className="flex justify-between text-gray-900 font-bold">
                                <span>Yoga</span>
                                <span>29 Students</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Strength & Sweat</span>
                                <span>2H</span>
                            </div>
                            <div className="pt-2 text-gray-600">
                                <p><span>Instructor:</span><span> Esther Howard</span></p>
                                <ul className="list-none p-0">
                                    <li className="flex justify-between"><span>No. of Classes:</span><span>30</span></li>
                                    <li className="flex justify-between"><span>Difficulty:</span><span>Beginner</span></li>
                                </ul>
                            </div>
                            <div className="flex justify-between mt-4 text-gray-500">
                                <OneSideCurveButton />
                            </div>
                        </div>
                    </div>

                    <div className="bg-transparent w-72">
                        <img className="w-full" src={cc3} alt="Class 3" />
                        <div className="pt-4">
                            <div className="flex justify-between text-gray-900 font-bold">
                                <span>Yoga</span>
                                <span>29 Students</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Strength & Sweat</span>
                                <span>2H</span>
                            </div>
                            <div className="pt-2 text-gray-600">
                                <p><span>Instructor:</span><span> Esther Howard</span></p>
                                <ul className="list-none p-0">
                                    <li className="flex justify-between"><span>No. of Classes:</span><span>30</span></li>
                                    <li className="flex justify-between"><span>Difficulty:</span><span>Beginner</span></li>
                                </ul>
                            </div>
                            <div className="flex justify-between mt-4 text-gray-500">
                                <OneSideCurveButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Classess;
