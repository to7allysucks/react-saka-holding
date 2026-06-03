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
                <a href="">
                    <li>Главная</li>
                </a>
                <a href="">
                    <li>Каталог</li>
                </a>
                <a href="">
                    <li>О компании</li>
                </a>
                <a href="">
                    <li>Новости</li>
                </a>
                <a href="">
                    <li>Доставка и оплата</li>
                </a>
                <a href="">
                    <li>Контакты</li>
                </a>    

            </nav>
        </header>
        </>
    );
}

export default Header;