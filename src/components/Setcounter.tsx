import {Button} from "./Button";
import e from './setсounter.module.css';

type CounterPropsType = {
    Inc: () => void
    Reset: () => void
    // value: number
    startValue: number
    maxValue: number
}

export const Setcounter = (props: CounterPropsType) => {

    const disabled = props.startValue === props.maxValue
    const disabled2 = props.startValue === 0
    return (
        <div>
            <div className={e.counter}>
                <div className={e.butmon}>
                    <Button name={'SET'} callback={props.Inc} value={999}/>
                </div>
            </div>
            <div className={e.but}>
                <div>
                    <input className={e.inputs} type="number"/>
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
