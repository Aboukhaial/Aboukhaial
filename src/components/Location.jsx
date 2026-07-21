import React, { useState } from 'react'
import { motion } from 'framer-motion'

// 👇 غيّر هذا الرابط برابط موقعكم على خرائط جوجل
const MAP_URL = "ضع_رابط_الخريطة_هنا" // مثال: https://maps.google.com/?q=...

export default function Location() {
  const [showNotice, setShowNotice] = useState(false)

  const handleOpenMap = () => {
    if (!MAP_URL || MAP_URL.includes('ضع_رابط_الخريطة_هنا') || MAP_URL.trim() === '') {
      setShowNotice(true)
      setTimeout(() => setShowNotice(false), 4000)
      return
    }
    window.open(MAP_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="location" className="section location-section">
      <div className="container">
        <motion.div
          className="location-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="location-ornament top">
            <span className="orn-line"></span>
            <span className="orn-icon">✧</span>
            <span className="orn-line"></span>
          </div>

          <p className="section-kicker">انضموا إلينا</p>
          <h2 className="section-title">مكان الاحتفال</h2>

          <div className="location-main">
            <div className="location-icon-wrapper">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 21s-6-5.373-6-10a6 6 0 0 1 12 0c0 4.627-6 10-6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </div>
              <div className="icon-pulse"></div>
            </div>

            <h3 className="location-place">منزل العروس</h3>
            <p className="location-desc">نحن بانتظاركم لنشارك معًا ليلة لا تُنسى.</p>
            <p className="location-subdesc">
              حضوركم يكتمل به فرحنا، ووجودكم بيننا هو أجمل هدية
            </p>
          </div>

          <motion.button
            className="btn-location"
            onClick={handleOpenMap}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="btn-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <span>فتح الموقع على الخريطة</span>
          </motion.button>

          {showNotice && (
            <motion.div
              className="map-notice"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              يرجى إضافة رابط خرائط جوجل في المتغير MAP_URL داخل ملف Location.jsx
            </motion.div>
          )}

          <div className="location-ornament bottom">
            <span className="orn-line"></span>
            <span className="orn-icon">❦</span>
            <span className="orn-line"></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
