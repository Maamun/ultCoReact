import React from 'react'
const Counter = () => {
    const clickHandler = () => {
        console.log('The button was pressed')
    }
    return (
        <>
        <p>0</p>
        <button type='button' onClick={clickHandler}>ADD</button>
        </>)
}
 
export default  Counter 
   