import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'

const FRAME_WIDTH = 1280
const LOAD_TIMEOUT = 7000

interface LivePreviewProps {
  url: string
  name: string
  shot?: string
}

export function LivePreview({ url, name, shot }: LivePreviewProps) {
  const { t } = useLanguage()
  const viewport = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)
  const [state, setState] = useState<'idle' | 'loading' | 'ready'>('idle')
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const node = viewport.current
    if (!node) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / FRAME_WIDTH)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (state !== 'loading') return
    // A site that refuses to be framed never reports a usable load, so time it out.
    const timer = window.setTimeout(() => setBlocked(true), LOAD_TIMEOUT)
    return () => window.clearTimeout(timer)
  }, [state])

  return (
    <div className="live" data-state={state} data-blocked={blocked}>
      <div className="live__bar">
        <div className="live__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="live__url" dir="ltr">
          {new URL(url).host}
        </span>
      </div>

      <div className="live__vp" ref={viewport}>
        {shot ? (
          <div className="live__ph live__ph--shot">
            <img src={shot} alt={name} loading="lazy" />
          </div>
        ) : (
          <div className="live__ph">
            <b>{name}</b>
            <span className="mono">{t.live.hint}</span>
          </div>
        )}

        {state !== 'idle' && (
          <iframe
            src={url}
            title={name}
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{ transform: `scale(${scale})` }}
            onLoad={() => setState('ready')}
          />
        )}

        <div className="live__fb">
          <span className="mono">{t.live.blocked}</span>
          <a className="live__go" href={url} target="_blank" rel="noreferrer">
            {t.live.blockedCta} ↗
          </a>
        </div>
      </div>

      <div className="live__ft">
        {state === 'idle' ? (
          <button className="live__btn" onClick={() => setState('loading')}>
            {t.live.load}
          </button>
        ) : (
          <span className="live__hint">{state === 'ready' ? t.live.hint : t.live.loading}</span>
        )}

        <a className="live__go" href={url} target="_blank" rel="noreferrer">
          {t.live.open} ↗
        </a>
      </div>
    </div>
  )
}
