import React from "react";
import s from './monitor.module.css';

type MonPropsType={
    value: number
    maxValue: number
}
export const Monitor = (props: MonPropsType) => {
    return (
        <div>
            <div className={props.value === props.maxValue ? s.rmonitor : s.gmonitor}>
                {props.value}
            </div>
        </div>
    )
}