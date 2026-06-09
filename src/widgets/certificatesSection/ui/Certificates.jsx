import Slider from '../../../shared/ui/slider/Slider'
import styles from './Certificates.module.scss'
import 'swiper/css'
import { useRef, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import certif1 from '../../../shared/assets/images/sertif-Slider/sertif_1.svg'
import certif2 from '../../../shared/assets/images/sertif-Slider/sertif_2.svg'
import certif3 from '../../../shared/assets/images/sertif-Slider/sertif_3.svg'



const Certificates = () => {

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

    const paramsSlider = {
        spaceBetween: 40,
        breakpoints: {
            0: { slidesPerView: 1 },
            960: { slidesPerView: 3 }
        }
    }
    

    return (
        <div className={styles.container}>
            <h3>Saka Tekstil дорожит своей репутацией</h3>
            <Slider params={paramsSlider}>
                {CERTIFICATES.map(certif => (
                    <SwiperSlide className={styles.slide} key={certif.key}>
                    <img src={certif.url} alt="certif"  />
                </SwiperSlide> 
                ))}
            </Slider>
        </div>
    )
}

export default Certificates