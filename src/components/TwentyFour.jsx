//Draggeble Div
import React, { useReducer, useState } from "react";

function boxReducer(state, action) {
  switch (action.type) {
    case "MOVE":
      return {
        ...state,
        left: action.payload.left,
        top: action.payload.top,
      };
    default:
      return state;
  }
}

function TwentyFour() {
  const [boxState, dispatch] = useReducer(boxReducer, { left: 0, top: 0 });
  const [isDraggable, setDraggable] = useState(false);

  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (e) => {
    setDraggable(true);
    setInitialX(e.clientX - boxState.left);
    setInitialY(e.clientY - boxState.top);
  };
  const handleMouseUp = (e) => {
    return setDraggable(false);
  };
  const handleMouseMove = (e) => {
    if (isDraggable) {
      const left = e.clientX - initialX;
      const top = e.clientY - initialY;
      dispatch({ type: "MOVE", payload: { left, top } });
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ left: boxState.left, top: boxState.top, position: "absolute" }}
    >
      Drag me
    </div>
  );
}

export default TwentyFour;
