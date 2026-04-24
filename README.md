# Wisly Global — Landing Page

<p align="center">
  <img src="https://img.shields.io/badge/Wisly-Global-gold?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2Q0YWYzNyIgZD0iTTEyIDJMMTQuNSA5LjVMMjIgMTJMMTQuNSAxNC41TDEyIDIyTDkuNSAxNC41TDIgMTJMOS41IDkuNXoiLz48L3N2Zz4=" alt="Wisly Global">
</p>

**النظام البيئي الرقمي السيادي — صفحة الهبوط الرسمية**

> 🌐 **Live Demo**: `https://wislyglobal.github.io/wisly-site` *(بعد التفعيل)*

---

## 📁 هيكل المشروع

```
wisly-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages Auto-Deploy
├── assets/
│   ├── videos/                 # خلفيات فيديو محلية (اختياري)
│   ├── images/                 # صور وشعارات
│   └── audio/                  # ملفات صوتية مستقبلية
├── index.html                  # الصفحة الرئيسية (Single File App)
├── CNAME                       # النطاق المخصص (Custom Domain)
├── .gitignore                  # استبعاد الملفات غير المرغوبة
├── LICENSE                     # ترخيص الملكية الفكرية
└── README.md                   # هذا الملف
```

---

## 🚀 كيفية الرفع على GitHub

### 1. إنشاء المستودع (إذا لم يكن موجوداً)

```bash
# على جهازك المحلي
mkdir wisly-site
cd wisly-site

# نسخ الملفات من هذا المشروع
# ...

# تهيئة Git
git init
git add .
git commit -m "🚀 Initial commit: Wisly Global Landing Page"

# ربط بالمستودع البعيد
git remote add origin https://github.com/WislyGlobalLLC/wisly-site.git
git branch -M main
git push -u origin main
```

### 2. تفعيل GitHub Pages

1. اذهب إلى **Settings** → **Pages** في المستودع
2. اختر **Branch**: `main` / **Folder**: `/ (root)`
3. احفظ — سيتم نشر الموقع خلال دقيقتين

### 3. النطاق المخصص (Custom Domain)

1. عدّل ملف `CNAME`:
   ```
   www.wislyglobal.com
   ```
2. أضف سجل `CNAME` في DNS مزود النطاق:
   - Name: `www`
   - Value: `wislygloballlc.github.io`
3. انتظر 24 ساعة للتفعيل (غالباً أقل)

---

## 🎨 المميزات

| الميزة | الوصف |
|--------|-------|
| 🎬 **خلفية فيديو سينمائية** | فيديو عالي الجودة مع overlay داكن و grain texture |
| 🔊 **تأثيرات صوتية تفاعلية** | Web Audio API — لا تحتاج ملفات خارجية |
| 🎴 **20 بطاقة 3D تفاعلية** | نظام Wisly البيئي كاملاً مع tilt effect |
| 🔗 **روابط مرنة** | كل مشروع له `route` قابل للتخصيص |
| 📱 **تصميم متجاوب** | يعمل على جميع الأجهزة |
| ⚡ **أداء عالي** | Single file, no dependencies, CDN fonts only |

---

## 🔗 كيفية إضافة روابط حقيقية للمشاريع

### الطريقة السريعة (تعديل مباشر)

افتح `index.html` وابحث عن كائن `projects`. غيّر `route` من `"#"` إلى الرابط:

```javascript
{ id: 'legal', name: 'Wisly Legal', ..., route: 'https://legal.wisly.com' }
```

### الطريقة الموصى بها (ملف إعدادات منفصل)

أنشئ ملف `assets/config.js`:

```javascript
// assets/config.js
const PROJECT_ROUTES = {
  'legal': 'https://legal.wisly.com',
  'health': '/health',
  'finance': 'https://finance.wisly.app',
  // ...
};
```

ثم في `index.html` استبدل:
```javascript
route: PROJECT_ROUTES[project.id] || '#'
```

---

## 📦 استبدال الفيديو الخلفي

الفيديو الحالي يستخدم روابط Pexels (خارجية). لاستخدام فيديو محلي:

1. نزّل فيديو مناسب (مثلاً من [Pexels](https://pexels.com/videos))
2. ضعه في `assets/videos/hero.mp4`
3. عدّل في `index.html`:

```html
<video class="video-bg" autoplay muted loop playsinline>
    <source src="assets/videos/hero.mp4" type="video/mp4">
</video>
```

> 💡 **نصيحة**: استخدم فيديو بحد أقصى 5-10MB للأداء الأمثل.

---

## 🔒 الترخيص

© 2026 **Wisly Global, LLC** — جميع الحقوق محفوظة.

هذا المشروع هو ملكية فكرية خاصة. لا يجوز النسخ أو التوزيع أو التعديل بدون إذن كتابي صريح من الشركة.

**المخترع**: Mansour Babiker Mohammed  
**المالك**: Wisly Global, LLC

---

## 📞 التواصل

- 🌐 الموقع: [wislyglobal.com](https://wislyglobal.com)
- 📧 البريد: contact@wislyglobal.com
- 💼 LinkedIn: [Wisly Global](https://linkedin.com/company/wislyglobal)

---

<p align="center">
  <strong>صُنع بإبداع من أجل المستقبل</strong> 🚀
</p>
