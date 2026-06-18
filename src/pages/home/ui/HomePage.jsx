import HeroSection from '../../../widgets/hero-section'
import CalculatePriceSection from '../../../widgets/calculate-price-section'
import SakaSection from '../../../widgets/saka-tekstil-section/ui/SakaSection' 
import Certificates from '../../../widgets/certificates-section'
import AdvantagesSection from '../../../widgets/advantages-section'
import PlacesSection from '../../../widgets/places-section'
import ReviewsSection from '../../../widgets/reviews-section/ui/ReviewsSection'
import CardsSection from '../../../widgets/cards-section'
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.home}>
            <HeroSection />
            <PlacesSection />
            <SakaSection />
            <Certificates />
            <CardsSection />
        </div>
    )
}

export default HomePage