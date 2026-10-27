import './ScrapbookPage.css'

export default function Nabami({ onNext }) {
  return (
    <div className="scrapbook-page nb-page" role="main">
      {/* Day heading */}
      <div className="sp-header">
        <div className="day-label-wrapper">
          <h1 className="day-label bn-display" lang="bn">
            নবমী
          </h1>
          <div className="day-label-underline" />
        </div>
      </div>

      {/* Hero Dual illustration with transparent PNGs */}
      <div className="nb-hero-area">
        <div className="nb-gift-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/nabami_gift.png`}
            alt="নবমী"
            className="nb-gift-img"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="nb-anklet-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/nabami_anklet.png`}
            alt="Payel"
            className="nb-anklet-img"
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
