import { useEffect, useRef } from 'react'
import CatalogFilters from "../../../features/catalog-filters/ui/CatalogFilters.jsx";
import { useCatalogFilters } from "../../../features/catalog-filters/model/useCatalogFilters.js";
import { useCatalogData } from '../model/useCatalogData'
import Card from '../../../shared/ui/card';
import CardSkeleton from "./CardSkeleton.jsx";
import styles from './CatalogSection.module.scss';

const SKELETON_COUNT = 6

const CatalogSection = () => {
    const {
        filters, sort, setSort,
        toggleType, toggleQuality, toggleColor,
        resetFilters, activeCount,
        FABRIC_TYPES, QUALITIES, COLORS, SORT_OPTIONS,
    } = useCatalogFilters()

    const { items, loading, initialLoading, hasMore, error, loadMore } = useCatalogData({ filters, sort })

    const sentinelRef = useRef(null)

    useEffect(() => {
        const sentinel = sentinelRef.current
        if (!sentinel) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    loadMore()
                }
            },
            { rootMargin: '200px' }
        )

        observer.observe(sentinel)
        return () => observer.disconnect()
    }, [hasMore, loading, loadMore])



    return (
        <section className={styles.section}>
            <nav className={styles.breadcrumb}>
                <a href="/">Главная</a>
                <span className={styles.sep}>›</span>
                <span>Каталог</span>
            </nav>

            <h1 className={styles.pageTitle}>
                Позаботьтесь о себе и своих близких,<br />
                выбирайте качественные ткани
            </h1>

            <div className={styles.layout}>

                <CatalogFilters
                    filters={filters}
                    sort={sort}
                    setSort={setSort}
                    toggleType={toggleType}
                    toggleQuality={toggleQuality}
                    toggleColor={toggleColor}
                    resetFilters={resetFilters}
                    activeCount={activeCount}
                    FABRIC_TYPES={FABRIC_TYPES}
                    QUALITIES={QUALITIES}
                    COLORS={COLORS}
                    SORT_OPTIONS={SORT_OPTIONS}
                />

                <div className={styles.right}>

                    <div className={styles.toolbar}>
                        <div />
                        <label className={styles.sortLabel}>
                            Сортировка:
                            <select
                                className={styles.sortSelect}
                                value={sort}
                                onChange={e => setSort(e.target.value)}
                            >
                                {SORT_OPTIONS.map(o => (
                                    <option key={o.value} value={o.value}>{o.label}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className={styles.grid}>
                        {initialLoading
                            ? Array(SKELETON_COUNT).fill(0).map((_, i) => <CardSkeleton key={i} />)
                            : items.map(fabric => (
                                <Card
                                    key={fabric.id}
                                    id={fabric.id}
                                    title={fabric.name}
                                    price={fabric.price}
                                    width={fabric.width}
                                    image={fabric.image}
                                />
                            ))
                        }

                        {!initialLoading && loading && (
                            Array(3).fill(0).map((_, i) => <CardSkeleton key={`more-${i}`} />)
                        )}

                        {!initialLoading && !loading && items.length === 0 && (
                            <div className={styles.empty}>
                                По вашим фильтрам ничего не найдено
                            </div>
                        )}
                    </div>
                    {error && (
                        <div className={styles.error}>
                            Ошибка: {error}. Убедитесь что json-server запущен на порту 3001.
                        </div>
                    )}
                    <div ref={sentinelRef} className={styles.sentinel} />
                </div>
            </div>
        </section>
    )
}

export default CatalogSection
