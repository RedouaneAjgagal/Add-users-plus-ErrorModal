import style from './SubmitBtn.module.css';

const SubmitBtn = () => {
    return (
        <div className={style.submitBtn}>
            <button type='submit'>Add User</button>
        </div>
    )
}
export default SubmitBtn;