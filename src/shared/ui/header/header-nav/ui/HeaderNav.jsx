import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../../config/routes';

import styles from './HeaderNav.module.scss'
import arrowIcon from '../../../../../shared/assets/icons/arrow_katalog.svg';

const HeaderNav = () => {
    return (
    <nav className={styles.headerNav}>
        <ul className={styles.navList}>
                <NavLink to={ROUTES.HOME} className={styles.navItem}>Главная</NavLink>
            
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
                <NavLink to={ROUTES.CATALOG} className={`${styles.dropdownToggle} ${styles.navItem}`}>
                    Каталог <img src={arrowIcon} alt="arrow" />
                </NavLink>
                <ul className={styles.dropdownMenu}>
                    <li><a href="">1st item</a></li>
                    <li><a href="">2nd item</a></li>
                    <li><a href="">3rd item</a></li>
                </ul>
            </li>

            <NavLink  to={ROUTES.ABOUT} className={styles.navItem}>О компании</NavLink>
            
            <NavLink  to={ROUTES.NEWS} className={styles.navItem}>Новости</NavLink>
            
            <button 
                className={styles.navItem} 
                onClick={() => {/* */}}>
                Доставка и оплата
            </button>
            <a href="#footer" className={styles.navItem}>Контакты</a>
        </ul>
    </nav>
    )
}

export default HeaderNav;