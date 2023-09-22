import React from "react";

const monitor = {
    backgroundColor: "white",
    width: "50px",
    minHeight: "60px",
    color: "blue",
    fontSize: "35px"
}

type monPropsType={
    value: number
}

export const Monitor = (props: monPropsType) => {
    return (
        <div>
            <div style={monitor}>
                {props.value}
            </div>
        </div>
    )

}