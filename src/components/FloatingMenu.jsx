import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { id: 'home', label: 'الرئيسية', icon: '✧' },
  { id: 'intro', label: 'دعوتنا', icon: '♥' },
  { id: 'details', label: 'التفاصيل', icon: '✦' },
  { id: 'countdown', label: 'العد التنازلي', icon: '◐' },
  { id: 'gallery', label: 'حكايتنا', icon: '❦' },
  { id: 'location', label: 'المكان', icon: '✧' },
  { id: 'rsvp', label: 'تأكيد الحضور', icon: '✉' },
]

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -70% 0px' }
    )

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.button
        className={`floating-menu-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="القائمة"
      >
        <span className="menu-icon">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                ✕
              </motion.span>
            ) : (
              <motion.span
                key="heart"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
                className="heart-icon"
              >
                ♥
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="floating-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="menu-glow"></div>
              <div className="menu-header">
                <span className="menu-names">ميري & محمد</span>
                <span className="menu-date">21 أغسطس 2026</span>
              </div>

              <ul className="menu-list">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                  >
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
                    >
                      <span className="item-icon">{item.icon}</span>
                      <span className="item-label">{item.label}</span>
                      {activeSection === item.id && (
                        <motion.span
                          layoutId="activeDot"
                          className="active-dot"
                        />
                      )}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="menu-footer">
                <span>بكل الحب ننتظركم</span>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
