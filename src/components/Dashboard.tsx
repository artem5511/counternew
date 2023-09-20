import React from "react";

const dashboard = {
    backgroundColor: "white",
    width: "50px",
    minHeight: "60px",
    color: "blue",
    fontSize: "35px"
}
type numPropsType = {
    count: number
    setCount: any
}

export const Dashboard = (props: numPropsType) => {

    return (
        <div>
            <div style={dashboard}>
                {props.count}
            </div>
        </div>
    )

}