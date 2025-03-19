import React, { useState } from "react";

export const Task2 = () => {
  const [caunt, setCaunt] = useState(0);
  const Caunts = () => {
    setCaunt(caunt + 1);
  };
  const Decrement = () => {
    setCaunt(caunt - 1);
  };
  const clears = () => {
    setCaunt(0);
  };
  return (
    <div>
      <h1>{caunt}</h1>
      <button onClick={Caunts}>Caunt</button>
      <button onClick={Decrement} disabled={caunt === 0}>
        Decrement
      </button>
      <button onClick={clears} disabled={caunt === 0}>
        Clear
      </button>
    </div>
  );
};
