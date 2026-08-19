import { createContext } from 'react'
import type { Lang } from '../data/projects'
import { content } from '../data/content'

export interface LanguageValue {
  lang: Lang
  dir: 'rtl' | 'ltr'
  t: (typeof content)[Lang]
  toggle: () => void
}

export const LanguageContext = createContext<LanguageValue | null>(null)
