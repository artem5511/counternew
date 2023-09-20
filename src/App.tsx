import React, {useState} from 'react';
import {Counter} from "./components/Counter";

export type AppPropsType = {
    startValue: number
    maxValue: number
}


export const App = (props: AppPropsType) => {
    let [count, setCount] = useState<number>(props.startValue);

    const Inc = () => {
        if (count < props.maxValue) {
            setCount(count + 1)
        }
    }
    const Reset = () => {
        setCount(props.startValue)
    }


    return (
        <Counter
            startValue={props.startValue}
            maxValue={props.startValue}
            inc={Inc}
            reset={Reset}
        />
    )
}