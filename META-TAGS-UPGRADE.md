# Meta Tags Upgrade Guide

أضف هذه الوسوم داخل `<head>` في ملف `index.html` (قبل `<style>`):

```html
<!-- Primary Meta Tags -->
<meta name="title" content="Wisly Global Ecosystem — النظام البيئي الرقمي السيادي">
<meta name="description" content="20 مشروعاً متخصصاً تحت مظلة Wisly Global. من الأمن السيبراني إلى الذكاء الاصطناعي، من الصحة إلى البلوكتشين.">
<meta name="keywords" content="Wisly Global, AI, Blockchain, Cybersecurity, Fintech, Digital Sovereignty, Smart Systems">
<meta name="author" content="Wisly Global, LLC">
<meta name="robots" content="index, follow">
<meta name="language" content="Arabic">
<meta name="revisit-after" content="7 days">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://wislygloballlc.github.io/wisly-site/">
<meta property="og:title" content="Wisly Global Ecosystem">
<meta property="og:description" content="النظام البيئي الرقمي السيادي — 20 مشروعاً متخصصاً">
<meta property="og:image" content="https://wislygloballlc.github.io/wisly-site/assets/images/og-image.jpg">
<meta property="og:locale" content="ar_AR">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://wislygloballlc.github.io/wisly-site/">
<meta property="twitter:title" content="Wisly Global Ecosystem">
<meta property="twitter:description" content="النظام البيئي الرقمي السيادي — 20 مشروعاً متخصصاً">
<meta property="twitter:image" content="https://wislygloballlc.github.io/wisly-site/assets/images/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>◆</text></svg>">
<link rel="apple-touch-icon" href="assets/images/icon-192.png">

<!-- PWA -->
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#D4AF37">
<meta name="msapplication-TileColor" content="#050508">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- Analytics -->
<script src="assets/js/analytics.js" defer></script>

<!-- Service Worker -->
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('[SW] Registered:', reg.scope))
      .catch(err => console.warn('[SW] Failed:', err));
  }
</script>
```

## 🖼️ OG Image Requirements

أنشئ صورة `assets/images/og-image.jpg` (1200×630 بكسل) تحتوي على:
- شعار Wisly Global
- عنوان "النظام البيئي الرقمي السيادي"
- خلفية داكنة مع لمسات ذهبية

## 📱 App Icons

أنشئ أيقونات في `assets/images/`:
- `icon-192.png` — 192×192 (Android)
- `icon-512.png` — 512×512 (Android/PWA)
- `apple-touch-icon.png` — 180×180 (iOS)

> 💡 استخدم [favicon.io](https://favicon.io) أو [realfavicongenerator.net](https://realfavicongenerator.net) لتوليد الأيقونات تلقائياً.
