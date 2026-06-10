import styles from "./SakaSection.module.scss";
import sakaImage from "../../../shared/assets/images/saka-tekstil/saka-tekstil.svg";
import GoldBtn from "../../../shared/ui/buttons/gold-btn";
import arrowIcon from '../../../shared/assets/icons/strelka_hero-slider.svg'

const advantages = [
  <>
    Предоставляем возможность закупки широкого ассортимента: фуктер,
    кулирка, джаккард, флис, рибана и многое другое...
  </>,
  <>
    Наша компания является надежным поставщиком и производителем турецкого
    трикотажного полотна по всему миру
  </>,
];

const SakaSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={sakaImage} alt="Здание компании Saka Tekstil"/>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          Saka Tekstil – для тех, кто хочет быстро
          <br />
          и комфортно получать текстильную
          <br />
          продукцию{" "}
          <span className={styles.titleAccent}>
            высокого качества
            <br />
            по адекватной стоимости
          </span>
        </h2>

        <ul className={styles.advantages}>
          {advantages.map((advantage, index) => (
            <li className={styles.advantage} key={index}>
              <span className={styles.line} aria-hidden="true" />

              <p className={styles.text}>{advantage}</p>
            </li>
          ))}
        </ul>

        <GoldBtn type='button' href="#catalog" children='Смотреть каталог' img={arrowIcon}></GoldBtn>
      </div>
    </section>
  );
};

export default SakaSection;