import styles from './Header.module.scss';
import HeaderTop from '../../../shared/ui/header/HeaderTop';
import HeaderNav from '../../../shared/ui/header/HeaderNav';

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderNav />
        </header>
    );
}

export default Header;