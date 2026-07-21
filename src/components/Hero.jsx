import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToIntro = () => {
    const el = document.getElementById('intro')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero-section">
      {/* Hero specific background layers */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient"></div>
        <div className="hero-vignette"></div>
        <div className="hero-ornaments">
          <div className="ornament-corner ornament-tl"></div>
          <div className="ornament-corner ornament-tr"></div>
          <div className="ornament-corner ornament-bl"></div>
          <div className="ornament-corner ornament-br"></div>
        </div>
      </div>

      <div className="hero-content">
        {/* Top small phrase */}
        <motion.p
          className="hero-pretitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          بكل الحب ندعوكم لمشاركتنا فرحتنا
        </motion.p>

        {/* Ornament divider small */}
        <motion.div
          className="hero-divider-top"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="line"></span>
          <span className="diamond"></span>
          <span className="line"></span>
        </motion.div>

        {/* Names cinematic */}
        <div className="hero-names">
          <motion.h1
            className="name name-bride"
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            ميري
          </motion.h1>

          <motion.div
            className="name-connector"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
          >
            <span className="heart-glow">♥</span>
            <span className="ampersand"> & </span>
          </motion.div>

          <motion.h1
            className="name name-groom"
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            محمد
          </motion.h1>
        </div>

        {/* Date */}
        <motion.div
          className="hero-date-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="hero-date">21 أغسطس 2026</p>
          <p className="hero-time">الساعة 7:00 مساءً</p>
        </motion.div>

        {/* Poetic line */}
        <motion.p
          className="hero-poetic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.4 }}
        >
          "في ليلةٍ نكتب فيها بداية فصلٍ جديد من حكايتنا"
        </motion.p>

        {/* CTA */}
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <button onClick={scrollToIntro} className="btn-discover">
            <span>اكتشفوا تفاصيل الدعوة</span>
            <motion.span
              className="btn-arrow"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator line at bottom */}
      <motion.div
        className="scroll-line"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 80, opacity: 0.6 }}
        transition={{ duration: 1, delay: 3.2 }}
      />

      {/* Floating particles specific to hero */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className={`hero-particle hp-${i + 1}`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}
