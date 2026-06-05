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
                <a href="#" className={styles.dropdownToggle}>
                    Каталог <img src={arrowIcon} alt="arrow" />
                </a>
                <ul className={styles.dropdownMenu}>
                    <li><a href="">Link 1</a></li>
                    <li><a href="">Link 2</a></li>
                    <li><a href="">Link 3</a></li>
                </ul>
            </li>

            <li className={styles.navItem}>
                <a href="#">О компании</a>
            </li>
            
            <li className={styles.navItem}>
                <a href="#">Новости</a>
            </li>
            
            <li className={styles.navItem}>
                <a href="#">Доставка и оплата</a>
            </li>
            
            <li className={styles.navItem}>
                <a href="#">Контакты</a>
            </li>

        </ul>
    </nav>
    )
}

export default HeaderNav;