import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useRef, useState} from 'react'
import styles from './HeroSection.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import heroImg from '../../../shared/assets/images/hero-Slider/girl_with_cloth.svg'
import arrowImg from '../../../shared/assets/icons/strelka_hero-slider.svg'
import GoldBtn from '../../../shared/ui/buttons/gold-btn/GoldBtn'

const HeroSection = () => {

  const MOCK_SLIDERS = [
    {
      title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
      img: heroImg,
      bgLeft: "#325488",
      bgRight: "#370470"
    },
    {
      title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
      img: heroImg,
      bgLeft: "#FFAA00",
      bgRight: "#BF8F30"
    },
    {
      title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
      img: heroImg,
      bgLeft: "#33CCCC",
      bgRight: "#009999"
    },
    {
      title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
      img: heroImg,
      bgLeft: "#BF3030",
      bgRight: "#FF7373"
    },
    {
      title: 'Здесь будет слайдер с различными акциями или специальными предложениями',
      img: heroImg,
      bgLeft: "#FFFF00",
      bgRight: "#BFBF30"
    },
  ]

  const [isActiveSlide, setIsActiveSlide] = useState(0)

  const swiperRef = useRef(null)

  return (
    <div className={styles.heroWrapper}>
      <Swiper
        modules={[Pagination]}
        className={styles.slider}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: `.${styles.sliderPagination}`,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          }
        }}
        onSlideChange={(swiper) => {
          setIsActiveSlide(swiper.realIndex)
        }}
      >

        {MOCK_SLIDERS.map(slide => (
          <SwiperSlide className={styles.slide}
                       style={{background: `linear-gradient(-45deg, ${slide.bgLeft} 50%, ${slide.bgRight} 50%)`}}>
            <div className={styles.content}>
              <h2>Здесь будет слайдер с различными акциями или <span className={styles.accentInfo}>специальными предложениями</span></h2>
              <GoldBtn type='button' img={arrowImg} className={`${styles.button} ${styles.btnHero}`}>Подробнее</GoldBtn>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.paginationWrapper}>
        <div className={styles.sliderPagination}></div>

        <span className={styles.counter}>
          {String(isActiveSlide + 1).padStart(2, '0')}
          <span>
            {' / '}
            {String(MOCK_SLIDERS.length).padStart(2, '0')}
          </span>
        </span>
      </div>
      <img src={heroImg} alt="heroimg"/>

    </div>
  )
}

export default HeroSection