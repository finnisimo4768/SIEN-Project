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

  useEffect(() => {
    countWords(setWordCount, textValue, selectedRadio);
  }, [textValue, selectedRadio]);

  const handleChange = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const handleCopy = (e) => {
    console.log("Texto copiado:", e.clipboardData.getData("text"));
  };

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  console.log(wordCount);

  return (
    <BrowserRouter>
      <div className="bg-gray-800 h-screen">
        <Navbar />
        <div className="flex justify-center items-center mt-7 gap-9">
          <textarea
            className="w-96 h-48 resize-none rounded-md bg-gray-900 placeholder:text-center p-4"
            style={{ color: "white" }}
            placeholder="Write or paste your text"
            value={textValue}
            onChange={handleChange}
            onCopy={handleCopy}
          ></textarea>
          <RadioButton
            selectedValue={selectedRadio}
            handleRadioChange={handleRadioChange}
            className="self-start"
          />
        </div>
        <Routes>
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
