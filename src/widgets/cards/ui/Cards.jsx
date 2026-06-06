import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import styles from './Cards.module.scss'
import blueCloth from '../../../shared/assets/images/cloth-Slider/blue_cloth.svg'
import greyCloth from '../../../shared/assets/images/cloth-Slider/grey_cloth.svg'
import orangeCloth from '../../../shared/assets/images/cloth-Slider/orange_cloth.svg'
import greenCloth from '../../../shared/assets/images/cloth-Slider/green_cloth.svg'
import arrowIcon from '../../../shared/assets/icons/arrow_cloth-slider.svg'

const CARDS = [
    {
        id: 1,
        title: 'Кулинарная гладь',
        price: '11,4$',
        length: '180 см',
        image: blueCloth,
        isActive: true,
    },
    {
        id: 2,
        title: 'Кулинарная гладь',
        price: '13$',
        length: '180 см',
        image: greyCloth,
    },
    {
        id: 3,
        title: 'Кулинарная гладь',
        price: '122,4$',
        length: '180 см',
        image: orangeCloth,
    },
    {
        id: 4,
        title: 'Кулинарная гладь',
        price: '13,84$',
        length: '180 см',
        image: greenCloth,
    },
    {
        id: 5,
        title: 'Кулинарная гладь',
        price: '11,4$',
        length: '180 см',
        image: blueCloth,
    },
    {
        id: 6,
        title: 'Кулинарная гладь',
        price: '13$',
        length: '180 см',
        image: greyCloth,
    },
]

const Cards = () => {
    const swiperRef = useRef(null)

    return (
        <section className={styles.cardsSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Недавно просмотренные</h2>

                <div className={styles.sliderWrapper}>
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        type="button"
                        aria-label="Предыдущие товары"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <img src={arrowIcon} alt="" aria-hidden="true" />
                    </button>

                    <Swiper
                        className={styles.slider}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={28}
                        slidesPerView={4}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 18,
                            },
                            560: {
                                slidesPerView: 2,
                                spaceBetween: 22,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            900: {
                                slidesPerView: 4,
                                spaceBetween: 28,
                            },
                        }}
                    >
                        {CARDS.map((card) => (
                            <SwiperSlide className={styles.slide} key={card.id}>
                                <article className={`${styles.card} ${card.isActive ? styles.cardActive : ''}`}>
                                    <img className={styles.cardImage} src={card.image} alt={card.title} />

                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>{card.title}</h3>

                                        <div className={styles.metaRow}>
                                            <span className={styles.price}>{card.price}</span>
                                            <span className={styles.length}>{card.length}</span>
                                        </div>

                                        <button className={styles.moreButton} type="button">
                                            Подробнее
                                            <img src={arrowIcon} alt="" aria-hidden="true" />
                                        </button>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        type="button"
                        aria-label="Следующие товары"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <img src={arrowIcon} alt="" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Cards
