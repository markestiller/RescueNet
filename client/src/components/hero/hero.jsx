import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <div
            id="About"
            className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-red-100"
        >
            <div className="flex items-center justify-center lg:justify-start">
                <div className="mx-10 mt-10">
                    <h1 className="text-4xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text text-transparent">
                            Resilience{' '}
                        </span>
                        Amidst Disaster. <br />
                        <span className="bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text text-transparent">
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
                                className="px-10 py-2.5 relative rounded-full group font-medium text-white font-medium inline-block"
                            >
                                <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-red-500 to-orange-500"></span>
                                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-red-500 to-orange-500"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-red-500 to-orange-500"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-red-500 from-orange-500"></span>
                                <span className="relative inline-flex items-baseline">
                                    Get Started <FaArrowRight />
                                </span>
                            </a>
                        </button>
                        <button className="mb-2">
                            <a
                                href="#_"
                                className="px-8 py-2.5 relative rounded-full group font-medium text-white font-medium inline-block"
                            >
                                <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-red-500 to-orange-500"></span>
                                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-red-500 to-orange-500"></span>
                                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-red-500 to-orange-500"></span>
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br to-red-500 from-orange-500"></span>
                                <span className="relative">Login</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end mx-10 z-10">
                <div className="h-80 lg:h-auto">
                    <img src="/images/undraw.svg" className="-z-50" />
                </div>
            </div>

            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10  overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-500 to-range-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Hero;
