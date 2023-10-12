import React from "react";
import b from './button.module.css'


type ButtonPropsType =  {
    name: string
    // callback: () => void
    disabled?: boolean
    value: number
}

export const Button = (props: ButtonPropsType) => {
    return (
        // <div className={b.divbut}>
            <button className={props.disabled ? b.disbutton : b.button}
                // onClick={props.callback}
                disabled={props.disabled}
            >
                {props.name}
            </button>
    )
}