import styles from './CatalogFilters.module.scss'

const ChevronIcon = () => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
    <path d="M1 1L6 6L11 1" stroke="#19242f" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FilterGroup = ({title, children, defaultOpen = false}) => {
  return (
    <details className={styles.group} open={defaultOpen}>
      <summary className={styles.groupHeader}>
        {title}
        <span className={styles.chevron}><ChevronIcon/></span>
      </summary>
      <div className={styles.groupContent}>
        {children}
      </div>
    </details>
  )
}

const CatalogFilters = (props) => {
  const {
    filters,
    sort,
    setSort,
    toggleType,
    toggleQuality,
    toggleColor,
    resetFilters,
    activeCount,
    FABRIC_TYPES,
    QUALITIES,
    COLORS,
    SORT_OPTIONS,
  } = props

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.title}>
          Фильтры
          {activeCount > 0 && (
            <span className={styles.badge}>{activeCount}</span>
          )}
        </div>
        {activeCount > 0 && (
          <button className={styles.reset} onClick={resetFilters}>
            Сбросить ✕
          </button>
        )}
      </div>

      <FilterGroup title="Тип полотна">
        <ul className={styles.optionsList}>
          {FABRIC_TYPES.map(type => (
            <li key={type} className={styles.option}>
              <label className={styles.optionLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={filters.types.includes(type)}
                  onChange={() => toggleType(type)}
                />
                <span className={styles.checkmark}/>
                {type}
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Качество">
        <ul className={styles.optionsList}>
          {QUALITIES.map(quality => (
            <li key={quality} className={styles.option}>
              <label className={styles.optionLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={filters.qualities.includes(quality)}
                  onChange={() => toggleQuality(quality)}
                />
                <span className={styles.checkmark}/>
                {quality}
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Цвет">
        <div className={styles.swatches}>
          {COLORS.map(({value, hex}) => (
            <button
              key={value}
              className={`${styles.swatch} ${filters.colors.includes(value) ? styles.swatchActive : ''} ${value === 'white' ? styles.swatchWhite : ''}`}
              style={{background: hex}}
              onClick={() => toggleColor(value)}
              aria-label={value}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Цвет" defaultOpen={false}>
        <ul className={styles.optionsList}>
          {COLORS.map(({value, label, hex}) => (
            <li key={value} className={styles.option}>
              <label className={styles.optionLabel}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={filters.colors.includes(value)}
                  onChange={() => toggleColor(value)}
                />
                <span className={styles.checkmark}/>
                <span className={styles.dot} style={{background: hex}}/>
                {label}
              </label>
            </li>
          ))}
        </ul>
      </FilterGroup>
    </aside>
  )
}

export default CatalogFilters
