import './ScrapbookPage.css'

export default function Oshtomi({ onNext }) {
  return (
    <div className="scrapbook-page os-page" role="main">
      {/* Day heading */}
      <div className="sp-header">
        <div className="day-label-wrapper">
          <h1 className="day-label bn-display" lang="bn">
            অষ্টমী
          </h1>
          <div className="day-label-underline" />
        </div>
      </div>

      {/* Hero Dual composition: guy photographing on left (bigger), girl on right */}
      <div className="os-hero-area">
        <div className="os-boy-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/oshtomi_boy.png`}
            alt="Photographing"
            className="os-boy-img"
            loading="eager"
            draggable="false"
          />
        </div>
        <div className="os-girl-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/oshtomi_girl.png`}
            alt="অষ্টমী"
            className="os-girl-img"
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
