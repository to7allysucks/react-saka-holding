import CalculatePriceSection from '../../../widgets/calculatePriceSection/ui/CalculatePriceSection'
import Certificates from '../../../widgets/certificatesSection/ui/Certificates'
import HeroSection from '../../../widgets/heroSection/ui/HeroSection'
import NewsCard from '../../../shared/ui/news-card/NewsCard'
import Cards from '../../../widgets/cards/ui/Cards'
import SakaSection from '../../../widgets/sakaTekstilSection/ui/SakaSection'
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.home}>
            <HeroSection />
            <NewsCard />
            <SakaSection />
            <Certificates />
            <Cards />
            <CalculatePriceSection />
        </div>
    )
}

export default HomePage