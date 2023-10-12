import {Button} from "./Button";
import {Monitor} from "./Monitor";
import e from './сounter.module.css';


type CounterPropsType = {
    Inc: () => void
    Reset: () => void
    // value: number
    startValue: number
    maxValue: number
    valueCount: number
}

export const Counter = (props: CounterPropsType) => {

    const disabled = props.valueCount >= props.maxValue
    const disabled2 = props.valueCount == props.startValue
    return (
        <div className={e.divmain}>
            <div className={e.counter}>
                <Monitor
                    value={props.valueCount}
                    maxValue={props.maxValue}
                />
            </div>
            <div className={e.but}>
                <div className={e.buts}>
                    <Button disabled={disabled}
                            name={'Inc'}
                            callback={props.Inc}
                            value={props.startValue}
                    />
                </div>
                <div className={e.buts}>
                    <Button name={'Reset'}
                            callback={props.Reset}
                            disabled={disabled2}
                            value={props.startValue}
                    />
                </div>

            </div>
        </div>
    )
}
