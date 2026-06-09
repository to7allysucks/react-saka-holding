import CalculatePriceSection from '../../../widgets/calculatePriceSection/ui/CalculatePriceSection'
import HeroSection from '../../../widgets/heroSection/ui/HeroSection'
import SakaSection from '../../../widgets/sakaTekstilSection/ui/SakaSection' 
import CalculatePriceSection from '../../../widgets/calculatePriceSection'
import Certificates from '../../../widgets/certificatesSection'
import HeroSection from '../../../widgets/heroSection'
import AdvantageSection from '../../../widgets/advantages-section'
import PlacesSection from '../../../widgets/PlacesSection'
import styles from './HomePage.module.scss'
import ReviewsSection from '../../../widgets/reviews-section/ui/ReviewsSection'
import CardsSection from '../../../widgets/CardsSection'

const HomePage = () => {
    return (
        <div className={styles.home}>
            <HeroSection />
            <NewsCard />
            <SakaSection />
            <Certificates />
            <AdvantageSection />
            <CalculatePriceSection />
            <PlacesSection />
            <CardsSection />
            <ReviewsSection />
        </div>
    )
}

export default HomePage