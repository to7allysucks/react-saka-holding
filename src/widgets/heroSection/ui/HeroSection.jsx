import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'
import styles from './HeroSection.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import heroImg from '../../../shared/assets/images/hero-Slider/girl_with_cloth.svg'
import arrowImg from '../../../shared/assets/icons/strelka_hero-slider.svg'

const HeroSection = () => {
    
    const MOCK_SLIDERS =[
        {
            title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
            img: heroImg,
            bg: "green"
        },
        {
            title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
            img: heroImg,
            bg: "purple"

        },
        {
            title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
            img: heroImg,
            bg: "yellow"

        },
        {
            title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
            img: heroImg,
            bg: "red"

        },
        {
            title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
            img: heroImg,
            bg: "gray"

        },
    ]

    const swiperRef = useRef(null)

    return (
        <div className={styles.heroWrapper}>
            <Swiper
                modules={[Pagination]} 
                className={styles.slider}
                onSwiper={ (swiper) => (swiperRef.current = swiper) }
                slidesPerView={1}
                Pagination= {{
                        clickable: true,
                        el: '.sliderPagination'
                        // renderBullet: (index, className) => {return '<span class="' + className + '">' + (index + 1) + "</span>";}
                    }}
                    >

                {MOCK_SLIDERS.map( slide  => (
                    <SwiperSlide className={styles.slide} style={{backgroundColor: slide.bg}}>
                        <div className={styles.content}>
                            <h2>{slide.title}</h2>
                            <button className={styles.btnHero}>Подробнее <img src={arrowImg} alt="btn" /></button>
                            <div className={styles.sliderPagination}></div>
                        </div>
                        <img src={slide.img} alt="heroimg" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSection