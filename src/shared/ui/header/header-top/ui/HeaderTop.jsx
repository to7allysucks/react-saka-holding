import { useState } from 'react';
import styles from './HeaderTop.module.scss';
import logo from '../../../../assets/icons/saka-holding-logo.svg';
import blackEmblem from '../../../../assets/icons/saka_emblem.svg';
import orangeEmblem from '../../../../assets/icons/eros_emblem.svg';
import goldEmblem from '../../../../assets/icons/tortex_emblem.svg';
import cartIcon from '../../../../assets/icons/shoppingcart.svg';
import userIcon from '../../../../assets/icons/user.svg';
import phoneIcon from '../../../../assets/icons/phonecall.svg';
import MobileMenu from '../../../mobile-menu/ui/MobileMenu';

const HeaderTop = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.headerTop}>
            <div className={styles.leftWrapper}>
                <img src={logo} alt="" className={styles.headerLogo} />
                <div className={styles.emblemGroup}>
                    <img src={blackEmblem} alt="" />
                    <img src={orangeEmblem} alt="" />
                    <img src={goldEmblem} alt="" />
                </div>
                <p className={styles.tagline}>Производитель турецкого<br/>трикотажного полотна</p>
            </div>
            
            <div className={styles.actions}>
                <div className={styles.userGroup}>
                    <button className={styles.cart}>
                        <img src={cartIcon} alt="" />
                        <span className={styles.cartBadge}>0</span>
                    </button>
                    <a href="/login" className={styles.actionLink}>
                        <img src={userIcon} alt="" /> Войти
                    </a>
                </div>
                <div className={styles.contactInfo}>
                    <a href="tel:+902125470826" className={styles.phone}>
                        <img src={phoneIcon} alt="" /> +90 212 547 08 26
                    </a>
                    <button className={styles.callbackBtn}>Заказать звонок</button>
                </div>
                <div className={styles.themeSwitch}>
                    <span className={styles.activeTheme}>LT</span> / <span>DK</span>
                </div>
            </div>

            <button 
                className={styles.burgerBtn} 
                onClick={() => setIsMenuOpen(true)}
                aria-label="Открыть меню"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    );
};

export default HeaderTop;