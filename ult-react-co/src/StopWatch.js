import React, { useState, useEffect, useRef } from "react";
import "./stopWatch.css";
const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log(time);
    const interval = setInterval(() => {
      setTime(time + 1);
      /* works with setTime(t => t + 1) */
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  console.log(`render ${time}`);
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

/* a closure is a collection of all the variables in scope at the time of creation of a function, as components are simply functions they do create closures, and the functions defined therein have access to the variables inside our componenet.However with each render, the new state and props are injected into the component function and they are unique for each render call, the useEffect callback fucntion is also a function and it closes over the values of variables. We have set up our useEffect hook to only trigger when the component is first mounted. at that time of the time state variable was 0. so because this callback fucntion never changes, it will always calculate time variable as 0 and it will always add 1 to 0 and theyfore we see our stopwatch infinitely stuck at 1.
The way to remember this is that whenever we use the value of a variable declared outside the scope of a function, the value of that varaible WILL BE SNAPSHOTED and it will be FOREVER THE SAME as long as that function exist.
- When we use useState in react, react itself injects that new state into each render of our component functions, and theyfore they do not suffer from the same fate. but in useeEffect hook we nedd to handle ourself.

=> Previously we said that everything that is within the RENDER SCOPE OF OUR COMPONENT FUNCTION MUST BE INSIDE THE DEPENDENCY ARRAY.
because we are using time and it's declared within the render scope of the component function, we have to enter it into the dependency array as well.
- */
