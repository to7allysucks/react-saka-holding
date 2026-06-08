import styles from "./Cards.module.scss";
import cardImage from "./card-image.png";

const Cards = ({
  title = "Кулинарная гладь",
  price = "11,4$",
  width = "180 см",
  image = cardImage,
}) => {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={image}
        alt={title}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.info}>
          <span className={styles.price}>{price}</span>
          <span className={styles.width}>{width}</span>
        </div>

        <button className={styles.button} type="button">
          <span>Подробнее</span>
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </article>
  );
};

export default Cards;