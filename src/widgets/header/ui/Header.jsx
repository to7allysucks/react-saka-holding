import styles from './Header.module.scss';
import HeaderTop from '../../../shared/ui/header/header-top';
import HeaderNav from '../../../shared/ui/header/header-nav';

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderNav />
        </header>
    );
}

export default Header;