import styles from './OrderSection.module.scss';
import GoldBtn from '../../../shared/ui/buttons/gold-btn/GoldBtn';
import arrowImg from '../../../shared/assets/icons/strelka_hero-slider.svg';

const OrderSection = () => {
    return (
        <section className={styles.orderSection}>
            <div className={styles.cardContainer}>
                <h2 className={styles.title}>
                    Фабрика «Saka Tekstil» осуществляет прокрас<br />
                    текстиля на заказ на самых выгодных условиях
                </h2>
                
                <p className={styles.subtitle}>
                    Просто оставьте заявку на сайте и мы свяжемся с вами в ближайшее время
                </p>

                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="text" 
                        placeholder="Ваше имя" 
                        className={styles.input} 
                    />
                    <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className={styles.input} 
                    />
                    <input 
                        type="email" 
                        placeholder="Ваш E-mail" 
                        className={styles.input} 
                    />
                    {/* Передаем специальный класс напрямую в компонент кнопки */}
                    <GoldBtn type="submit" img={arrowImg} className={styles.submitBtn}>
                        Отправить
                    </GoldBtn>
                </form>

                <p className={styles.policy}>
                    Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!
                </p>
            </div>
        </section>
    );
};

export default OrderSection;
