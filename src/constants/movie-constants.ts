// Sort Orders (base components)
export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

// Sort Fields (what can be sorted by)
export const SORT_FIELDS = {
  POPULARITY: 'popularity',
  RELEASE_DATE: 'release_date',
  VOTE_AVERAGE: 'vote_average',
  TITLE: 'title',
} as const;

// Composed Sort Options (field.order combinations)
export const SORT_OPTIONS = {
  POPULARITY_DESC: `${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.DESC}`,
  POPULARITY_ASC: `${SORT_FIELDS.POPULARITY}.${SORT_ORDERS.ASC}`,
  RELEASE_DATE_DESC: `${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.DESC}`,
  RELEASE_DATE_ASC: `${SORT_FIELDS.RELEASE_DATE}.${SORT_ORDERS.ASC}`,
  VOTE_AVERAGE_DESC: `${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.DESC}`,
  VOTE_AVERAGE_ASC: `${SORT_FIELDS.VOTE_AVERAGE}.${SORT_ORDERS.ASC}`,
  TITLE_ASC: `${SORT_FIELDS.TITLE}.${SORT_ORDERS.ASC}`,
  TITLE_DESC: `${SORT_FIELDS.TITLE}.${SORT_ORDERS.DESC}`,
} as const;

// Search Modes
export const SEARCH_MODES = {
  SEARCH: 'search',
  DISCOVER: 'discover',
  TRENDING: 'trending',
} as const;

// Trending Periods
export const TRENDING_PERIODS = {
  DAY: 'day',
  WEEK: 'week',
} as const;

// Movie Status Values
export const MOVIE_STATUS = {
  RUMORED: 'Rumored',
  PLANNED: 'Planned',
  IN_PRODUCTION: 'In Production',
  POST_PRODUCTION: 'Post Production',
  RELEASED: 'Released',
  CANCELED: 'Canceled',
} as const;

// Video Types
export const VIDEO_TYPES = {
  TRAILER: 'Trailer',
  TEASER: 'Teaser',
  CLIP: 'Clip',
  FEATURETTE: 'Featurette',
  BEHIND_THE_SCENES: 'Behind the Scenes',
  BLOOPERS: 'Bloopers',
} as const;

// Video Sites
export const VIDEO_SITES = {
  YOUTUBE: 'YouTube',
  VIMEO: 'Vimeo',
} as const;

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

// Rating Ranges (for filtering)
export const RATING_RANGES = {
  EXCELLENT: { min: 8.0, max: 10.0, label: '8.0+ Excellent' },
  VERY_GOOD: { min: 7.0, max: 7.9, label: '7.0+ Very Good' },
  GOOD: { min: 6.0, max: 6.9, label: '6.0+ Good' },
  AVERAGE: { min: 5.0, max: 5.9, label: '5.0+ Average' },
  BELOW_AVERAGE: { min: 0, max: 4.9, label: 'Below 5.0' },
} as const;

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
