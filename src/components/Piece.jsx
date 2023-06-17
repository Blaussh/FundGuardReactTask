import React from "react";

export default function Piece(props) {
  const { x, y } = props;
  return <div id="piece" className="circle" style={{ left: x, top: y }}></div>;
}
