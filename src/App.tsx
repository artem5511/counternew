import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import './app.css';
import {Setcounter} from "./components/Setcounter";

export const App = () => {
    // let maxValue = 5
    let [maxValue, setValue] = useState<number>(10);
    // let startValue = 0

    let [startValue, setCount] = useState<number>(0);
    let [valueCount, setValueCount] = useState<number>(startValue);
    // let [disable, setDisabled] = useState(false)
    const Inc = () => {
        // if (startValue < maxValue) {
        setValueCount(Number(valueCount) + 1)
    }
    const Reset = () => {
        setValueCount(startValue)
    }
    // console.log(typeof maxValue)
    console.log('start' + startValue)
    console.log('value' + valueCount)
    console.log('max' + maxValue)
    console.log(valueCount===maxValue)

    const setToLocalstorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(startValue))
    }
    // const getFromLocalStorage = () => {
    //     let startValueSave = localStorage.getItem('counterValue')
    //     if (startValueSave) {
    //         let newValue = JSON.parse(startValueSave)
    //         setCount(newValue)
    //     }
    // }

    return (
        <>
            {/*<button onClick={getFromLocalStorage}>GET</button>*/}
            {/*<div>*/}
            {/*    <h3>{startValue}</h3>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h3>LocalStorage</h3>*/}
            {/*</div>*/}
            <Setcounter
                startValue={startValue}
                maxValue={maxValue}
                setToLocalstorageHandler={setToLocalstorageHandler}
                setValue={setValue}
                setCount={setCount}
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