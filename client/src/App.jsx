import "./App.css";
import navbar from "./components/navbar/navbar";
import hero from "./components/hero/hero";
import footer from "./components/footer/footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <Header />
            </div>
        </>
    );
}

export default App;
