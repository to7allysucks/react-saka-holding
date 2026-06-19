import styles from "./NewsPage.module.scss"
import PlacesSection from "../../../widgets/places-section"
import PresentationSaka from '../../../widgets/presentation-saka'

const NewsPage = () => {
    return (
            <div className={styles.news}>
                <PresentationSaka />
            </div>
    )
}

export default NewsPage