import { useEffect, useState } from 'react';
import appreciation from '../assets/appreciation.svg';
import Navbar from '../components/navbar/navbar';

export default function Dashboard() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        // Security
        let userId = localStorage.getItem('userId'); // '64e11130e80f9c880de414ab'
        if (!userId) return;

        fetch(import.meta.env.VITE_BACKEND + '/api/subscriber/' + userId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data.subscriber);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="relative w-full h-screen">
            <Navbar />
            <div
                className="absolute inset-x-0 overflow-hidden -top-40 -z-10 blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-500 to-orange-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                ></div>
            </div>
            <div className="flex flex-col items-center p-8">
                <h1 className="text-4xl font-semibold ">
                    Welcome back,{' '}
                    <span className="text-transparent bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text">
                        {userData?.firstname}
                    </span>{' '}
                    👋
                </h1>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10  overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-500 to-orange-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                ></div>
            </div>
            <div className="flex flex-col items-center mt-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Account Information */}
                    <div className="relative p-20 bg-white border rounded-lg shadow-md text-xl">
                        <h2 className="items-center mb-2 text-2xl font-semibold">
                            Account
                        </h2>
                        <p className="text-gray-700">
                            Name: {userData?.firstName} {userData?.lastName}
                        </p>

                        <p className="text-gray-700">Age: {userData?.age}</p>
                        <p className="text-gray-700">
                            Mobile: {userData?.phoneNumber}
                        </p>
                        <p className="text-gray-700">
                            Address: {userData?.address}
                        </p>
                        <p className="text-gray-700">
                            Occupants: {userData?.occupants}
                        </p>

                        {/*   <div className="absolute bottom-0 right-0 p-2 text-sm text-orange-500">
                            Edit
                        </div> */}
                    </div>

                    {/* Subscribed Status */}
                    <div className="relative p-20 bg-white rounded-lg shadow-md">
                        <h2 className="mb-2 text-2xl font-semibold">Status</h2>

                        <p className="text-gray-700 text-xl">
                            {userData?.isSubscribed
                                ? 'Subscribed ✅'
                                : 'Not Subscribed ❌'}
                        </p>
                        <div className="absolute bottom-0 right-0 p-2 text-sm text-orange-500">
                            Manage
                        </div>
                    </div>

                    {/* Balance */}
                    {/*   <div className="relative p-4 bg-white border rounded-lg shadow-sm">
                        <h2 className="mb-2 text-lg font-semibold">Balance</h2>
                        <p className="text-gray-700">${userData?.balance}</p>
                        <div className="absolute bottom-0 right-0 p-2 text-sm text-orange-500">
                            More
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="flex items-center justify-center pt-10">
                <div className="flex text-3xl font-bold">
                    Thank you for your support!
                </div>
                <div className="flex w-1/4 h-1/4 ">
                    <img src={appreciation} />
                </div>
            </div>
        </div>
    );
}
