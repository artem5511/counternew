import React from "react";

const buttons = {
    backgroundColor: "black",
    width: "190px",
    minHeight: "90px",
}
type buttonsPropsType = {
    count: number
    setCount: any
}
export const Buttons = (props: buttonsPropsType ) => {
    return (
        <div style={buttons}>
            <div>
                <button onClick={() => props.setCount(props.count+1)}>inc</button>
            </div>
            <div>
                <button>reset</button>
            </div>
        </div>
    )

}