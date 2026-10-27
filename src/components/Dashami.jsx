import './ScrapbookPage.css'

/* ============================================================
   দশমী — The Last Day
   Deep red page: black-bg JPG blends, bittersweet + beautiful
   ============================================================ */

export default function Dashami({ onNext }) {
  return (
    <div className="scrapbook-page ds-page" role="main">

      <span className="sp-corner sp-corner--tl ds-corner" aria-hidden="true">❋</span>
      <span className="sp-corner sp-corner--tr ds-corner" aria-hidden="true">❋</span>

      {/* Top petal band */}
      <div className="ds-petal-band" aria-hidden="true">
        {['🌹','🌺','🌹','🌺','🌹','🌺','🌹','🌺','🌹'].map((f, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.35}s` }}>{f}</span>
        ))}
      </div>

      {/* Header */}
      <div className="sp-header ds-header">
        <div className="day-label-wrapper">
          <div className="ds-title-top handwritten" aria-hidden="true">বিজয়া দশমী</div>
          <h1 className="day-label bn-display ds-label" lang="bn">দশমী</h1>
          <div className="day-label-underline ds-underline" />
        </div>
      </div>

      {/* Main illustration */}
      <div className="ds-illo-area">
        <img
          src={`${import.meta.env.BASE_URL}images/dashami.jpg`}
          alt="He gave her a bouquet of roses on Dashami — the last day of Puja"
          className="ds-img"
          loading="eager"
          draggable="false"
        />

        {/* Floating rose petals around the image */}
        <div className="ds-scatter" aria-hidden="true">
          <span className="ds-petal ds-p1">🌹</span>
          <span className="ds-petal ds-p2">🌺</span>
          <span className="ds-petal ds-p3">❤️</span>
          <span className="ds-petal ds-p4">🌹</span>
        </div>
      </div>

      {/* Caption */}
      <div className="ds-caption-wrap">
        <div className="ds-caption-card">
          <p className="handwritten ds-caption">
            পুজো শেষ হয়, গল্প শেষ হয় না... 🌹
          </p>
        </div>
      </div>

      {/* Footer — special "one last thing" button */}
      <div className="sp-footer ds-footer">
        <button
          className="nav-btn ds-cta-btn sp-nav-btn"
          onClick={onNext}
          aria-label="One last thing — the proposal"
        >
          <span>ONE LAST THING</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <span className="sp-corner sp-corner--bl ds-corner" aria-hidden="true">❋</span>
      <span className="sp-corner sp-corner--br ds-corner" aria-hidden="true">❋</span>
    </div>
  )
}
