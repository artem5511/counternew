import React from 'react';

const buttons = {
    backgroundColor: "black",
    width: "190px",
    minHeight: "90px",
}
const dashboard = {
    backgroundColor: "white",
    width: "50px",
    minHeight: "60px",
    color: "blue",
    fontSize: "35px"
}

export const App = () => {
    return (
        <div style={{backgroundColor: "darkgrey", width: "300px", minHeight: "200px"}}>
            <div>
                <div style={dashboard}>
                    0
                </div>
            </div>
            <div style={buttons}>
                <div>
                    <button>inc</button>
                </div>
                <div>
                    <button>reset</button>
                </div>
            </div>
        </div>
    )
}