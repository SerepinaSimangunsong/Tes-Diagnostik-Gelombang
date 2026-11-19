# CBT Diagnostik Fisika: Materi Gelombang (Three-Tier Diagnostic Test)

Folder proyek terstruktur untuk **Visual Studio Code** yang sudah siap dijalankan.

## Struktur Folder
- `.vscode/settings.json` & `.vscode/extensions.json` — Konfigurasi Live Server otomatis di VS Code.
- `index.html` — Antarmuka utama CBT Siswa dan Dashboard Mode Guru.
- `css/style.css` — Styling kustom dan animasi navigasi soal.
- `js/questions.js` — Bank soal 4 subbab level (40 soal lengkap dari dokumen Anda).
- `js/app.js` — Mesin diagnostik 3 kategori pemahaman (*Paham Ilmiah*, *Miskonsepsi*, *Tidak Paham Konsep*) dan sistem transkrip guru.

## Cara Menjalankan di VS Code
1. Ekstrak file ZIP ini, lalu buka folder `cbt-gelombang-vscode` di VS Code (`File > Open Folder...`).
2. Klik kanan pada `index.html` -> **Open with Live Server** (atau klik tombol **Go Live** di pojok kanan bawah VS Code).
3. Untuk masuk sebagai guru, klik tombol **Masuk Sebagai Guru** di pojok kanan atas dan masukkan PIN default: `1234`.
