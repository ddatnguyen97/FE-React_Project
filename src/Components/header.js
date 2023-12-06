import React from "react";
import { useState, useEffect } from "react";
import { Button } from "antd";

const CustomHeader = ({ onColorChange }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colors = ["#31C484", "#1E73CE", "#C4175C", "#AD1591"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const toggleColor = () => {
    const newIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(newIndex);
    onColorChange(colors[newIndex]);
  };

  useEffect(() => {
    document.body.style.backgroundColor = colors[currentColorIndex];
  }, [colors, currentColorIndex]);

  return (
    <div
      style={{
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>React App</h2>
      <Button
        type="primary"
        onClick={toggleColor}
        style={{ backgroundColor: "#000000" }}
      >
        Change Color
      </Button>
    </div>
  );
};

export default CustomHeader;
