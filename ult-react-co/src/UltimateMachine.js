import React, {useState} from 'react';

const OnMessage = () => <p>The machine is On!</p>
const OffMessage = () => <p>The machine is Off!</p>
/* components always starts with CAPITAL LETTER !!! */
const UltimateMachine =  () => { 

    const [isOn, setIsOn] = useState(false)

    const onClickHandler = () => {
        setIsOn(s => !s)
    }
   
    return (<section>
    <h1>The Ultimate Machine</h1>
    {isOn? <OnMessage /> : <OffMessage />}
    <button type='button' onClick={onClickHandler}>On/Off</button>
    
    </section>)
}


export default UltimateMachine;