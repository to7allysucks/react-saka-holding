import Slider from '../../../shared/ui/slider/Slider'
import styles from './Certificates.module.scss'
import 'swiper/css'
import { useRef, useState } from 'react'
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

    return (
        <div className={styles.container}>
            <h3>Saka Tekstil дорожит своей репутацией</h3>
            <Slider content={CERTIFICATES}/>
        </div>
    )
}

export default Certificates