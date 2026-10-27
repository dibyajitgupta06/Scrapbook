import { useState, useRef, useCallback, useEffect } from 'react'
import './Proposal.css'

/* ============================================================
   THE PROPOSAL
   The emotional climax — warm gold/maroon, the big question,
   escaping NO button, stationary YES button
   ============================================================ */

export default function Proposal({ onNext }) {
  const gameAreaRef = useRef(null)
  const noBtnRef = useRef(null)
  const posRef = useRef({ x: null, y: null })
  const [noStyle, setNoStyle] = useState({})
  const [noMoves, setNoMoves] = useState(0)
  const [showHint, setShowHint] = useState(false)

  /* Show a hint after 3 failed attempts */
  useEffect(() => {
    if (noMoves >= 3 && !showHint) {
      setShowHint(true)
    }
  }, [noMoves, showHint])

  const fleeNo = useCallback((e) => {
    e.preventDefault?.()

    const area = gameAreaRef.current
    const btn  = noBtnRef.current
    if (!area || !btn) return

    const aRect = area.getBoundingClientRect()
    const btnW  = btn.offsetWidth  || 110
    const btnH  = btn.offsetHeight || 48

    const maxX = aRect.width  - btnW
    const maxY = aRect.height - btnH

    if (maxX <= 0 || maxY <= 0) return

    /* Where is the pointer/touch inside the area? */
    let cursorX = (e.clientX ?? e.touches?.[0]?.clientX ?? aRect.width / 2) - aRect.left
    let cursorY = (e.clientY ?? e.touches?.[0]?.clientY ?? aRect.height / 2) - aRect.top

    /* Current button center */
    const prevX = posRef.current.x ?? maxX / 2
    const prevY = posRef.current.y ?? maxY / 2

    let newX, newY
    let tries = 0

    do {
      newX = Math.random() * maxX
      newY = Math.random() * maxY
      tries++

      const distCursor = Math.hypot(newX + btnW/2 - cursorX, newY + btnH/2 - cursorY)
      const distPrev   = Math.hypot(newX - prevX, newY - prevY)

      if (distCursor > 100 && distPrev > 60) break
    } while (tries < 30)

    posRef.current = { x: newX, y: newY }
    setNoStyle({
      position: 'absolute',
      left: `${newX}px`,
      top:  `${newY}px`,
      transition: 'left 0.28s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
    })

    setNoMoves(n => n + 1)
  }, [])

  return (
    <div className="proposal-page" role="main">

      {/* Background decorative layer */}
      <div className="proposal-bg-deco" aria-hidden="true">
        {['✦','◆','✦','◆','✦','◆','✦','◆'].map((d, i) => (
          <span key={i} className="proposal-bg-star" style={{
            left: `${(i * 14) + 2}%`,
            top: `${15 + (i % 3) * 22}%`,
            animationDelay: `${i * 0.4}s`,
            fontSize: `${0.7 + (i % 3) * 0.3}rem`,
          }}>{d}</span>
        ))}
      </div>

      {/* Header */}
      <div className="proposal-header">
        <div className="proposal-header-deco" aria-hidden="true">
          🌸 ✦ 🌸 ✦ 🌸
        </div>
        <div className="proposal-title-badge">
          <span className="handwritten proposal-badge-text" lang="bn">একটা কথা ছিল...</span>
        </div>
      </div>

      {/* Main question */}
      <div className="proposal-question-block">
        <div className="proposal-question-ornament" aria-hidden="true">
          <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
            <path d="M10 10 Q100 2 190 10 Q100 18 10 10Z" fill="rgba(201,162,39,0.25)" />
            <path d="M0 10 L20 10 M180 10 L200 10" stroke="#C9A227" strokeWidth="1.5" />
            <circle cx="100" cy="10" r="4" fill="#C9A227" opacity="0.6" />
          </svg>
        </div>

        <h1 className="proposal-question">
          ARE YOU GOING TO SPEND THE REST OF YOUR PUJAS WITH ME?
        </h1>

        <p className="proposal-question-bn bn-body" lang="bn">
          প্রতিটা পুজো কি আমার সাথে কাটাবে?
        </p>

        <div className="proposal-question-ornament" aria-hidden="true">
          <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
            <path d="M10 10 Q100 18 190 10 Q100 2 10 10Z" fill="rgba(201,162,39,0.25)" />
            <circle cx="100" cy="10" r="4" fill="#C9A227" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* Button game area */}
      <div
        className="proposal-game-area"
        ref={gameAreaRef}
        aria-label="Choose your answer"
      >
        {/* YES — always stationary */}
        <button
          className="proposal-yes-btn"
          onClick={onNext}
          aria-label="Yes, I will spend every Puja with you!"
        >
          <span className="proposal-yes-text">YES!</span>
          <span aria-hidden="true"> ❤️</span>
        </button>

        {/* NO — the escape artist */}
        <button
          ref={noBtnRef}
          className="proposal-no-btn"
          style={noStyle}
          onPointerEnter={fleeNo}
          onTouchStart={fleeNo}
          onClick={fleeNo}
          aria-label="No (but it will run away!)"
          tabIndex={0}
        >
          NO 🙃
        </button>
      </div>

      {/* Playful hint after enough attempts */}
      {showHint && (
        <p className="proposal-hint handwritten" role="status" aria-live="polite">
          সে পালাবেই... 😂
        </p>
      )}

      {/* Footer flowers */}
      <div className="proposal-footer-flowers" aria-hidden="true">
        {['🌸','✿','❀','✿','🌸','✿','❀'].map((f, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.3}s` }}>{f}</span>
        ))}
      </div>

    </div>
  )
}
