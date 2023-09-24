import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import './app.css';


export const App = () => {
    let maxValue = 5
    // let startValue = 0
    let [startValue, setCount] = useState<number>(0);
    // let [disable, setDisabled] = useState(false)
    const Inc = () => {
        // if (startValue < maxValue) {
            setCount(startValue + 1)
        }
    const Reset = () => {
        setCount(0)
    }


    return (
        <Counter
            startValue={startValue}
            maxValue={maxValue}
            Inc={Inc}
            Reset={Reset}
            // value={startValue}
        />
    )
}