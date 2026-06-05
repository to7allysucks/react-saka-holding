import styles from './CalculatorCloth.module.scss'

const CalculatorCloth = () => {
    return (
        <div className={styles.container}>
            <div className={styles.chooseParamsContainter}>
                <div className={styles.enterParamsContainer}>
                    <div className={styles.variants}>
                        <h5>1. Выберите необходимую ткань</h5>
                        <select  className={styles.ClothSelector} name="clothName" id="cloth">
                            <option  className={styles.ClothOption} value="" default >Выберите ткань</option>
                        </select>
                    </div>
                    <div className={styles.variants}>
                        <h5>2. Введите общее количество рулонов</h5>
                        <div className={styles.counterCloth}>
                            <button>-</button>
                            <input type="text" placeholder='Кол-во рулонов...'/>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className={styles.pricesContainer}>
                    <div className={styles.variantPrices}>
                        <span>Цена за КГ:</span>
                        <h5>10 рублей</h5>
                    </div>
                    <div className={styles.variantPrices}>
                        <span>Цена за МЕТР:</span>
                        <h5>11 рублей</h5>
                    </div><div className={styles.variantPrices}>
                        <span>общая сумма:</span>
                        <h5>11 рублей</h5>
                    </div>
                </div>
                <div className={styles.ClothWrapper}>
                    <div>Выберите ткань</div>
                </div>
            </div>
        </div>
    )
}

export default CalculatorCloth