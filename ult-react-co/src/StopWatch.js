import React, { useState, useEffect, useRef } from "react";
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);
  const currentTime = useRef(0);
  useEffect(() => {
    let interval = null;
    /* interval is declared inside the effect hook so we do not need to put it inside the dependency aray */
    if (counterActive) {
      interval = setInterval(() => {
        currentTime.current++;
        setTime(currentTime.current);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [counterActive]);
  const onClickHandler = () => {
    setCounterActive(c => !c);
  };
  const onResetHandler = () => {
    setTime(0);
    setCounterActive(false);
  };
  return (
    <div className="container">
      <h1>Ultimate StopWatch</h1>
      <p>{time}</p>
      <button
        type="button"
        aria-pressed={!counterActive}
        onClick={onClickHandler}
      >
        {counterActive ? "Stop" : "Start"}
      </button>
      <button type="button" onClick={onResetHandler}>
        Reset
      </button>
    </div>
  );
};
export default StopWatch;

/* -Why didn't we have to put the "interval" in the dependency array or use a Ref to keep the previous version of "interval"? that is because it is declared inside the callback function of useEffect. so beacause it is part of that closure, it has the correct value everytime. Everytime a new callback is defined, it will set the "interval" and when the clean up function happens it will have the correct "interval" to go and clear.
- is important lesson that anything that we declare inside useEffect we do not have to add it to the dependency array, and anything we declare outside of the component function, we also do not have to add to the dependency aray.*/
