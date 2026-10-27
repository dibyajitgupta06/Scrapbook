import './ScrapbookPage.css'

export default function Shoptomi1({ onNext }) {
  return (
    <div className="scrapbook-page sp1-page" role="main">
      {/* Day heading */}
      <div className="sp-header">
        <div className="day-label-wrapper">
          <h1 className="day-label bn-display" lang="bn">
            সপ্তমী <span className="day-label-sub">· ০১</span>
          </h1>
          <div className="day-label-underline" />
        </div>
      </div>

      {/* Main hero illustration - Transparent PNG covering most of the page */}
      <div className="sp-hero-illo">
        <img
          src={`${import.meta.env.BASE_URL}images/shoptomi1.png`}
          alt="সপ্তমী · ০১"
          className="sp-main-img"
          loading="eager"
          draggable="false"
        />
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
