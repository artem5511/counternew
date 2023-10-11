import {Button} from "./Button";
import {Monitor} from "./Monitor";
import e from './сounter.module.css';

type CounterPropsType = {
    Inc: () => void
    Reset: () => void
    // value: number
    startValue: number
    maxValue: number
}

export const Counter = (props: CounterPropsType) => {

    const disabled = props.startValue === props.maxValue
    const disabled2 = props.startValue === 0
    return (
        <div className={e.divmain}>
            <div className={e.counter}>
                <Monitor
                    value={props.startValue}
                    maxValue={props.maxValue}
                />
            </div>
            <div className={e.but}>
                <div>
                    <Button disabled={disabled}
                            name={'Inc'}
                            callback={props.Inc}
                            value={props.startValue}
                    />
                </div>
                <div>
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
