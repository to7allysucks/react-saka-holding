import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../../shared/config/routes';
import styles from './Header.module.scss';
import HeaderTop from '../../../shared/ui/header/header-top';
import HeaderNav from '../../../shared/ui/header/header-nav';
import HeaderCatalogBar from '../../../shared/ui/header/header-catalog-bar';

const Header = () => {
    const location = useLocation();

    const isHomePage = location.pathname === ROUTES.HOME;

    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderNav />
            {isHomePage && <HeaderCatalogBar />}
        </header>
    );
}

export default Header;
