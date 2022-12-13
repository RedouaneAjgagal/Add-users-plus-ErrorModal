import style from './OutputItem.module.css';

const OutputItem = (props) => {
    const outputText = `${props.userName} (${props.userAge} Years Old)`;
    return (
        <li className={style.outputItem}>
            <p>{outputText}</p>
        </li>
    )
}
export default OutputItem;