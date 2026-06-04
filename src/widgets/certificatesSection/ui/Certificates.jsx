import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import styles from './Certificates.module.scss'
import 'swiper/css'
import arrowImg from '../../../shared/assets/icons/strelka_hero-slider.svg'
import { useRef, useState } from 'react'
import certif1 from '../../../shared/assets/images/sertif-Slider/sertif_1.svg'
import certif2 from '../../../shared/assets/images/sertif-Slider/sertif_2.svg'
import certif3 from '../../../shared/assets/images/sertif-Slider/sertif_3.svg'



const Certificates = () => {
    const swiperRef = useRef(null)
    const swiper = useSwiper()
    const [swiperInstance, setSwiperInstance] = useState(null);


    const CERTIFICATES = [
        {
            key: "certificate_1",
            url: certif1
        },
        {
            key: "certificate_2",
            url: certif2
        },
        {
            key: "certificate_3",
            url: certif3
        },
        {
            key: "certificate_4",
            url: certif1
        },
        {
            key: "certificate_5",
            url: certif2
        },
    ]

    return (
        <div className={styles.container}>
            <h3>Saka Tekstil дорожит своей репутацией</h3>
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
                    {CERTIFICATES.map(certif => (
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
        </div>
    )
}

export default Certificates