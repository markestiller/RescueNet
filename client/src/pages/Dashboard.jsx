export default function Dashboard() {
    const users = [
        {
            id: 1,
            firstname: 'John',
            lastname: 'Doe',
            email: 'test@gmail.com',
            mobile: '+12345678990',
            address: 'no home st',
            subscribed: false,
            balance: 100,
        },
        {
            id: 2,
            firstname: 'Jane',
            lastname: 'Smith',
            subscribed: false,
        },
        {
            id: 3,
            firstname: 'Michael',
            lastname: 'Johnson',
            subscribed: true,
        },
        {
            id: 4,
            firstname: 'Emily',
            lastname: 'Williams',
            subscribed: false,
        },
        {
            id: 5,
            firstname: 'David',
            lastname: 'Brown',
            subscribed: true,
        },
    ];

    let user = users[0];

    return (
        <div className="w-full">
            <div
                className="absolute inset-x-0 -top-40 -z-10  overflow-hidden blur-3xl sm:-top-80"
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
                <h1 className="text-2xl font-semibold">
                    Welcome back,{' '}
                    <span className="bg-gradient-to-tr from-red-500 to-orange-500 bg-clip-text text-transparent">
                        {user.firstname}
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
            <div className="flex flex-col items-center p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Add more columns here */}

                    {/* Account Information */}
                    <div className=" bg-white p-4 border rounded-lg shadow-sm ">
                        <h2 className="text-lg font-semibold mb-2 items-center">
                            Account
                        </h2>
                        <p className="text-gray-700">
                            {/* Full Name: {user.firstname} {user.lastname} */}
                        </p>
                        <p className="text-gray-700">Email: {user.email}</p>
                        <p className="text-gray-700">Mobile: {user.mobile}</p>
                        <p className="text-gray-700">Address: {user.address}</p>
                        {/* Add more user information fields as needed */}
                        <div className="pt-4">Edit</div>
                    </div>

                    {/* Subscribed Status */}
                    <div className="bg-white p-4 border rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-2">Status</h2>

                        <p className="text-gray-700">
                            {user.subscribed
                                ? 'Subscribed ✅'
                                : 'Not Subscribed ❌'}
                        </p>
                    </div>

                    {/* Balance */}
                    <div className="bg-white p-4 border rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-2">Balance</h2>
                        <p className="text-gray-700">${user.balance}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
