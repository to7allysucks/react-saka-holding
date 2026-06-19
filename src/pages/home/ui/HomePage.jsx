import HeroSection from '../../../widgets/hero-section'
import SakaSection from '../../../widgets/saka-tekstil-section/ui/SakaSection' 
import Certificates from '../../../widgets/certificates-section'
import PlacesSection from '../../../widgets/places-section'
import WarningSection from '../../../widgets/warning-section'
import CardsSection from '../../../widgets/cards-section'
import FabricsSection from '../../../widgets/fabrics-section'
import OrderSection from '../../../widgets/order-section'
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.home}>
            <HeroSection />
            <PlacesSection />
            <FabricsSection />
            <SakaSection />
            <Certificates />
            <WarningSection />
            <OrderSection />
            <CardsSection />
        </div>
    )
}

export default HomePage