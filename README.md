 

# 🚚 City Moving Pro – Statik (Pure HTML/CSS/JS) Lojistik Sitesi

İstanbul merkezli şehir içi/şehirdışı nakliye, OSB/tekstil/soğuk zincir uzmanlığı için **tamamen statik** bir kurumsal web sitesi.  
**Stack:** HTML5 + CSS3 (Tailwind yok) + Vanilla JS (derleme yok, bağımlılık yok).

---

## 🎯 Amaç & KPI’lar
- **Lead üretimi:** Telefon tıklaması, WhatsApp tıklaması, form gönderimi
- **Dönüşüm akışı:** Hero → Hizmet/Region → Fiyat Hesap → İletişim
- **SEO:** Bölge & hizmet sayfalarından organik trafik

---

## 📦 Klasör Yapısı

  
```markdown
/ (repo kökü)
├─ index.html                # Ana sayfa (Hero, hizmetler, mini SSS, CTA)
├─ services/
│  ├─ index.html             # Hizmetler landing
│  └─ evden-eve.html         # Örnek hizmet sayfası (şablon)
├─ regions/
│  ├─ index.html             # Bölgeler landing
│  └─ hadimkoy.html          # Örnek bölge sayfası (şablon)
├─ pricing/
│  ├─ index.html             # Fiyat Hesaplama (form + sonuç alanı)
│  └─ rules.json             # Basit katsayı konfigürasyonu
├─ contact/
│  └─ index.html             # İletişim (form, harita, çoklu hat)
├─ assets/
│  ├─ css/
│  │  ├─ base.css            # Reset/typography/utility
│  │  └─ theme.css           # Renk paleti, bileşen stilleri
│  ├─ js/
│  │  ├─ main.js             # Nav, sticky-cta, event tracking
│  │  ├─ pricing.js          # Fiyat hesap mantığı
│  │  └─ analytics.js        # GA4 (opsiyonel)
│  ├─ img/
│  │  ├─ hero.jpg
│  │  └─ fleet/\*.jpg
│  └─ icons/
│     └─ \*.svg
├─ partials/                 # (Opsiyonel) JS ile include edilecek HTML parçaları
│  ├─ header.html
│  ├─ footer.html
│  └─ faq.html
└─ README.md

 

> **Not:** Saf HTML’de include yok. `main.js` içinde `fetch('/partials/header.html')`
ile header/footer çekilip DOM’a gömülebilir (tüm sayfalarda ortak yapı korunur).

 
``` 
## 🧩 Sayfa Bileşenleri
  
- **Header + Sticky CTA Bar:** “Ara”, “WhatsApp”, “Fiyat Hesapla”
- **Hero:** Net değer önerisi, tek cümlelik alt açıklama, iki ana CTA
- **Hizmet Kartları:** İkon + kısa açıklama + “Detay” linki
- **Bölge Grid:** 10–15 öncelikli ilçe/OSB landing linki
- **Mini SSS:** 4–6 kısa soru; detay sayfaya yönlendirme
- **Referans/Filomuz:** Görsel şerit veya hafif slider (JS’siz olursa da olur)
- **Footer:** Telefonlar, çalışma saatleri, adres, politika linkleri

---

## 📞 İletişim Hatları (örnek)
- 0536-799 2626
- 0536-628 3232
- +90 554 121 31 28

Tüm sayfalarda `tel:` ve `https://wa.me/` deep linkleri.

---

## 🧮 Fiyat Hesaplama (Vanilla JS – MVP)

**Girdi Alanları:**
- Çıkış/Varış (metin; Google Maps entegrasyonu yoksa düz input)
- Yük tipi: ev/ofis/tekstil/soğuk
- Hacim: m³ veya palet
- Kat bilgisi/asansör, paketleme, ek personel
- Tarih/saat

**Kurallar:** `pricing/rules.json` içindeki katsayılar ile basit hesap.
```json
{
  "base": 450,
  "per_km": 12,
  "type": { "ev": 1.0, "ofis": 1.1, "tekstil": 1.15, "soguk": 1.35 },
  "volume_factor": 20,
  "floor": { "asansor": 0, "yok": 2.0 },
  "packing": 150,
  "extra_staff": 250
}
 

**Basit JS iskeleti (`assets/js/pricing.js`):**

```js
async function calculatePrice(e) {
  e.preventDefault();
  const rules = await fetch('/pricing/rules.json').then(r => r.json());

  const type = document.querySelector('#type').value;     // ev/ofis/tekstil/soguk
  const volume = +document.querySelector('#volume').value || 0; // m³
  const floor  = document.querySelector('input[name="floor"]:checked').value; // asansor/yok
  const pack   = document.querySelector('#packing').checked; // bool
  const staff  = +document.querySelector('#extra_staff').value || 0; // kişi

  // Mesafe hesap yoksa varsayımsal km input’u
  const km     = +document.querySelector('#km').value || 10;

  let price = rules.base 
    + (rules.per_km * km)
    + (rules.volume_factor * volume)
    + (rules.type[type] - 1) * 100 // tip düzeltmesi
    + (rules.floor[floor] * 50)    // kat etkisi
    + (pack ? rules.packing : 0)
    + (staff * rules.extra_staff);

  const low = Math.round(price * 0.9);
  const high = Math.round(price * 1.15);
  document.querySelector('#result').textContent = `Tahmini: ₺${low} – ₺${high}`;
}

document.querySelector('#pricingForm')?.addEventListener('submit', calculatePrice);
```

**HTML parçası (`pricing/index.html`):**
``` 

<form id="pricingForm">
  <label>Yük Tipi
    <select id="type">
      <option value="ev">Ev</option>
      <option value="ofis">Ofis</option>
      <option value="tekstil">Tekstil</option>
      <option value="soguk">Soğuk</option>
    </select>
  </label>
  <label>Hacim (m³) <input id="volume" type="number" min="0" step="0.1"></label>
  <label>Mesafe (km) <input id="km" type="number" min="1"></label>
  <fieldset>
    <legend>Kat/Asansör</legend>
    <label><input type="radio" name="floor" value="asansor" checked> Asansör Var</label>
    <label><input type="radio" name="floor" value="yok"> Asansör Yok</label>
  </fieldset>
  <label><input id="packing" type="checkbox"> Paketleme İstiyorum</label>
  <label>Ek Personel <input id="extra_staff" type="number" min="0" max="6"></label>
  <button type="submit">Fiyatı Hesapla</button>
</form>
<p id="result" aria-live="polite"></p>
 


```
## 🧠 SEO & Erişilebilirlik

* **Meta başlık/açıklama:** Her sayfada benzersiz `<title>` ve `<meta name="description">`
* **Heading hiyerarşisi:** Her sayfada tek `h1`, alt başlıklar `h2/h3`
* **Schema:** `LocalBusiness` JSON-LD (adres/telefon)
* **Resimler:** `alt` metinleri, boyutlar; `loading="lazy"`
* **Linkler:** `tel:` ve `wa.me` tıklama hedefleri

---

## ⚙️ Analytics (opsiyonel)

`assets/js/analytics.js` içinde event yakalama:

* Tel tıklaması
* WhatsApp tıklaması
* Fiyat hesap form submit
* İletişim form submit

GA4 snippet’i HTML’e gömülür; eventler `gtag('event', ...)` ile gönderilir.

---

## 🛡️ Hukuki Metinler

* `kvkk.html`, `cerez-politikasi.html`, `mesafeli-hizmet.html` (varsa)
* Footer’dan erişilebilir, dil sade, güncel tarihli.

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

## 📌 Notlar

* Framework yok, bağımlılık yok; her şey saf HTML/CSS/JS.
* Parça-tekrarını azaltmak için `partials/` + `fetch()` yöntemi önerildi.
* İleride ihtiyaç olursa, form backend’i eklemesi minimum dokunuşla yapılır.

 

  
