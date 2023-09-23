import React from "react";



type ButtonPropsType =  {
    name: string
    callback: () => void
    disabled?: boolean
    value: number
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button
                onClick={props.callback}
                disabled={props.disabled}
            >
                {props.name}
            </button>
        </div>
    )
}