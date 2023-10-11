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
<<<<<<< HEAD

=======
    const divStyle = {
       height: '300px'
    }
>>>>>>> e88f3b52f1360b32b9fd61c610aba6441e50e4fe
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
            <div className={e.inputs}>
                <div className={e.inputdiv}>
                    <input className={e.input} type="number"/>
                </div>
<<<<<<< HEAD
                <div className={e.inputdiv}>
                    <input className={e.input} type="number"/>
=======
                <div>
                    <input className={e.inputs} type="number"/>
>>>>>>> e88f3b52f1360b32b9fd61c610aba6441e50e4fe
                </div>
            </div>
        </div>
    )
}
