import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import './app.css';
import {Setcounter} from "./components/Setcounter";

export const App = () => {
    // let maxValue = 5
    let [maxValue, setValue] = useState<number>(5);
    // let startValue = 0

    let [startValue, setCount] = useState<number>(0);
    let [valueCount, setValueCount] = useState(startValue);
    // let [disable, setDisabled] = useState(false)
    const Inc = () => {
        // if (startValue < maxValue) {
        setValueCount(valueCount + 1)
    }
    const Reset = () => {
        setValueCount(startValue)
    }
    console.log(maxValue)

    const setToLocalstorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(startValue))
    }

    const getFromLocalStorage = () => {
        let startValueSave = localStorage.getItem('counterValue')
        if (startValueSave) {
            let newValue = JSON.parse(startValueSave)
            setCount(newValue)
        }
    }

    const disabled = startValue === maxValue

    return (
        <>
            <button onClick={getFromLocalStorage}>GET</button>
            <div>
                <h3>{startValue}</h3>
            </div>
            <div>
                <h3>LocalStorage</h3>
            </div>

            <Setcounter
                startValue={startValue}
                maxValue={maxValue}
                disabled={disabled}
                setToLocalstorageHandler={setToLocalstorageHandler}
                setValue={setValue}

            />
            <Counter
                startValue={startValue}
                maxValue={maxValue}
                valueCount={valueCount}
                Inc={Inc}
                Reset={Reset}
                // value={startValue}
            />
        </>
    )
}