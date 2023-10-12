import {Button} from "./Button";
import e from './setсounter.module.css';
import {ChangeEvent, useState} from "react";

type CounterPropsType = {
    // value: number
    disabled?: boolean
    startValue: number
    maxValue: number
    // setToLocalstorageHandler: () => void
    setValue: (event:any)=> void
}

export const Setcounter = (props: CounterPropsType) => {
    const onChangeSetLocalTitle = (event: ChangeEvent<HTMLInputElement>) => props.setValue(event.currentTarget.value)
    return (
        <div className={e.divmain}>
                <div className={e.butmon}>
                    <Button
                        name={'SET'}
                        // callback={props.setToLocalstorageHandler}
                        value={props.maxValue}
                    />
                </div>
            <div className={e.but}>
                <div className={e.incont}>
                    <input className={e.inputs} type="number" onChange={onChangeSetLocalTitle}/>
                    <span>max value</span>
                </div>
                <div className={e.incont}>
                    <input className={e.inputs} type="number"/>
                    <span>start value</span>
                </div>
            </div>
        </div>
    )
}
