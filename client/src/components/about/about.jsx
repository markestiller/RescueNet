import React from 'react';

const About = () => {
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
            <div class="m-2 space-y-2">
                <div
                    class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
                    tabindex="1"
                >
                    <div class="flex cursor-pointer items-center justify-between">
                        <span> HTML </span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                            class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                        />
                    </div>
                    <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>

                <div
                    class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white w-[500px]"
                    tabindex="2"
                >
                    <div class="flex cursor-pointer items-center justify-between">
                        <span> CSS </span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                            class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                        />
                    </div>
                    <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>

                <div
                    class="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
                    tabindex="3"
                >
                    <div class="flex cursor-pointer items-center justify-between">
                        <span> JAVASCRIPT </span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                            class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                        />
                    </div>
                    <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
