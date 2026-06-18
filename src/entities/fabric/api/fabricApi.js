const BASE_URL = '/api'
export const fetchFabrics = async ({
    types = [],
    qualities = [],
    colors = [],
    sort = 'new',
    page = 1,
    limit = 6
}) => {
    const params = new URLSearchParams()

    if (sort === 'price-asc')  { params.append('_sort', 'price'); params.append('_order', 'asc') }
    if (sort === 'price-desc') { params.append('_sort', 'price'); params.append('_order', 'desc') }
    if (sort === 'name')       { params.append('_sort', 'name');  params.append('_order', 'asc') }

    types.forEach(t => params.append('type', t))
    qualities.forEach(q => params.append('quality', q))
    colors.forEach(c => params.append('color', c))

    const res = await fetch(`${BASE_URL}/fabrics?${params.toString()}`)
    if (!res.ok) throw new Error('Ошибка загрузки тканей')

    const raw = await res.json()
    const all = Array.isArray(raw) ? raw : []

    if (sort === 'new') {
        all.sort((a, b) => (b.isNew === true ? 1 : 0) - (a.isNew === true ? 1 : 0))
    }

    const start = (page - 1) * limit
    const data = all.slice(start, start + limit)
    const total = all.length

    return { data, total }
}