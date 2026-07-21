import React from 'react'
import { motion } from 'framer-motion'

const details = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    label: 'التاريخ',
    value: '21 أغسطس 2026',
    sub: 'يوم الجمعة',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    label: 'الوقت',
    value: '7:00 مساءً',
    sub: 'بتوقيت القاهرة',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 21s-6-5.373-6-10a6 6 0 0 1 12 0c0 4.627-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
    label: 'المكان',
    value: 'منزل العروس',
    sub: 'بانتظاركم بكل الحب',
  },
]

export default function EventDetails() {
  return (
    <section id="details" className="section details-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <p className="section-kicker">تفاصيل لا تُنسى</p>
          <h2 className="section-title">تفاصيل المناسبة</h2>
          <div className="ornament-divider">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
        </motion.div>

        <div className="details-grid">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              className="detail-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="detail-icon">{item.icon}</div>
              <div className="detail-content">
                <span className="detail-label">{item.label}</span>
                <span className="detail-value">{item.value}</span>
                <span className="detail-sub">{item.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gold separators for editorial feel - vertical on desktop, horizontal on mobile */}
      </div>
    </section>
  )
}
