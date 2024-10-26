import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';

const SNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#1E1E1E]' : 'bg-transparent'}`}
        >
            <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
                <a
                    href="#banner"
                    className="font-extrabold text-2xl text-transparent bg-gradient-to-r from-orangeL to-orangeR bg-clip-text no-underline"
                    id="Nav-Icon"
                >
                    SPYRO
                </a>

                <div className="hidden lg:flex justify-center items-center space-x-6 font-Outfit text-lg font-medium">
                    <a href="#classess" className="text-white no-underline">Classes</a>
                    <a href="#instructors" className="text-white no-underline">Team</a>
                    <a href="#lifestyle" className="text-white no-underline">About Us</a>
                    <a href="#gallery" className="text-white no-underline">Gallery</a>
                </div>

                <div className="hidden lg:flex items-center">
                    <OneSideCurveButton text="Contact Us" />
                </div>

                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
                        {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden flex flex-col items-center bg-[#1E1E1E] text-white space-y-4 py-4">
                    <a href="#classess" className="text-lg no-underline">Classes</a>
                    <a href="#instructors" className="text-lg no-underline">Team</a>
                    <a href="#lifestyle" className="text-lg no-underline">About Us</a>
                    <a href="#gallery" className="text-lg no-underline">Gallery</a>
                    <OneSideCurveButton />
                </div>
            )}
        </nav>
    );
};

export default SNavbar;
