import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <HexColorPicker color={color} onChange={setColor} />
      <div
        style={{
          marginTop: "20px",
          width: "100px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid #000"
        }}
      />
    </div>
  );
};

export default ColorPicker;
