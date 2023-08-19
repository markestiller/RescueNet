import React from 'react';

const footer = () => {
    return (
        <div name="Contact" className="relative w-full h-60">
            <Wave
                fill="#0f172a"
                paused={false}
                options={{
                    height: 10,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3,
                }}
                className="absolute top-0 w-full h-full"
            />
            <div className="absolute top-0 w-full mt-20 bg-slate-900 flex items-center flex-col justify-center">
                <div className="text-white text-4xl font-bold mb-4">
                    Drop Us A Line
                </div>
                <div className="flex text-white gap-6 mb-4 cursor-pointer">
                    <div>About</div>
                    <div>Services</div>
                    <div>Projects</div>
                    <div>Blog</div>
                </div>
                <div className="flex text-sm text-white">
                    Copyright © 2023. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default footer;
