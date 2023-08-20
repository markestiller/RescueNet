import { FaHome } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import Navbar from '../../components/navbar/navbar';
import { Link } from 'react-router-dom';

export default function Auth() {
    return (
        <div className="flex flex-col w-full">
            <Navbar />
            <div
                className="absolute inset-x-0 -top-40 -z-10  overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-orange-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-500 to-orange-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                ></div>
            </div>
            <div className="flex  items-center justify-center h-screen">
                <div className="flex gap-20 p-10 rounded-md">
                    <Link to="/auth/subscriber">
                        <div className="flex flex-col items-center justify-center p-16 text-center text-white rounded-md cursor-pointer shadow-xl bg-red-500 hover:border-black hover:border-4 hover:text-red-500 hover:bg-white transition-all">
                            <h1>Subscriber</h1>
                            <h1>Subscribe to Life Insurance</h1>
                            <br />
                            <FaPerson size={50} />
                        </div>
                    </Link>

                    <Link to="/auth/homeowner">
                        <div className="flex flex-col items-center justify-center p-16 text-center text-white rounded-md cursor-pointer shadow-xl bg-blue-500 hover:border-black hover:border-4 hover:text-blue-500 hover:bg-white transition-all">
                            <h1>Homeowner</h1>
                            <h1>Join as a Partner (Homeowner)</h1>
                            <br />
                            <FaHome size={50} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
