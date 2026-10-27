import { useEffect, useRef, useState } from 'react'
import './Celebration.css'

/* ============================================================
   THE CELEBRATION — YEEHHHHHH!!!
   Joyful explosion of color. Pure scrapbook aesthetic.
   ============================================================ */

const CONFETTI_COLORS = [
  '#C1392B', '#E8711A', '#C9A227', '#F0CE60',
  '#27AE60', '#1A5276', '#B03A2E', '#FAF0D7',
  '#E67E22', '#17A589', '#E8A0A0', '#FFF8E7',
]
const CONFETTI_COUNT = 80

function useConfetti() {
  const [pieces, setPieces] = useState([])

  useEffect(() => {
    const ps = Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
      id: i,
      left:     `${Math.random() * 100}%`,
      delay:    `${Math.random() * 2.5}s`,
      duration: `${2.5 + Math.random() * 2.5}s`,
      color:    CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size:     `${8 + Math.floor(Math.random() * 10)}px`,
      rotate:   `${Math.random() * 360}deg`,
      shape:    Math.random() > 0.5 ? '50%' : '2px',
    }))
    setPieces(ps)
    return () => setPieces([])
  }, [])

  return pieces
}

export default function Celebration() {
  const confetti = useConfetti()
  const [showPromise, setShowPromise] = useState(false)

  /* Show the promise with a slight delay for dramatic effect */
  useEffect(() => {
    const t = setTimeout(() => setShowPromise(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="celebration-page" role="main" aria-live="polite">

      {/* Confetti rain */}
      <div className="confetti-layer" aria-hidden="true">
        {confetti.map(p => (
          <div
            key={p.id}
            className="confetti-piece"
            style={{
              left:             p.left,
              animationDelay:   p.delay,
              animationDuration:p.duration,
              background:       p.color,
              width:            p.size,
              height:           p.size,
              borderRadius:     p.shape,
              transform:        `rotate(${p.rotate})`,
            }}
          />
        ))}
      </div>

      {/* Top flowers */}
      <div className="cel-top-flowers" aria-hidden="true">
        {['🎉','🌸','🎊','✿','🎉','🌸','🎊','✿','🎉'].map((f, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.25}s` }}>{f}</span>
        ))}
      </div>

      {/* Main celebration message */}
      <div className="cel-main-block">
        <div className="cel-burst" aria-hidden="true">✨</div>
        <h1 className="cel-yay" aria-label="Yeeehhhh!">
          YEEHHHHHH!!!
        </h1>
        <div className="cel-emoji-row" aria-hidden="true">
          🎉 ❤️ 🎊 ❤️ 🎉
        </div>

        <p className="cel-subtitle bn-body" lang="bn">
          এই তো! এবার থেকে সব পুজো একসাথে।
        </p>
      </div>

      {/* The Promise — appears after a short delay */}
      <div className={`cel-promise-block ${showPromise ? 'cel-promise-visible' : ''}`}>
        <div className="cel-promise-tape" aria-hidden="true">
          <span className="handwritten">from the bottom of my heart</span>
        </div>

        <div className="cel-promise-card">
          <div className="cel-promise-card-inner">
            <div className="cel-promise-flowers" aria-hidden="true">
              🌸 ❤️ 🌸
            </div>
            <p className="cel-promise-text handwritten">
              I promise I'll make every Puja of your life better.
            </p>
            <span className="cel-promise-heart" aria-hidden="true">❤️</span>
          </div>
        </div>

        {/* Bengali echo of the promise */}
        <p className="cel-promise-bn bn-body" lang="bn">
          প্রতিটা পুজোকে তোমার জন্য বিশেষ করে তুলব।
        </p>
      </div>

      {/* Bottom celebration flowers */}
      <div className="cel-bottom-flowers" aria-hidden="true">
        {['🌹','🌸','🌼','🌺','🌸','🌼','🌺','🌸','🌹'].map((f, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.3}s` }}>{f}</span>
        ))}
      </div>

    </div>
  )
}
