/* ==========================================================================
   ♡  FILE PENGATURAN TIARA'S CORNER  ♡
   --------------------------------------------------------------------------
   Semua isi website diatur dari file ini saja. File lain tidak perlu diubah.

   ATURAN SEDERHANA:
   1. Ubah hanya teks di antara tanda kutip "...".
   2. Jangan hapus tanda kutip "  dan tanda koma , di akhir baris.
   3. Jika ingin menulis tanda kutip di dalam teks, pakai ' (kutip tunggal).
   4. Link harus lengkap, diawali https://  (contoh: "https://blogku.com").
   5. Kalau link dikosongkan (""), tombol tetap bisa diklik dan akan
      muncul pesan "Segera hadir".
   6. Gambar: unggah ke folder "gambar", lalu tulis "gambar/nama-file.jpg".
      Nama file jangan pakai spasi. Huruf besar/kecil harus sama persis.
   ========================================================================== */

const CONFIG = {

  /* ---------------------------- PROFIL ---------------------------------- */
  nama: "Tiara's Corner",
  tagline: "A little corner of my world. Check it out!♡ ",
  sapaan: "",
  fotoProfil: "profil.jpeg",        // contoh: "gambar/profil.jpg"  — kosongkan untuk menampilkan inisial
  inisial: "T",


  /* ---------------------------- BLOG ------------------------------------ */
  blog: {
    tampilkan: true,     // ubah ke false untuk menyembunyikan bagian ini
    label: "My Blog",
    judul: "Ruang Tulis",
    deskripsi: "Isinya hanya tulisan yang dirasa terlalu panjang untuk jadi caption di instagram.",
    tombol: "Kunjungi Blog",
    link: "https://nurmutiara-h-hbw.blogspot.com/?m=1",
  },


  /* ---------------------------- BUKU ------------------------------------ */
  buku: {
    tampilkan: true,
    label: "Books & Publications",
    judul: "Analisis Epidemiologi Kebijakan Kesehatan",
    deskripsi: "Buku yang membahas penerapan pendekatan epidemiologi dalam perencanaan dan analisis kebijakan kesehatan. Berkontribusi sebagai penulis Bab III: Analisis Epidemiologi untuk Perencanaan.",
    // Cover diambil langsung dari halaman toko. Agar lebih aman, simpan
    // gambar cover ke folder "gambar" lalu ganti menjadi "gambar/cover-buku.jpg".
    cover: "https://ypad.store/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-06-at-11.47.54.jpeg",
    tombol: "Beli Buku",
    link: "https://ypad.store/product/analisis-epidemiologi-kebijakan-kesehatan/?v=4a5e17551e76",
  },


  /* ---------------------- PRODUK DIGITAL -------------------------------- */
  planner: {
    tampilkan: true,
    label: "My Digital Product",
    nama: "Planner Keuangan Pribadi",
    ringkas: "Catat 10 detik, uangmu jadi lebih terarah! Total, anggaran, target tabungan, dan grafik dihitung otomatis.",
   format: "File Excel (.xlsx) · 7 sheet · tanpa makro",
    harga: "Rp 25.000",
    hargaCoret: "Rp 45.000",   // harga sebelum diskon — kosongkan jika tidak ada
    labelPromo: "Harga promo",  // tulisan kecil di samping harga — kosongkan jika tidak perlu
    tombol: "Beli di Lynk.id",
    link: "https://lynk.id/13nurmutiarahusnah/4v96jq3g9oyx",   // link pembelian di Lynk.id

    // Gambar kecil di kartu halaman utama
    gambarKartu: "preview-ringkasan.jpg",

    // Gambar preview di halaman produk (bisa diketuk untuk diperbesar)
    gambarPreview: [
      { gambar: "preview-dashboard.jpg", keterangan: "Dashboard: ringkasan keuangan bulanan otomatis" },
      { gambar: "preview-catat-uang.jpg", keterangan: "Catat Uang: sekitar 10 detik per catatan" },
    ],

    apaItu: "Planner Keuangan Pribadi adalah file Excel siap pakai yang membantumu mencatat uang masuk dan keluar, memantau anggaran, dan menabung untuk target impianmu. Kamu cukup mengisi catatan. Total, status anggaran, progres tabungan, dan grafik dihitung otomatis.",

    kenapaPerlu: [
      "Kamu jadi tahu ke mana saja uangmu pergi setiap bulan.",
      "Pengeluaran lebih terkendali karena anggaran tiap kategori terpantau.",
      "Lebih mudah membedakan mana kebutuhan dan mana keinginan.",
      "Menabung jadi terarah karena setiap target terlihat progresnya.",
      "Kamu tahu berapa yang masih boleh dibelanjakan per hari sampai akhir bulan.",
    ],

    masalah: [
      { masalah: "Gaji cepat habis sebelum akhir bulan", solusi: "Sorotan bulan ini menunjukkan pengeluaran terbesar dan kategori yang melewati anggaran." },
      { masalah: "Bingung boleh jajan berapa hari ini", solusi: "Ada 'Jatah harian tersisa': sisa anggaran dibagi sisa hari." },
      { masalah: "Tabungan tidak pernah terkumpul", solusi: "Buat target, lalu pantau progres, tenggat, dan saran setoran per bulan." },
      { masalah: "Saldo di catatan beda dengan saldo asli", solusi: "Saldo tiap dompet (tunai, rekening, e-wallet) bisa kamu cocokkan dengan saldo di aplikasi." },
    ],

    fitur: [
      { ikon: "📊", judul: "Dashboard Otomatis", isi: "8 kartu ringkasan + 4 grafik. Ganti bulan dan tahun lewat dropdown, rekap langsung berubah." },
      { ikon: "⚡", judul: "Catat Transaksi Cepat", isi: "Pilih Jenis (Pemasukan / Pengeluaran / Tabungan), kategori menyesuaikan otomatis. Sekitar 10 detik per catatan." },
      { ikon: "✅", judul: "Kolom Cek Pintar", isi: "Mengingatkan kalau ada data yang belum lengkap. Ada filter untuk mencari catatan lama." },
      { ikon: "📋", judul: "Anggaran per Kategori", isi: "Status berwarna otomatis: Aman, Hampir, atau Melebihi. Nama kategori dan nominal bebas kamu ubah." },
      { ikon: "🐷", judul: "Target Tabungan", isi: "Pantau progres, tenggat, dan saran setoran per bulan untuk setiap impianmu." },
      { ikon: "👛", judul: "Saldo Tiap Dompet", isi: "Tunai, rekening, dan e-wallet. Bandingkan dengan saldo asli di aplikasimu." },
      { ikon: "⚖️", judul: "Kebutuhan : Keinginan", isi: "Lihat rasio belanja penting dan belanja keinginan setiap bulan." },
    ],

    caraPakai: [
      "Klik tombol beli, lalu selesaikan pembayaran di Lynk.id.",
      "Unduh file Excel planner dan Panduan Cepat (PDF).",
      "Buka sheet Anggaran, isi anggaran bulanan sesuai penghasilanmu.",
      "Catat setiap transaksi di sheet Catat Uang, sekitar 10 detik per catatan.",
      "Buka Dashboard untuk melihat progres. Di akhir bulan, isi Evaluasi.",
    ],

    // Isi paket yang didapat pembeli
    isiPaket: [
      "File Planner Keuangan Pribadi (Excel), tanpa fitur bunga & paylater",
      "Panduan Cepat PDF: mulai mencatat dalam 5 menit",
      "Data contoh Agustus–Oktober 2026 untuk latihan",
      "Bisa dipakai di Excel 2010 ke atas / Microsoft 365 (Windows & Mac)",
    ],

    cocokUntuk: [
     "Karyawan", "Mahasiswa", "Ibu rumah tangga",
      "Freelancer", "Siapa saja yang ingin mulai mengatur keuangan dengan cara sederhana",
    ],

    catatan: "Planner ini alat bantu mencatat, bukan nasihat keuangan. Angka hanya seakurat catatan yang kamu isi. Tampilan bisa sedikit berbeda tergantung versi Excel dan perangkat, dan paling nyaman dibuka di Excel versi desktop (Windows/Mac). Produk digital berupa file (bukan barang fisik) yang diunduh setelah pembayaran di Lynk.id, dan umumnya tidak dapat dikembalikan.",
  },


  /* ----------------------------- MORE ----------------------------------- */
  // Untuk menambah produk/karya baru: salin satu blok { ... }, tempel di bawahnya,
  // lalu ubah isinya. Jangan lupa tanda koma di antara blok.
  lainnya: [
         {
      ikon: "✍️",
      judul: "Gimana Saya Menulis Esai Beasiswa Pemerintah?",
      deskripsi: "Antara esai yang baik dan esai yang diterima: catatan reflektif seorang awardee.",
      link: "https://www.kompasiana.com/nurmutiarahusnahhbw4351/6811efe434777c4d1d068f03/antara-esai-yang-baik-dan-esai-yang-diterima-catatan-reflektif-seorang-awardee",
    },
    // {
    //   ikon: "🎨",
    //   judul: "Template Canva",
    //   deskripsi: "Template infografis siap pakai.",
    //   link: "https://...",
    // },
  ],



};
