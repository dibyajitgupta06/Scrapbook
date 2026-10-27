import { useEffect, useRef, useState } from 'react'
import './AudioPlayer.css'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Attempt play
  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          setHasInteracted(true)
        })
        .catch(() => {
          // Autoplay policy prevented immediate playback; wait for interaction
          setIsPlaying(false)
        })
    }
  }

  useEffect(() => {
    // Try to play immediately
    startAudio()

    // Unlock audio on the very first user interaction (click/touch anywhere)
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        startAudio()
      }
    }

    window.addEventListener('click', handleFirstInteraction, { once: true })
    window.addEventListener('touchstart', handleFirstInteraction, { once: true })

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
    }
  }, [hasInteracted])

  const togglePlay = (e) => {
    e.stopPropagation()
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
          setHasInteracted(true)
        })
        .catch((err) => console.log('Audio playback error:', err))
    }
  }

  return (
    <>
      {/* Hidden audio element looping continuously in background */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
      >
        <source
          src={`${import.meta.env.BASE_URL}audio/dhak.m4a`}
          type="audio/mp4"
        />
        <source
          src={`${import.meta.env.BASE_URL}audio/dhak.ogg`}
          type="audio/ogg"
        />
      </audio>

      {/* Floating Audio Control Button */}
      <button
        className={`dhak-toggle-btn ${isPlaying ? 'dhak-playing' : 'dhak-muted'}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Mute Durga Puja Dhak sound' : 'Play Durga Puja Dhak sound'}
        title="Durga Puja Dhak Sound (ঢাকের আওয়াজ)"
      >
        <span className="dhak-icon" aria-hidden="true">
          {isPlaying ? '🥁 🔊' : '🥁 🔇'}
        </span>
        <span className="dhak-label">
          {isPlaying ? 'Dhak Beat ♫' : 'Muted'}
        </span>
      </button>
    </>
  )
}
