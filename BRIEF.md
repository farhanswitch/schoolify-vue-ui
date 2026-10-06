# Brief: Schoolify — LMS Sekolah dengan RAG per Mata Pelajaran

## 1. Konsep Produk

Schoolify adalah LMS (Learning Management System) untuk sekolah dengan fitur utama **Retrieval-Augmented Generation (RAG) per mata pelajaran**:

1. Guru mengunggah banyak dokumen materi (PDF/modul/slide) untuk satu mata pelajaran di satu ruang kelas.
2. Schoolify mengindeks dokumen tersebut jadi basis pengetahuan (vector store) **khusus mata pelajaran dan kelas itu** — tidak tercampur dengan mapel lain.
3. Siswa yang tergabung di kelas tersebut bertanya lewat chat di web. Jawaban dihasilkan RAG berdasarkan isi dokumen yang diunggah guru, bukan pengetahuan umum di luar materi.
4. Setiap jawaban menyertakan **sitasi** berupa link ke kalimat persis di dokumen sumber. Klik sitasi → langsung dialihkan ke dokumen, di halaman dan kalimat yang dikutip, dengan highlight.

Domain: `schoolify.farhanswitch.id`. Kontak: `schoolify@farhanswitch.id`.

## 2. Diferensiator vs LMS/chatbot AI generik

- Jawaban terkunci ke materi yang diunggah guru per kelas/mapel — bukan jawaban umum dari internet.
- Sitasi bukan sekadar nama dokumen, tapi tautan yang membuka dokumen tepat di kalimat yang dikutip (deep link ke halaman + highlight teks).
- Guru tetap pemilik konten: bisa menambah/mencabut dokumen, basis pengetahuan ikut berubah.
- Satu ruang kelas = satu basis pengetahuan terisolasi, supaya jawaban Matematika tidak pernah mengutip dokumen IPA.

## 3. Struktur Section Landing Page

1. **Navbar** — logo (ikon burung hantu custom), menu: Fitur · Untuk Sekolah · Harga, CTA "Mulai Gratis". Mobile: menu slide-down, ikon toggle menu/close, body scroll terkunci saat terbuka, menutup otomatis saat link diklik.
2. **Hero** — headline "Materi gurumu. Dijawab lengkap dengan sumbernya." Mockup chat + sitasi di telepon.
3. **Feature Showcase (scroll-pinned, 4 tab)** — Upload Materi → Tanya ke Materi → Sitasi & Rujukan → Ruang Kelas per Mapel. Mockup phone berubah sesuai tab, scroll men-drive tab otomatis (GSAP ScrollTrigger pin).
4. **Angka Hero** — "2 detik mencari jawaban", "100% jawaban bersitasi", "10.000+ halaman materi per sekolah".
5. **Dark Section** — "Tiap mapel, basis pengetahuannya sendiri": grid ikon mapel + mockup daftar basis pengetahuan per mapel dengan jumlah dokumen.
6. **Benefit Grid** — Jawaban selalu bersitasi / Guru tetap pegang kendali / Data sekolah tidak dibagikan.
7. **Chat RAG Interaktif** — demo nyata: pilih pertanyaan contoh → lihat jawaban + sitasi → klik sitasi → panel beralih menampilkan dokumen dengan kalimat yang di-highlight, lalu bisa kembali ke jawaban. Ini mendemonstrasikan alur klik-sitasi-ke-sumber secara langsung di landing page.
8. **Ruang Kelas per Mapel** — satu ruang kelas, satu basis pengetahuan, anggota guru+siswa, jumlah dokumen, tautan undangan.
9. **Pricing** — Guru (gratis, 1 kelas) / Sekolah (ruang kelas & mapel tak terbatas, dashboard admin) / Dinas-Yayasan (multi-sekolah, SSO, laporan gabungan).
10. **CTA Penutup** — ajakan mulai dari satu ruang kelas.
11. **Footer** — logo, copyright, email kontak.

## 4. Maskot 3D

Maskot burung hantu ("Pipi") tetap dipakai — representasi "AI yang membaca banyak dokumen dan menjawab dengan cermat" cocok untuk LMS.

**Aset nyata**: model dibangun sekali lewat `scripts/build-mascot.mjs` (Three.js geometry → `GLTFExporter`, dijalankan di Node dengan shim `FileReader` minimal karena `GLTFExporter` butuh API itu untuk binary export padahal tidak tersedia di Node). Hasilnya disimpan sebagai `public/models/mascot-owl.glb` — aset `.glb` sungguhan, bukan geometry yang dibangun ulang tiap render.

`MascotOwl.vue` memuat aset ini lewat `GLTFLoader` saat section masuk viewport (lazy, via `IntersectionObserver`), lalu menganimasikan idle float + flap sayap dengan mengambil child mesh `LeftWing`/`RightWing` dari node yang sudah diberi nama saat export.

Regenerasi aset: `npm run build:mascot`.

## 5. Tech Stack

- Vue 3 (Composition API) + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- GSAP + ScrollTrigger untuk scroll-pin dan reveal
- Three.js + `GLTFLoader`/`GLTFExporter` (keduanya dari `three/examples/jsm/...`) untuk pipeline aset 3D
- Icon set custom (`src/components/icons/AppIcon.vue`) — bukan emoji, bukan library default, dipilih biar konsisten dengan identitas brand

## 6. SEO

- `index.html`: title + meta description berbahasa Indonesia yang menjelaskan proposisi nilai RAG+sitasi, canonical ke `schoolify.farhanswitch.id`, Open Graph + Twitter card (tanpa `og:image`/`twitter:image` palsu — belum ada aset cover nyata, jadi tag itu sengaja tidak disertakan sampai asetnya ada).
- `lang="id"` di elemen `<html>`.

## 7. Catatan

- Semua tautan navigasi dan tombol CTA mengarah ke anchor section nyata atau `mailto:` yang nyata (`schoolify@farhanswitch.id`) — tidak ada link mati atau tombol tanpa perilaku.
- Konten contoh (nama dokumen, isi kutipan, dsb.) adalah placeholder untuk demonstrasi alur produk, bukan klaim data nyata.
