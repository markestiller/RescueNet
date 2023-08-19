import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react';

const About = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div name="About" className="w-full h-screen p-4 md:p-8 lg:p-16">
            <div className="flex items-center justify-center text-4xl font-bold mb-4">
                Mission Statement
            </div>
            <div className="flex items-center justify-center text-center max-w-screen-md mx-auto text-sm lg:text-base">
                We believe in a world where disaster doesn't have to mean
                despair. Imagine a future where hurricanes, wildfires, and
                unforeseen calamities aren't just met with panic, but with a
                sense of preparedness and security. <br />
                Here's the scoop: We've revolutionized the way you protect your
                loved ones and yourself. Our mission is simple yet
                groundbreaking – offering you a subscription that guarantees
                your safety and shelter, no matter what is thrown your way. How?
                It's ingenious. Every month, you invest in your peace of mind,
                contributing to a collective fund. <br />
                When disaster strikes, you're not alone. We're your safety net.
                We've forged partnerships with caring landlords who share our
                vision. With the funds accumulated, we ensure that there's
                always a spot ready and waiting for you, fully paid in a lump
                sum to the landlord. <br />
                We're not just about shelter – we're about community. Our
                network of resilient hearts beats together, forming a family
                that stands strong in the face of adversity. You're not just
                subscribing; you're joining a movement of hope, unity, and
                strength. And yes, we're not doing this out of the goodness of
                our hearts alone. <br />
                We're transparent about it – we do take a slice of that
                subscription, but it's a small price for the immense value we
                provide. Your safety, your shelter, your serenity – it's worth
                every cent. So, whether it's a hurricane howling or a wildfire
                raging, rest easy knowing that we got your back. <br />
                Together, we'll weather the storm, emerging stronger, more
                connected, and fiercely prepared. Join us. Embrace resilience.
                Welcome to a future where disasters may knock, but we've already
                answered the door.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen relative">
                <div>image</div>
                <div>
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            What is Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            How to use Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want
                            to be at. We&apos;re constantly growing. We&apos;re
                            constantly making mistakes. We&apos;re constantly
                            trying to express ourselves and actualize our
                            dreams.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default About;
