import React from 'react';
import lifeStyleImage from '../../Images/LifeStyle.png';

const LifeStyle = () => {
    return (
        <div className="bg-[#1E1E1E] text-white py-5 relative">
            {/* First blurred line */}
            <div className="absolute right-0 bottom-1/4 w-96 h-14 bg-gradient-to-t from-orangeL to-orangeR   opacity-30"></div>
            {/* Second blurred line */}
            <div className="absolute right-0 bottom-14 w-1/2 h-14 bg-gradient-to-t from-orangeL to-orangeR  opacity-30"></div>

            <div className="flex justify-center text-center">
                <h1>Find what moves you</h1>
            </div>

            <div className="px-72 my-10  text-center">
                <span className=" font-Outfit font-regular text-20px">
                    Wake up with a sunrise meditation, sweat it out with lunchtime HIIT, or unwind with an evening flow. You’ll find movement for every mood with classes sorted by time, style, and skill level.
                </span>
            </div>

            <div className="relative flex justify-center text-center mb-5">
                <div className="relative w-1/3">
                    <div className="absolute inset-x-0  -left-2 -right-2 -bottom-2 h-1/2 bg-orange-500 rounded rounded-tr-[50px]" style={{ clipPath: "polygon(0 33%, 100% 0, 100% 100%, 0 100%)" }}></div>
                    <img className="relative z-10 w-full h-auto " src={lifeStyleImage} alt="life style" />
                </div>
            </div>

        </div>
    );
};

export default LifeStyle;
