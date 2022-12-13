import style from './UserForm.module.css';
import UserInputs from './UserInputs';

const UserForm = (props) => {
    const saveData = (userInformation) => {
        const userData = {
            ...userInformation,
            id: Math.random().toString()
        }
        props.data(userData);
    }
    const error = (isError) => {
        props.onSaveError(isError);
    }
    return (
        <div className={style.userForm}>
            <UserInputs onSaveData={saveData} onSaveError={error} />
        </div>
    );
};
export default UserForm;