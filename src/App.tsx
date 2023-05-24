import React, { useState } from "react";
import "./styles.css";
import ButtonMatrix from "./buttons";
import "./display";
import TextBox from "./display";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <TextBox />

      <ButtonMatrix />
    </div>
  );
}
