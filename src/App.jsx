import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import BarChartPage from "./pages/BarChartPage";
import TablePage from "./pages/TablePage";
import SimpleChartPage from "./pages/SimpleChartPage";
import countWords from "./utils/countWords";
import RadioButton from "./components/RadioButton";

const App = () => {
  const [textValue, setTextValue] = useState("");
  const [wordCount, setWordCount] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("Normal");

  // Effect to recalculate the word count whenever textValue or selectedRadio changes
  useEffect(() => {
    countWords(setWordCount, textValue, selectedRadio);
  }, [textValue, selectedRadio]);

  // For textarea changes, updates the textValue state
  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  // For the onCopy event on the textarea, logs the copied text
  const handleCopy = (e) => {
    console.log("Copied text:", e.clipboardData.getData("text"));
  };

  // For radio button changes
  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <BrowserRouter>
      <div className="bg-gray-800 h-screen">
        {/* Navbar is included on all pages */}
        <Navbar />
        <div className="flex flex-col justify-center items-center mt-7 gap-9 md:flex-row">
          {/* Textarea for user input or pasting text */}
          <textarea
            className="w-96 h-48 resize-none rounded-md bg-gray-900 placeholder:text-center p-4"
            style={{ color: "white" }}
            placeholder="Write or paste your text"
            value={textValue}
            onChange={handleChange}
            onCopy={handleCopy}
          ></textarea>
          {/* RadioButton component to select the counting mode */}
          <RadioButton
            selectedValue={selectedRadio}
            handleRadioChange={handleRadioChange}
            className="self-start"
          />
        </div>
        <Routes>
          {/* Routes for the app pages */}
          <Route
            path="/barchart"
            element={<BarChartPage wordcount={wordCount} />}
          ></Route>
          <Route path="/" element={<TablePage wordcount={wordCount} />}></Route>
          <Route
            path="/simplechart"
            element={<SimpleChartPage wordcount={wordCount} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
