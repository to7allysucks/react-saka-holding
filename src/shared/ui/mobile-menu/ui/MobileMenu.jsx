import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../config/routes';

import styles from './MobileMenu.module.scss';

import logo from '../../../assets/icons/saka-holding-logo.svg';
import blackEmblem from '../../../assets/icons/saka_emblem.svg';
import orangeEmblem from '../../../assets/icons/eros_emblem.svg';
import goldEmblem from '../../../assets/icons/tortex_emblem.svg';
import cartIcon from '../../../assets/icons/shoppingcart.svg';
import userIcon from '../../../assets/icons/user.svg';
import phoneIcon from '../../../assets/icons/phonecall.svg';
import arrowIcon from '../../../assets/icons/arrow_katalog.svg';
import closeIcon from '../../../assets/icons/close-button.svg';

import jerseyImg from '../../../assets/icons/mini_cloth/jersey.svg';
import frenchTerryImg from '../../../assets/icons/mini_cloth/french-terry.svg';
import ribKnitImg from '../../../assets/icons/mini_cloth/rib-knit.svg';
import piqueImg from '../../../assets/icons/mini_cloth/pique.svg';
import interlockImg from '../../../assets/icons/mini_cloth/interlock.svg';
import quiltedKnitImg from '../../../assets/icons/mini_cloth/quilted-knit.svg';
import selanicKnitImg from '../../../assets/icons/mini_cloth/selanic-knit.svg';
import velourImg from '../../../assets/icons/mini_cloth/velour.svg';
import viscoseImg from '../../../assets/icons/mini_cloth/viscose.svg';

const MobileMenu = ({ isOpen, onClose }) => {
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`} onClick={onClose}>
            <div className={`${styles.menuDrawer} ${isOpen ? styles.active : ''}`} onClick={(e) => e.stopPropagation()}>
                
                <div className={styles.menuHeader}>
                    <div className={styles.logoBlock}>
                        <img src={logo} alt="Saka Holding" className={styles.logo} />
                        <div className={styles.emblems}>
                            <img src={blackEmblem} alt="" />
                            <img src={orangeEmblem} alt="" />
                            <img src={goldEmblem} alt="" />
                        </div>
                        <p className={styles.tagline}>Производитель турецкого трикотажного полотна</p>
                    </div>
                    
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть меню">
                        <img src={closeIcon} alt="" />
                    </button>
                </div>

                <div className={styles.themeSwitch}>
                    <span className={styles.activeTheme}>LT</span> / <span>DK</span>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><NavLink to={ROUTES.HOME} className={styles.navItem} onClick={onClose} end>Главная</NavLink></li>
                        
                        <li className={`${styles.hasSubmenu} ${isCatalogOpen ? styles.active : ''}`}>
                            <button 
                                className={styles.submenuToggle} 
                                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                            >
                                Каталог 
                                <img src={arrowIcon} alt="arrow" className={styles.arrow} />
                            </button>
                            
                            <div className={styles.submenuWrapper}>
                                <ul className={styles.submenu}>
                                    <li><NavLink to={`${ROUTES.CATALOG}/all`} onClick={onClose}>Все товары</NavLink></li>
                                </ul>
                            </div>
                        </li>

                        <li><NavLink to={ROUTES.ABOUT} className={styles.navItem} onClick={onClose}>О компании</NavLink></li>
                        <li><NavLink to={ROUTES.NEWS} className={styles.navItem} onClick={onClose}>Новости</NavLink></li>
                        <li>
                            <button 
                                className={styles.navItem} 
                                onClick={() => {
                                    onClose();
                                }}
                            >
                                Доставка и оплата
                            </button>
                        </li>
                        <li><a href="#footer" className={styles.navItem} onClick={onClose}>Контакты</a></li>
                    </ul>
                </nav>

                <div className={styles.menuFooter}>
                    <a href="tel:+902125470826" className={styles.phone}>
                        <img src={phoneIcon} alt="" /> +90 212 547 08 26
                    </a>
                    <button className={styles.callbackLink}>Заказать звонок</button>
                    
                    <div className={styles.bottomActions}>
                        <button className={styles.cartBtn}>
                            <img src={cartIcon} alt="" />
                            <span className={styles.badge}>3</span>
                        </button>
                        <a href="/login" className={styles.loginLink}>
                            <img src={userIcon} alt="" /> Войти
                        </a>
                    </div>
                </div>

                <div className={styles.promoSection}>
                    <div className={styles.promoHeader}>АКЦИИ</div>
                    <ul className={styles.textureList}>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/kulirka`} onClick={onClose}>
                                <img src={jerseyImg} alt="" />
                                Кулирная гладь
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/footer`} onClick={onClose}>
                                <img src={frenchTerryImg} alt="" />
                                Футер
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/kashkorse`} onClick={onClose}>
                                <img src={ribKnitImg} alt="" />
                                Кашкорсе, рибана
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/pike`} onClick={onClose}>
                                <img src={piqueImg} alt="" />
                                Пике
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/interlok`} onClick={onClose}>
                                <img src={interlockImg} alt="" />
                                Интерлок
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/kapitoniy`} onClick={onClose}>
                                <img src={quiltedKnitImg} alt="" />
                                Капитоний
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/selanik`} onClick={onClose}>
                                <img src={selanicKnitImg} alt="" />
                                Селаник
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/velur`} onClick={onClose}>
                                <img src={velourImg} alt="" />
                                Велюр
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${ROUTES.CATALOG}/viskoza`} onClick={onClose}>
                                <img src={viscoseImg} alt="" />
                                Вискоза
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MobileMenu;
