import './ScrapbookPage.css'

/* ============================================================
   নবমী — The Gift
   Soft rose-blush page: warm, intimate, tender moment
   ============================================================ */

export default function Nabami({ onNext }) {
  return (
    <div className="scrapbook-page nb-page" role="main">

      <span className="sp-corner sp-corner--tl nb-corner" aria-hidden="true">♡</span>
      <span className="sp-corner sp-corner--tr nb-corner" aria-hidden="true">♡</span>

      {/* Header */}
      <div className="sp-header nb-header">
        <div className="day-label-wrapper">
          <h1 className="day-label bn-display nb-label" lang="bn">নবমী</h1>
          <div className="day-label-underline nb-underline" />
        </div>

        <div className="nb-header-note handwritten" aria-hidden="true">
          একটুখানি চমক 🎁
        </div>
      </div>

      {/* Dual illustration: standing gift scene + seated anklet scene */}
      <div className="nb-illo-area">
        <div className="nb-gift-wrap">
          <img
            src={`${import.meta.env.BASE_URL}images/nabami_gift.jpg`}
            alt="He surprised her with a gift on Nabami"
            className="nb-gift-img"
            loading="eager"
            draggable="false"
          />
        </div>

        {/* Decorative divider */}
        <div className="nb-divider" aria-hidden="true">
          <span>❦</span>
        </div>

        <div className="nb-anklet-wrap">
          <img
            src={`${import.meta.env.BASE_URL}images/nabami_anklet.jpg`}
            alt="He clasped the anklet on her foot, she smiled dreamily"
            className="nb-anklet-img"
            loading="eager"
            draggable="false"
          />
        </div>
      </div>

      {/* Little love note */}
      <div className="nb-love-note" role="note" aria-label="A small note">
        <div className="nb-note-inner">
          <p className="handwritten nb-note-text">
            "a payel for your feet,<br/>
            and every step we'll take." ❤️
          </p>
        </div>
      </div>

      {/* Decorative flowers */}
      <div className="nb-flowers" aria-hidden="true">
        {['🌸','💛','🌸','💛','🌸'].map((f, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.5}s` }}>{f}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="sp-footer nb-footer">
        <button
          className="nav-btn nav-btn-maroon sp-nav-btn"
          onClick={onNext}
          aria-label="Next: দশমী"
        >
          <span>শেষ দিন</span>
          <span aria-hidden="true">→</span>
        </button>
        <p className="sp-page-hint handwritten nb-hint" aria-hidden="true">দশমী</p>
      </div>

      <span className="sp-corner sp-corner--bl nb-corner" aria-hidden="true">♡</span>
      <span className="sp-corner sp-corner--br nb-corner" aria-hidden="true">♡</span>
    </div>
  )
}
