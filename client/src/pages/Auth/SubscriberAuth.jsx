import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router-dom';

const inputs = {
    firstName: {
        type: 'text',
        placeholder: 'First Name',
        label: 'First Name',
    },
    lastName: {
        type: 'text',
        placeholder: 'Last Name',
        label: 'Last Name',
    },
    address: {
        type: 'text',
        placeholder: '32 Wildfire Drive',
        label: 'Address',
    },
    city: {
        type: 'text',
        placeholder: 'Toronto',
        label: 'City',
    },
    province: {
        type: 'text',
        placeholder: 'ON',
        label: 'Province',
    },
    postalCode: {
        type: 'text',
        placeholder: 'M1M 1M1',
        label: 'Postal Code',
    },
    age: {
        type: 'text',
        placeholder: '18',
        label: 'Age',
    },
    phoneNumber: {
        type: 'text',
        placeholder: '4161234567',
        label: 'Phone Number',
    },
    occupants: {
        type: 'number',
        placeholder: '0',
        label: 'Occupants',
    },
    password: {
        type: 'password',
        placeholder: 'Password',
        label: 'Password',
    },
};
export default function SubscriberAuth() {
    const navigate = useNavigate();
    const [subscriberData, setSubcriberData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        province: 'ON',
        postalCode: '',
        age: '',
        phoneNumber: '',
        occupants: '',
        password: '',
    });

    const changeHandler = (event) => {
        setSubcriberData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <div className="flex flex-col w-ful">
            <Navbar />

            {/* Background Styling */}
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
            {/* Background Styling */}

            {/* Form */}
            <div className="flex flex-col items-center gap-5 p-5 rounded-lg">
                <h1 className="mb-8 text-2xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                        Subscriber
                    </span>{' '}
                    Authentication
                </h1>

                {/* Input fields */}
                <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {Object.entries(inputs).map(([key, value]) => (
                        <>
                            <label
                                className="block mb-2 font-semibold"
                                key={'label' + value.placeholder}
                            >
                                {value.label}
                            </label>
                            <input
                                key={key}
                                className="w-64 h-10 p-2 border-2 border-gray-300 rounded-md outline-none"
                                type={value.type}
                                name={key}
                                placeholder={value.placeholder}
                                value={subscriberData[key]}
                                onChange={changeHandler}
                            />
                        </>
                    ))}
                </form>
                <div className="cursor-pointer px-4 py-2 my-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md hover:scale-105 transition ">
                    <button onClick={() => sendData(subscriberData, navigate)}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

function sendData(subscriberData, navigate) {
    console.log(subscriberData);
    fetch(import.meta.env.VITE_BACKEND + '/api/subscriber', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriberData),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                // do smth
            } else {
                data = data.subscriber;
                localStorage.setItem('firstName', data.firstName);
                localStorage.setItem('lastName', data.lastName);
                localStorage.setItem('address', data.address);
                localStorage.setItem('city', data.city);
                localStorage.setItem('province', data.province);
                localStorage.setItem('postalCode', data.postalCode);
                localStorage.setItem('age', data.age);
                localStorage.setItem('phoneNumber', data.phoneNumber);
                localStorage.setItem('occupants', data.occupants);
                localStorage.setItem('userId', data._id);
                navigate('/dashboard');
            }
        });
}
