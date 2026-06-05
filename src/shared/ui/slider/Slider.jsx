import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { useRef, useState } from 'react';
import styles from "./Slider.module.scss";
import arrowImg from '../../../shared/assets/icons/strelka_hero-slider.svg'

const Slider = (props) => {
    const {
        content
    } = props

    

    const swiperRef = useRef(null)
    const swiper = useSwiper()
    const [swiperInstance, setSwiperInstance] = useState(null);

    return (
        <div className={styles.sliderWrapper}>
            <button 
                className={styles.prevElement}
                onClick={() => swiperInstance?.slidePrev()}
                >
                <img src={arrowImg} alt="prev" />
            </button>
            <Swiper
                className={styles.slider}
                onSwiper={ (swiper) => (swiperRef.current = swiper)}
                onInit={(swiper) => setSwiperInstance(swiper)}
                slidesPerView={3}
                spaceBetween={40}            
            >
                {content.map(certif => (
                        <SwiperSlide className={styles.slide}>
                            <img src={certif.url} alt="certif" key={certif.key} />
                        </SwiperSlide> 
                ))}
            </Swiper>
            <button 
                className={styles.nextElement}
                onClick={() => swiperInstance?.slideNext()}
                >
                <img src={arrowImg} alt="next" />
            </button>       
        </div>
    )
}

export default Slider