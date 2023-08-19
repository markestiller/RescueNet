import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import navbar from "./components/navbar/navbar";
import hero from "./components/hero/hero";
import footer from "./components/footer/footer";

function App() {
    return (
        <>
            <div>
                <h1 className="text-3xl font-bold underline text-red-500">
                    Hello world!
                </h1>
            </div>
        </>
    );
}

export default App;
