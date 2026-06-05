import styles from './HeaderTop.module.scss'
import logo from '../../../../shared/assets/icons/saka_holding_logo.svg'
import blackEmblem from '../../../../shared/assets/icons/saka_emblem.svg'
import orangeEmblem from '../../../../shared/assets/icons/eros_emblem.svg'
import goldEmblem from '../../../../shared/assets/icons/tortex_emblem.svg'
import cartIcon from '../../../../shared/assets/icons/shoppingcart.svg'
import userIcon from '../../../../shared/assets/icons/user.svg'
import phoneIcon from '../../../../shared/assets/icons/phonecall.svg'

const HeaderTop = () => {
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
                <span className={styles.activeTheme}>LIGHT</span> / <span>DARK</span>
            </div>
        </div>
    </div>
    )
}

export default HeaderTop;