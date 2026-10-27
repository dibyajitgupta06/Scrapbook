import { useState } from 'react'
import './Captcha.css'

/**
 * 9 photographs mapped explicitly by role and unique ID.
 * The roles are explicitly 'celebrity' or 'goddess' - never derived from position.
 * Actual image paths will load from /images/captcha/ when provided by user.
 */
export const CAPTCHA_ITEMS = [
  {
    id: 'celeb_1',
    role: 'celebrity',
    name: 'Celebrity 1',
    src: `${import.meta.env.BASE_URL}images/captcha/celeb1.jpg`,
    placeholderLabel: 'Photo 1',
  },
  {
    id: 'celeb_2',
    role: 'celebrity',
    name: 'Celebrity 2',
    src: `${import.meta.env.BASE_URL}images/captcha/celeb2.jpg`,
    placeholderLabel: 'Photo 2',
  },
  {
    id: 'celeb_3',
    role: 'celebrity',
    name: 'Celebrity 3',
    src: `${import.meta.env.BASE_URL}images/captcha/celeb3.jpg`,
    placeholderLabel: 'Photo 3',
  },
  {
    id: 'celeb_4',
    role: 'celebrity',
    name: 'Celebrity 4',
    src: `${import.meta.env.BASE_URL}images/captcha/celeb4.jpg`,
    placeholderLabel: 'Photo 4',
  },
  {
    id: 'goddess_her',
    role: 'goddess',
    name: 'The Most Beautiful',
    src: `${import.meta.env.BASE_URL}images/captcha/her.jpg`,
    placeholderLabel: 'Her Photo 👑',
  },
  {
    id: 'celeb_5',
    role: 'celebrity',
    name: 'Celebrity 5',
    src: `${import.meta.env.BASE_URL}images/captcha/celeb5.jpg`,
    placeholderLabel: 'Photo 5',
  },
  {
    id: 'celeb_6',
    role: 'celebrity',
    name: 'Celebrity 6',
    src: `${import.meta.env.BASE_URL}images/captcha/celeb6.jpg`,
    placeholderLabel: 'Photo 6',
  },
  {
    id: 'celeb_7',
    role: 'celebrity',
    name: 'Celebrity 7',
    src: `${import.meta.env.BASE_URL}images/captcha/celeb7.jpg`,
    placeholderLabel: 'Photo 7',
  },
  {
    id: 'celeb_8',
    role: 'celebrity',
    name: 'Celebrity 8',
    src: `${import.meta.env.BASE_URL}images/captcha/celeb8.jpg`,
    placeholderLabel: 'Photo 8',
  },
]

export default function Captcha({ onNext }) {
  const [selectedId, setSelectedId] = useState(null)
  const [isGoddessRevealed, setIsGoddessRevealed] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [shakeGrid, setShakeGrid] = useState(false)
  const [imgErrors, setImgErrors] = useState({})

  const handleSelect = (item) => {
    setSelectedId(item.id)

    if (item.role === 'goddess') {
      setErrorMessage(null)
      setIsGoddessRevealed(true)
    } else {
      setErrorMessage('CAPTCHA NOT VERIFIED ❌')
      setShakeGrid(true)
      setTimeout(() => setShakeGrid(false), 500)
    }
  }

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <div className="captcha-container" role="main">
      {/* Background festive/mystic particles */}
      <div className="captcha-bg-glow" aria-hidden="true" />

      <div className="captcha-card">
        {/* CAPTCHA Header */}
        <div className="captcha-header">
          <div className="captcha-header-badge">
            <span className="captcha-badge-icon">🛡️</span>
            <span className="captcha-badge-text">HUMAN VERIFICATION</span>
          </div>
          <h1 className="captcha-title">
            Who is the most beautiful woman in the world?
          </h1>
          <p className="captcha-subtitle">
            Select the image below to verify you are human
          </p>
        </div>

        {/* Success Reveal Overlay or Grid */}
        {isGoddessRevealed ? (
          <div className="captcha-success-box" role="status" aria-live="polite">
            <div className="captcha-goddess-halo" aria-hidden="true">
              ✨ 👑 ✨
            </div>
            <h2 className="captcha-goddess-title">
              YOU ARE NOT HUMAN.
              <br />
              YOU ARE THE GODDESS.
            </h2>
            <div className="captcha-goddess-divider" aria-hidden="true">
              ✦ ❀ ✦
            </div>
            <p className="captcha-goddess-desc">
              Human verification failed. Divine beauty detected.
            </p>
            <p className="captcha-goddess-bn" lang="bn">
              তুমি মানুষ নও, তুমি তো দেবী। ❤️
            </p>

            <button
              className="captcha-enter-btn"
              onClick={onNext}
              aria-label="Enter the scrapbook"
            >
              <span>ENTER OUR PUJO SCRAPBOOK</span>
              <span className="captcha-enter-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        ) : (
          <>
            {/* 3x3 Photo Grid */}
            <div
              className={`captcha-grid ${shakeGrid ? 'captcha-grid-shake' : ''}`}
              role="group"
              aria-label="Photo choices"
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

            {/* Error Message for Celebrity click */}
            {errorMessage && (
              <div
                className="captcha-error-alert"
                role="alert"
                aria-live="assertive"
              >
                <span className="captcha-error-icon">⚠️</span>
                <span>{errorMessage} — Try again! 🙃</span>
              </div>
            )}

            {/* Bottom playful security notice */}
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
