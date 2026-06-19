import warningIcon from '../../../shared/assets/icons/triangle_warning.svg'
import styles from './WarningSection.module.scss'

const WarningSection = () => {
    return (
        <section className={styles.warningSection}>
            <h3>
                Актуальная палитра “Saka Tekstil” 
                из 45+ цветов – поможет решить 
                любые задачи, стоящие перед вами
            </h3>
            <div>
                <img src="warningIcon" alt="" />
                <p><span>ВНИМАНИЕ!</span> Цветопередача на вашем мониторе 
                    может значительно отличаться от оригинального цвета</p>
            </div>
        </section>
    );
}

export default WarningSection;