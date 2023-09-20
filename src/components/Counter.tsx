import React, {useState} from "react";
import {Buttons} from "./Buttons";
import {Dashboard} from "./Dashboard";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{backgroundColor: "darkgrey", width: "300px", minHeight: "200px"}}>
            <Dashboard count={count} setCount={setCount}
            />
            <Buttons count={count} setCount={setCount}/>
        </div>
    )
}