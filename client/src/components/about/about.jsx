import React, { useState } from 'react';
import Footer from '../footer/footer';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react';

const cardData = [
    {
        title: 'Speedy Relocation -  On Dial',
        description:
            'At RescueNet, our infrastructure is guaranteed to get your immediate housing 24/7/365.',
        badge: 'Guaranteed',
    },
    {
        title: 'Safety Is Not An Afterthought',
        description:
            'Through our rigorous vetting process, we are sure to match quality homeowners and subscribers on all sides.',
        badge: 'Safe',
    },
    {
        title: 'Not A Dent In Your Wallet',
        description:
            'We ensure you more than insurance at a lower rate. Sounds like a win to us.',
        badge: 'Frugal',
    },
    {
        title: 'Track Your Start - End Point Without Hassle',
        description:
            'No hidden fees or surprises out of the box. Receive immediate warnings and notifications about your status with us.',
        badge: 'Transparent',
    },
];

const About = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div name="About" className="w-full h-screen p-4 md:p-8 lg:p-16">
            <div className="grid grid-cols-1 mt-8 mb-20 lg:grid-cols-2">
                <div className="hidden lg:flex items-center justify-center px-4 lg:px-0">
                    <img
                        src="/images/search.svg"
                        className="pr-10  lg:object-cover -z-50"
                        loading="lazy"
                    />
                </div>
                <div>
                    <div className="flex items-center justify-center sm:mt-8 mb-10 text-5xl font-bold text-transparent bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text">
                        Mission Statement
                    </div>
                    <div className="flex items-center justify-center max-w-screen-md mx-auto text-justify lg:text-lg">
                        We believe in a world where disaster doesn't have to
                        mean despair. A scenario where hurricanes, wildfires,
                        and unforeseen calamities aren't just met with panic,
                        but with a sense of preparedness and security. Here's
                        the scoop: We've revolutionized the way you protect your
                        loved ones and yourself. Our mission is simple yet
                        groundbreaking – offering you a subscription that
                        guarantees your safety and shelter. Welcome to a future
                        where disasters may knock, but we've already answered
                        the door.
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <Accordion open={open === 1}>
                    <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className="text-4xl text-transparent transition-colors duration-300 group bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text hover:text-black"
                    >
                        For Subscribers ➔
                    </AccordionHeader>
                    <AccordionBody className="text-black bg-gray-50">
                        <span className="text-3xl font-bold">Step 1</span>{' '}
                        <br />
                        Open a subscription account with us and choose the plan
                        that best suits your needs and situations along with
                        filling out our form.
                        <br /> <br />
                        <span className="text-3xl font-bold">Step 2</span>{' '}
                        <br />
                        Select your payment provider and pay in monthly or
                        annual installments. <br /> <br />
                        <span className="text-3xl font-bold">Step 3</span>{' '}
                        <br />
                        Follow our instructions when a disaster arises on our
                        dashboard, and arrive to quick safety through our
                        service providers.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                    <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className="text-4xl text-transparent transition-colors duration-300 group bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text hover:text-black"
                    >
                        For Homeowners ➔
                    </AccordionHeader>
                    <AccordionBody className="text-black bg-gray-50">
                        <span className="text-2xl font-bold">Step 1</span>{' '}
                        <br />
                        Open a homeowner account with us and choose the plan
                        that best suits your needs and situations along with
                        filling out our form.
                        <br /> <br />
                        <span className="text-2xl font-bold">Step 2</span>{' '}
                        <br />
                        Provide temporary housing to citizens impacted by
                        natural disasters in your area.
                        <br /> <br />
                        <span className="text-2xl font-bold">Step 3</span>{' '}
                        <br />
                        Cash out upon the completion of the stay by the family.
                    </AccordionBody>
                </Accordion>
            </div>
            <div className="container p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {cardData.map((card, index) => (
                        <a
                            key={index}
                            href="#"
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:scale-y"
                        >
                            <span className="bg-green-100 text-green-800 text-md font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                {card.badge}
                            </span>

                            <h5 className="mt-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {card.title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {card.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
