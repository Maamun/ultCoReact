import React, { Fragment, useState, useEffect } from "react";
const subscibe = count => {
  console.log(`Subscribed for ${count}`);
};
const unsubscibe = count => {
  console.log(`Unsubscribed for ${count}`);
};
const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Counter set to ${counter}`;
  }, [counter]);

  useEffect(() => {
    subscibe(counter);
    return () => {
      unsubscibe(counter);
    };
  }, [counter]);

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
/* - It immediately shows in the console Subscribed for 0, and the reason for that is when it mounts: the counter value is already changing from undefined to 0. That's important to know that the effect hook will also run the mount process when we are looking at a specefic value.
- useEffect(() => {
    subscibe(counter);
    return () => {
      unsubscibe(counter);
    };
  }, [counter]); 
  => when the counter value changed, this useEffect was ran, this is looking at the counter for changes and when the counter changes, it will subscribe for the new value of counter but it will also unsubscribe for teh previous version of counter. So the clean up function is NOT ONLY FOR THE COMPONENT. the clean up function is PER EFFECT !! and it's executed everytime the effect changes. So whenever something in the dependency array changes, THE CLEAN UP FUNCTION WILL RUN FOR THE PREVIOUS VERSIONS OF THOSE VALUES.
  SUMMARY: If we want side effect code to only run once, we have to put it in a useEffect hook with an empty dependency array, so also its clean up function will be executed once when the component is unmounted.

  - However if the dependency array contains anything, the effect code will run whenever that changes, but the clean up function will also run with every change. it does not run for the first time the component gets mounted because there wasn't a previous run, this mechanism gives us a powerful ability to run our effect code based on the values of the state in our component and also enables us to clean up everytime something changes and we need to re-render the effect code again.*/

export default Counter;
