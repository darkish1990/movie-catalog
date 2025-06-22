import { LANGUAGE_CODES } from './movie-constants'
import type { LanguageCode } from './movie-types'

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
} as const

export const getLanguageName = (code: LanguageCode): string => {
  return LANGUAGE_NAMES[code] || code.toUpperCase()
}

export const isValidLanguageCode = (code: string): code is LanguageCode => {
  return Object.values(LANGUAGE_CODES).includes(code as LanguageCode)
}
