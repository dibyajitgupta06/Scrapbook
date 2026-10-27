import './ScrapbookPage.css'

export default function Shoptomi2({ onNext }) {
  return (
    <div className="scrapbook-page sp2-page" role="main">
      {/* Day heading */}
      <div className="sp-header">
        <div className="day-label-wrapper">
          <h1 className="day-label bn-display" lang="bn">
            সপ্তমী <span className="day-label-sub">· ০২</span>
          </h1>
          <div className="day-label-underline" />
        </div>
      </div>

      {/* Hero Dual illustration: large couple walking + large rickshaw */}
      <div className="sp2-hero-area">
        <div className="sp2-couple-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/shoptomi2_couple.png`}
            alt="সপ্তমী · ০২"
            className="sp2-couple-img"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="sp2-rickshaw-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/shoptomi2_rickshaw.png`}
            alt="Rickshaw"
            className="sp2-rickshaw-img"
            loading="eager"
            draggable="false"
          />
        </div>
      </div>

      {/* Clean Navigation */}
      <div className="sp-footer">
        <button
          className="nav-btn nav-btn-primary sp-nav-btn"
          onClick={onNext}
          aria-label="NEXT"
        >
          <span>NEXT</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
