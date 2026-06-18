import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchFabrics } from '../../../entities/fabric/api/fabricApi.js'

const PAGE_SIZE = 6

export const useCatalogData = ({ filters, sort }) => {
    const [items, setItems] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)
    const [initialLoading, setInitialLoading] = useState(true)
    const [error, setError] = useState(null)

    const loadingRef = useRef(false)
    const filtersRef = useRef(filters)
    const sortRef = useRef(sort)

    const loadPage = useCallback(async (pageNum, reset = false) => {
        if (loadingRef.current) return
        loadingRef.current = true
        setLoading(true)
        setError(null)

        try {
            const { data, total } = await fetchFabrics({
                ...filtersRef.current,
                sort: sortRef.current,
                page: pageNum,
                limit: PAGE_SIZE,
            })

            const safeData = Array.isArray(data) ? data : []
            setItems(prev => reset ? safeData : [...prev, ...safeData])
            setHasMore(pageNum * PAGE_SIZE < total)
            setPage(pageNum)
        } catch (e) {
            setError(e.message)
            if (reset) setItems([])
        } finally {
            loadingRef.current = false
            setLoading(false)
            setInitialLoading(false)
        }
    }, [])

    useEffect(() => {
        filtersRef.current = filters
        sortRef.current = sort
        setInitialLoading(true)
        setItems([])
        setPage(1)
        setHasMore(true)
        loadPage(1, true)
    }, [filters, sort])

    const loadMore = useCallback(() => {
        if (!loadingRef.current && hasMore) {
            loadPage(page + 1)
        }
    }, [hasMore, page, loadPage])

    return { items, loading, initialLoading, hasMore, error, loadMore }
}