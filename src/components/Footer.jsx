import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="footer-ornament">
            <span className="line"></span>
            <span className="heart">♥</span>
            <span className="line"></span>
          </div>

          <h3 className="footer-names">ميري & محمد</h3>
          <p className="footer-date">21 أغسطس 2026</p>

          <p className="footer-message">
            "وبالحب بدأت حكايتنا، وبحضوركم تكتمل فرحتنا"
          </p>

          <div className="footer-floral">❦ ✦ ❦</div>

          <p className="footer-copy">
            بكل الحب ننتظركم في ليلة العمر<br />
            <span>منزل العروس • الساعة 7:00 مساءً</span>
          </p>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <span>صُنعت هذه الدعوة بكل حب ♥</span>
      </div>
    </footer>
  )
}
