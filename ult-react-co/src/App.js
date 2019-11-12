import React, { useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [show, setShow] = useState(true);
  const onClickHandler = () => {
    setShow(s => !s);
  };
  return (
    <>
      <h1>Ultimate Counter</h1>
      <button type="button" onClick={onClickHandler} aria-pressed={!show}>
        Show/Hide
      </button>
      {show && <Counter />}
    </>
  );
};

export default App;
