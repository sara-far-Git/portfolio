import { renderToStaticMarkup } from 'react-dom/server'
import type { Lang } from './data/projects'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'

/**
 * Renders a language of the site at build time, so the shipped HTML
 * carries the real content instead of an empty root element.
 */
export function render(lang: Lang = 'he') {
  return renderToStaticMarkup(
    <LanguageProvider ssrLang={lang}>
      <App />
    </LanguageProvider>,
  )
}
