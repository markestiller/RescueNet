
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";

import React from "react";

const App = () => {
    return (
        <div>
            <Hero />
            <Navbar />
            <Footer />
        </div>
    );
};

export default App;
