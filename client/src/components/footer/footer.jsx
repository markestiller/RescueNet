import React from 'react';
import Wave from 'react-wavify';

const Footer = () => {
    return (
        <div
            name="Contact"
            className="relative w-full min-h-screen flex flex-col mt-16 md:mt-80" // Adjust the mt value for mobile and larger screens
        >
            <div className="flex-grow">{/* Your content here */}</div>
            <Wave
                fill="#000000"
                paused={false}
                options={{
                    height: 10,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3,
                }}
                className="w-full"
            />
            <div className="bg-black py-6 md:py-8 text-center text-white">
                {' '}
                {/* Adjust py value for mobile and larger screens */}
                <div className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
                    Drop Us A Line
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4 cursor-pointer items-center justify-center">
                    <div>About</div>
                    <div>Services</div>
                    <div>Projects</div>
                    <div>Blog</div>
                </div>
                <div className="text-xs md:text-sm">
                    Copyright © 2023. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
