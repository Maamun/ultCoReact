import React, { Fragment, useState, useEffect } from "react";
const subscibe = () => {
  console.log("subscribed");
};
const unsubscibe = () => {
  console.log("Unsubscribe");
};
const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter set to ${counter}`;
  }, [counter]);

  useEffect(() => {
    subscibe();
    return () => {
      unsubscibe();
    };
  }, []);

  const onCountClickHandler = () => {
    setCounter(c => c + 1);
  };

  return (
    <Fragment>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
    </Fragment>
  );
};
/* - Why didn't we have to put the subscribe function inside the dependency array? the reason for that it was declared outisde the render scope of the Counter component, it is not part of the component function and therefor we can treat it as a true constant and does not have to be part of the dependency array, this is something we have to keep in mind, if we have side effects that doesn't use anything inside of our components, it is often a good idea to move it outside of the component. Usually this leads to code that is easier to reason about and also when we create a useEffect functions we do not have to add it to the dependency arrays.
- so if we know a function as constant and it does not use anything defined inside of our component, it propably doesn't belong inside our component in the first place. 

- useEffect comes with a clean up function that we can use to clean up effects.
 - When it is a useEffect with an empty dependency array, the effect code will be run when the component just mounted, it will never run again because there is nothing in the dependency array that can change, so once the component is unmounted, the clean up function will be called for the first time. 
  - The clean up function will be triggered only once when the component is unmounted.*/

export default Counter;
