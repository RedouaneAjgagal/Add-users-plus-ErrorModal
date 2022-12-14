import style from './ErrorField.module.css';
import ErrorOutput from './ErrorOutput';
import React, {Fragment} from 'react';
import  ReactDOM  from 'react-dom';


const OverLay = (props) => {
    return <div className={style.errorLayer} onClick={props.onConfirm} />;
}

const ModalOverLay = (props) => {
    return (
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
    )
}

const ErrorField = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<OverLay onConfirm={props.onConfirm} />, document.getElementById('overLay-root'))}
            {ReactDOM.createPortal(<ModalOverLay textError={props.textError} onConfirm={props.onConfirm} />, document.getElementById('modalOverLay-root'))}
        </Fragment>
    )
}
export default ErrorField;