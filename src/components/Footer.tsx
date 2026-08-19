import { useLanguage } from '../i18n/useLanguage'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span>
          © {new Date().getFullYear()} {t.hero.name}
        </span>
        <span>{t.footer}</span>
      </div>
    </footer>
  )
}
