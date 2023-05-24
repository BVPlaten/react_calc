import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TextBox = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Gib deinen Text ein"
          value={text}
          onChange={handleChange}
        />
      </div>
      <p>Eingegebener Text: {text}</p>
    </div>
  );
};

export default TextBox;
