import {Button} from "./Button";
import e from './setсounter.module.css';
import w from './button.module.css';

type CounterPropsType = {
    Inc: () => void
    Reset: () => void
    // value: number
    startValue: number
    maxValue: number
}

export const Setcounter = (props: CounterPropsType) => {
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
                <div>
                    <input className={e.inputs} type="number"/>
                </div>
            </div>
        </div>
    )
}
