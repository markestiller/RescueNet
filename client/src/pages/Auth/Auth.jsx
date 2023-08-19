import { FaHome } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import Navbar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';

export default function Auth() {
    // Render different form based on the div clicked
    return (
        <div className="flex flex-col w-full">
            <Navbar />
            <div className="flex flex-row flex-wrap self-center justify-around w-full gap-5 p-10 rounded-md md:w-max bg-red-50">
                <Link to="/auth/subscriber">
                    <div className="flex flex-col items-center justify-center p-5 text-center bg-red-100 rounded-md cursor-pointer align-center">
                        <h1>Subscribe to Life Ensurance</h1>
                        <FaPerson size={50} />
                    </div>
                </Link>
                <Link to="/auth/homeowner">
                    <div className="flex flex-col items-center justify-center p-5 text-center bg-red-100 rounded-md cursor-pointer align-center">
                        <h1>Join as a partner (homeowner)</h1>
                        <FaHome size={50} />
                    </div>
                </Link>
            </div>
        </div>
    );
}
