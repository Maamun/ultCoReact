import React, { useState, useEffect } from "react";
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);

  useEffect(() => {
    let interval = null;
    /* interval is declared inside the effect hook so we do not need to put it inside the dependency aray */
    if (counterActive) {
      interval = setInterval(() => {
        setTime(t => t + 1);
        /* in order to get rid of this Ref we use the callback version of setter function, so react will inject the correct version of that state into that callback function for us. */
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

  const formattedTime = new Date(time * 1000).toISOString().substr(11, 8);
  /* - This code has to do with the rendering of our view, this is not a side effect therefore it has to be part of the main render cycle of the component.
  - Side effects in useEffects does not have to do with the main render cycle of the component. Also this means that we are running this conversion function in every single render. Note that this kind of things is normal and perfectly fine in react. React is fast enough to process most of what we through at it. It's only when something becomes a problem that we try and optimise it. Often trying to optimize things too early in react create more problems than it actually solves.  */

  return (
    <div className="container">
      <h1>Ultimate StopWatch</h1>
      <p>{formattedTime}</p>
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
