import styles from "./PresentationSaka.module.scss";
import GoldBtn from "../../../shared/ui/buttons/gold-btn";
import presentationImage from "../../../shared/assets/images/saka-tekstil/presentation-saka.svg";
import arrowIcon from "../../../shared/assets/icons/strelka_hero-slider.svg";

const PresentationSaka = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <a href="/" className={styles.breadcrumbLink}>Главная</a>
          <span className={styles.dot}>›</span>
          <span className={styles.breadcrumbCurrent}>Новости и статьи</span>
        </nav>

        <div className={styles.card}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Презентация о Saka Tekstil
            </h2>

            <p className={styles.text}>
              Посмотрите презентацию о том, какие возможности открывает компания Saka Tekstil
            </p>

            <GoldBtn
              type="button"
              href="#presentation"
              children="Смотреть презентацию"
              img={arrowIcon}
            />
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={presentationImage}
              alt="Saka Tekstil"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSaka;