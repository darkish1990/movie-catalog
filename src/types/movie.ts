import type { 
  SortOption, 
  MovieStatus, 
  VideoType, 
  VideoSite, 
  Department, 
  JobTitle, 
  LanguageCode 
} from '../constants'

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;  genre_ids: number[];
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
  spoken_languages: SpokenLanguage[];  status: MovieStatus;
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
  name: string;  job: JobTitle;
  department: Department;
  profile_path: string;
}

export interface Videos {
  results: Video[];
}

export interface Video {
  id: string;
  key: string;
  name: string;  site: VideoSite;
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
  genre?: string;
  year?: number;
  minRating?: number;
  maxRating?: number;
  sortBy?: SortOption;
  page?: number;
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;  Error?: string;
}

export interface SearchFilters {
  year?: string;
  type?: 'movie' | 'series' | 'episode';
  plot?: 'short' | 'full';
}
