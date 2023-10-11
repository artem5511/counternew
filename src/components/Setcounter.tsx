import {Button} from "./Button";
import e from './setсounter.module.css';

type CounterPropsType = {
    // value: number
    disabled?: boolean
    startValue: number
    maxValue: number
    setToLocalstorageHandler: () => void
}

export const Setcounter = (props: CounterPropsType) => {
    return (
        <div className={e.divmain}>
            <div className={e.counter}>
                <div className={e.butmon}>
                    <Button
                        name={'SET'}
                        callback={props.setToLocalstorageHandler}
                        disabled={props.disabled}
                        value={props.startValue}
                    />
                </div>
            </div>
            <div className={e.but}>
                <div className={e.incont}>
                    <input className={e.inputs} type="number"/>
                    {"max value"}
                </div>
                <div className={e.incont}>
                    <input className={e.inputs} type="number"
                           disabled={props.disabled}/>
                    {'start start'}
                </div>
            </div>
        </div>
    )
}
