export default function Form() {
    const subscriber = {
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
    };

    const homeowner = {
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        city: '',
        province: 'AB',
        postalCode: '',
        phoneNumber: '',
        capacity: 0,
        occupants: 0,
        password: '',
    };

    return (
        <form className="flex flex-row flex-wrap w-max">
            <input
                className="w-64 h-10 border-2 border-gray-300 rounded-md"
                type="text"
                placeholder="Name"
            >
                
            </input>
        </form>
    );
}
