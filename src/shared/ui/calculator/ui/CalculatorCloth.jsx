import { useEffect, useState } from 'react'
import styles from './CalculatorCloth.module.scss'
import blueCloth from '../../../../shared/assets/images/cloth-Slider/blue_cloth.svg'
import greenCloth from '../../../../shared/assets/images/cloth-Slider/green_cloth.svg'
import greyCloth from '../../../../shared/assets/images/cloth-Slider/grey_cloth.svg'
import orangeCloth from '../../../../shared/assets/images/cloth-Slider/orange_cloth.svg' 

const CalculatorCloth = () => {
    const Cloths = [{
        name: 'Выберите ткань',
        value: 'Выберите ткань'
    },
        {
        name: 'Голубая ткань',
        value: "blueCloth",
        img: blueCloth
    },
    {
        name: 'Оранжевая ткань',
        value: "orangeCloth",
        img: orangeCloth    
    },
    {
        name: 'Зеленая ткань',
        value: "greenCloth",
        img: greenCloth
    },
    {
        name: 'Серая ткань',
        value: "greyCloth",
        img: greyCloth
    },

]


    const [counterPrice, setCounterPrice] = useState(0)
    const [selectedCloth, setSelectedCloth] = useState("Выберите ткань")

    const handleChange = (e) => {setSelectedCloth(e.target.value)}

    const prices = {
        priceKilo: 11,
        priceMetr: 10
    }

    console.log(selectedCloth);
    

    const selectedImg = Cloths.filter(cloth => cloth.value === selectedCloth)
    const pathImg = selectedImg[0]

    return (
        <div className={styles.container}>
            <div className={styles.chooseParamsContainter}>
                <div className={styles.enterParamsContainer}>
                    <div className={styles.variants}>
                        <h5>1. Выберите необходимую ткань</h5>
                        <select  className={styles.clothSelector} name="clothName" id="cloth" onChange={handleChange} >
                            {Cloths.map(cloth => (
                                <option className={styles.clothOption} value={cloth.value}>{cloth.name}</option>  
                            ))}
                        </select>
                    </div>
                    <div className={styles.variants}>
                        <h5>2. Введите общее количество рулонов</h5>
                        <div className={styles.counterCloth}>
                            <button onClick={() => counterPrice > 0 ? setCounterPrice(counterPrice - 1) : setCounterPrice(0)}><div className={styles.decrement}></div></button>
                            <input className={styles.clothWatchCounter} type="text" placeholder='Кол-во рулонов...' value={counterPrice}/>
                            <button onClick={() => setCounterPrice(counterPrice + 1)} ><div className={styles.increment}></div></button>
                        </div>
                    </div>
                </div>
                <div className={styles.pricesContainer}>
                    <div className={styles.variantPrices}>
                        <span>Цена за КГ:</span>
                        <h5>{`${prices.priceKilo} рублей`}</h5>
                    </div>
                    <div className={styles.variantPrices}>
                        <span>Цена за МЕТР:</span>
                        <h5>{`${prices.priceMetr} рублей`}</h5>
                    </div><div className={styles.variantPrices}>
                        <span>общая сумма:</span>
                        <h5>{`${counterPrice * prices.priceMetr} рублей`}</h5>
                    </div>
                </div>
                <div className={styles.clothWrapper}>
                    {selectedCloth !== 'Выберите ткань' ? <img className={styles.viewCloth} src={pathImg.img} alt='img'></img> : <div>Выберите ткань...</div>}
                </div>
            </div>
        </div>
    )
}

export default CalculatorCloth