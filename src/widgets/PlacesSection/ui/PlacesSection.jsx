import styles from './PlacesSection.module.scss';
import NewsCard from '../../../shared/ui/news-card/NewsCard';
import img1 from '../../../shared/assets/images/hero-images-news/1.svg'
import img2 from '../../../shared/assets/images/hero-images-news/2.svg'
import img3 from '../../../shared/assets/images/hero-images-news/3.svg'
import img4 from '../../../shared/assets/images/hero-images-news/4.svg'
import img5 from '../../../shared/assets/images/hero-images-news/5.svg'
import img6 from '../../../shared/assets/images/hero-images-news/6.svg'

const PlacesSection = () => {
    const MOCK_CARD = [
        {
            title: 'Пример текста для заголовка новости',
            description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
            image: img1,
            date: "31.01.2022"
        },
        {
            title: 'Пример текста для заголовка новости',
            description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
            image: img2,
            date: "31.01.2022"
        },
        {
            title: 'Пример текста для заголовка новости',
            description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
            image: img3,
            date: "31.01.2022"
        },
        {
            title: 'Пример текста для заголовка новости',
            description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
            image: img4,
            date: "31.01.2022"
        },
        {
            title: 'Пример текста для заголовка новости',
            description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
            image: img5,
            date: "31.01.2022"
        },
        {
            title: 'Пример текста для заголовка новости',
            description: 'Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости',
            image: img6,
            date: "31.01.2022"
        },
    ]

    return (
        <div className={styles.placesContainer}>
            {MOCK_CARD.map(card => 
                <NewsCard title={card.title} description={card.description} image={card.image} date={card.date} className={styles.cardHeight} />
            )}
        </div>
    )
}

export default PlacesSection