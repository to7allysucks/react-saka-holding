import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../shared/config/routes';
import styles from './Footer.module.scss';
import GoldBtn from '../../../shared/ui/buttons/gold-btn/GoldBtn';

import logo from '../../../shared/assets/icons/saka-holding-logo.svg';
import phoneIcon from '../../../shared/assets/icons/phonecall.svg';
import vkIcon from '../../../shared/assets/icons/vk-icon.svg';
import waIcon from '../../../shared/assets/icons/whatsapp-icon.svg';
import tgIcon from '../../../shared/assets/icons/Telegram.svg';
import instIcon from '../../../shared/assets/icons/Instagram.svg';

const Footer = () => {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.topSection}>
                <div className={styles.brandBlock}>
                    <img src={logo} alt="Saka Holding" className={styles.logo} />
                </div>

                <div className={`${styles.linksBlock} ${styles.info}`}>
                    <h6 className={styles.blockTitle}>Информация</h6>
                    <ul className={styles.linksList}>
                        <li><NavLink to="/help">Помощь</NavLink></li>
                        <li><NavLink to="/blog">Блог</NavLink></li>
                        <li><NavLink to="/faq">Вопрос-ответ</NavLink></li>
                        <li><NavLink to="/privacy">Политика конфиденциальности</NavLink></li>
                        <li><NavLink to="/sitemap">Карта сайта</NavLink></li>
                    </ul>
                </div>

                <div className={`${styles.linksBlock} ${styles.navigation}`}>
                    <h6 className={styles.blockTitle}>Навигация</h6>
                    <ul className={styles.linksList}>
                        <li><NavLink to={ROUTES.CATALOG}>Каталог</NavLink></li>
                        <li><NavLink to={ROUTES.ABOUT}>О компании</NavLink></li>
                        <li><NavLink to={ROUTES.NEWS}>Новости</NavLink></li>
                        <li><button type="button">Доставка и оплата</button></li>
                        <li><a href="#footer">Контакты</a></li>
                        <li><NavLink to="/cart">Корзина</NavLink></li>
                    </ul>
                </div>

                <div className={styles.subscribeBlock}>
                    <h6 className={styles.blockTitle}>Следите за новостями</h6>
                    <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Ваш E-mail" className={styles.input} />
                        <GoldBtn type="submit">Отправить</GoldBtn>
                    </form>
                    <a href="tel:+902125470826" className={styles.phoneLink}>
                        <img src={phoneIcon} alt="" />
                        <span>+90 212 547 08 26</span>
                    </a>
                </div>
            </div>

            <div className={styles.bottomSection}>
                <div className={styles.socialsWrapper}>
                    <span className={styles.socialsText}>Напишите нам, мы онлайн:</span>
                    <div className={styles.socialsIcons}>
                        <a href="https://vk.com" target="_blank" rel="noreferrer"><img src={vkIcon} alt="VK" /></a>
                        <a href="https://whatsapp.com" target="_blank" rel="noreferrer"><img src={waIcon} alt="WhatsApp" /></a>
                        <a href="https://telegram.org" target="_blank" rel="noreferrer"><img src={tgIcon} alt="Telegram" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={instIcon} alt="Instagram" /></a>
                    </div>
                </div>
                <div className={styles.copyright}>
                    Copyright © 2023 Сака Текстиль. Все права защищены.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
