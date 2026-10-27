import { useState } from 'react'
import './Captcha.css'

/**
 * 9 photographs mapped explicitly by role and unique ID.
 * The roles are explicitly 'celebrity' or 'goddess' - never derived from position.
 * Actual image paths load from /images/captcha/ when provided.
 */
export const CAPTCHA_ITEMS = [
  {
    id: 'celeb_1',
    role: 'celebrity',
    name: 'Celebrity 1',
    src: `${import.meta.env.BASE_URL}images/captcha/celebrity-01.jpg`,
    placeholderLabel: 'Photo 1',
  },
  {
    id: 'celeb_2',
    role: 'celebrity',
    name: 'Celebrity 2',
    src: `${import.meta.env.BASE_URL}images/captcha/celebrity-02.jpg`,
    placeholderLabel: 'Photo 2',
  },
  {
    id: 'celeb_3',
    role: 'celebrity',
    name: 'Celebrity 3',
    src: `${import.meta.env.BASE_URL}images/captcha/celebrity-03.jpg`,
    placeholderLabel: 'Photo 3',
  },
  {
    id: 'celeb_4',
    role: 'celebrity',
    name: 'Celebrity 4',
    src: `${import.meta.env.BASE_URL}images/captcha/celebrity-04.jpg`,
    placeholderLabel: 'Photo 4',
  },
  {
    id: 'goddess_her',
    role: 'goddess',
    name: 'The Most Beautiful Woman in the World',
    src: `${import.meta.env.BASE_URL}images/captcha/goddess.jpg`,
    placeholderLabel: 'Her Photo 👑',
  },
  {
    id: 'celeb_5',
    role: 'celebrity',
    name: 'Celebrity 5',
    src: `${import.meta.env.BASE_URL}images/captcha/celebrity-05.jpg`,
    placeholderLabel: 'Photo 5',
  },
  {
    id: 'celeb_6',
    role: 'celebrity',
    name: 'Celebrity 6',
    src: `${import.meta.env.BASE_URL}images/captcha/celebrity-06.jpg`,
    placeholderLabel: 'Photo 6',
  },
  {
    id: 'celeb_7',
    role: 'celebrity',
    name: 'Celebrity 7',
    src: `${import.meta.env.BASE_URL}images/captcha/celebrity-07.jpg`,
    placeholderLabel: 'Photo 7',
  },
  {
    id: 'celeb_8',
    role: 'celebrity',
    name: 'Celebrity 8',
    src: `${import.meta.env.BASE_URL}images/captcha/celebrity-08.jpg`,
    placeholderLabel: 'Photo 8',
  },
]

const ESCALATING_ERRORS = [
  {
    main: 'CAPTCHA NOT VERIFIED ❌',
    sub: 'Incorrect selection. Please try again.',
    tag: 'Our system is still looking for the correct answer. 👀',
  },
  {
    main: 'VERIFICATION FAILED ❌',
    sub: 'Are you sure about that?',
    tag: 'Our system is still looking for the correct answer. 👀',
  },
  {
    main: 'INTERESTING CHOICE 🤔',
    sub: 'Unfortunately, our standards are very specific.',
    tag: 'Our system is still looking for the correct answer. 👀',
  },
  {
    main: 'SYSTEM ERROR ⚠️',
    sub: 'The correct answer is apparently missing from your selection.',
    tag: 'Our system is still looking for the correct answer. 👀',
  },
  {
    main: 'CAPTCHA OVERLOAD 🙃',
    sub: 'Beauty verification is proving unusually difficult today.',
    tag: 'Our system is still looking for the correct answer. 👀',
  },
]

export default function Captcha({ onNext }) {
  const [selectedId, setSelectedId] = useState(null)
  const [isGoddessRevealed, setIsGoddessRevealed] = useState(false)
  const [attemptCount, setAttemptCount] = useState(0)
  const [currentError, setCurrentError] = useState(null)
  const [shakeGrid, setShakeGrid] = useState(false)
  const [imgErrors, setImgErrors] = useState({})

  const goddessItem = CAPTCHA_ITEMS.find((item) => item.role === 'goddess')

  const handleSelect = (item) => {
    setSelectedId(item.id)

    if (item.role === 'goddess') {
      setCurrentError(null)
      setIsGoddessRevealed(true)
    } else {
      const errorIdx = Math.min(attemptCount, ESCALATING_ERRORS.length - 1)
      setCurrentError(ESCALATING_ERRORS[errorIdx])
      setAttemptCount((prev) => prev + 1)
      setShakeGrid(true)
      setTimeout(() => setShakeGrid(false), 500)
    }
  }

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <div className="captcha-container" role="main">
      {/* Background glow */}
      <div className="captcha-bg-glow" aria-hidden="true" />

      <div className="captcha-card">
        {/* Header */}
        <div className="captcha-header">
          <div className="captcha-header-badge">
            <span className="captcha-badge-icon">🛡️</span>
            <span className="captcha-badge-text">HUMAN VERIFICATION REQUIRED</span>
          </div>
          <h1 className="captcha-title">
            Who is the most beautiful woman in the world?
          </h1>
          <p className="captcha-subtitle-bn" lang="bn">
            সঠিক উত্তরটি বেছে নাও।
          </p>
          <p className="captcha-subtitle">
            Select the correct answer to prove you're human.
          </p>
        </div>

        {/* State 1: Success / Goddess Reveal */}
        {isGoddessRevealed ? (
          <div className="captcha-success-box" role="status" aria-live="polite">
            <div className="captcha-goddess-halo" aria-hidden="true">
              ✨ 👑 ✨
            </div>

            {/* Her photo in divine frame if available */}
            {goddessItem && (
              <div className="captcha-goddess-photo-frame">
                {!imgErrors[goddessItem.id] ? (
                  <img
                    src={goddessItem.src}
                    alt="The Goddess"
                    className="captcha-goddess-photo"
                    onError={() => handleImageError(goddessItem.id)}
                  />
                ) : (
                  <div className="captcha-goddess-photo-placeholder">
                    <span>👑</span>
                    <span className="handwritten">Divine Beauty</span>
                  </div>
                )}
                <div className="captcha-photo-aura" aria-hidden="true" />
              </div>
            )}

            <h2 className="captcha-goddess-title">
              YOU ARE NOT HUMAN.
              <br />
              <span className="captcha-goddess-highlight">YOU ARE THE GODDESS. 👑</span>
            </h2>

            <div className="captcha-goddess-divider" aria-hidden="true">
              ✦ ❀ ✦
            </div>

            <p className="captcha-goddess-desc">
              Human verification failed. Divine beauty detected.
            </p>

            <p className="captcha-goddess-submsg">
              The system has encountered a beauty beyond human classification.
            </p>

            <p className="captcha-goddess-bn" lang="bn">
              তুমি মানুষ নও, তুমি তো দেবী। ❤️
            </p>

            <button
              className="captcha-enter-btn"
              onClick={onNext}
              aria-label="Enter your Pujo story"
            >
              <span>ENTER YOUR PUJO STORY</span>
              <span className="captcha-enter-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        ) : (
          /* State 2: 3x3 CAPTCHA Challenge Grid */
          <>
            <div
              className={`captcha-grid ${shakeGrid ? 'captcha-grid-shake' : ''}`}
              role="group"
              aria-label="Photo options"
            >
              {CAPTCHA_ITEMS.map((item) => {
                const hasError = imgErrors[item.id]
                const isSelected = selectedId === item.id

                return (
                  <button
                    key={item.id}
                    className={`captcha-tile ${isSelected ? 'captcha-tile-selected' : ''}`}
                    onClick={() => handleSelect(item)}
                    aria-label={item.name}
                    type="button"
                  >
                    {!hasError ? (
                      <img
                        src={item.src}
                        alt={item.name}
                        className="captcha-img"
                        onError={() => handleImageError(item.id)}
                        loading="eager"
                      />
                    ) : (
                      <div className="captcha-placeholder">
                        <span className="captcha-placeholder-icon">
                          {item.role === 'goddess' ? '👑' : '✨'}
                        </span>
                        <span className="captcha-placeholder-name">
                          {item.placeholderLabel}
                        </span>
                      </div>
                    )}

                    {isSelected && (
                      <div className="captcha-tile-overlay" aria-hidden="true">
                        <span>✓</span>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Error Message for Celebrity click with escalating comedy */}
            {currentError && (
              <div
                className="captcha-error-card"
                role="alert"
                aria-live="assertive"
              >
                <div className="captcha-error-main">
                  <span>{currentError.main}</span>
                </div>
                <div className="captcha-error-sub">
                  <span>{currentError.sub}</span>
                </div>
                <div className="captcha-error-tag">
                  <span>{currentError.tag}</span>
                </div>
              </div>
            )}

            {/* Bottom Security Badge */}
            <div className="captcha-footer-note">
              <span className="captcha-lock-icon">🔒</span>
              <span>Protected by Divine Love Protection Services</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
