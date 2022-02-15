import React, { useState } from "react";

export default function TextBox(props) {
  const toUpperCase = () => {
    console.log("Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleChange = (e) => {
    console.log("Change");
    setText(e.target.value);
  };

  const [text, setText] = useState("Enter");
  // {`${props.mode == "light" ? "white" : "black"}
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode == "light" ? "black" : "white" }}
      >
        <h1>{props.title}</h1>
        <textarea
          className="form-control"
          id="TextArea"
          value={text}
          rows="8"
          onChange={handleChange}
          style={{ backgroundColor: props.mode == "light" ? "white" : "grey" }}
        ></textarea>
        <button className="btn btn-primary" onClick={toUpperCase}>
          Convert to UPPERCASE
        </button>
      </div>
      <div
        className="conatiner"
        style={{ color: props.mode == "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          Characters : {text.length} Words: {text.split(" ").length}
        </p>
      </div>
    </>
  );
}
