import CalculatePriceSection from '../../../widgets/calculatePriceSection/ui/CalculatePriceSection'
import Certificates from '../../../widgets/certificatesSection/ui/Certificates'
import HeroSection from '../../../widgets/heroSection/ui/HeroSection'
import Cards from '../../../widgets/cards/ui/Cards'
import SakaSection from '../../../widgets/sakaTekstilSection/ui/SakaSection'
import styles from './HomePage.module.scss'
import PlacesSection from '../../../widgets/PlacesSection/ui/PlacesSection'

const HomePage = () => {
    return (
        <div className={styles.home}>
            <HeroSection />
            <NewsCard />
            <SakaSection />
            <Certificates />
            <Cards />
            <CalculatePriceSection />
            <PlacesSection />
        </div>
    )
}

export default HomePage