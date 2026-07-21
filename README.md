# 💍 دعوة زفاف ميري & محمد — Luxury Wedding Invitation

موقع دعوة زفاف إلكترونية فاخرة، تفاعلية، سينمائية، مصممة خصيصًا للاستخدام لمرة واحدة باسم **ميري & محمد**.

> تجربة بصرية Premium • Elegant • Romantic • Cinematic  — تركيز كامل على الموبايل، RTL عربي كامل.

---

## ✨ المميزات

- **Hero سينمائي** Full Screen مع Particles و Glow ذهبي وزخارف عربية
- **Animation فاخرة** باستخدام Framer Motion مع احترام prefers-reduced-motion
- **عد تنازلي حقيقي** لتاريخ 21 أغسطس 2026 - 7:00 مساءً بتوقيت Africa/Cairo
- **تفاصيل أنيقة** Date/Time/Place بتصميم Editorial
- **Gallery فاخرة** 6 صور قابلة للاستبدال + Placeholder آمن
- **الموقع على الخريطة** بزر قابل للتخصيص
- **تأكيد حضور عبر واتساب** برسالة جاهزة ورقم قابل للتخصيص
- **مشغل موسيقى** أنيق لا يبدأ تلقائيًا ويختفي إذا لم يوجد الملف
- **قائمة عائمة Floating Menu** بدل Navbar
- **Responsive ممتاز** 375 / 390 / 430 / 768 / 1024 / 1440 بدون overflow
- **SEO + OG Tags** جاهز للمشاركة
- **أداء عالي** Lazy loading، لا أخطاء إذا غابت الصور أو الموسيقى

---

## 🎨 الهوية البصرية

- **الألوان:** Dark Espresso #0F0D0A, Burgundy #3E1B23, Champagne Gold #D5B98F, Ivory #FFFDFA, Cream #F7F0E6
- **الخطوط:** Cairo + Playfair Display + Cormorant Garamond من Google Fonts
- **الطابع:** Minimal • Modern • Luxury • Romantic

---

## 🛠️ التقنيات

- React 18 + Vite 5
- Framer Motion للأنيميشن
- CSS حديث (بدون Tailwind لتقليل الحجم وضمان جودة Premium)
- RTL كامل

---

## 🚀 التشغيل المحلي

```bash
npm install
npm run dev
```

ثم افتح http://localhost:5173

### البناء للإنتاج

```bash
npm run build
npm run preview
```

المجلد الناتج `dist/` جاهز للنشر على Vercel / Netlify / GitHub Pages.

---

## ⚙️ التخصيص السريع

### 1. رابط الخريطة

افتح الملف:

```
src/components/Location.jsx
```

غيّر السطر في الأعلى:

```js
const MAP_URL = "https://maps.google.com/?q=..."
```

إذا تركته فارغًا أو يحتوي على `ضع_رابط_الخريطة_هنا` سيظهر تنبيه لطيف بدل فتح الخريطة.

### 2. رقم واتساب

افتح:

```
src/components/RSVP.jsx
```

غيّر:

```js
const WHATSAPP_NUMBER = "201234567890" // مع كود الدولة بدون + أو 00
```

رسالة الواتساب الجاهزة:

> "مرحبًا، أود تأكيد حضوري لحفل زفاف ميري ومحمد يوم 21 أغسطس 2026. بكل الحب نبارك لهما ♥"

### 3. الصور

ضع صورك في:

```
public/images/
```

بالأسماء:

- bride-groom-1.jpg
- bride-groom-2.jpg
- ...
- bride-groom-6.jpg

إذا لم توجد، يعرض Placeholder فاخر بدون أخطاء.

### 4. الموسيقى

ضع ملف:

```
public/music/wedding-song.mp3
```

إذا لم يوجد، يختفي زر الموسيقى بدون أي خطأ.

### 5. النصوص والأسماء

- الأسماء الرئيسية داخل `Hero.jsx` و `Footer.jsx`
- التاريخ ثابت 21 أغسطس 2026 في كل المكونات، لكن يمكنك تعديله بسرعة عبر البحث.

---

## 📁 هيكل المشروع

```
src/
  components/
    Hero.jsx
    Intro.jsx
    EventDetails.jsx
    Countdown.jsx
    Gallery.jsx
    Location.jsx
    RSVP.jsx
    MusicPlayer.jsx
    FloatingMenu.jsx
    Footer.jsx
  App.jsx
  main.jsx
  styles.css
public/
  images/
  music/
index.html
vite.config.js
package.json
README.md
```

---

## 🌍 النشر

### Vercel
- اربط المستودع بـ Vercel
- Build Command: `npm run build`
- Output Directory: `dist`

### Netlify
- Build: `npm run build`
- Publish: `dist`

### GitHub Pages
في `vite.config.js` غيّر `base` إلى اسم المستودع إذا كان المشروع في subdirectory:

```js
base: '/your-repo-name/'
```

ثم:

```bash
npm run build
# ارفع محتويات dist/ إلى فرع gh-pages
```

---

## 📱 اختبار Responsive

الموقع مختبر على:

- 375px iPhone SE
- 390px iPhone 12/13/14
- 430px iPhone 14 Pro Max
- 768px Tablet
- 1024px Laptop
- 1440px Desktop

بدون Horizontal Scroll أو قص للنصوص.

---

## ✅ checklist المتطلبات المنفذة

- [x] بدون login / DB / Admin
- [x] Hero سينمائي + Opening Animation
- [x] Intro رومانسي
- [x] تفاصيل المناسبة Editorial
- [x] عد تنازلي Africa/Cairo
- [x] مكان الاحتفال + زر خرائط قابل للتخصيص
- [x] RSVP واتساب قابل للتخصيص
- [x] Gallery فاخرة + Lazy + Fallback
- [x] Music Player آمن
- [x] Floating Menu
- [x] Particles + Grain + Glow خفيف
- [x] SEO + OG
- [x] Performance + reduced-motion
- [x] npm install && npm run dev يعمل

---

## 💌 ملاحظة

هذا مشروع دعوة واحدة Premium جاهز للتعديل والنشر مباشرة لميري ومحمد.

صُنع بكل حب ♥ — 21 أغسطس 2026

---
