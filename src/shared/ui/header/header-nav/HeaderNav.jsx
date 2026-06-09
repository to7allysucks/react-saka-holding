import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';

import styles from './HeaderNav.module.scss'
import arrowIcon from '../../../../shared/assets/icons/arrow_katalog.svg';

const HeaderNav = () => {
    return (
    <nav className={styles.headerNav}>
        <ul className={styles.navList}>

            <li className={styles.navItem}>
                <a href="/">Главная</a>
            </li>
            
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
                <NavLink to={ROUTES.CATALOG} className={styles.dropdownToggle}>
                    Каталог <img src={arrowIcon} alt="arrow" />
                </NavLink>
                <ul className={styles.dropdownMenu}>
                    <li><a href="">Link 1</a></li>
                    <li><a href="">Link 2</a></li>
                    <li><a href="">Link 3</a></li>
                </ul>
            </li>

            <NavLink  to={ROUTES.ABOUT} className={styles.navItem}>О компании</NavLink>
            
            <NavLink  to={ROUTES.NEWS} className={styles.navItem}>Новости</NavLink>
            
            <NavLink className={styles.navItem}>Доставка и оплата</NavLink>
            
            <NavLink className={styles.navItem}>Контакты</NavLink>
        </ul>
    </nav>
    )
}

export default HeaderNav;