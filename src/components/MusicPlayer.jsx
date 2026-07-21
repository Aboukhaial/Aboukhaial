import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleCanPlay = () => setIsLoaded(true)
    const handleError = () => {
      setHasError(true)
      setIsPlaying(false)
    }

    audio.addEventListener('canplaythrough', handleCanPlay)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio || hasError) return

    try {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        await audio.play()
        setIsPlaying(true)
      }
    } catch (err) {
      console.log('Audio play failed:', err)
      // Don't show error for autoplay block, just stay paused
      if (err.name !== 'NotAllowedError') {
        setHasError(true)
      }
    }
  }

  // If audio file missing, hide component silently - don't show error to user in final elegant design
  // But for developer visibility, we hide completely
  if (hasError) {
    return null // hide if file missing, no error in UI per requirements
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-song.mp3"
        loop
        preload="metadata"
      />

      <motion.div
        className="music-player"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <motion.button
          className={`music-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}
          title={isPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}
        >
          <span className="music-icon">
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            )}
          </span>

          {isPlaying && (
            <span className="music-wave">
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
            </span>
          )}
        </motion.button>

        <AnimatePresence>
          {isPlaying && (
            <motion.div
              className="music-label"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
            >
              الموسيقى تعمل
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
