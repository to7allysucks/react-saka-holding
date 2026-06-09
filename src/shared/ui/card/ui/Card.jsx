import GreenBtn from "../../buttons/green-btn/GreenBtn";
import styles from "./Card.module.scss";
import imgArrow from '../../../assets/icons/arrow-cloth-slider.svg'

const Card = (props) => {
    const {
        title,
        price,
        width,
        image,
    } = props

  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.image}
          src={image}
          alt={title}
          />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.info}>
          <span className={styles.price}>{`${price}$`}</span>
          <span className={styles.width}>{`${width} см`}</span>
        </div>

        <GreenBtn img={imgArrow}  className={styles.btnCard} type="button">Подробнее</GreenBtn>
      </div>
    </article>
  );
};

export default Card;