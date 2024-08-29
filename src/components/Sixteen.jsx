//Color Picker
import React, { useState } from "react";

function Sixteen() {
  const [selctedColor, setSelectedColor] = useState("#000000");

  return (
    <div>
      <input type="color" onChange={(e) => setSelectedColor(e.target.value)} />
      <div
        style={{
          width: "1000px",
          height: "500px",
          backgroundColor: selctedColor,
        }}
      ></div>
    </div>
  );
}

export default Sixteen;
