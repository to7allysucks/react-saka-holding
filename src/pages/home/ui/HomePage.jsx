<<<<<<< Updated upstream
import CalculatePriceSection from '../../../widgets/calculatePriceSection/ui/CalculatePriceSection'
import Certificates from '../../../widgets/certificatesSection/ui/Certificates'
import HeroSection from '../../../widgets/heroSection/ui/HeroSection'
import Cards from '../../../widgets/cards/ui/Cards'
import SakaSection from '../../../widgets/sakaTekstilSection/ui/SakaSection'
import Card from '../../../shared/ui/card/ui/Card' 
import CalculatePriceSection from '../../../widgets/calculatePriceSection'
import Certificates from '../../../widgets/certificatesSection'
import HeroSection from '../../../widgets/heroSection'
import AdvantageSection from '../../../widgets/advantages-section'
import PlacesSection from '../../../widgets/PlacesSection'
import CardsSection from '../../../widgets/CardsSection'
import styles from './HomePage.module.scss'
import ReviewsSection from '../../../widgets/reviews-section/ui/ReviewsSection'
=======
import CalculatePriceSection from '../../../widgets/calculatePriceSection'
import Certificates from '../../../widgets/certificatesSection'
import HeroSection from '../../../widgets/heroSection'
import styles from './HomePage.module.scss'
import PlacesSection from '../../../widgets/PlacesSection'
import CardsSection from '../../../widgets/CardsSection'
>>>>>>> Stashed changes

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