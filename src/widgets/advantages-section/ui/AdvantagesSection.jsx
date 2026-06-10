import AdvantageCard from '../../../shared/ui/advantage-card'
import styles from './AdvantagesSection.module.scss';
import logisticsIcon from '../../../shared/assets/icons/logistics.svg'
import productionIcon from '../../../shared/assets/icons/production.svg'
import uniquenessIcon from '../../../shared/assets/icons/uniqueness.svg'
import additionalMaterialsIcon from '../../../shared/assets/icons/additional-materials.svg'
import loyaltyIcon from '../../../shared/assets/icons/loyalty.svg'
import qualityIcon from '../../../shared/assets/icons/quality.svg'

const AdvantagesSection = () => {
    return (
        <section className={styles.advantagesSection}>
            <h3>
                Наша главная задача - не просто предоставить качественную ткань, 
                но и оказать каждому заказчику высокий уровень клиентского сервиса
            </h3>
            <AdvantageCard 
            image={logisticsIcon} 
            title='ЛОГИСТИКА' 
            description='Весь ассортимент в наличии на складе в Москве. 
            Вам не потребуется тратить свои ресурсы на доставку ткани из Турции.'/>
            <AdvantageCard 
            image={productionIcon} 
            title='ПРОИЗВОДСТВО' 
            description='Регулярное наличие ткани позволяет 
            не останавливать процесс вашего производства и минимизирует финансовые потери.'/>
            <AdvantageCard 
            image={additionalMaterialsIcon} 
            title='ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ' 
            description='Вместе с товаром мы предоставляем полиэтиленовую упаковку, 
            бесплатную загрузку товара со склада и бесплатные образцы.'/>
            <AdvantageCard 
            image={loyaltyIcon} 
            title='ЛОЯЛЬНОСТЬ' 
            description='Наш трикотаж закупают известные бренды. 
            Это позволит вам создать собственный качественный бренд одежды.'/>
            <AdvantageCard 
            image={uniquenessIcon} 
            title='УНИКАЛЬНОСТЬ' 
            description='Мы предоставляем клиентам широкую палитру цветов, 
            что позволяет создавать уникальные коллекции одежды.'/>
            <AdvantageCard 
            image={qualityIcon} 
            title='КАЧЕСТВО' 
            description='Наша ткань обрабатывается специальным силиконовым составом, 
            что позволяет ей не терять свои свойства с течением времени.'/>
        </section>
    );
}

export default AdvantagesSection;