import type {
  SEARCH_MODES,
  TRENDING_PERIODS,
  SORT_OPTIONS,
  SORT_ORDERS,
  SORT_FIELDS,
  MOVIE_STATUS,
  VIDEO_TYPES,
  VIDEO_SITES,
  JOB_TITLES,
  LANGUAGE_CODES,
  API_ENDPOINTS,
} from './constants'

export type SearchMode = typeof SEARCH_MODES[keyof typeof SEARCH_MODES]
export type TrendingPeriod = typeof TRENDING_PERIODS[keyof typeof TRENDING_PERIODS]
export type SortOrder = typeof SORT_ORDERS[keyof typeof SORT_ORDERS]
export type SortField = typeof SORT_FIELDS[keyof typeof SORT_FIELDS]
export type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS]
export type MovieStatus = typeof MOVIE_STATUS[keyof typeof MOVIE_STATUS]
export type VideoType = typeof VIDEO_TYPES[keyof typeof VIDEO_TYPES]
export type VideoSite = typeof VIDEO_SITES[keyof typeof VIDEO_SITES]
export type JobTitle = typeof JOB_TITLES[keyof typeof JOB_TITLES]
export type LanguageCode = typeof LANGUAGE_CODES[keyof typeof LANGUAGE_CODES]
export type ApiEndpoint = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS]

export interface SortConfig {
  field: SortField
  order: SortOrder
}

export type CreateSortOption<F extends SortField, O extends SortOrder> = `${F}.${O}`

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  original_language: LanguageCode;
  adult: boolean;
  popularity: number;
}

export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genres: Genre[];
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  spoken_languages: SpokenLanguage[];
  status: MovieStatus;
  tagline: string;
  budget: number;
  revenue: number;
  adult: boolean;
  original_title: string;
  original_language: LanguageCode;
  popularity: number;
  credits?: Credits;
  videos?: Videos;
  similar?: MovieSearchResponse;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
  english_name: string;
}

export interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  order: number;
}

export interface CrewMember {
  id: number;
  name: string;
  job: JobTitle;
  department: string;
  profile_path: string;
}

export interface Videos {
  results: Video[];
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: VideoSite;
  type: VideoType;
  official: boolean;
}

export interface MovieSearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface TMDBSearchFilters {
  query?: string;
  genre?: number;
  year?: number;
  minRating?: number;
  maxRating?: number;
  sortBy?: SortOption;
  page?: number;
}
