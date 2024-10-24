import React from 'react';
import CF1 from '../../Images/CF1.png';
import classessBG from '../../Images/classessBG.png';
const Feedback = () => {
    const reviews = [
        {
            review: "Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates remain.",
            rating: 3,
            name: "Courtney Henry",
            profile_picture: CF1 
        },
        {
            review: "This is a great historic site to visit. I rented a little cart and the driver was a really good friend.",
            rating: 4,
            name: "Brooklyn Simmons",
            profile_picture: CF1 
        },
        {
            review: "I had been to Al-Balad several times. It is one of my favorite places in Jeddah. It is historic.",
            rating: 4,
            name: "Jane Cooper",
            profile_picture: CF1 
        }
    ];
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center pb-20"
            style={{ backgroundImage: `url(${classessBG})` }} // Set background image
        >
            <div className="mx-auto">
                <div className="text-center mb-8 pt-20 pb-10">
                    <h1 className="font-Outfit font-semibold text-40px text-white">Client’s Feedback</h1>
                </div>
                <div className="flex flex-wrap justify-center px-28">
                    {reviews.map((item, index) => (
                        <div key={index} className="w-full sm:w-6/12 md:w-4/12 lg:w-4/12 px-4 mb-8">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-b-8 border-orange-700 h-full flex flex-col justify-between">
                                {/* Review Text */}
                                <div className="mb-4 font-Outfit font-regular text-24px text-white">
                                    {item.review}
                                </div>

                                {/* Rating and Profile */}
                                <div>
                                    <div className="mb-3 text-yellow-500">
                                        {Array(5).fill(0).map((_, i) => (
                                            <span
                                                key={i}
                                                className={`fa fa-star ${i < item.rating ? "checked" : ""}`}
                                            ></span>
                                        ))}
                                    </div>
                                    <div className="flex items-center">
                                        <img src={item.profile_picture} alt="Profile_Picture" className="rounded-full w-12 h-12" />
                                        <p className="ml-3 mb-0 text-white font-Outfit font-regular text-24px">{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
 
            </div>
        </div>
    );
}

export default Feedback;
