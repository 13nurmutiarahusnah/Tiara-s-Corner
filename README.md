# ♡ Panduan Tiara's Corner

Panduan ini untuk pemula. Tidak perlu bisa coding, cukup ikuti langkahnya satu per satu.

## Isi folder

| File | Fungsi | Perlu diubah? |
|---|---|---|
| `config.js` | Semua isi website: nama, link, harga, deskripsi | **Ya, hanya file ini** |
| `index.html` | Kerangka halaman | Tidak |
| `style.css` | Warna dan tampilan | Tidak |
| `script.js` | Mesin halaman | Tidak |
| `gambar/` | Tempat foto profil, cover buku, preview produk | Isi dengan gambarmu |

---

## 1. Menyimpan file website

1. Unduh file **tiaras-corner.zip**.
2. Klik kanan, pilih **Extract All / Ekstrak**. Akan muncul folder `tiaras-corner`.
3. Untuk mencoba di komputer: klik dua kali `index.html`. Halaman langsung terbuka di browser.

---

## 2. Mengunggah ke hosting gratis (GitHub Pages)

**A. Buat akun (sekali saja)**
1. Buka **https://github.com** lalu klik **Sign up**.
2. Isi email, password, dan username. Username akan menjadi bagian dari link websitemu, jadi pilih yang rapi, misalnya `tiarascorner`.

**B. Buat tempat penyimpanan (repository)**
1. Setelah masuk, klik tombol **+** di kanan atas, pilih **New repository**.
2. Di kolom *Repository name*, tulis: `tiaras-corner`
3. Pilih **Public**.
4. Klik **Create repository**.

**C. Unggah file**
1. Di halaman repository yang baru, klik tulisan **uploading an existing file**.
2. Buka folder `tiaras-corner` di komputer, pilih **semua isinya** (config.js, index.html, script.js, style.css, README.md, dan folder gambar), lalu seret ke kotak unggah.
   - Seret isi foldernya, bukan folder `tiaras-corner` itu sendiri.
3. Tunggu sampai semua file muncul, lalu klik tombol hijau **Commit changes**.

**D. Nyalakan website**
1. Di repository, klik **Settings** (ikon roda gigi di menu atas).
2. Di menu kiri, klik **Pages**.
3. Pada bagian *Build and deployment* → *Source*, pilih **Deploy from a branch**.
4. Pada *Branch*, pilih **main** dan folder **/ (root)**, lalu klik **Save**.
5. Tunggu 1–3 menit, lalu muat ulang halaman Settings → Pages. Link websitemu akan muncul di bagian atas.

---

## 3. Mendapatkan link website

Link websitemu berbentuk:

```
https://USERNAME.github.io/tiaras-corner/
```

Ganti `USERNAME` dengan username GitHub-mu. Link ini gratis dan bisa langsung ditaruh di bio Instagram, TikTok, atau dibagikan lewat WhatsApp.

> **Ingin link lebih pendek?** Beri nama repository persis `USERNAME.github.io` (contoh: `tiarascorner.github.io`). Link websitemu menjadi `https://tiarascorner.github.io`.

---

## 4. Mengubah isi halaman

Semua bisa dilakukan langsung di browser, tanpa mengunggah ulang:

1. Buka repository `tiaras-corner` di GitHub.
2. Klik file **config.js**.
3. Klik **ikon pensil** ✏️ (Edit) di kanan atas.
4. Ubah teks di antara tanda kutip `"..."`. Contoh:
   ```js
   link: "https://tiarascorner.blogspot.com",
   harga: "Rp 49.000",
   ```
5. Klik **Commit changes** (dua kali, jika diminta konfirmasi).
6. Tunggu 1–2 menit, lalu buka websitemu dan muat ulang (di HP: tarik layar ke bawah; di komputer: Ctrl + F5).

> **Yang masih perlu kamu isi:** link Lynk.id untuk Planner Keuangan Pribadi.
> Buka `config.js`, cari bagian `planner:` → baris `link: "",` lalu tempel linknya di antara tanda kutip, misalnya
> `link: "https://lynk.id/raatiara_/planner-keuangan",`
> Selama belum diisi, tombol "Beli di Lynk.id" menampilkan pesan "Segera hadir ya ♡".

**Yang paling sering diisi:**

| Ingin mengubah | Cari di config.js |
|---|---|
| Link blog | `blog:` → `link:` |
| Link beli buku & judul buku | `buku:` → `link:` dan `judul:` |
| Harga planner | `planner:` → `harga:` |
| Harga coret (diskon) | `planner:` → `hargaCoret:` |
| Link pembayaran planner | `planner:` → `link:` |
| Instagram | `kontak:` → `instagram: "usernamekamu"` (tanpa @) |
| WhatsApp | `kontak:` → `whatsapp: "6281234567890"` (diawali 62, tanpa 0 di depan, tanpa spasi) |

**Aturan aman:**
- Jangan hapus tanda kutip `"` dan tanda koma `,` di akhir baris.
- Kalau ingin menulis kutip di dalam teks, pakai kutip tunggal `'`.
- Link harus lengkap, diawali `https://`.
- Kalau link dibiarkan kosong `""`, tombol tetap bisa diklik dan muncul pesan "Segera hadir ya ♡".
- Ingin menyembunyikan satu bagian? Ubah `tampilkan: true` menjadi `tampilkan: false`.

### Menambahkan gambar

1. Di repository, klik folder **gambar**.
2. Klik **Add file → Upload files**, pilih gambarmu, lalu **Commit changes**.
3. Di `config.js`, tulis lokasinya. Contoh:
   ```js
   fotoProfil: "gambar/profil.jpg",
   cover: "gambar/cover-buku.jpg",
   gambarPreview: ["gambar/preview-1.jpg", "gambar/preview-2.jpg"],
   ```
- Nama file jangan pakai spasi (pakai tanda `-`).
- Huruf besar/kecil harus sama persis: `Profil.JPG` berbeda dengan `profil.jpg`.
- Ukuran yang disarankan: foto profil persegi, cover buku tegak (2:3), preview produk bebas.
- Jika `gambarPreview` kosong, halaman produk menampilkan contoh ilustrasi planner.

---

## 5. Menambahkan link dan produk baru

Buka `config.js`, cari bagian `lainnya:`. Setiap item berbentuk seperti ini:

```js
    {
      ikon: "🎨",
      judul: "Template Canva",
      deskripsi: "Template infografis siap pakai.",
      link: "https://...",
    },
```

Untuk menambah: **salin satu blok** dari `{` sampai `},` lalu tempel di bawahnya, kemudian ubah isinya. Ikon bisa diisi emoji apa saja.

Contoh dengan dua item:

```js
  lainnya: [
    {
      ikon: "🎨",
      judul: "Template Canva",
      deskripsi: "Template infografis siap pakai.",
      link: "https://www.canva.com/...",
    },
    {
      ikon: "📚",
      judul: "E-book Gratis",
      deskripsi: "Unduh panduan singkatku.",
      link: "https://drive.google.com/...",
    },
  ],
```

Untuk menghapus item: hapus satu blok dari `{` sampai `},`.

---

## Jika ada masalah

**Halaman menampilkan "Ups, ada yang salah di file config.js."**
Biasanya ada tanda kutip atau koma yang terhapus. Buka `config.js`, periksa baris yang terakhir diubah. Di GitHub, tombol **History** pada file menunjukkan perubahan terakhir, jadi kamu bisa membandingkan.

**Perubahan belum muncul.**
Tunggu 1–2 menit, lalu muat ulang dengan Ctrl + F5 (komputer) atau buka di jendela penyamaran.

**Gambar tidak muncul.**
Periksa nama file dan huruf besar/kecilnya di `config.js`, dan pastikan gambar sudah diunggah ke folder `gambar`.

---

## Alternatif: Netlify Drop

Kalau ingin cara yang lebih cepat untuk pertama kali:
1. Buka **https://app.netlify.com/drop** dan buat akun gratis.
2. Seret folder `tiaras-corner` ke halaman tersebut. Link langsung jadi.

Kekurangannya: setiap kali mengubah isi, kamu perlu mengedit `config.js` di komputer lalu menyeret ulang foldernya (di menu **Deploys** situsmu). Karena itu, GitHub Pages lebih praktis untuk pengubahan rutin.
