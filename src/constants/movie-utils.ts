import { SORT_FIELDS, SORT_ORDERS } from './movie-constants'
import type { SortOption, SortField, SortOrder, SortConfig, CreateSortOption } from './movie-types'

// Parse a sort option string into field and order
export const parseSortOption = (sortOption: SortOption): SortConfig => {
  const [field, order] = sortOption.split('.') as [SortField, SortOrder]
  return { field, order }
}

// Create a sort option from field and order
export const createSortOption = <F extends SortField, O extends SortOrder>(
  field: F,
  order: O
): CreateSortOption<F, O> => {
  return `${field}.${order}` as CreateSortOption<F, O>
}

// Get all sort options for a specific field
export const getSortOptionsForField = (field: SortField): SortOption[] => {
  return [
    createSortOption(field, SORT_ORDERS.ASC),
    createSortOption(field, SORT_ORDERS.DESC),
  ] as SortOption[]
}

// Get all sort options for a specific order
export const getSortOptionsForOrder = (order: SortOrder): SortOption[] => {
  return Object.values(SORT_FIELDS).map(field => 
    createSortOption(field, order)
  ) as SortOption[]
}

// Flip sort order (asc <-> desc)
export const flipSortOrder = (sortOption: SortOption): SortOption => {
  const { field, order } = parseSortOption(sortOption)
  const newOrder = order === SORT_ORDERS.ASC ? SORT_ORDERS.DESC : SORT_ORDERS.ASC
  return createSortOption(field, newOrder)
}

// Check if sort option has specific field
export const hasSortField = (sortOption: SortOption, field: SortField): boolean => {
  return parseSortOption(sortOption).field === field
}

// Check if sort option has specific order
export const hasSortOrder = (sortOption: SortOption, order: SortOrder): boolean => {
  return parseSortOption(sortOption).order === order
}

// Get human-readable label for sort option
export const getSortLabel = (sortOption: SortOption): string => {
  const { field, order } = parseSortOption(sortOption)
  
  const fieldLabels: Record<SortField, string> = {
    [SORT_FIELDS.POPULARITY]: 'Popularity',
    [SORT_FIELDS.RELEASE_DATE]: 'Release Date',
    [SORT_FIELDS.VOTE_AVERAGE]: 'Rating',
    [SORT_FIELDS.TITLE]: 'Title',
  }
  
  const orderLabels: Record<SortOrder, string> = {
    [SORT_ORDERS.ASC]: 'Ascending',
    [SORT_ORDERS.DESC]: 'Descending',
  }
  
  return `${fieldLabels[field]} (${orderLabels[order]})`
}

// Get short label for sort option
export const getSortShortLabel = (sortOption: SortOption): string => {
  const { field, order } = parseSortOption(sortOption)
  
  const fieldLabels: Record<SortField, string> = {
    [SORT_FIELDS.POPULARITY]: 'Popular',
    [SORT_FIELDS.RELEASE_DATE]: 'Latest',
    [SORT_FIELDS.VOTE_AVERAGE]: 'Top Rated',
    [SORT_FIELDS.TITLE]: 'A-Z',
  }
  
  const prefix = fieldLabels[field]
  return order === SORT_ORDERS.DESC ? prefix : `${prefix} (${order.toUpperCase()})`
}
