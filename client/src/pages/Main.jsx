import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import About from '../components/about/about';

const Main = () => {
    return (
        <div className="w-full">
            <Navbar />
            <Hero />
            <About />
        </div>
    );
};
export default Main;
