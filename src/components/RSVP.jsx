import React, { useState } from 'react'
import { motion } from 'framer-motion'

// 👇 غيّر هذا الرقم إلى رقم واتساب العروسين أو المنسق (مع رمز الدولة بدون + أو 00)
// مثال: "201012345678" لمصر أو "966500000000" للسعودية
const WHATSAPP_NUMBER = "ضع_رقم_الواتساب_هنا"

export default function RSVP() {
  const [showNotice, setShowNotice] = useState(false)

  const handleWhatsApp = () => {
    const hasValidNumber = WHATSAPP_NUMBER && !WHATSAPP_NUMBER.includes('ضع_رقم_الواتساب') && WHATSAPP_NUMBER.trim() !== '' && /^\d+$/.test(WHATSAPP_NUMBER.replace(/\D/g, ''))

    if (!hasValidNumber) {
      setShowNotice(true)
      setTimeout(() => setShowNotice(false), 5000)
      return
    }

    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '')
    const message = "مرحبًا، أود تأكيد حضوري لحفل زفاف ميري ومحمد يوم 21 أغسطس 2026. بكل الحب نبارك لهما ♥"
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="rsvp" className="section rsvp-section">
      <div className="container">
        <motion.div
          className="rsvp-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rsvp-glow"></div>

          <div className="rsvp-inner">
            <motion.div
              className="rsvp-heart"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ♥
            </motion.div>

            <p className="section-kicker light">لأنكم جزء من فرحتنا</p>
            <h2 className="section-title light">وجودكم يسعدنا</h2>

            <div className="ornament-divider light">
              <span className="line"></span>
              <span className="diamond"></span>
              <span className="line"></span>
            </div>

            <p className="rsvp-text">
              نتمنى تأكيد حضوركم لنشارككم فرحتنا بكل حب.<br />
              <span>حضوركم هو أجمل ما يكتمل به يومنا.</span>
            </p>

            <motion.button
              className="btn-whatsapp"
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="wa-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.05 4.91A9.83 9.83 0 0012 0C5.38 0 0 5.39 0 12.04c0 2.12.55 4.2 1.6 6.03L0 24l6.09-1.6a12 12 0 005.91 1.51h.01c6.62 0 12-5.39 12-12.04a12 12 0 00-3.57-8.56h-.39zM12 21.8a9.74 9.74 0 01-4.95-1.35l-.36-.21-3.62.95.97-3.53-.23-.37A9.8 9.8 0 012.2 12.04C2.2 6.64 6.6 2.24 12 2.24a9.7 9.7 0 016.96 2.9A9.8 9.8 0 0121.8 12c0 5.42-4.38 9.8-9.8 9.8zm5.41-7.34c-.3-.15-1.74-.86-2.01-.96-.27-.1-.46-.15-.66.15s-.76.96-.93 1.16-.35.22-.65.07a8.16 8.16 0 01-2.39-1.47 9 9 0 01-1.67-2.08c-.18-.3 0-.47.13-.62.11-.12.3-.3.45-.46.15-.15.2-.26.3-.43.1-.18.05-.33-.02-.47-.08-.14-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.51.07-.78.33-.27.26-1.03 1-1.03 2.44s1.06 2.83 1.21 3.03c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.49 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.12-.26-.19-.56-.34z" />
                </svg>
              </span>
              <span>تأكيد الحضور عبر واتساب</span>
              <span className="wa-arrow">›</span>
            </motion.button>

            {showNotice && (
              <motion.div
                className="rsvp-notice"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p>⚠️ يرجى إضافة رقم الواتساب في المتغير <code>WHATSAPP_NUMBER</code> داخل ملف <code>RSVP.jsx</code></p>
                <p className="notice-example">مثال: <code>201234567890</code> (مع رمز الدولة بدون +)</p>
              </motion.div>
            )}

            <p className="rsvp-small">
              عند الضغط سيتم فتح واتساب برسالة جاهزة لتأكيد حضوركم
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
