import { useState, useEffect } from 'react'
import { fetchFabricById } from '../../../entities/fabric/api/fabricByIdApi'



export const useFabricDetail = (id) => {
    const [fabric, setFabric] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) return
        setLoading(true)
        setError(null)

        fetchFabricById(id)
            .then(data => setFabric(data))
            .catch(e => setError(e.message))
            .finally(() => setLoading(false))
    }, [id])


    useEffect(() => {
    console.log('useEffect triggered, id:', id)
    if (!id) return
    // ...
}, [id])

    return { fabric, loading, error }
}
