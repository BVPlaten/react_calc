import React from "react";
import "./styles.css";
import Button from "react-bootstrap/Button";

const ButtonMatrix = () => {
  // Beispiel-Daten für die Matrix
  const matrixData = [
    ["7", "8", "9", "*"],
    ["4", "5", "6", "/"],
    ["1", "2", "3", "+"],
    ["0", ",", "=", "-"]
  ];

  const handleButtonClick = (buttonText) => {
    console.log(`Button ${buttonText} wurde geklickt!`);
    // Füge hier deine gewünschte Logik für den Button-Click hinzu
  };

  return (
    <div className="container">
      {matrixData.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((buttonText, columnIndex) => (
            <div key={columnIndex} className="col">
              <Button
                className="btn btn-primary btn-block m-2"
                onClick={() => handleButtonClick(buttonText)}
              >
                {buttonText}
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonMatrix;
