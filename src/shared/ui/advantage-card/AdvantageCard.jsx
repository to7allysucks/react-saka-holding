import styles from './AdvantageCard.module.scss';

const AdvantageCard = (props) => {
    const { 
        image,
        title,
        description
    } = props

    return (
        <div className={styles.advantageCard}>
            <img src={image} alt={title} />
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    );
}

export default AdvantageCard;