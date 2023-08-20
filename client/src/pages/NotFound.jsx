import Navbar from '../components/navbar/navbar';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="w-full h-screen">
            <Navbar />
            {/* Background Styling */}
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

            <div className="flex h-full flex-col justify-center items-center font-bold ">
                {' '}
                <div className="flex text-transparent  bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-9xl">
                    404 Error
                </div>
                <div>
                    Sorry, we couldn't find the page you were looking for!
                </div>
                {/* Back Button */}
                <Link
                    to="/"
                    className="px-4 py-2 my-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
