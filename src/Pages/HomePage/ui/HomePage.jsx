import HeroSection from '../../../widgets/heroSection/ui/HeroSection'
import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <div className={styles.home}>
            <HeroSection />
        </div>
    )
}

export default HomePage