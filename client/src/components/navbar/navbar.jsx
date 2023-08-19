import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    let links = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Contact' },
    ];

    let [icon, setIcon] = useState(false);

    return (
        <div
            name="Navbar"
            className="fixed flex justify-between items-center w-full h-20 z-50 bg-slate-900"
        >
            <div className="animate-pulse text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 px-4">
                WildFire
            </div>
            <div>
                <ul className="hidden md:flex flex-row">
                    {links.map(({ id, name }) => (
                        <li
                            key={id}
                            className="cursor-pointer font-bold text-orange-500 hover:scale-105 hover:rotate-12 
                        duration-100 px-4"
                        >
                            <Link to={name} smooth duration={500}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                onClick={() => setIcon(!icon)}
                className="flex cursor-pointer md:hidden z-10 hover:scale-105 text-white px-4"
            >
                {icon ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
            {icon && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  bg-red-200 ">
                    {links.map(({ id, name }) => (
                        <li
                            key={id}
                            className="cursor-pointer py-8 hover:scale-105 
        duration-100 font-medium text-3xl text-white"
                        >
                            <Link
                                onClick={() => setIcon(!icon)}
                                to={name}
                                smooth
                                duration={500}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
