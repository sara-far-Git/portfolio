interface LivePreviewProps {
  url: string
  name: string
  shot?: string
  openLabel: string
  hint: string
}

export function LivePreview({ url, name, shot, openLabel, hint }: LivePreviewProps) {
  return (
    <div className="live">
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

      <div className="live__vp">
        {shot ? (
          <a className="live__ph live__ph--shot" href={url} target="_blank" rel="noreferrer">
            <img src={shot} alt={name} />
          </a>
        ) : (
          <div className="live__ph">
            <b>{name}</b>
            <span className="mono">{hint}</span>
          </div>
        )}
      </div>

      <div className="live__ft">
        <span className="live__hint">{hint}</span>
        <a className="live__go" href={url} target="_blank" rel="noreferrer">
          {openLabel} ↗
        </a>
      </div>
    </div>
  )
}
