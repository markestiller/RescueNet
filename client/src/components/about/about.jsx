import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react';

const cardData = [
    {
        title: 'Noteworthy technology acquisitions 2021',
        description:
            'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
        title: 'Noteworthy technology acquisitions 2021',
        description:
            'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
        title: 'Noteworthy technology acquisitions 2021',
        description:
            'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
    {
        title: 'Noteworthy technology acquisitions 2021',
        description:
            'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    },
];

const About = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div name="About" className="w-full h-screen p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 mt-4">
                <div>
                    <img
                        src="/images/search.svg"
                        className=" pr-10 lg:object-cover -z-50"
                        loading="lazy"
                    />
                </div>
                <div>
                    <div className="flex justify-center items-center text-5xl font-bold mb-4">
                        Mission Statement
                    </div>
                    <div className="flex items-center justify-center  max-w-screen-md mx-auto text-sm lg:text-base text-justify">
                        We believe in a world where disaster doesn't have to
                        mean despair. Imagine a future where hurricanes,
                        wildfires, and unforeseen calamities aren't just met
                        with panic, but with a sense of preparedness and
                        security. Here's the scoop: We've revolutionized the way
                        you protect your loved ones and yourself. Our mission is
                        simple yet groundbreaking – offering you a subscription
                        that guarantees your safety and shelter. <br /> <br />{' '}
                        We're not just about shelter – we're about community.
                        Our network of resilient hearts beats together, forming
                        a family that stands strong in the face of adversity.
                        You're not just subscribing; you're joining a movement
                        of hope, unity, and strength. And yes, we're not doing
                        this out of the goodness of our hearts alone. Together,
                        we'll weather the storm, emerging stronger, more
                        connected, and fiercely prepared. Join us. Embrace
                        resilience. Welcome to a future where disasters may
                        knock, but we've already answered the door.
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        For Subscribers ➔
                    </AccordionHeader>
                    <AccordionBody>
                        We&apos;re not always in the position that we want to be
                        at. We&apos;re constantly growing. We&apos;re constantly
                        making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        For Homeowners ➔
                    </AccordionHeader>
                    <AccordionBody>
                        We&apos;re not always in the position that we want to be
                        at. We&apos;re constantly growing. We&apos;re constantly
                        making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cardData.map((card, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {card.title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {card.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
