import React from 'react'
import cc1 from '../../Images/Instruc1.png';
import cc2 from '../../Images/Instruc2.png';
import cc3 from '../../Images/Instruc3.png';
import cc4 from '../../Images/Instruc4.png';
const Instructors = () => {
    const instructorsData = [
        {
            id: 1,
            name: 'Jacob Jones',
            title: 'Gym Trainer',
            image: cc1
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            title: 'Yoga Instructor',
            image: cc2
        },
        {
            id: 3,
            name: 'Michael Smith',
            title: 'Fitness Coach',
            image: cc3
        },
        {
            id: 4,
            name: 'Emily Davis',
            title: 'Pilates Trainer',
            image: cc4
        }
    ];
    return (
        <div className="bg-gray-800 py-10">
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-10">Instructors</h1>
            </div>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {instructorsData.map((instructor) => (
                        <div key={instructor.id} className="bg-transparent text-center">
                            <img
                                className="w-full h-auto rounded-lg shadow-lg"
                                src={instructor.image}
                                alt={instructor.name}
                            />
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold text-white">{instructor.name}</h2>
                                <p className="text-gray-400">{instructor.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;