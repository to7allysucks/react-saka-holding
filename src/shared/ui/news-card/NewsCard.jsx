import styles from './NewsCard.module.scss';
import arrowIcon from '../../../shared/assets/icons/arrow_hero-slider.svg';

const NewsCard = (props) => {
    const { image,
        title,
        description,
        date,
        link,
        className
        } = props

    return (
        <a href={link || '#'} className={`${styles.newsCard} ${className || ''}`}>
            <div className={`${styles.imageWrapper}`}>
                <img src={image} alt={title} className={`${styles.image}`} />
                <div className={`${styles.overlay}`}></div>
            </div>

            <div className={`${styles.arrowButton}`}>
                <img src={arrowIcon} alt="arrow" />
            </div>

            <div className={`${styles.content}`}>
                <h3 className={`${styles.title}`}>{title}</h3>
                <p className={`${styles.description}`}>{description}</p>
                <span className={`${styles.date}`}>{date}</span>
            </div>
        </a>
    )
}

export default NewsCard;