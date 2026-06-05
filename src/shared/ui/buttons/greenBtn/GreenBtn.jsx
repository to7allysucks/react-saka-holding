import styles from './greenBtn.module.scss'

const GreenBtn = (props) => {
    const {type, img, children, className} = props

    return (
        <button className={`${className}`}>{children}<img src={img}
                                                        alt="btn"/>
        </button>
    )
}

export default GreenBtn