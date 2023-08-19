import React from 'react';
import Wave from 'react-wavify';

const Footer = () => {
    return (
        <div
            name="Contact"
            className="relative w-full min-h-screen flex flex-col mt-60"
        >
            <div className="flex-grow">{/* Your content here */}</div>
            <Wave
                fill="#0f172a"
                paused={false}
                options={{
                    height: 10,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3,
                }}
                className="w-full"
            />
            <div className="bg-gray-900 py-8 text-center text-white">
                <div className="text-4xl font-bold mb-4">Drop Us A Line</div>
                <div className="flex gap-6 mb-4 cursor-pointer items-center justify-center">
                    <div>About</div>
                    <div>Services</div>
                    <div>Projects</div>
                    <div>Blog</div>
                </div>
                <div className="text-sm">
                    Copyright © 2023. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
