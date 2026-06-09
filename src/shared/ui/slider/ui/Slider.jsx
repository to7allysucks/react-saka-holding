import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { useRef, useState } from 'react';
import 'swiper/css'
import styles from "./Slider.module.scss";
import arrowImg from '../../../assets/icons/strelka_hero-slider.svg'

const Slider = (props) => {
    const {
        children,
        params = {},
<<<<<<< Updated upstream
        className,
        theme='default'
=======
        className
>>>>>>> Stashed changes
    } = props
    

    const swiperRef = useRef(null)
<<<<<<< Updated upstream
    const [swiperInstance, setSwiperInstance] = useState(null);

    if ( theme === 'default' ) {

=======
    const swiper = useSwiper()
    const [swiperInstance, setSwiperInstance] = useState(null);

>>>>>>> Stashed changes
    return (
        <div className={styles.sliderWrapper}>
            <button 
                className={`${styles.prevElement} ${className}`}
                onClick={() => swiperInstance?.slidePrev()}
                >
                <img src={arrowImg} alt="prev" />
            </button>
            <Swiper
                className={styles.slider}
                onSwiper={ (swiper) => (swiperRef.current = swiper)}
                onInit={(swiper) => setSwiperInstance(swiper)}
                breakpoints={params.breakpoints}
            >
                {children}
            </Swiper>
            <button 
                className={`${styles.nextElement} ${className}`}
                onClick={() => swiperInstance?.slideNext()}
                >
                <img src={arrowImg} alt="next" />
            </button>       
        </div>
    )
<<<<<<< Updated upstream
    }

    if ( theme === 'reviews' ) {

    return (
        <div className={styles.sliderReviewsWrapper}>
            <div className={styles.actionsWrapper}>
                <h3>Делаем все для того, чтобы вы остались довольны нашей тканью</h3>
                <div className={styles.btnsWrapper}>
                    <button 
                        className={`${styles.prevElement} ${className}`}
                        onClick={() => swiperInstance?.slidePrev()}
                        >
                        <img src={arrowImg} alt="prev" />
                    </button>
                    <button 
                        className={`${styles.nextElement} ${className}`}
                        onClick={() => swiperInstance?.slideNext()}
                        >
                        <img src={arrowImg} alt="next" />
                    </button> 
                </div>
            </div>
            <Swiper
                className={styles.slider}
                onSwiper={ (swiper) => (swiperRef.current = swiper)}
                onInit={(swiper) => setSwiperInstance(swiper)}
                breakpoints={params.breakpoints}
            >
                {children}
            </Swiper>      
        </div>
    )
    }
=======
>>>>>>> Stashed changes
}

export default Slider