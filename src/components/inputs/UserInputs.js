import style from './UserInputs.module.css';
import SubmitBtn from './SubmitBtn';
import ErrorField from '../errors/ErrorField';
import React, { Fragment, useRef, useState } from 'react';

const UserInputs = (props) => {
    const [isError, setIsError] = useState(false);
    const [errorText, SetErrorText] = useState('');
    const userName = useRef();
    const userAge = useRef();
    const submitHander = (e) => {
        const enteredUserName = userName.current.value;
        const enteredUserAge = userAge.current.value;
        e.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setIsError(true);
            SetErrorText('Please enter a valid name and age (no empty values).');
            return;
        };
        if (+enteredUserAge < 1) {
            setIsError(true);
            SetErrorText('Please enter a valid age (> 0).');
            return;
        }
        const data = { userName: enteredUserName, userAge: enteredUserAge };
        props.onSaveData(data);
        setIsError(false);
        userName.current.value = '';
        userAge.current.value = '';
    }

    const confirmErrorHandler = () => {
        setIsError(false);
    }

    return (
        <Fragment>
            {isError ? <ErrorField textError={errorText} onConfirm={confirmErrorHandler} /> : null}
            <form className={style.userInputs} onSubmit={submitHander}>
                <div>
                    <label htmlFor='userName'>Username</label>
                    <input type='text' id='userName' name='userName' ref={userName} />
                </div>
                <div>
                    <label htmlFor='userAge'>Age (Years)</label>
                    <input type='number' id='userAge' name='userAge' ref={userAge} />
                </div>
                <SubmitBtn />
            </form>
        </Fragment>
    )
}
export default UserInputs;