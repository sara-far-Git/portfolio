import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'

/**
 * Renders the Hebrew version of the site at build time, so the shipped
 * index.html carries the real content instead of an empty root element.
 */
export function render() {
  return renderToStaticMarkup(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
  )
}
