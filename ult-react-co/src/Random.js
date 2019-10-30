import React, {useState} from 'react';
import InteractiveView from './InteractiveView';

const Random = () => {
    const [randomNum, setRandomNum] = useState(0)
    const onRandomHandler = () => {
        setRandomNum(Math.floor(Math.random() * 1000))
    }
    return <InteractiveView 
                            value = {randomNum}
                            onAction = {onRandomHandler}
                            actionText = "Randomise Num"/>
}
export default Random;