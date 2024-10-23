import React from 'react';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';

const SNavbar = () => {
    return (
        <nav className="bg-transparent fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4">
                <a href="/" className=" font-extrabold text-32px 
                text-transparent bg-gradient-to-r from-orangeL to-orangeR 
                bg-clip-text no-underline" id="Nav-Icon">
                    SPYRO
                </a>




                <button className="lg:hidden text-white focus:outline-none">
                    <span className="material-icons">menu</span>
                </button>
                <div className="hidden lg:flex justify-center items-center space-x-6 font-Outfit text-20px font-medium">
                    <a href="#action1" className="text-white no-underline ">Classes</a>
                    <a href="#action2" className="text-white no-underline">Team</a>
                    <a href="#action1" className="text-white no-underline">About Us</a>
                    <a href="#action2" className="text-white no-underline">Gallery</a>
                </div>
                <div className="hidden lg:flex items-center">
                    <OneSideCurveButton />
                </div>
            </div>
        </nav>
    );
};

export default SNavbar;
