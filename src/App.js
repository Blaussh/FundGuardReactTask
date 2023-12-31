import React from "react";
import "./styles.css";
import Piece from "./components/Piece";
import Controls from "./components/Controls";

export default function App() {
  const [pos, setPos] = React.useState([100, 50]);
  const moveDelta = (dx, dy) => {
    setPos([pos[0] + dx, pos[1] + dy]);
  };
  return (
    <div className="App">
      <Piece x={pos[0]} y={pos[1]} />
      <Controls moveDelta={moveDelta} />
    </div>
  );
}
