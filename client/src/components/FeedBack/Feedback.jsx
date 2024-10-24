import React from 'react';
import CF1 from '../../Images/CF1.png';

const Feedback = () => {
    return (
        <div className="bg-gray-900 text-white py-12" id="feedback">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold">Client Feedback</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-6/12 md:w-4/12 lg:w-4/12 px-4 mb-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="mb-4 text-sm">
                                Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates remain.
                            </div>
                            <div className="mb-3 text-yellow-500">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <div className="flex items-center">
                                <img src={CF1} alt="Profile_Picture" className="rounded-full w-12 h-12" />
                                <p className="ml-3 mb-0">Courtney Henry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
