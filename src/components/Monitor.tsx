import React from "react";
import s from './monitor.module.css';

type MonPropsType={
    valueCount: number
    maxValue: number
}
export const Monitor = (props: MonPropsType) => {
    return (
        <div>
            <div className={props.valueCount == props.maxValue ? s.rmonitor : s.gmonitor}>
                {props.valueCount}
            </div>
        </div>
    )
}