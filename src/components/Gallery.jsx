import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  { src: '/images/bride-groom-1.jpg', alt: 'ميري ومحمد - 1' },
  { src: '/images/bride-groom-2.jpg', alt: 'ميري ومحمد - 2' },
  { src: '/images/bride-groom-3.jpg', alt: 'ميري ومحمد - 3' },
  { src: '/images/bride-groom-4.jpg', alt: 'ميري ومحمد - 4' },
  { src: '/images/bride-groom-5.jpg', alt: 'ميري ومحمد - 5' },
  { src: '/images/bride-groom-6.jpg', alt: 'ميري ومحمد - 6' },
]

function ImageWithFallback({ src, alt, className, delay }) {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      className={`gallery-item-wrapper ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="gallery-item">
        {!error ? (
          <>
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              className={`gallery-img ${loaded ? 'loaded' : ''}`}
            />
            {!loaded && <div className="img-skeleton" />}
            <div className="img-overlay"></div>
          </>
        ) : (
          <div className="gallery-placeholder">
            <div className="placeholder-gradient"></div>
            <div className="placeholder-content">
              <span className="placeholder-heart">♥</span>
              <span className="placeholder-names">م &amp; م</span>
              <span className="placeholder-sub">حكايتنا</span>
            </div>
            <div className="placeholder-glow"></div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="section-kicker">لحظات من القلب</p>
          <h2 className="section-title">حكايتنا</h2>
          <div className="ornament-divider">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
          <p className="gallery-intro">
            بعض اللحظات تستحق أن تُخلّد<br />
            هذه مقتطفات من رحلتنا معًا
          </p>
        </motion.div>

        <div className="gallery-grid">
          <ImageWithFallback src={images[0].src} alt={images[0].alt} className="span-2 tall" delay={0} />
          <ImageWithFallback src={images[1].src} alt={images[1].alt} className="" delay={0.1} />
          <ImageWithFallback src={images[2].src} alt={images[2].alt} className="" delay={0.15} />
          <ImageWithFallback src={images[3].src} alt={images[3].alt} className="" delay={0.1} />
          <ImageWithFallback src={images[4].src} alt={images[4].alt} className="" delay={0.2} />
          <ImageWithFallback src={images[5].src} alt={images[5].alt} className="span-2 wide" delay={0.15} />
        </div>

        <motion.p
          className="gallery-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          * يمكنك استبدال الصور بوضع ملفاتك في مجلد <code>/public/images/</code> بأسماء <code>bride-groom-1.jpg</code> إلى <code>bride-groom-6.jpg</code>
        </motion.p>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} alt="صورة مكبرة" />
            <button className="lightbox-close">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
