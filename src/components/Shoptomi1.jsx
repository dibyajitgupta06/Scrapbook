import './ScrapbookPage.css'

/* ============================================================
   সপ্তমী · ০১ — The Rickshaw Ride
   Dark warm page: black-bg illustration blends into maroon
   ============================================================ */

export default function Shoptomi1({ onNext }) {
  return (
    <div className="scrapbook-page sp1-page" role="main">

      {/* Decorative corner motifs */}
      <span className="sp-corner sp-corner--tl" aria-hidden="true">❋</span>
      <span className="sp-corner sp-corner--tr" aria-hidden="true">❋</span>

      {/* Day label area */}
      <div className="sp-header sp1-header">
        <div className="sp-tape sp-tape--left" aria-hidden="true">
          <span className="handwritten">pandal hopping!</span>
        </div>

        <div className="day-label-wrapper">
          <h1 className="day-label bn-display sp1-label" lang="bn">সপ্তমী</h1>
          <div className="sp-day-counter">
            <span className="handwritten sp-day-num">· ০১ ·</span>
          </div>
          <div className="day-label-underline sp1-underline" />
        </div>

        <div className="sp-tape sp-tape--right" aria-hidden="true">
          <span className="handwritten">সপ্তমীর বিকেল</span>
        </div>
      </div>

      {/* Main illustration */}
      <div className="sp-illo-area sp1-illo">
        <img
          src="images/shoptomi1.jpg"
          alt="We rode a decorated rickshaw together on Shoptomi — a laughing moment"
          className="sp1-img"
          loading="eager"
          draggable="false"
        />

        {/* Decorative elements around the image */}
        <div className="sp-flower-scatter" aria-hidden="true">
          <span className="sp-flower sp-f1">🌸</span>
          <span className="sp-flower sp-f2">✿</span>
          <span className="sp-flower sp-f3">🌼</span>
          <span className="sp-flower sp-f4">✿</span>
          <span className="sp-flower sp-f5">🌸</span>
        </div>
      </div>

      {/* Bottom navigation area */}
      <div className="sp-footer sp1-footer">
        <div className="sp-footer-deco" aria-hidden="true">
          <span>✦</span>
          <svg width="80" height="2" viewBox="0 0 80 2"><line x1="0" y1="1" x2="80" y2="1" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/></svg>
          <span>✦</span>
        </div>

        <button
          className="nav-btn nav-btn-gold sp-nav-btn"
          onClick={onNext}
          aria-label="Next: সপ্তমী ০২"
        >
          <span>পরের স্মৃতি</span>
          <span aria-hidden="true">→</span>
        </button>

        <p className="sp-page-hint handwritten" aria-hidden="true">সপ্তমী · ০২</p>
      </div>

      <span className="sp-corner sp-corner--bl" aria-hidden="true">❋</span>
      <span className="sp-corner sp-corner--br" aria-hidden="true">❋</span>
    </div>
  )
}
