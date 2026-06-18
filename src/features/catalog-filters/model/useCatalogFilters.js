import { useState, useCallback } from 'react'

const FABRIC_TYPES = [
    'Кулинарная гладь',
    'Рибана',
    'Пике',
    'Интерлок',
    'Футер 2х нитка',
    'Футер 3х нитка',
    'Кашкорсе к 2х нитке',
    'Double Face',
]

const QUALITIES = ['Премиум', 'Стандарт']

const COLORS = [
    { value: 'yellow',    label: 'Жёлтый',                  hex: '#f5dc41' },
    { value: 'darkGreen', label: 'Тёмно-зелёный',           hex: '#007c7a' },
    { value: 'blue',      label: 'Синий',                   hex: '#263669' },
    { value: 'lightBlue', label: 'Тёмно-голубой',           hex: '#4a7ab8' },
    { value: 'redPurple', label: 'Красно-пурпурно-бордовый', hex: '#b2092c' },
    { value: 'gentle',    label: 'Нежненький',               hex: '#b5a0c9' },
    { value: 'orange',    label: 'Оранжевый',                hex: '#fc8b23' },
    { value: 'white',     label: 'Белый',                   hex: '#e8e8e8' },
    { value: 'darkGrey',  label: 'Тёмно-серый',             hex: '#848381' },
]

const SORT_OPTIONS = [
    { value: 'new',        label: 'По новизне' },
    { value: 'price-asc',  label: 'По цене ↑' },
    { value: 'price-desc', label: 'По цене ↓' },
    { value: 'name',       label: 'По названию' },
]

const initialFilters = {
    types:     [],
    qualities: [],
    colors:    [],
}

export const useCatalogFilters = () => {
    const [filters, setFilters] = useState(initialFilters)
    const [sort, setSort] = useState('new')

    const toggleType = useCallback((type) => {
        setFilters(prev => ({
            ...prev,
            types: prev.types.includes(type)
                ? prev.types.filter(t => t !== type)
                : [...prev.types, type],
        }))
    }, [])

    const toggleQuality = useCallback((quality) => {
        setFilters(prev => ({
            ...prev,
            qualities: prev.qualities.includes(quality)
                ? prev.qualities.filter(q => q !== quality)
                : [...prev.qualities, quality],
        }))
    }, [])

    const toggleColor = useCallback((color) => {
        setFilters(prev => ({
            ...prev,
            colors: prev.colors.includes(color)
                ? prev.colors.filter(c => c !== color)
                : [...prev.colors, color],
        }))
    }, [])

    const resetFilters = useCallback(() => {
        setFilters(initialFilters)
        setSort('new')
    }, [])

    const activeCount = filters.types.length + filters.qualities.length + filters.colors.length

    return {
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
    }
}
