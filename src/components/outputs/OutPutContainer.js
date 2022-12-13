import containerStyle from '../inputs/UserForm.module.css';
import style from './OutPutContainer.module.css';
import OutputItem from './OutputItem';

const OutPutContainer = (props) => {
    return (
        <div className={containerStyle.userForm}>
            <ul className={style.outPutContainer}>
                {props.data.map(item => {
                    return <OutputItem userName={item.userName} userAge={item.userAge} key={item.id} />
                })}
            </ul>
        </div>
    )
}
export default OutPutContainer