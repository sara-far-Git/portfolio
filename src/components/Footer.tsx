import { useLanguage } from '../i18n/useLanguage'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="ft">
      <div className="shell ft__in">
        <span>{t.footer}</span>
        <span dir="ltr">© {new Date().getFullYear()} Sara Farkash</span>
      </div>
    </footer>
  )
}
