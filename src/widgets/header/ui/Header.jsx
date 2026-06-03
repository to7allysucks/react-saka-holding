import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.headerInner}>
                ...
            </div>
            <img src="" alt="" />
            <nav className={styles.headerNav}>
                <a href="" className={styles.navItem}>
                    <li>Главная</li>
                </a>
                <a href="" className={styles.navItem}>
                    <li>Каталог</li>
                </a>
                <a href="" className={styles.navItem}>
                    <li>О компании</li>
                </a>
                <a href="" className={styles.navItem}>
                    <li>Новости</li>
                </a>
                <a href="" className={styles.navItem}>
                    <li>Доставка и оплата</li>
                </a>
                <a href="" className={styles.navItem}>
                    <li>Контакты</li>
                </a>
            </nav>
        </header>
        </>
    );
}

export default Header;