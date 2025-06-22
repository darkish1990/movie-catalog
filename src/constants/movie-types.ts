import type {
  SEARCH_MODES,
  TRENDING_PERIODS,
  SORT_OPTIONS,
  SORT_ORDERS,
  SORT_FIELDS,
  MOVIE_STATUS,
  VIDEO_TYPES,
  VIDEO_SITES,
  DEPARTMENTS,
  JOB_TITLES,
  IMAGE_SIZES,
  LANGUAGE_CODES,
  API_ENDPOINTS,
  RATING_RANGES,
  DECADE_RANGES,
} from './movie-constants'

export type SearchMode = typeof SEARCH_MODES[keyof typeof SEARCH_MODES]
export type TrendingPeriod = typeof TRENDING_PERIODS[keyof typeof TRENDING_PERIODS]

export type SortOrder = typeof SORT_ORDERS[keyof typeof SORT_ORDERS]
export type SortField = typeof SORT_FIELDS[keyof typeof SORT_FIELDS]
export type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS]

export type MovieStatus = typeof MOVIE_STATUS[keyof typeof MOVIE_STATUS]

export type VideoType = typeof VIDEO_TYPES[keyof typeof VIDEO_TYPES]
export type VideoSite = typeof VIDEO_SITES[keyof typeof VIDEO_SITES]

export type Department = typeof DEPARTMENTS[keyof typeof DEPARTMENTS]
export type JobTitle = typeof JOB_TITLES[keyof typeof JOB_TITLES]

export type PosterSize = typeof IMAGE_SIZES.POSTER[keyof typeof IMAGE_SIZES.POSTER]
export type BackdropSize = typeof IMAGE_SIZES.BACKDROP[keyof typeof IMAGE_SIZES.BACKDROP]
export type ProfileSize = typeof IMAGE_SIZES.PROFILE[keyof typeof IMAGE_SIZES.PROFILE]

export type LanguageCode = typeof LANGUAGE_CODES[keyof typeof LANGUAGE_CODES]

export type ApiEndpoint = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS]

export type RatingRange = keyof typeof RATING_RANGES
export type DecadeRange = keyof typeof DECADE_RANGES

export interface SortConfig {
  field: SortField
  order: SortOrder
}

export type ParsedSortOption<T extends SortOption> = T extends `${infer Field}.${infer Order}`
  ? Field extends SortField
    ? Order extends SortOrder
      ? { field: Field; order: Order }
      : never
    : never
  : never

export type CreateSortOption<F extends SortField, O extends SortOrder> = `${F}.${O}`
