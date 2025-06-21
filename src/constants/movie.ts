// Search Modes
export const SEARCH_MODES = {
  SEARCH: 'search',
  DISCOVER: 'discover',
  TRENDING: 'trending',
} as const;

export type SearchMode = typeof SEARCH_MODES[keyof typeof SEARCH_MODES];

// Trending Periods
export const TRENDING_PERIODS = {
  DAY: 'day',
  WEEK: 'week',
} as const;

export type TrendingPeriod = typeof TRENDING_PERIODS[keyof typeof TRENDING_PERIODS];

// Sort Options
export const SORT_OPTIONS = {
  POPULARITY_DESC: 'popularity.desc',
  RELEASE_DATE_DESC: 'release_date.desc',
  VOTE_AVERAGE_DESC: 'vote_average.desc',
  TITLE_ASC: 'title.asc',
} as const;

export type SortOption = typeof SORT_OPTIONS[keyof typeof SORT_OPTIONS];

// Sort Orders
export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export type SortOrder = typeof SORT_ORDERS[keyof typeof SORT_ORDERS];

// Movie Status Values
export const MOVIE_STATUS = {
  RUMORED: 'Rumored',
  PLANNED: 'Planned',
  IN_PRODUCTION: 'In Production',
  POST_PRODUCTION: 'Post Production',
  RELEASED: 'Released',
  CANCELED: 'Canceled',
} as const;

export type MovieStatus = typeof MOVIE_STATUS[keyof typeof MOVIE_STATUS];

// Video Types
export const VIDEO_TYPES = {
  TRAILER: 'Trailer',
  TEASER: 'Teaser',
  CLIP: 'Clip',
  FEATURETTE: 'Featurette',
  BEHIND_THE_SCENES: 'Behind the Scenes',
  BLOOPERS: 'Bloopers',
} as const;

export type VideoType = typeof VIDEO_TYPES[keyof typeof VIDEO_TYPES];

// Video Sites
export const VIDEO_SITES = {
  YOUTUBE: 'YouTube',
  VIMEO: 'Vimeo',
} as const;

export type VideoSite = typeof VIDEO_SITES[keyof typeof VIDEO_SITES];

// Department Names (for crew)
export const DEPARTMENTS = {
  DIRECTING: 'Directing',
  WRITING: 'Writing',
  PRODUCTION: 'Production',
  CAMERA: 'Camera',
  EDITING: 'Editing',
  SOUND: 'Sound',
  ART: 'Art',
  VISUAL_EFFECTS: 'Visual Effects',
  COSTUME_MAKEUP: 'Costume & Make-Up',
  LIGHTING: 'Lighting',
} as const;

export type Department = typeof DEPARTMENTS[keyof typeof DEPARTMENTS];

// Job Titles (common crew positions)
export const JOB_TITLES = {
  DIRECTOR: 'Director',
  PRODUCER: 'Producer',
  EXECUTIVE_PRODUCER: 'Executive Producer',
  SCREENPLAY: 'Screenplay',
  STORY: 'Story',
  WRITER: 'Writer',
  DIRECTOR_OF_PHOTOGRAPHY: 'Director of Photography',
  EDITOR: 'Editor',
  COMPOSER: 'Original Music Composer',
  PRODUCTION_DESIGNER: 'Production Design',
  COSTUME_DESIGNER: 'Costume Design',
} as const;

export type JobTitle = typeof JOB_TITLES[keyof typeof JOB_TITLES];

// Image Sizes (TMDB)
export const IMAGE_SIZES = {
  POSTER: {
    W92: 'w92',
    W154: 'w154',
    W185: 'w185',
    W342: 'w342',
    W500: 'w500',
    W780: 'w780',
    ORIGINAL: 'original',
  },
  BACKDROP: {
    W300: 'w300',
    W780: 'w780',
    W1280: 'w1280',
    ORIGINAL: 'original',
  },
  PROFILE: {
    W45: 'w45',
    W185: 'w185',
    H632: 'h632',
    ORIGINAL: 'original',
  },
} as const;

export type PosterSize = typeof IMAGE_SIZES.POSTER[keyof typeof IMAGE_SIZES.POSTER];
export type BackdropSize = typeof IMAGE_SIZES.BACKDROP[keyof typeof IMAGE_SIZES.BACKDROP];
export type ProfileSize = typeof IMAGE_SIZES.PROFILE[keyof typeof IMAGE_SIZES.PROFILE];

// Language Codes (common ones)
export const LANGUAGE_CODES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
  DE: 'de',
  IT: 'it',
  JA: 'ja',
  KO: 'ko',
  ZH: 'zh',
  RU: 'ru',
  PT: 'pt',
  HI: 'hi',
  AR: 'ar',
} as const;

export type LanguageCode = typeof LANGUAGE_CODES[keyof typeof LANGUAGE_CODES];

// Language Names
export const LANGUAGE_NAMES: Record<LanguageCode, string> = {
  [LANGUAGE_CODES.EN]: 'English',
  [LANGUAGE_CODES.ES]: 'Spanish',
  [LANGUAGE_CODES.FR]: 'French',
  [LANGUAGE_CODES.DE]: 'German',
  [LANGUAGE_CODES.IT]: 'Italian',
  [LANGUAGE_CODES.JA]: 'Japanese',
  [LANGUAGE_CODES.KO]: 'Korean',
  [LANGUAGE_CODES.ZH]: 'Chinese',
  [LANGUAGE_CODES.RU]: 'Russian',
  [LANGUAGE_CODES.PT]: 'Portuguese',
  [LANGUAGE_CODES.HI]: 'Hindi',
  [LANGUAGE_CODES.AR]: 'Arabic',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  SEARCH_MOVIE: '/search/movie',
  DISCOVER_MOVIE: '/discover/movie',
  MOVIE_DETAILS: '/movie',
  TRENDING_MOVIE: '/trending/movie',
  POPULAR_MOVIES: '/movie/popular',
  TOP_RATED_MOVIES: '/movie/top_rated',
  GENRES: '/genre/movie/list',
} as const;

export type ApiEndpoint = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS];

// Rating Ranges (for filtering)
export const RATING_RANGES = {
  EXCELLENT: { min: 8.0, max: 10.0, label: '8.0+ Excellent' },
  VERY_GOOD: { min: 7.0, max: 7.9, label: '7.0+ Very Good' },
  GOOD: { min: 6.0, max: 6.9, label: '6.0+ Good' },
  AVERAGE: { min: 5.0, max: 5.9, label: '5.0+ Average' },
  BELOW_AVERAGE: { min: 0, max: 4.9, label: 'Below 5.0' },
} as const;

export type RatingRange = keyof typeof RATING_RANGES;

// Decade Ranges (for filtering)
export const DECADE_RANGES = {
  TWENTIES: { start: 2020, end: 2029, label: '2020s' },
  TENS: { start: 2010, end: 2019, label: '2010s' },
  THOUSANDS: { start: 2000, end: 2009, label: '2000s' },
  NINETIES: { start: 1990, end: 1999, label: '1990s' },
  EIGHTIES: { start: 1980, end: 1989, label: '1980s' },
  SEVENTIES: { start: 1970, end: 1979, label: '1970s' },
  SIXTIES: { start: 1960, end: 1969, label: '1960s' },
  CLASSIC: { start: 1900, end: 1959, label: 'Classic (Before 1960)' },
} as const;

export type DecadeRange = keyof typeof DECADE_RANGES;
