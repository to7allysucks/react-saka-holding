import {useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import {useFabricDetail} from '../model/useFabricDetail'
import styles from './FabricDetailSection.module.scss'
import arrowImg from '../../../shared/assets/icons/arrow_sertif-slider.svg'


const CharRow = ({label, value}) => (<div className={styles.charRow}>
    <span className={styles.charLabel}>{label}</span>
    <span className={styles.charValue}>{value}</span>
  </div>)

const FabricDetailSection = () => {
  const {id} = useParams()
  const {fabric, loading, error} = useFabricDetail(id)

  const [activeVariant, setActiveVariant] = useState(null)
  const [quantity, setQuantity] = useState(10)

  if (loading) return <div className={styles.loading}>
    <div className={styles.spinner}/>
  </div>
  if (error) return <div className={styles.error}>{error}</div>
  if (!fabric) return null

  const currentVariant = activeVariant ?? fabric.variants?.[0] ?? {
    image: fabric.image, colorHex: fabric.colorHex
  }
  const currentImage = currentVariant.image

  return (<section className={styles.section}>


      <div className={styles.layout}>

        <div className={styles.imageCol}>
          <div className={styles.mainImage}>
            <img src={currentImage} alt={fabric.name}/>
            {fabric.isNew && <span className={styles.badge}>Новинка</span>}
          </div>

          {fabric.variants?.length > 1 && (
            <div className={styles.thumbsWrapper}>
              <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={4}
                spaceBetween={12}
                className={styles.swiper}
              >
                {fabric.variants.map((variant, i) => (<SwiperSlide key={i}>
                    <button
                      className={`${styles.thumb} ${currentVariant.color === variant.color ? styles.thumbActive : ''}`}
                      onClick={() => setActiveVariant(variant)}
                    >
                      <img src={variant.image} alt={variant.color}/>
                    </button>
                  </SwiperSlide>))}
              </Swiper>
            </div>)}
        </div>

        <div className={styles.infoCol}>
          <nav className={styles.breadcrumb}>
            <Link to="/">Главная</Link>
            <span className={styles.sep}>›</span>
            <Link to="/catalog">Каталог</Link>
            <span className={styles.sep}>›</span>
            <span>{fabric.name.toUpperCase()}</span>
          </nav>
          <h1 className={styles.name}>{fabric.name}</h1>

          <div className={styles.priceRow}>
            <span
              className={styles.price}>{fabric.price}{fabric.currency}</span>
            <span className={styles.priceUnit}>/ кг</span>
          </div>
          <div className={styles.flex}>
            <div className={styles.sep}>
              {fabric.variants?.length > 0 && (
                <div className={styles.colorsBlock}>
                  <span className={styles.colorsLabel}>Цвет</span>
                  <div className={styles.colorSwatches}>
                    {fabric.variants.map((variant, i) => (<button
                        key={i}
                        className={`${styles.swatch} ${currentVariant.color === variant.color ? styles.swatchActive : ''} ${variant.color === 'white' ? styles.swatchWhite : ''}`}
                        style={{background: variant.colorHex}}
                        onClick={() => setActiveVariant(variant)}
                        aria-label={variant.color}
                      />))}
                  </div>
                </div>)}

              <div className={styles.actions}>
                <div className={styles.counter}>
                  <button
                    className={styles.counterBtn}
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  >
                    <span className={styles.minus}/>
                  </button>
                  <span className={styles.counterVal}>{quantity}</span>
                  <button
                    className={styles.counterBtn}
                    onClick={() => setQuantity(q => q + 1)}
                  >
                    <span className={styles.plus}/>
                  </button>
                </div>
                <button className={styles.addBtn}>
                  Добавить в корзину
                </button>
              </div>
            </div>
            <div className={styles.sepp}>
              {fabric.characteristics && (
                <div className={styles.characteristics}>
                  <h3 className={styles.charTitle}>Характеристики</h3>
                  <div className={styles.charList}>
                    <CharRow label="Материал:"
                             value={fabric.characteristics.material}/>
                    <CharRow label="Качество:"
                             value={fabric.characteristics.quality}/>
                    <CharRow label="Состав:"
                             value={fabric.characteristics.composition}/>
                    <CharRow label="Плотность:"
                             value={fabric.characteristics.density}/>
                    <CharRow label="Ширина рулона:"
                             value={fabric.characteristics.rollWidth}/>
                    <CharRow label="в 1кг:"
                             value={fabric.characteristics.per1kg}/>
                    <CharRow label="в 1 рулоне:"
                             value={fabric.characteristics.per1roll}/>
                    <CharRow label="Производство:"
                             value={fabric.characteristics.production}/>
                  </div>
                </div>)}
            </div>
          </div>


        </div>
      </div>
    </section>)
}

export default FabricDetailSection
