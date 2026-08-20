import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from '../data/projects'
import { content } from '../data/content'
import { LanguageContext } from './languageContext'
import type { LanguageValue } from './languageContext'

const STORAGE_KEY = 'portfolio-lang'

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'he'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'he' || stored === 'en') return stored
  return navigator.language?.startsWith('he') ? 'he' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const dir = lang === 'he' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang, dir])

  const value: LanguageValue = {
    lang,
    dir,
    t: content[lang],
    toggle: () => setLang((prev) => (prev === 'he' ? 'en' : 'he')),
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
