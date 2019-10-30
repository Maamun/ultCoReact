import React, {useState} from 'react'

const CounterView = ({counterValue, onIncrement}) => (
        <>
        <p>{counterValue}</p>
        <button type='button' onClick={onIncrement}>ADD</button>
        
        </>)

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const onIncrementHandler = () => {
        setCounter(counter + 1)
    }
    return <CounterView counterValue={counter} onIncrement={onIncrementHandler}/>
}
 /* 1 - with onIncrement fucntion we are exposing function of the component(Counter), whhile the component itself takes care of how that function gets called. in this case the onClick event of the button is what is creating the onIncrement event.
   2 - Props are a form of state. we have internal component state and we have state that exists in prop. by tying the internal component state of the one component to the prop of a child component, we are allowing these components to communicate with each other. however my data is only passed into this component(CounterView), this component DOES NOT MODIFY THE DATA DIRECTLY! so the CounterView component did not go and modify counterValue when the button was clicked. what rather did is to trigger an event to tell the Counter component that STATE SOULD BE UPDATED. this is what called ONE WAY DATA FLOW or UNIDIRECTIONAL DATA FLOW. our data only flows down, child components that accept state value from parent components, NEVER MODIFY THOSE VALUES DIRECTLY!
   3 - if a child component needs to tell a parent component to make change to a value, it always does that through EVENTS, so you can think of data flowing down into your component tree and events bubbling UPWARDS.
   4 - When state changes, the component that owns that state will be re-rendered as well as its entire child component tree.
   5 - The reason that components never modify values other than what they own, is the same reason that we saw when we explored PURE FUNCTIONS. component function should be pure based on their props, this means that based on the same props, it will always return the same view. if components start modifying state that was not part of their own scopes, this would no longer be true! and we would have unexpected situations in our applications.
   6 - it also makes it easier to trace errors, when we know that components own heir own data. so if we find an error in a specific set of data, we can trace it upwards in the component tree o go find the component that owns it.
 */


export default  Counter 
   