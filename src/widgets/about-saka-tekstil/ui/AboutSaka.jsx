import styles from "./AboutSaka.module.scss";
import aboutImage from "../../../shared/assets/images/saka-tekstil/about-saka.svg";
import crownIcon from "../../../shared/assets/icons/crown.svg";

const statistics = [
  {
    value: "30",
    description:
      <>
        Лет на рынке
        <br />
        текстиля
      </>,
  },
  {
    value: "40+",
    description:
      <>
        Ассортимент
        <br />
        товаров в наличии
      </>,
  },
  {
    value1: "10 000+",
    description:
      <>
        Клиентов
        <br />
        выбирают нашу компанию
      </>,
  },
];

const AboutSaka = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
          <a className={styles.breadcrumbLink} href="/">
            Главная
          </a>

          <span className={styles.dot}>›</span>

          <span className={styles.breadcrumbCurrent}>О компании</span>
        </nav>

        <h1 className={styles.pageTitle}>О компании</h1>

        <div className={styles.about}>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={aboutImage}
              alt="Saka Tekstil"
            />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>
              Saka Tekstil - производство и продажа
              <br />
              турецкого трикотажного полотна
            </h2>

            <div className={styles.description}>
              <p> Мы осуществляем продажу ткани от рулона и нарезку кашкорсе от 5%-20% </p>

              <p> Наша команда следит за трендами в мире трикотажа, мы постоянно обновляем наш ассортимент и контролируем наличие ткани на складе </p>

              <p> Мы предлагаем клиентам различные виды трикотажных полотен более чем в 45 цветовых вариациях </p>
            </div>

            <ul className={styles.statistics}>
              {statistics.map((item) => (
                <li className={styles.statistic} key={item.value}>
                  <img
                    className={styles.crown}
                    src={crownIcon}
                    alt="icon"
                  />

                  <strong className={styles.statisticValue}>
                    {item.value}
                  </strong>
                  <strong className={styles.statisticValue1}>
                    {item.value1}
                  </strong>

                  <span className={styles.statisticDescription}>
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSaka;