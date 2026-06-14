import styles from "./AboutPage.module.scss"
import AboutSaka from '../../../widgets/about-saka-tekstil'


const AboutPage = () => {
    return(
        <div className={styles.about}>
            <AboutSaka />
            </div>
    )
}

export default AboutPage