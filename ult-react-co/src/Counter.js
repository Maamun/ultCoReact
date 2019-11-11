import React, { Fragment, useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = `Counter set to ${counter}`;
    console.log("Title was set");
  }, [counter]);
  useEffect(() => {
    const savedCounterValue = localStorage.getItem("ultimateCounter");
    if (savedCounterValue != null) {
      setCounter(parseInt(savedCounterValue), 10);
    }
  }, []);
  const onCountClickHandler = () => {
    setCounter(c => c + 1);
  };
  const onSaveClickHandler = () => {
    localStorage.setItem("ultimateCounter", counter);
  };
  console.log("Main render return");

  return (
    <Fragment>
      <h1>Ultimate Counter</h1>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
      <button type="button" onClick={onSaveClickHandler}>
        Save counter value
      </button>
    </Fragment>
  );
};
/* - If we provide an empty dependency array to useEffect hook, in effect we instruct react to only execute this hook once when the component is first mounted.
- Anything that we declare inside the useEffect function does not have to be part of the dependency array, only variables declared outside of the useEffect hook but still inside of our component function needs to be part of the dependecy array.
- The rendering happened before the useeffect ran, in real world applications, we can write code to defer the rendeing of the view until these effects have ran, however we need to pick which view that is and perhaps to display a message to say that something is loading. react will run the useEffect asynchronously after the view has been rendered.*/

export default Counter;
