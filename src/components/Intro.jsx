import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section id="intro" className="section intro-section">
      <div className="container">
        <motion.div
          className="intro-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ornament-center">
            <span className="orn-line"></span>
            <span className="orn-flower">❦</span>
            <span className="orn-line"></span>
          </div>

          <h2 className="intro-title">يسعدنا حضوركم</h2>

          <div className="ornament-divider small">
            <span className="line"></span>
            <span className="dot"></span>
            <span className="line"></span>
          </div>

          <p className="intro-text">
            نتشرف بدعوتكم لمشاركتنا أجمل لحظات العمر،<br />
            ونتمنى أن تكتمل فرحتنا بوجودكم بيننا.<br />
            <span className="intro-highlight">
              حضوركم يضفي على يومنا بهجة لا تُنسى.
            </span>
          </p>

          <div className="ornament-center bottom">
            <span className="orn-line"></span>
            <span className="orn-flower">✦</span>
            <span className="orn-line"></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
