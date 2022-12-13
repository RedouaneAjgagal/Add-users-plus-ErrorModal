import style from './ErrorField.module.css';
import ErrorOutput from './ErrorOutput';
const ErrorField = (props) => {
    return (
        <div>
            <div className={style.errorLayer} onClick={props.onConfirm} />
            <div className={style.errorField}>
                <div className={style.title}>
                    <h2>Invalid input</h2>
                </div>
                <div className={style.outputError}>
                    <ErrorOutput textError={props.textError} />
                </div>
                <div className={style.buttonDiv}>
                    <button onClick={props.onConfirm} type='button'>Okay</button>
                </div>
            </div>
        </div>
    )
}
export default ErrorField;