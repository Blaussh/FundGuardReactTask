import React from "react";

export default function Controls(props) {
  const { moveDelta } = props;
  return (
    <div id="controls-wrapper">
      <button id="btn-up" class="btn-arrow" onClick={() => moveDelta(0, -100)}>
        U
      </button>
      <br />
      <button
        id="btn-left"
        class="btn-arrow"
        onClick={() => moveDelta(-100, 0)}
      >
        L
      </button>
      <button
        id="btn-right"
        class="btn-arrow"
        onClick={() => moveDelta(100, -0)}
      >
        R
      </button>
      <br />
      <button id="btn-down" class="btn-arrow" onClick={() => moveDelta(0, 100)}>
        D
      </button>
    </div>
  );
}
