
import {Button} from "./Button";
import {Monitor} from "./Monitor";

type CounterPropsType =  {
    Inc: () => void
    Reset: () => void
    // value: number
    startValue: number
    maxValue: number
}

export const Counter = (props: CounterPropsType) => {

    const disabled = props.startValue === props.maxValue
    const disabled2 = props.startValue === 0
    console.log(disabled)
    return (
        // <div className={style.counter}>
        <>
            <Monitor
                value={props.startValue}
                maxValue={props.maxValue}
            />
            <Button disabled={disabled}
                    name={'Inc'}
                    callback={props.Inc}
                    value={props.startValue}
            />
            <Button  name={'Reset'}
                    callback={props.Reset}
                     disabled={disabled2}
                     value={props.startValue}
                   />
</>
        // </div>
    )

}
