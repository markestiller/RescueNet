import React from 'react';
import Wave from 'react-wavify';

const Footer = () => {
    return (
        <div className="flex flex-col w-full mt-12">
            <div className=" py-6 md:py-8 text-center bg-gray-50">
                <div className="text-xl md:text-4xl font-bold mb-2 md:mb-4 text-black">
                    RescueNet
                </div>
                <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-2 cursor-pointer items-center justify-center text-black">
                    <div>Devpost</div>
                </div>
                <div className="text-xs md:text-sm mb-2 text-black">
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
