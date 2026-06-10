import styles from './GoldBtn.module.scss'

const GoldBtn = (props) => {
    const {type, img, children, className} = props

    return (
        <button className={`${className} ${styles.button}`}>{children}<img src={img}
                                                        alt="btn"/>
        </button>
    )
}

export default GoldBtn