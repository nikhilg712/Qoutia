import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import unsplash from "./assets/sky.jpg";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
  const [quote, setQuote] = useState([]);

  const getQuote = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuote(data);
    console.log(data);
  };

  const randomIndex = Math.floor(Math.random() * 16);

  const handleChange = (e) => {
    const updatedValue = e.target.value;
    setValue(updatedValue);
    console.log(updatedValue);
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${unsplash})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gray-200 bg-opacity-75 rounded-3xl flex flex-col gap-5 h-80 w-96 justify-center items-center">
        {/* <input
          className="text-center h-9 rounded-md"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Type a category"
        /> */}
        <button
          className="bg-slate-800 text-white h-8 w-24 rounded-full hover:w-[91px]"
          onClick={getQuote}
        >
          Get Quote
        </button>
        <div className="h-4">{quote && quote[randomIndex] && <p>{quote[randomIndex].text}</p>}</div>
        
      </div>
    </div>
  );
}

export default App;
