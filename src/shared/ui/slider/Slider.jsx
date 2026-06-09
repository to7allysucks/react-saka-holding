import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { useRef, useState } from 'react';
import 'swiper/css'
import styles from "./Slider.module.scss";
import arrowImg from '../../../shared/assets/icons/strelka_hero-slider.svg'

const Slider = (props) => {
    const {
        children,
        params = {},
        className
    } = props
    

    const swiperRef = useRef(null)
    const swiper = useSwiper()
    const [swiperInstance, setSwiperInstance] = useState(null);

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
}

export default Slider