import { SwiperSlide } from "swiper/react"
import styles from "./CardsSection.module.scss"
import Slider from "../../../shared/ui/slider/Slider"
import img1 from '../../../shared/assets/images/cloth-Slider/blue_cloth.svg'
import img2 from '../../../shared/assets/images/cloth-Slider/green_cloth.svg'
import img3 from '../../../shared/assets/images/cloth-Slider/orange_cloth.svg'
import img4 from '../../../shared/assets/images/cloth-Slider/grey_cloth.svg'
import Card from "../../../shared/ui/card/ui/Card"


const CardsSection = () => {
    const MOCK_CARDS = [
        {
            title: 'Кулинарная гладь',
            price: "11,4",
            width: 180,
            image: img1
        },
        {
            title: 'Кулинарная гладь',
            price: "11,4",
            width: 180,
            image: img2
        },
        {
            title: 'Кулинарная гладь',
            price: "11,4",
            width: 180,
            image: img3
        },
        {
            title: 'Кулинарная гладь',
            price: "11,4",
            width: 180,
            image: img4
        },
        {
            title: 'Кулинарная гладь',
            price: "11,4",
            width: 180,
            image: img1
        },
        {
            title: 'Кулинарная гладь',
            price: "11,4",
            width: 180,
            image: img2
        },
        
    ]

    const paramsSlider = {
        breakpoints: {
            0 : {
                slidesPerView: 1,
                spaceBetween: 0
            },
            480: { slidesPerView: 2,
                spaceBetween: 20
             },
            960: { slidesPerView: 4,
               spaceBetween: 20
            },
            1120: { slidesPerView: 4,
                spaceBetween: 40
             },
        }
    }
    return (
        <section className={styles.CardsSliderContainter}>
            <Slider params={paramsSlider} className={styles.btnNav}>
                {MOCK_CARDS.map(card => (
                    <SwiperSlide className={styles.slide}>
                        <Card title={card.title} price={card.price} width={card.width} image={card.image}/>
                    </SwiperSlide> 
                ))}
            </Slider>
        </section>
    )
}

export default CardsSection