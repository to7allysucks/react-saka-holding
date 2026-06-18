const BASE_URL = '/api'

export const fetchFabricById = async (id) => {
        console.log('fetching fabric:', id)
    const res = await fetch(`${BASE_URL}/fabrics/${id}`)
    if (!res.ok) throw new Error('Товар не найден')
    return res.json()
}