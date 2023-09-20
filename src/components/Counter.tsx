import React, {useState} from "react";
import {Buttons} from "./Button";
import {Monitor} from "./Monitor";
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;
import {AppPropsType} from "../App";

type counterPropsType = AppPropsType & {
    Inc: () => void
    Reset: () => void
}

export const Counter = (props: counterPropsType) => {
    return (
        <div style={{backgroundColor: "darkgrey", width: "300px", minHeight: "200px"}}>
            <Monitor value={props.startValue}/>
            <Button
                reset={props.Inc}
                inc={props.Reset}
            />
        </div>
    )
}