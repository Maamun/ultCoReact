import React, {useState} from 'react';

const ErrorMessage = () => <p>Oh noes you broke it!</p>

/* components always starts with CAPITAL LETTER !!! */
const UltimateMachine =  () => { 

    const [showError, setShowError] = useState(false)

    const onClickHandler = () => {
        setShowError(i => !i)
    }
   
    return (<section>
    <h1>The Ultimate Machine</h1>
    {showError && <ErrorMessage />}
    {/* boolean AND operator */}
    <button 
            type='button' 
            onClick={onClickHandler}
            aria-pressed={showError}>Toogle Error</button>
    
    </section>)
}


export default UltimateMachine;