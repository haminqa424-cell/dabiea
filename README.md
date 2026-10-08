# abircarservices.online

صفحة هبوط للاستعلام عن المخالفات المرورية (عربي / إنجليزي) مع الصفحات القانونية.

## المحتوى
- `public/traffic-landing.html` — الصفحة الرئيسية (عربي)
- `public/traffic-landing-en.html` — الصفحة الرئيسية (إنجليزي)
- `public/privacy.html` / `privacy-en.html` — سياسة الخصوصية
- `public/terms.html` / `terms-en.html` — الشروط والأحكام
- `public/disclaimer.html` / `disclaimer-en.html` — إخلاء المسؤولية
- `public/cookies.html` / `cookies-en.html` — سياسة ملفات تعريف الارتباط
- `public/img/` — صور البانر

## التشغيل محلياً
```bash
npm install
npm start
```
ثم افتح: http://localhost:8080

## النشر على Railway
1. ارفع المجلد كله إلى مستودع GitHub.
2. من Railway: New Project → Deploy from GitHub repo، واختر المستودع.
3. Railway يكتشف Node تلقائياً ويشغّل `npm start`.
4. من Settings → Networking → Add Custom Domain أضف `abircarservices.online` على المنفذ (Port) `8080`.
5. اضبط سجلات DNS كما يطلب Railway.

السيرفر يستمع على `process.env.PORT` (يوفّره Railway) أو `8080` محلياً.
