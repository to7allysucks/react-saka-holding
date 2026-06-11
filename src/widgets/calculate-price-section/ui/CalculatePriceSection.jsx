import CalculatorCloth from '../../../shared/ui/calculator'
import GoldBtn from '../../../shared/ui/buttons/gold-btn'
import styles from './CalculatePriceSection.module.scss'
import plusImg from '../../../shared/assets/icons/modular-windows/X_gray.svg'
import { useState } from 'react'

const CalculatePriceSection = () => {

    // [isCard, setIsCard] = useState(1)

    const calcPrice = () => {
        
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Рассчитайте стоимость ткани, ответив на три вопроса</h3>
            <div className={styles.cardsWrapper}> 
                <CalculatorCloth />
                <GoldBtn img={plusImg} classNameImg={styles.imgParams}>Добавить товар</GoldBtn>
                <div className={styles.resultWrapper}>
                    <div className={styles.resultScore}>
                        <div>
                            <span>Общее количество рулонов:</span>
                            <div>10</div>
                        </div>
                        <div>
                            <span>Общее количество пачек:</span>
                            <div>24</div>
                        </div>
                    </div>
                    <div className={styles.resultScore}>
                        <span>Итоговая сумма за все позиции:</span>
                        <div className={styles.resultPrice}>100 245 $</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalculatePriceSection