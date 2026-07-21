import React, { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import EventDetails from './components/EventDetails.jsx'
import Countdown from './components/Countdown.jsx'
import Location from './components/Location.jsx'
import Gallery from './components/Gallery.jsx'
import RSVP from './components/RSVP.jsx'
import Footer from './components/Footer.jsx'
import FloatingMenu from './components/FloatingMenu.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'

export default function App() {
  useEffect(() => {
    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      document.documentElement.classList.add('reduce-motion')
    }
  }, [])

  return (
    <div className="app-root">
      {/* Global Ambient Background */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
        <div className="ambient-glow glow-3"></div>
        <div className="noise-overlay"></div>
        <div className="golden-dust">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={`dust dust-${i + 1}`}></span>
          ))}
        </div>
      </div>

      <FloatingMenu />
      <MusicPlayer />

      <main>
        <Hero />
        <Intro />
        <EventDetails />
        <Countdown />
        <Gallery />
        <Location />
        <RSVP />
      </main>

      <Footer />
    </div>
  )
}
