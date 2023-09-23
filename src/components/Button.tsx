import React from "react";

const button = {
    backgroundColor: "black",
    width: "190px",
    minHeight: "90px",
}

type ButtonPropsType =  {
    name: string
    callback: () => void
    disabled?: boolean
    value: number
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div style={button}>
            <button
                onClick={props.callback}
                disabled={props.disabled}
            >
                {props.name}
            </button>
        </div>
    )
}