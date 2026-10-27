import { useEffect, useRef } from 'react'
import './Cover.css'

/* Shiuli (night jasmine) flower SVG as a data URI */
const SHIULI = '✿'

function FloatingPetal({ style }) {
  return <span className="floating-petal" style={style} aria-hidden="true">{SHIULI}</span>
}

export default function Cover({ onNext }) {
  const canvasRef = useRef(null)

  // Generate random floating petals
  const petals = Array.from({ length: 18 }, (_, i) => ({
    left: `${Math.random() * 95}%`,
    animationDelay: `${(i * 0.4) % 6}s`,
    animationDuration: `${5 + (i % 4)}s`,
    fontSize: `${0.9 + (i % 3) * 0.4}rem`,
    color: i % 3 === 0 ? '#FFF8E7' : i % 3 === 1 ? '#F0CE60' : '#FFCBA4',
    opacity: 0.7 + (i % 3) * 0.1,
  }))

  return (
    <div className="cover-page" role="main">
      {/* Floating petals */}
      <div className="petals-layer" aria-hidden="true">
        {petals.map((p, i) => (
          <FloatingPetal key={i} style={p} />
        ))}
      </div>

      {/* Decorative top arch */}
      <div className="cover-arch-top" aria-hidden="true">
        <svg viewBox="0 0 800 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60 Q200 0 400 20 Q600 40 800 0 L800 60Z" fill="rgba(201,162,39,0.18)" />
          <path d="M0 60 Q200 10 400 30 Q600 50 800 10 L800 60Z" fill="rgba(201,162,39,0.1)" />
        </svg>
        <div className="diya-row" aria-hidden="true">
          {['🪔','🌸','🪔','✿','🪔','🌸','🪔'].map((d, i) => (
            <span key={i} className="diya-icon" style={{ animationDelay: `${i * 0.3}s` }}>{d}</span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="cover-content">
        {/* Decorative vertical strip */}
        <div className="cover-accent-strip" aria-hidden="true">
          <span>✦</span><span>◆</span><span>✦</span><span>◆</span><span>✦</span>
        </div>

        <div className="cover-title-block">
          <p className="cover-subtitle-top handwritten" lang="bn">আমাদের পুজোর গল্প</p>

          <div className="cover-main-title-wrap">
            <div className="cover-title-ornament" aria-hidden="true">✦ ✦ ✦</div>
            <h1 className="cover-main-title">
              <span className="cover-title-pujo">PUJO</span>
              <span className="cover-title-year">2026</span>
            </h1>
            <div className="cover-title-ornament" aria-hidden="true">✦ ✦ ✦</div>
          </div>

          <div className="cover-alpana" aria-hidden="true">
            <svg viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="alpana-svg">
              <g stroke="#C9A227" strokeWidth="1.2" opacity="0.7">
                <ellipse cx="150" cy="20" rx="120" ry="14" />
                <ellipse cx="150" cy="20" rx="80" ry="9" />
                <ellipse cx="150" cy="20" rx="40" ry="5" />
                {[0,60,120,180,240,300].map(x => (
                  <g key={x}>
                    <circle cx={30 + x * 0.8} cy="20" r="3" fill="#C9A227" opacity="0.5" />
                  </g>
                ))}
                <path d="M30 20 Q90 5 150 20 Q210 35 270 20" stroke="#C9A227" strokeWidth="1" />
                <path d="M30 20 Q90 35 150 20 Q210 5 270 20" stroke="#C9A227" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </div>

        {/* Bengali tagline */}
        <div className="cover-tagline-block">
          <span className="cover-tag-deco" aria-hidden="true">❀</span>
          <p className="cover-tagline bn-body" lang="bn">
            পাঁচটি দিন · পাঁচটি স্মৃতি · একটি গল্প
          </p>
          <span className="cover-tag-deco" aria-hidden="true">❀</span>
        </div>

        {/* CTA Button */}
        <button
          className="cover-cta-btn"
          onClick={onNext}
          aria-label="আমাদের পুজো ২০২৬ এর স্মৃতি দেখুন"
        >
          <span className="cover-cta-text">LET'S RELIVE OUR PUJO 2026</span>
          <span className="cover-cta-arrow" aria-hidden="true">❋</span>
        </button>

        <p className="cover-whisper handwritten" aria-hidden="true">scroll through our memories...</p>
      </div>

      {/* Bottom decorative band */}
      <div className="cover-bottom-band" aria-hidden="true">
        <div className="cover-bottom-flowers">
          {['🌸','✿','🌼','✿','🌸','✿','🌼','✿','🌸'].map((f, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.35}s` }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
