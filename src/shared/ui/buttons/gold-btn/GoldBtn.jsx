import styles from './GoldBtn.module.scss'

const GoldBtn = (props) => {
    const {
        type = 'button',
        img,
        children,
        className,
        classNameImg,
        onClick,
    } = props

    return (
        <button type={type} className={`${className} ${styles.button}`} onClick={onClick}>
            {children}
            <img src={img} alt="btn" className={classNameImg}/>
        </button>
    )
}

export default GoldBtn