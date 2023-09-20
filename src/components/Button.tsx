import React, {ChangeEvent} from "react";

const button = {
    backgroundColor: "black",
    width: "190px",
    minHeight: "90px",
}

type buttonPropsType = {
    name: string
    callback: () => void
}


export const Button = (props: buttonsPropsType ) => {
       return (
        <div style={button}>
          <button>
              {props.name}
              {props.callback}
          </button>
        </div>
    )

}