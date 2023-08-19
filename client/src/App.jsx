import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import About from "./components/about/about";

import React from "react";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
