import './ScrapbookPage.css'

/* ============================================================
   সপ্তমী · ০২ — Walking Together
   Light peacock-blue page: white-bg PNGs shine
   ============================================================ */

export default function Shoptomi2({ onNext }) {
  return (
    <div className="scrapbook-page sp2-page" role="main">

      <span className="sp-corner sp-corner--tl sp2-corner" aria-hidden="true">✿</span>
      <span className="sp-corner sp-corner--tr sp2-corner" aria-hidden="true">✿</span>

      {/* Header */}
      <div className="sp-header sp2-header">
        <div className="sp-tape sp-tape--wide" aria-hidden="true">
          <span className="handwritten">হাতে হাত রেখে ✨</span>
        </div>

        <div className="day-label-wrapper">
          <h1 className="day-label bn-display sp2-label" lang="bn">সপ্তমী</h1>
          <div className="sp-day-counter">
            <span className="handwritten sp-day-num sp2-counter">· ০২ ·</span>
          </div>
          <div className="day-label-underline sp2-underline" />
        </div>
      </div>

      {/* Dual illustration: couple walking + waiting rickshaw */}
      <div className="sp2-illo-area">
        {/* Main: couple walking, takes more space */}
        <div className="sp2-couple-wrap">
          <img
            src="images/shoptomi2_couple.png"
            alt="We walked hand in hand on Shoptomi"
            className="sp2-couple-img"
            loading="eager"
            draggable="false"
          />
        </div>

        {/* Secondary: the decorated rickshaw waiting */}
        <div className="sp2-rickshaw-wrap">
          <img
            src="images/shoptomi2_rickshaw.png"
            alt="Our beautifully decorated rickshaw"
            className="sp2-rickshaw-img"
            loading="eager"
            draggable="false"
          />
          <div className="sp2-rickshaw-label handwritten" aria-hidden="true">
            আমাদের রিকশা ❤️
          </div>
        </div>
      </div>

      {/* Decorative flowers */}
      <div className="sp2-flowers" aria-hidden="true">
        {['🌸','✿','❀','✿','🌸','❀','🌸'].map((f, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.4}s` }}>{f}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="sp-footer sp2-footer">
        <button
          className="nav-btn nav-btn-primary sp-nav-btn"
          onClick={onNext}
          aria-label="Next: অষ্টমী"
        >
          <span>পরের দিন</span>
          <span aria-hidden="true">→</span>
        </button>
        <p className="sp-page-hint handwritten sp2-hint" aria-hidden="true">অষ্টমী</p>
      </div>

      <span className="sp-corner sp-corner--bl sp2-corner" aria-hidden="true">✿</span>
      <span className="sp-corner sp-corner--br sp2-corner" aria-hidden="true">✿</span>
    </div>
  )
}
