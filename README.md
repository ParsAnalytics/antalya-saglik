# 🏥 AntalyaSağlık — Antalya Sağlık Haber Portalı

Antalya genelinde sağlık, evde bakım ve tıp haberlerini gerçek zamanlı takip eden premium haber portalı.

## 🚀 Canlı Demo
[Vercel'e deploy ettikten sonra URL buraya eklenecek]

## ✨ Özellikler
- **Live RSS Feeds** — HaberAntalya ve AntalyaYaşam sağlık kategorisi
- **Akdeniz Üniversitesi Hastanesi** haberleri
- **My Gazete** Antalya sağlık haberleri
- Hero Slider — Top 5 haber otomatik geçişli
- Breaking News Ticker — Kayan haber bandı
- Glassmorphism tasarım ("Medical Dark Luxe")
- Mobil uyumlu responsive
- 15 dakikada bir otomatik güncelleme (ISR)

## 📦 Kurulum

```bash
npm install
npm run dev
```

## 🌐 Vercel Deploy

1. GitHub'a push edin
2. [vercel.com/new](https://vercel.com/new) adresine gidin
3. Bu repoyu import edin
4. **Deploy** butonuna tıklayın — otomatik ayarlar tamamdır!

## 🗂️ Haber Kaynakları
| Kaynak | Tür | URL |
|--------|-----|-----|
| Haber Antalya | RSS | haberantalya.com/rss/category/saglik |
| Antalya Yaşam | RSS | antalyayasam.com.tr/rss/saglik |
| My Gazete | Static | mygazete.com.tr/saglik |
| Akdeniz Üni. Hastanesi | Static | hastane.akdeniz.edu.tr |

## 🛠️ Teknolojiler
- **Next.js 14** (App Router)
- **TypeScript**
- **Vanilla CSS** (CSS Modules)
- **ISR** (15 dakika revalidation)
