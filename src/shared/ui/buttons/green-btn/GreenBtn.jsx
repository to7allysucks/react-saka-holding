import styles from './GreenBtn.module.scss'

const GreenBtn = (props) => {
    const {type, img, children, className} = props

    return (
        <button className={`${className} ${styles.button}`}>{children}<img src={img}
                                                        alt="btn"/>
        </button>
    )
}

export default GreenBtn