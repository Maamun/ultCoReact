import React, { Fragment, useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [internalCount, setInternalCount] = useState(0);
  useEffect(() => {
    document.title = `Counter set to ${counter}`;
    console.log("Title was set");
  }, [counter]);
  const onCountClickHandler = () => {
    setCounter(c => c + 1);
  };
  const onInternalCountClickHandler = () => {
    setInternalCount(i => i + 1);
  };
  console.log("Main render return");
  /* document.title = `Counter set to ${counter}`
  the code that runs inline in this function all needs to be executed before the view is returned !!*/
  return (
    <Fragment>
      <h1>Ultimate Counter</h1>
      <p>{counter}</p>
      <button type="button" onClick={onCountClickHandler}>
        Increment
      </button>
      <button type="button" onClick={onInternalCountClickHandler}>
        Increment internal count
      </button>
    </Fragment>
  );
};
/* - title element resides in the head element of the static html file, while our react application will be boostrapped inside the root div, this means that the title element is not part of the react application, so updating it from any component inside our react appication is a SIDE EFFECT! 
- when any of the state variables gets changed, react will re-render the entire component and that means re-calling the component function. 
- Side effects should not be part of the pure render cycle of the component.
- Every action and every function call is work the browser needs to do, if we ignore every isolated incident we soon end up with applications with performance impact becomes noticeable, and we have to remember that many users are not running the code in powerful development computers, so code seems to run fine in our machines, might perform slow in users's old spec laptop or phone. also many operations are more costly to start with and some operations should not be repeated. Imagine running subscription code with every re-render of this component or any parent component, beacause it's important to keep in mind that when we set state we re-render the component and any component that is part of that component child tree in the JSX will also be re-rended, this means that side effects in our main render cycle becomes more and more costly as our application grows larger. 
- the code that runs inline in this function all needs to be executed before the view is returned !! which is say that rendering this component should be blocked sut so we can set the document title. The most important part of this component is to update the view as fast as possible, and if the document title is set a few milliseconds later that is perfectly ok.
- We need a place where we can encapsulate the side effects and that's inside the useEffect hook
- useEffect hook is called by react every time the component has rendered. but it is called asynchronously after the component has been rendered already. This means react promises to execute this function but it does not block the rendering of he component and it runs as soon as possible there after.
 - the main render message was written to the console before teh title was set message, and this means that the component was rendererd before the title was set. this is exactly what we expected. so setting the document title is no longer blocking our component rendering. 
 - as the document title contains the counter value, it would be fair to say that it should only be set when this value changes. setting it again when anything else happens is a waste of processing cycles.
 - !! the useEffect function is still processed on each render, but the callback will only ever be executed hen any of the dependencies in the array changes.*/

export default Counter;
