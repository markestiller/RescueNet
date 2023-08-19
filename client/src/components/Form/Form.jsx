import React, { useState } from 'react';

export default function Form() {
    const [homeownerData, setHomeownerData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        province: 'ON',
        postalCode: '',
        age: '',
        phoneNumber: '',
        occupants: 0,
        capacity: 0,
        password: '',
    });

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

    function updateSubscriberData(event) {
        setSubcriberData({
            ...subscriberData,
            [event.target.name]: event.target.value,
        });
    }

    function updateHomeownerData(event) {
        setHomeownerData({
            ...homeownerData,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form className="flex flex-row flex-wrap w-max">
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={homeownerData.firstName}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={homeownerData.lastName}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="address"
                placeholder="Address"
                value={homeownerData.address}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="city"
                placeholder="City"
                value={homeownerData.city}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="province"
                placeholder="Province"
                value={homeownerData.province}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={homeownerData.postalCode}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="age"
                placeholder="Age"
                value={homeownerData.age}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={homeownerData.phoneNumber}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="number"
                name="occupants"
                placeholder="Number of Occupants"
                value={homeownerData.occupants}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="number"
                name="capacity"
                placeholder="Number of Capacity"
                value={homeownerData.capacity}
                onChange={updateHomeownerData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                value={homeownerData.password}
                onChange={updateHomeownerData}
            />
            <br />
            <br />
            <br />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={homeownerData.firstName}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={homeownerData.lastName}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="address"
                placeholder="Address"
                value={homeownerData.address}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="city"
                placeholder="City"
                value={homeownerData.city}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="province"
                placeholder="Province"
                value={homeownerData.province}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={homeownerData.postalCode}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="age"
                placeholder="Age"
                value={homeownerData.age}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={homeownerData.phoneNumber}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="number"
                name="occupants"
                placeholder="Number of Occupants"
                value={homeownerData.occupants}
                onChange={updateSubscriberData}
            />
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                value={homeownerData.password}
                onChange={updateSubscriberData}
            />
        </form>
    );
}
