import React from 'react';
import Wave from 'react-wavify';

const Footer = () => {
    return (
        <div
            name="Contact"
            className="relative w-full min-h-screen flex flex-col md:mt-80" // Adjust the mt value for mobile and larger screens
        >
            <div className="flex-grow">{/* Your content here */}</div>
            <Wave
                fill="rgb(249 250 251)"
                paused={false}
                options={{
                    height: 10,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3,
                }}
                className="w-full"
            />
            <div className="bg-gray-50 py-6 md:py-8 text-center text-white">
                {' '}
                {/* Adjust py value for mobile and larger screens */}
                <div className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-black">
                    Drop Us A Line
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4 cursor-pointer items-center justify-center text-black">
                    <div id="About">About</div>
                    <div>Services</div>
                    <div>Projects</div>
                    <div>Blog</div>
                </div>
                <div className="text-xs md:text-sm text-black">
                    Copyright © 2023. All rights reserved.
                </div>
                <div className="text-xs md:text-sm text-black underline underline-offset-1 py-1">
                    Created by Mohammad Anwar, Mark Estiller, Andy Liu, and
                    Abrar Murad
                </div>
            </div>
        </div>
    );
};

export default Footer;
