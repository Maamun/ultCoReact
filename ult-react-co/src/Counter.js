import React, {useState} from 'react'
const Counter = () => {
    const [counter, setCounter] = useState(0)
    const onClickHandler = () => {
        setCounter(counter + 1)
    }
    return (
        <>
        <p>{counter}</p>
        <button type='button' onClick={onClickHandler}>ADD</button>
        
        </>)
}
 /* Hooks must always be called at the top level of our ReactComponent, this means that they should never be called inside loops, conditions or nested functions. The reason for this is that in order for react to be able to manage our hooks and call them at the appropriate times, they should be defined during EACH RENDER CYCLE*/

 /* React knows best how and when to update any part of the DOM it controls. by deferring state updates to react, it can keep track of all our changes and find the most efficient moment to apply thoses changes. in fact, with useState we tell react that we want some component state. we tell react what the state shoud be, what is should look like and when we would like too update it. react takes care of the rest, in fact the useState hook will run asynchronously at the most appropriate time to ensure that the view in the browser remains dynamic, and that it's not get blocked waiting for these changes to flash. This means more responsive interfaces for our users and most importantly when we call the setter function, react will recall  our component fucntion once the new value has been applied. That means that our component will rerender with the new value applied to its JSX declared vue. STATE IS THE BEATING HEART OF OUR APPLICATION, when we change state, the component containing the state will rerender and will return a new version of the vue updated to reflect the new state value, this means that react applications are in fact STATE MACHINES*/
export default  Counter 
   