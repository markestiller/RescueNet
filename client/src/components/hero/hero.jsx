import React from 'react';

const Hero = () => {
    return (
        <div id="about" className="grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className="flex items-center justify-center lg:justify-start">
                <div className="mx-10 mt-10">
                    <h1 className="text-5xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text text-transparent">
                            Resilience{' '}
                        </span>
                        Amidst Disaster. <br />
                        <span
                            className="bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text text-transparent
"
                        >
                            Shelter
                        </span>{' '}
                        in Transition. <br />
                        <span className="bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text text-transparent">
                            Stay Secure
                        </span>{' '}
                        during Drastic Circumstances.
                    </h1>
                    <div className="mt-12 gap-4 flex flex-wrap">
                        <button className="mr-2 mb-2">
                            <a
                                href="#_"
                                className="px-5 py-2.5 relative rounded-full group font-medium text-white font-medium inline-block"
                            >
                                <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-red-500 to-orange-500"></span>
                                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-red-500 to-orange-500"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-red-500 to-orange-500"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-red-500 from-orange-500"></span>
                                <span className="relative">Button Text</span>
                            </a>
                        </button>
                        <button className="mb-2">
                            <a
                                href="#_"
                                className="px-5 py-2.5 relative rounded-full group font-medium text-white font-medium inline-block"
                            >
                                <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-red-500 to-orange-500"></span>
                                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-red-500 to-orange-500"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-red-500 to-orange-500"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-red-500 from-orange-500"></span>
                                <span className="relative">Sign Up</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end mx-10 z-10">
                <div className="h-80 lg:h-auto">
                    <img
                        src="/images/Group 1.png"
                        alt="Image"
                        className="w-full h-full object-contain lg:object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
