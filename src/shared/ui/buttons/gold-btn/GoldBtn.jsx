import styles from './GoldBtn.module.scss'

const GoldBtn = (props) => {
    const {type='button',
        img,
        children,
        className,
        classNameImg,
    } = props

    return (
        <button className={`${className} ${styles.button}`}>
            {children}
            <img src={img} alt="btn" className={classNameImg}/>
        </button>
    )
}

export default GoldBtn