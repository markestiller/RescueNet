import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import About from '../components/about/about';

const Main = () => {
    return (
        <div className="w-full">
            <Navbar />
            <Hero />
            <About />
            <Footer />
        </div>
    );
};
export default Main;
