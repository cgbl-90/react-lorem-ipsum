import React, { useState } from "react";
import data from "./data.js";

function GenerateText() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const setTextbyCount = () => {
    setText(data.slice(0, count));
  };

  return (
    <div>
      <span className="flex">
        <label for="count">Paragraphs </label>
        <input
          type="range"
          name="count"
          min="1"
          max="10"
          onChange={(e) => setCount(e.target.value)}
        />
        <output>{count}</output>
        <button onClick={setTextbyCount}> GENERATE</button>
      </span>
      {text.map((par) => (
        <p>{par}</p>
      ))}
    </div>
  );
}

export default GenerateText;
