import styles from './CardSkeleton.module.scss'

const CardSkeleton = () => (
    <div className={styles.card}>
        <div className={`${styles.img} ${styles.shimmer}`} />
        <div className={styles.body}>
            <div className={`${styles.line} ${styles.shimmer}`} />
            <div className={`${styles.lineShort} ${styles.shimmer}`} />
            <div className={`${styles.btn} ${styles.shimmer}`} />
        </div>
    </div>
)

export default CardSkeleton
