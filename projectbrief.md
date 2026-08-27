# Project Brief — Portofolio "Cosmic Explorer"
Nama: Nabila Nurhusna Yap · Role: Indonesia UI/UX Designer · Tema: Space Illustration (Playful) · Stack: Next.js

> Revisi dari konsep sebelumnya ("Mission Control" — dark/techy/minimalis). Arah baru ini mengikuti aset hero yang sudah didesain di Canva: **ilustrasi ruang angkasa bergaya kartun/illustrative**, hangat, playful, dengan karakter astronot sebagai maskot utama.

---

## 1. Konsep Besar

Nabila digambarkan sebagai seorang **astronot penjelajah** yang mendarat di planet asing, ditemani makhluk-makhluk kecil yang lucu (alien hijau naik papan luncur, alien pink berkaki tiga, UFO melintas). Setiap section portofolio adalah titik pemberhentian baru dalam perjalanan eksplorasinya — bukan HUD teknikal yang dingin, tapi dunia ilustrasi yang hangat, penuh warna, dan mengundang.

**Nuansa:** playful namun tetap profesional — cocok untuk UI/UX Designer yang ingin menunjukkan sisi kreatif dan personality lewat storytelling visual, bukan dashboard teknikal.

**Kalimat pengganti thesis lama:** *"Nihil in vita timendum est."* (tagline yang sudah ada di desain — bisa dipertahankan atau diganti kalimat personal lain senada)

---

## 2. Design Token System (Direvisi dari Aset Canva)

### Warna
Diambil langsung dari palet ilustrasi hero:

| Token | Hex (approx) | Peran |
|---|---|---|
| `space-deep` | `#1B1240` | Background langit malam terdalam (dekat hitam-ungu) |
| `space-mid` | `#3A2B6B` | Background ungu tengah, gradasi nebula |
| `nebula-teal` | `#3FBFAE` | Aksen nebula kehijauan/teal, glow utama |
| `nebula-purple` | `#8B6FD9` | Aksen ungu terang, pegunungan/kristal |
| `accent-gold` | `#F4C95D` | Judul highlight (nama tengah), aksen hangat |
| `cta-cream` | `#F7E9C9` | Warna tombol CTA utama ("Explore Now") |
| `text-onspace` | `#FFFFFF` / `#F1EEFB` | Teks di atas background gelap |
| `text-navy-cta` | `#2A1B4D` | Teks di atas tombol cream (kontras gelap) |
| `rock-purple` | `#5B4A8A` | Siluet pegunungan/kristal di foreground |

> Catatan implementasi: palet ini lebih hangat dan saturated dibanding token lama (`void`, `nebula`, `cyan`, `gold`). Tetap definisikan semua di `tailwind.config.ts` sebagai extend, ganti total token lama.

### Tipografi
- **Display/Heading:** font rounded & friendly, contoh: **Baloo 2** atau **Fredoka** — cocok dengan gaya huruf tebal-bulat pada "Nabila Nurhusna Yap" di desain
- **Body:** **Poppins** atau **Nunito Sans** — tetap ramah dan mudah dibaca, bukan font teknikal/mono seperti brief sebelumnya
- **Tidak lagi memakai font mono sebagai elemen utama** (beda dari konsep "Mission Control" yang HUD-style) — mono boleh dipakai minimal untuk badge kecil/tag saja kalau perlu

### Layout & Signature Element
- **Hero menggunakan aset ilustrasi custom** (hasil export dari Canva, PNG/SVG resolusi tinggi) sebagai background — bukan digambar ulang dengan Canvas/SVG generatif seperti starfield di konsep lama
- Section-section berikutnya melanjutkan gaya ilustratif dengan elemen recurring: siluet pegunungan kristal di bagian bawah tiap section (sebagai divider), taburan bintang kecil (bisa tetap pakai canvas twinkle sederhana sebagai lapisan ambient, tapi tidak dominan seperti sebelumnya), dan maskot alien kecil muncul sesekali sebagai easter egg di pojok section
- Tombol CTA konsisten bentuk **pill besar warna cream** dengan teks navy tebal, sesuai desain

---

## 3. Struktur Halaman (Section demi Section)

### A. Navigasi
- Fixed top bar, transparan di atas hero → solid warna `space-deep` saat scroll
- Menu: Home · About · Skills · Projects · Experience · Contact
- Gaya tombol/menu rounded, bukan tajam/kotak

### B. Hero — "Pendaratan Pertama"
- Gunakan **aset ilustrasi Canva** apa adanya sebagai background (full-bleed)
- Overlay teks di atas ilustrasi (posisi kiri, sesuai desain): eyebrow tagline kecil warna gold, nama besar (2 baris, baris kedua warna gold), role di bawahnya warna putih
- CTA pill cream "Explore Now" → scroll ke Projects
- Opsional: tambahkan CTA kedua kecil ("Unduh CV") di sebelah/bawah tombol utama, gaya outline agar tidak bersaing dengan CTA utama
- Elemen dari desain (UFO, alien, komet, astronot) tidak perlu dianimasikan ulang — cukup ilustrasi statis berkualitas tinggi; boleh tambahkan animasi *sangat* halus (mis. komet bergerak pelan, karakter alien mengambang naik-turun) memakai Framer Motion, opsional dan ringan

### C. About — "Log Perjalanan"
- Foto/ilustrasi diri (gaya konsisten dengan karakter astronot di hero, atau foto asli dengan bingkai/frame bertema)
- Narasi singkat tentang Nabila: fokus kerja sebagai UI/UX Designer, values, pendekatan desain
- 3 angka statistik ditampilkan sebagai "kartu misi" kecil dengan ilustrasi ikon planet/bintang kecil, bukan gaya data mono/HUD seperti sebelumnya

### D. Skills — "Koleksi Bintang"
- Tetap pakai ide peta/koleksi skill, tapi divisualisasikan lebih playful: kartu-kartu bulat/badge bintang berwarna-warni per skill, dikelompokkan per kategori (mis. Research, UI Design, Prototyping, Handoff/Dev Collaboration — sesuaikan ke fokus UI/UX)
- Hover kartu: sedikit membesar + efek glow warna kategori

### E. Projects — "Planet yang Disinggahi"
- Grid kartu proyek (studi kasus desain), tiap kartu: thumbnail mockup, nama proyek, kategori (mis. Mobile App, Web App, Design System), deskripsi singkat, tag tools (Figma, dll.)
- Klik card → detail studi kasus: problem, proses, solusi, hasil/impact, mockup lebih besar
- Nuansa kartu tetap rounded, warm, dengan aksen warna dari palet section B

### F. Experience — "Jejak Perjalanan"
- Timeline tetap melengkung seperti orbit, tapi dengan ilustrasi kecil (planet/bintang) di tiap titik alih-alih dot polos
- Isi: posisi, institusi, periode, deskripsi singkat

### G. Contact — "Kirim Sinyal"
- Form kontak (nama, email, pesan) dengan styling rounded, warna sesuai palet baru
- Link langsung: email, LinkedIn, GitHub/Behance/Dribbble (relevan untuk UI/UX), Instagram
- Copy penutup ramah, sesuai nuansa playful (mis. "Yuk, kirim sinyal — aku akan balas secepat cahaya bintang.")

### H. Footer
- Copyright + tahun
- Link kembali ke atas ("Kembali ke Bumi")
- Ikon sosial kecil bulat

---

## 4. Interaksi & Motion

- Motion lebih **halus dan minim** dibanding konsep lama — dunia ilustrasi ini sudah "ramai" secara visual, jadi animasi cukup jadi aksen kecil: scroll-reveal per section (fade + translate), hover scale ringan pada card, elemen dekoratif (komet/alien) mengambang pelan
- Tetap hormati `prefers-reduced-motion`

---

## 5. Tech Stack

Sama seperti brief sebelumnya, hanya font & sedikit pendekatan aset yang berubah:

- **Next.js 14 (App Router) + TypeScript + Tailwind CSS**
- **Framer Motion** untuk reveal & micro-interaction ringan
- **next/image** untuk optimasi aset ilustrasi (hero PNG/SVG, mockup proyek)
- **next/font/google** untuk load Baloo 2/Fredoka (display) + Poppins/Nunito Sans (body)
- Starfield ambient (opsional, minor layer) tetap boleh pakai Canvas API native, tapi **bukan lagi elemen utama** — hero sudah representasi visual penuh dari ilustrasi Canva
- Data (`skills`, `projects`, `experience`, `profile`) tetap disimpan di `data/*.ts` typed

### Struktur Folder
Tidak berubah dari brief sebelumnya — cukup ganti isi komponen & token warna/font:

```
cosmic-explorer-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/contact/route.ts
├── components/
│   ├── nav/NavBar.tsx
│   ├── hero/Hero.tsx
│   ├── about/About.tsx
│   ├── skills/Skills.tsx
│   ├── projects/{ProjectCard,ProjectModal,Projects}.tsx
│   ├── experience/Experience.tsx
│   ├── contact/{ContactForm,Contact}.tsx
│   └── ui/{Reveal,Section,Footer}.tsx
├── data/{profile,skills,projects,experience}.ts
├── public/
│   ├── images/hero-illustration.png   ← export dari Canva
│   ├── images/                        ← mockup/screenshot proyek
│   └── cv.pdf
└── tailwind.config.ts
```

---

## 6. Aset yang Perlu Disiapkan Pengguna

1. **Export ilustrasi hero dari Canva** dalam resolusi tinggi (PNG transparan/solid, idealnya juga versi terpisah untuk mobile crop) → simpan ke `public/images/hero-illustration.png`
2. Kalau mau elemen dekoratif (alien, komet, pegunungan) dipakai ulang di section lain sebagai aksen kecil, export juga versi terpisah/potongan asetnya
3. Data asli: about, statistik, skill UI/UX, studi kasus proyek (dengan mockup), pengalaman, kontak — struktur sama seperti brief sebelumnya, tinggal ganti isi kategori skill supaya relevan ke UI/UX (bukan lagi stack developer generik)
4. CV terbaru (`public/cv.pdf`)

---

## 7. Konten Dummy (Sementara, Sudah Disesuaikan Role)

Agent boleh mengisi `data/*.ts` dengan dummy berikut sebagai starting point:

- **Profile:** nama "Nabila Nurhusna Yap", role "Indonesia UI/UX Designer", tagline dari desain ("Nihil in vita timendum est." atau kalimat personal senada)
- **Skills clusters:** Research & Strategy, UI Design, Prototyping & Interaction, Handoff & Collaboration — masing-masing 3–4 tool/skill (mis. Figma, User Interview, Usability Testing, Design System, Framer, dll.)
- **Projects:** 4–6 studi kasus desain dummy (nama produk fiktif, kategori Mobile App/Web App/Design System, deskripsi singkat, impact, tools, path gambar placeholder)
- **Experience:** 3–4 item (posisi desain, magang, organisasi)
- **Kontak:** email, LinkedIn, Behance/Dribbble, Instagram placeholder

---

## 8. Definition of Done

- [ ] Hero menampilkan ilustrasi Canva secara utuh, teks & CTA terbaca jelas di atasnya (kontras cukup di semua ukuran layar)
- [ ] Palet warna & tipografi baru konsisten di seluruh section (tidak ada sisa token/font dari konsep "Mission Control" lama)
- [ ] Semua section pada poin 3 tampil sesuai urutan dengan data dummy yang relevan ke UI/UX
- [ ] Layout responsif rapi di mobile (ilustrasi hero ter-crop dengan baik, bukan gepeng/terpotong aneh), tablet, dan desktop
- [ ] Motion ringan, tidak mengganggu, menghormati `prefers-reduced-motion`
- [ ] Form contact submit ke route handler tanpa error
- [ ] `npm run build` sukses tanpa error TypeScript