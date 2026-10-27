import './ScrapbookPage.css'

/* ============================================================
   অষ্টমী — The Photograph
   Warm cream page: white-bg PNGs, composed side by side
   ============================================================ */

export default function Oshtomi({ onNext }) {
  return (
    <div className="scrapbook-page os-page" role="main">

      <span className="sp-corner sp-corner--tl os-corner" aria-hidden="true">◈</span>
      <span className="sp-corner sp-corner--tr os-corner" aria-hidden="true">◈</span>

      {/* Header */}
      <div className="sp-header os-header">
        <div className="sp-tape sp-tape--left os-tape" aria-hidden="true">
          <span className="handwritten">মহাঅষ্টমী 📸</span>
        </div>

        <div className="day-label-wrapper">
          <h1 className="day-label bn-display os-label" lang="bn">অষ্টমী</h1>
          <div className="day-label-underline os-underline" />
        </div>

        <div className="sp-tape sp-tape--right os-tape-r" aria-hidden="true">
          <span className="handwritten">click! ❤️</span>
        </div>
      </div>

      {/* Dual composition: boy photographing + girl photographed */}
      <div className="os-illo-area">
        {/* Girl — the main subject */}
        <div className="os-girl-wrap">
          <img
            src="images/oshtomi_girl.png"
            alt="She was stunning in her Ashtami saree"
            className="os-girl-img"
            loading="eager"
            draggable="false"
          />
          {/* Small camera stamp */}
          <div className="os-photo-stamp" aria-hidden="true">
            <span>📷</span>
            <span className="handwritten os-stamp-text">Ashtami 2026</span>
          </div>
        </div>

        {/* Boy photographing her */}
        <div className="os-boy-wrap">
          <img
            src="images/oshtomi_boy.png"
            alt="He was secretly photographing her beauty"
            className="os-boy-img"
            loading="eager"
            draggable="false"
          />
        </div>
      </div>

      {/* Little caption note */}
      <div className="os-caption-note" aria-label="Caption">
        <div className="os-note-tape" aria-hidden="true" />
        <p className="handwritten os-caption-text">
          "caught in the act 📸"
        </p>
      </div>

      {/* Footer */}
      <div className="sp-footer os-footer">
        <button
          className="nav-btn nav-btn-primary sp-nav-btn"
          onClick={onNext}
          aria-label="Next: নবমী"
        >
          <span>পরের দিন</span>
          <span aria-hidden="true">→</span>
        </button>
        <p className="sp-page-hint handwritten os-hint" aria-hidden="true">নবমী</p>
      </div>

      <span className="sp-corner sp-corner--bl os-corner" aria-hidden="true">◈</span>
      <span className="sp-corner sp-corner--br os-corner" aria-hidden="true">◈</span>
    </div>
  )
}
