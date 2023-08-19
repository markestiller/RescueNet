import React from 'react';

const Navbar = () => {
    let links = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About' },
        { id: 3, name: 'Contact' },
    ];
    return (
        <div className="fixed flex justify-between items-center w-full h-20 z-10 bg-black">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-start via-via to-end px-4">
                WildFire
            </div>
            <div>
                <ul className="flex flex-row">
                    {links.map(({ id, name }) => (
                        <li key={id} className=" font-bold text-white px-4">
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
