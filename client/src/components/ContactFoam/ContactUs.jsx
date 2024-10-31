import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classessBG from '../../Images/classessBG.png';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';
const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Here you can send data to the backend or display a success message.
    };

    return (
        <div
            className="bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen p-20 text-white bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 1), rgba(30, 30, 30, 0) 30%), 
                                  linear-gradient(to bottom, rgba(30, 30, 30, 0) 60%, rgba(30, 30, 30, 1)), 
                                  url(${classessBG})`
            }}
        >
            <div className="max-w-lg mx-auto p-6 bg-[#1E1E1E] shadow-lg rounded-lg my-32">
                <h2 className="font-Outfit font-semibold text-32px text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div className='font-Outfit font-semibold text-16px text-white'>
                        <label className="block ">Name</label>
                        <input
                            {...register('name', { required: 'Name is required' })}
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <div className='font-Outfit font-semibold text-16px text-white'>
                        <label className="block ">Email</label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className='font-Outfit font-semibold text-16px text-white'>
                        <label className="block ">Message</label>
                        <textarea
                            {...register('message', {
                                required: 'Message is required',
                                minLength: { value: 10, message: 'Message is too short' },
                            })}
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="4"
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm">{errors.message.message}</p>
                        )}
                    </div>
                    <div className='text-right'>
                        <Link to=""><OneSideCurveButton text="Submit" p_x="15vw" p_y="10px" className="px-20 w-52" /></Link>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default ContactUs;
