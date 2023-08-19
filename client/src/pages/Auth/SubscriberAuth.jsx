import { useState } from 'react';
import Navbar from '../../components/navbar/navbar';

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
    capacity: {
        type: 'number',
        placeholder: '0',
        label: 'Capacity',
    },
    password: {
        type: 'password',
        placeholder: 'Password',
        label: 'Password',
    },
};
export default function SubscriberAuth() {
    const [subscriberData, setSubcriberData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        province: 'ON',
        postalCode: '',
        age: '',
        phoneNumber: '',
        occupants: 0,
        password: '',
    });

    // eslint-disable-next-line react/prop-types
    const TextInput = ({ unique, placeholder }) => {
        return (
            <input
                className="w-64 h-10 p-2 border-2 border-gray-300 rounded-md outline-none"
                type="text"
                name={unique}
                key={unique}
                placeholder={placeholder}
                value={subscriberData[unique]}
                onChange={(event) => {
                    setSubcriberData({
                        ...subscriberData,
                        [event.target.name]: event.target.value,
                    });
                }}
            />
        );
    };
    // eslint-disable-next-line react/prop-types
    const NumberInput = ({ unique, placeholder }) => {
        return (
            <input
                className="w-32 h-10 p-2 border-2 border-gray-300 rounded-md outline-none"
                type="number"
                name={unique}
                key={unique}
                placeholder={placeholder}
                value={subscriberData[unique]}
                onChange={(event) => {
                    setSubcriberData({
                        ...subscriberData,
                        [event.target.name]: event.target.value,
                    });
                }}
            />
        );
    };
    return (
        <div className="flex flex-col w-full">
            <Navbar />
            <div className="flex flex-row flex-wrap gap-5 p-5">
                {Object.entries(inputs).map(([key, value]) => {
                    return (
                        <>
                            <h2 key={key}>{value.label}</h2>
                            {value.type === 'text' ? (
                                <TextInput unique={key} {...value} />
                            ) : (
                                <NumberInput unique={key} {...value} />
                            )}
                        </>
                    );
                })}
            </div>
        </div>
    );
}
