import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../shared/config/routes';
import styles from './FabricsSection.module.scss';

import footer3img from '../../../shared/assets/images/fabrics/white-blue_cloth.svg';
import frenchImg from '../../../shared/assets/images/fabrics/gray_cloth.svg';
import viscoseImg from '../../../shared/assets/images/fabrics/pink_cloth.svg';
import piqueImg from '../../../shared/assets/images/fabrics/blue_cloth.svg';
import jerseyImg from '../../../shared/assets/images/fabrics/black-gray_cloth.svg';
import biflexImg from '../../../shared/assets/images/fabrics/violet_cloth.svg';

const FabricsSection = () => {
    const FABRICS_DATA = [
        { name: 'Футер 3-х Нитка', path: 'footer-3', img: footer3img },
        { name: 'Френч Терри', path: 'french-terry', img: frenchImg },
        { name: 'Вискоза', path: 'viscose', img: viscoseImg },
        { name: 'Пике', path: 'pique', img: piqueImg },
        { name: 'Кулирная гладь', path: 'jersey', img: jerseyImg },
        { name: 'Бифлекс', path: 'biflex', img: biflexImg },
    ];

    return (
        <section className={styles.fabricsSection}>
            <h2 className={styles.title}>
                Выбирайте из множества<br />разновидностей тканей
            </h2>

            <div className={styles.gridContainer}>
                {FABRICS_DATA.map((fabric, index) => (
                    <NavLink
                        key={`${fabric.path}-${index}`}
                        to={`${ROUTES.CATALOG}/${fabric.path}`}
                        className={styles.fabricCard}
                    >
                        <div className={styles.imageWrapper}>
                            <img src={fabric.img} alt={fabric.name} className={styles.image} />
                        </div>
                        <div className={styles.badge}>
                            {fabric.name}
                        </div>
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default FabricsSection;
