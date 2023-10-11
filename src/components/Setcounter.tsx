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
    const divStyle = {
       height: '300px'
    }
    return (
        <div>
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
                <div>
                    <input className={e.inputs} type="number"/>
                </div>
                <div>
                    <input className={e.inputs} type="number"/>
                </div>
            </div>
        </div>
    )
}
