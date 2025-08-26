# 🚚 İstanbul Nakliyat – Profesyonel Nakliye Web Sitesi

İstanbul merkezli şehir içi/şehirdışı nakliye, OSB/tekstil/soğuk zincir uzmanlığı için **tamamen statik** bir kurumsal web sitesi.  
**Stack:** HTML5 + Tailwind CSS + Vanilla JS

## ✅ Yapılan Optimizasyonlar (Son Güncelleme)

### 1. Footer ve Link Düzeltmeleri
- ✅ Tüm sayfalardaki footer linkleri düzeltildi ve SEO için açılmış sayfalar ile doğru şekilde linklendi
- ✅ Ana sayfadaki dropdown menülerdeki linkler gerçek sayfa linklerine güncellendi
- ✅ Eksik olan `hadimkoy-nakliye.html` sayfası oluşturuldu
- ✅ Tüm bölge sayfaları arasında tutarlı linkler sağlandı

### 2. Tekrar Eden Kodların Optimizasyonu
- ✅ `includes/` klasörü oluşturuldu
- ✅ Ortak bileşenler ayrı dosyalara çıkarıldı:
  - `includes/header.html` - Ortak header ve navigasyon
  - `includes/footer.html` - Ortak footer
  - `includes/head.html` - Ortak CSS ve meta taglar
  - `includes/scripts.js` - Ortak JavaScript fonksiyonları
  - `includes/page-template.html` - Yeni sayfa oluşturmak için template

### 3. SEO Optimizasyonları
- ✅ Tüm bölge sayfalarında doğru canonical URL'ler
- ✅ Structured data (JSON-LD) ile local business bilgileri
- ✅ Bölgeye özel meta description ve keywords
- ✅ Open Graph meta tagları

---

## 📦 Mevcut Dosya Yapısı

```
├── index.html                    # Ana sayfa
├── basaksehir-nakliye.html      # Başakşehir nakliye sayfası
├── gebze-nakliye.html           # Gebze nakliye sayfası
├── hadimkoy-nakliye.html        # Hadımköy nakliye sayfası
├── ikitelli-nakliye.html        # İkitelli nakliye sayfası
├── tuzla-nakliye.html           # Tuzla nakliye sayfası
├── sehir-ici-nakliye.html       # Şehir içi nakliye sayfası
├── sehirler-arasi-lojistik.html # Şehirler arası lojistik sayfası
├── ofis-tasimaciligi.html       # Ofis taşımacılığı sayfası
├── soguk-hava-tasimaciligi.html # Soğuk hava taşımacılığı sayfası
├── tekstil-nakliye.html         # Tekstil nakliye sayfası
├── hakkimizda.html              # Hakkımızda sayfası
├── includes/                    # Ortak bileşenler
│   ├── header.html             # Ortak header
│   ├── footer.html             # Ortak footer
│   ├── head.html               # Ortak CSS ve meta taglar
│   ├── scripts.js              # Ortak JavaScript
│   └── page-template.html      # Yeni sayfa template'i
├── images/                      # Görseller
│   ├── hero-truck.jpg
│   └── truck.png
├── robots.txt                   # SEO robots dosyası
├── sitemap.xml                  # SEO sitemap
└── README.md                    # Bu dosya
```

## 🆕 Yeni Sayfa Ekleme

Yeni bir bölge sayfası eklemek için:

1. `includes/page-template.html` dosyasını kopyalayın
2. Dosya adını `[bolge-adi]-nakliye.html` olarak değiştirin
3. Template içindeki placeholder'ları değiştirin:
   - `[LOCATION]` → Bölge adı (örn: "Beylikdüzü")
   - `[location-lower]` → Küçük harfli bölge adı (örn: "beylikduzu")
   - `[CUSTOM_DESCRIPTION]` → Bölgeye özel açıklama
4. Bölgeye özel hizmetler ve avantajlar ekleyin
5. Footer ve header linklerine yeni sayfayı ekleyin

---

## 🎯 Amaç & KPI'lar
- **Lead üretimi:** Telefon tıklaması, WhatsApp tıklaması, form gönderimi
- **Dönüşüm akışı:** Hero → Hizmet/Region → Fiyat Hesap → İletişim
- **SEO:** Bölge & hizmet sayfalarından organik trafik

---

## 🧩 Sayfa Bileşenleri
  
- **Header + Sticky CTA Bar:** "Ara", "WhatsApp", "Fiyat Hesapla"
- **Hero:** Net değer önerisi, tek cümlelik alt açıklama, iki ana CTA
- **Hizmet Kartları:** İkon + kısa açıklama + "Detay" linki
- **Bölge Grid:** 10–15 öncelikli ilçe/OSB landing linki
- **Mini SSS:** 4–6 kısa soru; detay sayfaya yönlendirme
- **Referans/Filomuz:** Görsel şerit veya hafif slider (JS'siz olursa da olur)
- **Footer:** Telefonlar, çalışma saatleri, adres, politika linkleri

---

## 📞 İletişim Hatları
- 05541213128
- 05541213128

Tüm sayfalarda `tel:` ve `https://wa.me/` deep linkleri.

---

## 🧠 SEO & Erişilebilirlik

* **Meta başlık/açıklama:** Her sayfada benzersiz `<title>` ve `<meta name="description">`
* **Heading hiyerarşisi:** Her sayfada tek `h1`, alt başlıklar `h2/h3`
* **Schema:** `LocalBusiness` JSON-LD (adres/telefon)
* **Resimler:** `alt` metinleri, boyutlar; `loading="lazy"`
* **Linkler:** `tel:` ve `wa.me` tıklama hedefleri

---

## 🛠️ Teknik Özellikler

- **Framework**: Tailwind CSS
- **Responsive**: Mobil uyumlu tasarım
- **SEO**: Optimize edilmiş meta taglar ve structured data
- **Performance**: Optimize edilmiş görseller ve CSS
- **Accessibility**: WCAG uyumlu tasarım
- **Browser Support**: Modern tarayıcılar

---

## 🧪 Geliştirme & Çalıştırma

* **Lokal:** `index.html` dosyasını tarayıcıda aç (ya da basit sunucu)
* **Basit statik sunucu (opsiyonel):**
  * Python: `python -m http.server 8080`
  * Node (http-server): `npx http-server . -p 8080`
* **Deploy:** GitHub Pages / Netlify / Vercel (Statik)

> Form için sunucu yoksa **Formspree**/**Netlify Forms** entegre edilebilir (HTML form action ile). Telefon/WhatsApp tıklamaları sunucu gerektirmez.

---

## 🗺️ İçerik Yol Haritası

1. **MVP:** Ana sayfa, 3 hizmet sayfası, 5 bölge sayfası, İletişim, Fiyat Hesap (MVP)
2. **SEO genişleme:** 15+ bölge, her hizmet için SSS, referans/filo galerisi
3. **Dönüşüm:** Sticky CTA bar, mini form, event tracking
4. **Optimize:** Görsel sıkıştırma, CSS minify, Lighthouse 90+

---

## 🤝 Katkı Süreci

1. Fork → Branch (`feature/...`)
2. Değişiklik → `index.html`/`theme.css`/`pricing.js`
3. PR aç; açıklamaya sayfa linkleri, değişiklik özeti

---

## 📌 Geliştirme Notları

- HTML dosyalarında include sistemi kullanılmıyor (statik HTML)
- Ortak bileşenler manuel olarak kopyalanmalı
- JavaScript fonksiyonları `includes/scripts.js` dosyasında
- CSS stilleri Tailwind CSS ile inline olarak yazılmış
- Framework yok, bağımlılık yok; her şey saf HTML/CSS/JS.
- İleride ihtiyaç olursa, form backend'i eklemesi minimum dokunuşla yapılır.