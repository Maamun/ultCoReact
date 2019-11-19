import React, { useState, useEffect, useRef } from "react";
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const currentTime = useRef(0);

  useEffect(() => {
    // console.log(`time: ${time}`); // 0
    console.log(`current Time: ${currentTime.current}`); //0

    const interval = setInterval(() => {
      currentTime.current++;
      console.log(currentTime.current);
      setTime(currentTime.current);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  // console.log(`render ${time}`);
  return (
    <div className="container">
      <h1>Ultimate StopWatch</h1>
      <p>{time}</p>
      <button type="button">start</button>
      <button type="button">Reset</button>
    </div>
  );
};
export default StopWatch;

/* - React offers another hook called useRef, which gives us access to mutable value that is managed by react and shared by all render calls.
- Refs play the same role as instance fields as in JavaScript classes.
- so we might ask why do we have to do the work to store the latest state of our state values?, why it's not done automatically by react? The reason is that we often don't need them and it would mean a lot of wasted computation o react rather leaves it up to us to decide when we need to save a value and when not.
- if we go about our code using best patterns for useEffect, we will not often have to do this.but it;s good to know what to do when this occurs.
- so we create a ref container with useRef hook, and we need to know about Ref container that it is an object that contains a current property and the current value of the ref container is contained in the current property.
- it is interesting that We no longer have an error in our dependency array, the reason for this is that beacause we used a Ref container, and we did not use the time value directly, react knows that this Ref container stays the same amongs all renders, therefore we do not have to reference it anymore.
- we might also ask why do we need both state and teh Ref container?, well, we have to remember that updating state IS THE DRIVING FORCE OF OUR REACT COMPONENT, setting refs does not RE-RENDER COMPONETS. so if we SIMPLY UPDATE THE REFS, THE VIEW WOULD NEVER BE UPDATED.
- in ths case with this solution we need both. */
