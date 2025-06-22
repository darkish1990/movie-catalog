export const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export const SORT_FIELDS = {
  POPULARITY: 'popularity',
  RELEASE_DATE: 'release_date',
  VOTE_AVERAGE: 'vote_average',
  TITLE: 'title',
} as const;

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

export const SEARCH_MODES = {
  SEARCH: 'search',
  DISCOVER: 'discover',
  TRENDING: 'trending',
} as const;

export const TRENDING_PERIODS = {
  DAY: 'day',
  WEEK: 'week',
} as const;

export const MOVIE_STATUS = {
  RUMORED: 'Rumored',
  PLANNED: 'Planned',
  IN_PRODUCTION: 'In Production',
  POST_PRODUCTION: 'Post Production',
  RELEASED: 'Released',
  CANCELED: 'Canceled',
} as const;

export const VIDEO_TYPES = {
  TRAILER: 'Trailer',
  TEASER: 'Teaser',
  CLIP: 'Clip',
  FEATURETTE: 'Featurette',
  BEHIND_THE_SCENES: 'Behind the Scenes',
  BLOOPERS: 'Bloopers',
} as const;

export const VIDEO_SITES = {
  YOUTUBE: 'YouTube',
  VIMEO: 'Vimeo',
} as const;

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

export const API_ENDPOINTS = {
  SEARCH_MOVIE: '/search/movie',
  DISCOVER_MOVIE: '/discover/movie',
  MOVIE_DETAILS: '/movie',
  TRENDING_MOVIE: '/trending/movie',
  POPULAR_MOVIES: '/movie/popular',
  TOP_RATED_MOVIES: '/movie/top_rated',
  GENRES: '/genre/movie/list',
} as const;
