import './ScrapbookPage.css'

export default function Dashami({ onNext }) {
  return (
    <div className="scrapbook-page ds-page" role="main">
      {/* Day heading */}
      <div className="sp-header">
        <div className="day-label-wrapper">
          <h1 className="day-label bn-display" lang="bn">
            দশমী
          </h1>
          <div className="day-label-underline" />
        </div>
      </div>

      {/* Hero illustration - Transparent PNG covering most of the page */}
      <div className="sp-hero-illo">
        <img
          src={`${import.meta.env.BASE_URL}images/dashami.png`}
          alt="দশমী"
          className="sp-main-img"
          loading="eager"
          draggable="false"
        />
      </div>

      {/* Footer with ONE LAST THING button leading to proposal */}
      <div className="sp-footer">
        <button
          className="nav-btn ds-cta-btn sp-nav-btn"
          onClick={onNext}
          aria-label="ONE LAST THING"
        >
          <span>ONE LAST THING</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
