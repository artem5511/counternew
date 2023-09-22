import React, {ChangeEvent} from "react";

const button = {
    backgroundColor: "black",
    width: "190px",
    minHeight: "90px",
}

type buttonPropsType = {
    name: string
}


export const Button = (props: buttonPropsType ) => {
       return (
        <div style={button}>
          <button>
              {props.name}
          </button>
        </div>
    )

}