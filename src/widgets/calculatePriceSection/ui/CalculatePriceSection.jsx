import CalculatorCloth from '../../../shared/ui/calculator/ui/CalculatorCloth'
import styles from './CalculatePriceSection.module.scss'

const CalculatePriceSection = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Рассчитайте стоимость ткани, ответив на три вопроса</h3>
            <CalculatorCloth />
        </div>
    )
}

export default CalculatePriceSection