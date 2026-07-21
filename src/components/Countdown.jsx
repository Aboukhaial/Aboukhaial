import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Target: 21 Aug 2026 19:00 Cairo time -> EEST UTC+3 in August
const TARGET_DATE = new Date('2026-08-21T19:00:00+03:00')

function getTimeLeft() {
  const now = new Date()
  const diff = TARGET_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { ended: true, days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { ended: false, days, hours, minutes, seconds, total: diff }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="countdown" className="section countdown-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="section-kicker">ننتظر هذا اليوم</p>
          <h2 className="section-title">العد التنازلي</h2>
          <p className="countdown-date-label">21 أغسطس 2026 • الساعة 7:00 مساءً • Africa/Cairo</p>
        </motion.div>

        {timeLeft.ended ? (
          <motion.div
            className="countdown-ended"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="ended-heart">♥</div>
            <h3>بدأت فرحتنا</h3>
            <p>شكرًا لمشاركتكم لنا أجمل لحظات العمر</p>
          </motion.div>
        ) : (
          <div className="countdown-grid">
            <CountBox value={timeLeft.days} label="يوم" delay={0} />
            <CountBox value={timeLeft.hours} label="ساعة" delay={0.1} />
            <CountBox value={timeLeft.minutes} label="دقيقة" delay={0.2} />
            <CountBox value={timeLeft.seconds} label="ثانية" delay={0.3} isSeconds />
          </div>
        )}

        <motion.div
          className="countdown-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>"كل ثانية تقرّبنا من لحظةٍ حلمّنا بها طويلاً"</p>
        </motion.div>
      </div>
    </section>
  )
}

function CountBox({ value, label, delay, isSeconds = false }) {
  return (
    <motion.div
      className={`count-box ${isSeconds ? 'seconds-box' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="count-inner">
        <span className="count-number">{String(value).padStart(2, '0')}</span>
        <span className="count-label">{label}</span>
      </div>
      <div className="count-glow"></div>
    </motion.div>
  )
}
