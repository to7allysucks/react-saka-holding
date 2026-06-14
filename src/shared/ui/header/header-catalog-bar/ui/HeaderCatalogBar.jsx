import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../../config/routes';
import styles from './HeaderCatalogBar.module.scss';

import jerseyImg from '../../../../assets/icons/mini_cloth/jersey.svg';
import frenchTerryImg from '../../../../assets/icons/mini_cloth/french-terry.svg';
import ribKnitImg from '../../../../assets/icons/mini_cloth/rib-knit.svg';
import piqueImg from '../../../../assets/icons/mini_cloth/pique.svg';
import interlockImg from '../../../../assets/icons/mini_cloth/interlock.svg';
import quiltedKnitImg from '../../../../assets/icons/mini_cloth/quilted-knit.svg';
import selanicKnitImg from '../../../../assets/icons/mini_cloth/selanic-knit.svg';
import velourImg from '../../../../assets/icons/mini_cloth/velour.svg';
import viscoseImg from '../../../../assets/icons/mini_cloth/viscose.svg';

const HeaderCatalogBar = () => {
    return (
        <div className={styles.catalogBar}>
            <div className={styles.container}>
                <NavLink to="/promo" className={styles.promoBtn}>
                    АКЦИИ
                </NavLink>

                <ul className={styles.textureList}>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/kulirka`} className={styles.textureItem}>
                            <img src={jerseyImg} alt="" />
                            <span>Кулирная гладь</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/footer`} className={styles.textureItem}>
                            <img src={frenchTerryImg} alt="" />
                            <span>Футер</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/kashkorse`} className={styles.textureItem}>
                            <img src={ribKnitImg} alt="" />
                            <span>Кашкорсе, рибана</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/pike`} className={styles.textureItem}>
                            <img src={piqueImg} alt="" />
                            <span>Пике</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/interlok`} className={styles.textureItem}>
                            <img src={interlockImg} alt="" />
                            <span>Интерлок</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/kapitoniy`} className={styles.textureItem}>
                            <img src={quiltedKnitImg} alt="" />
                            <span>Капитоний</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/selanik`} className={styles.textureItem}>
                            <img src={selanicKnitImg} alt="" />
                            <span>Селаник</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/velur`} className={styles.textureItem}>
                            <img src={velourImg} alt="" />
                            <span>Велюр</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`${ROUTES.CATALOG}/viskoza`} className={styles.textureItem}>
                            <img src={viscoseImg} alt="" />
                            <span>Вискоза</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderCatalogBar;
