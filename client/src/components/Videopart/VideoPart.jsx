import React from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPart = () => {
    return (
        <div className="mx-auto py-12 bg-[#1E1E1E]">
            <div className="flex justify-center">
                <div className="w-full ">
                    <ReactPlayer
                        className='mx-auto'
                        url='https://youtu.be/4-zjQvTDnbw?si=tBFGf1HW4b5mcdS6'
                       
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoPart;
