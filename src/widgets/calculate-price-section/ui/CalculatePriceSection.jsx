import CalculatorCloth from '../../../shared/ui/calculator'
import GoldBtn from '../../../shared/ui/buttons/gold-btn'
import styles from './CalculatePriceSection.module.scss'
import plusImg from '../../../shared/assets/icons/modular-windows/X_gray.svg'
import { useState } from 'react'

const CalculatePriceSection = () => {
    const [cards, setCards] = useState([{ id: 1 }])
    const [cardsData, setCardsData] = useState({})

    const addCard = () => {
        setCards(prev => [...prev, { id: prev.length + 1 }])
    }

    const handleCardChange = (id, data) => {
        setCardsData(prev => ({ ...prev, [id]: data }))
    }

    const totalRolls = Object.values(cardsData).reduce((sum, d) => sum + (d.rolls || 0), 0)
    const totalPrice = Object.values(cardsData).reduce((sum, d) => sum + ((d.rolls || 0) * (d.pricePerMetr || 0)), 0)

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Рассчитайте стоимость ткани, ответив на три вопроса</h3>
            <div className={styles.cardsWrapper}>
                {cards.map((card) => (
                    <CalculatorCloth key={card.id} onChange={(data) => handleCardChange(card.id, data)} />
                ))}
                <GoldBtn img={plusImg} classNameImg={styles.imgParams} onClick={addCard}>Добавить товар</GoldBtn>
                <div className={styles.resultWrapper}>
                    <div className={styles.resultScore}>
                        <div>
                            <span>Общее количество рулонов:</span>
                            <div>{totalRolls}</div>
                        </div>
                        <div>
                            <span>Общее количество пачек:</span>
                            <div>{totalRolls}</div>
                        </div>
                    </div>
                    <div className={styles.resultScore}>
                        <span>Итоговая сумма за все позиции:</span>
                        <div className={styles.resultPrice}>{totalPrice} рублей</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalculatePriceSection