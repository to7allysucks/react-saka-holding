import CalculatePriceSection from '../../../widgets/calculatePriceSection/ui/CalculatePriceSection'
import Certificates from '../../../widgets/certificatesSection/ui/Certificates'
import HeroSection from '../../../widgets/heroSection/ui/HeroSection'
import NewsCard from '../../../shared/ui/news-card/NewsCard'
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.home}>
            <HeroSection />
            <NewsCard />
            <Certificates />
            <CalculatePriceSection />
        </div>
    )
}

export default HomePage