import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toogleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(0, 1, 22)";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const toogleGoat = () => {
    if (mode === "green") {
      setmode("red");
      document.body.style.backgroundColor = "red";
    } else {
      setmode("green");
      document.body.style.backgroundColor = "green";
    }
  };

  return (
    <>
      <div className="conatiner">
        <BrowserRouter>
          <Navbar mode={mode} toogleMode={toogleMode} toogleGoat={toogleGoat} />
          <Routes>
            <Route path="about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={<TextBox title="Enter Text" mode={mode} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
