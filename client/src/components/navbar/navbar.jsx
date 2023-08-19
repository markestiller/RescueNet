import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    let links = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Contact' },
    ];

    let [icon, setIcon] = useState(false);

    return (
        <div className="fixed flex justify-between items-center w-full h-20 z-10 bg-black">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-start via-via to-end px-4">
                WildFire
            </div>
            <div>
                <ul className="hidden md:flex flex-row">
                    {links.map(({ id, name }) => (
                        <li key={id} className=" font-bold text-white px-4">
                            {name}
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
        </div>
    );
};

export default Navbar;
