import style from './UserInputs.module.css';
import SubmitBtn from './SubmitBtn';
import ErrorField from '../errors/ErrorField';
import React, { useState } from 'react';

const UserInputs = (props) => {
    const [onUserName, setOnUserName] = useState('');
    const [isError, setIsError] = useState(false);
    const [errorText, SetErrorText] = useState('');
    const userNameHandler = (e) => {
        const userNameValue = e.target.value;
        setOnUserName(userNameValue);
    }

    const [onUserAge, setOnUserAge] = useState('');
    const userAgeHandler = (e) => {
        const userAgeValue = e.target.value;
        setOnUserAge(userAgeValue);
    }
    const submitHander = (e) => {
        e.preventDefault();
        if (onUserName.trim() === '' || +onUserAge.trim() === '') {
            setIsError(true);
            SetErrorText('Please enter a valid name and age (no empty values).');
            return;
        };
        if (+onUserAge < 1) {
            setIsError(true);
            SetErrorText('Please enter a valid age (> 0).');
            return;
        }
        const data = { userName: onUserName, userAge: onUserAge };
        props.onSaveData(data);
        setOnUserName('');
        setOnUserAge('');
        setIsError(false);
    }

    const confirmErrorHandler = () => {
        setIsError(false);
    }

    return (
        <div>
            {isError ? <ErrorField textError={errorText} onConfirm={confirmErrorHandler} /> : null}
            <form className={style.userInputs} onSubmit={submitHander}>
                <div>
                    <label htmlFor='userName'>Username</label>
                    <input type='text' id='userName' name='userName' value={onUserName} onChange={userNameHandler} />
                </div>
                <div>
                    <label htmlFor='userAge'>Age (Years)</label>
                    <input type='number' id='userAge' name='userAge' value={onUserAge} onChange={userAgeHandler} />
                </div>
                <SubmitBtn />
            </form>
        </div>
    )
}
export default UserInputs;