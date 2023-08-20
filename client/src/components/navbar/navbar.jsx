import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; // This routes to other pages
const Navbar = () => {
    const links = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Contact' },
        { id: 4, name: 'Join', path: '/auth' },
        { id: 4, name: 'Dashboard', path: '/dashboard' },
    ];

    const [icon, setIcon] = useState(false);

    return (
        <div
            name="Navbar"
            className="z-50 flex items-center justify-between w-full h-20 mx-4 "
        >
            <div className="px-4 text-5xl font-extrabold text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-gray-900 to-blue-gray-900">
                WildFire
            </div>
            <div>
                <ul className="flex-row hidden md:flex">
                    {links.map(({ id, name, path }) => (
                        <li
                            key={id}
                            className="px-4 font-bold text-black duration-100 cursor-pointer drop-shadow-xl hover:scale-105 "
                        >
                            {path ? (
                                <RouterLink to={path}>{name}</RouterLink>
                            ) : (
                                <Link to={name} smooth duration={500}>
                                    {name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div
                onClick={() => setIcon(!icon)}
                className="z-10 flex px-4 text-black cursor-pointer md:hidden hover:scale-105"
            >
                {icon ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
            {icon && (
                <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-red-200">
                    {links.map(({ id, name, path }) => (
                        <li
                            key={id}
                            className="py-8 text-3xl font-medium text-white duration-100 cursor-pointer hover:scale-105"
                        >
                            {path ? (
                                <RouterLink to={path}>{name}</RouterLink>
                            ) : (
                                <Link
                                    onClick={() => setIcon(!icon)}
                                    to={name}
                                    smooth
                                    duration={500}
                                >
                                    {name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
