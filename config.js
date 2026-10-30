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
  tagline: "A little corner of my world ♡",
  sapaan: "Hai, senang kamu mampir! Di sini aku berbagi tulisan, buku, dan karya kecil yang kubuat dengan sepenuh hati.",
  fotoProfil: "",        // contoh: "gambar/profil.jpg"  — kosongkan untuk menampilkan inisial
  inisial: "T",


  /* ---------------------------- BLOG ------------------------------------ */
  blog: {
    tampilkan: true,     // ubah ke false untuk menyembunyikan bagian ini
    label: "My Blog",
    judul: "Ruang Tulisku",
    deskripsi: "Tempat saya berbagi tulisan dan berbagai pemikiran.",
    tombol: "Kunjungi Blog",
    link: "https://nurmutiara-h-hbw.blogspot.com/?m=1",
  },


  /* ---------------------------- BUKU ------------------------------------ */
  buku: {
    tampilkan: true,
    label: "My Book",
    judul: "Analisis Epidemiologi Kebijakan Kesehatan",
    deskripsi: "Buku tentang bagaimana epidemiologi membantu menyusun dan menilai kebijakan kesehatan, ditulis bersama rekan-rekan penulis.",
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
    ringkas: "Cukup catat uang masuk dan keluar. Total, anggaran, target tabungan, dan grafik dihitung otomatis. Mulai dalam 5 menit!",
    format: "File Excel · tanpa makro",
    harga: "Rp 25.000",
    hargaCoret: "Rp 30.000",   // harga sebelum diskon — kosongkan jika tidak ada
    labelPromo: "Harga promo",  // tulisan kecil di samping harga — kosongkan jika tidak perlu
    tombol: "Beli di Lynk.id",
    link: "",                  // ← TEMPEL LINK LYNK.ID DI SINI, contoh: "https://lynk.id/raatiara_/xxxx"

    // Gambar kecil di kartu halaman utama
    gambarKartu: "gambar/preview-ringkasan.jpg",

    // Gambar preview di halaman produk (bisa diketuk untuk diperbesar)
    gambarPreview: [
      { gambar: "gambar/preview-dashboard.jpg", keterangan: "Dashboard: ringkasan keuangan bulanan otomatis" },
      { gambar: "gambar/preview-catat-uang.jpg", keterangan: "Catat Uang: sekitar 10 detik per catatan" },
    ],

    apaItu: "Planner Keuangan Pribadi adalah file Excel siap pakai untuk mencatat keuanganmu sehari-hari. Kamu cukup mengisi tanggal, jenis, kategori, dan jumlah uang. Sisanya dikerjakan planner: menjumlahkan semuanya, membandingkan dengan anggaran, menghitung progres tabungan, dan membuat grafik. Tidak harus sempurna, yang penting mulai.",

    kenapaPerlu: [
      "Kamu jadi tahu ke mana saja uangmu pergi setiap bulan.",
      "Lebih mudah membedakan mana kebutuhan dan mana keinginan.",
      "Menabung jadi terarah karena setiap target terlihat progresnya.",
      "Kamu tahu berapa yang masih boleh dibelanjakan per hari sampai akhir bulan.",
    ],

    masalah: [
      { masalah: "Gaji cepat habis sebelum akhir bulan", solusi: "Sorotan bulan ini menunjukkan pengeluaran terbesar dan kategori yang melewati anggaran." },
      { masalah: "Bingung boleh jajan berapa hari ini", solusi: "Ada 'Jatah harian tersisa': sisa anggaran dibagi sisa hari." },
      { masalah: "Tabungan tidak pernah terkumpul", solusi: "Buat target seperti Dana Darurat atau DP Rumah, lalu pantau persentasenya." },
      { masalah: "Uang tersebar di rekening, e-wallet, dan paylater", solusi: "Sheet Dompet & Utang mencatat saldo tiap rekening dan sisa tagihan." },
    ],

    fitur: [
      { ikon: "💰", judul: "Catat Uang Masuk & Keluar", isi: "Gaji, bonus, honor, makan, sewa, tagihan, semua di satu tempat." },
      { ikon: "🐷", judul: "Nabung ke Target", isi: "Sisihkan uang ke Dana Darurat, liburan, atau DP rumah." },
      { ikon: "🧮", judul: "Hitung Otomatis", isi: "Uang masuk, keluar, ditabung, dan sisa uang langsung terisi." },
      { ikon: "📋", judul: "Anggaran per Kategori", isi: "Status aman, mendekati batas, atau perlu dicek." },
      { ikon: "📊", judul: "Dashboard & Grafik", isi: "Pilih bulan dan tahun, rekap langsung berubah." },
      { ikon: "💡", judul: "Sorotan Otomatis", isi: "Ringkasan kategori terbesar dan yang melewati anggaran." },
      { ikon: "⚖️", judul: "Kebutuhan : Keinginan", isi: "Lihat perbandingan belanja penting dan belanja keinginan." },
      { ikon: "👛", judul: "Dompet & Utang", isi: "Saldo tiap rekening, e-wallet, paylater, dan cicilan." },
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
      "File Planner Keuangan Pribadi (Excel)",
      "Panduan Cepat PDF: mulai mencatat dalam 5 menit",
      "Data contoh Agustus–Oktober 2026 untuk latihan",
      "Bisa dipakai di Excel 2010 ke atas / Microsoft 365 (Windows & Mac)",
    ],

    cocokUntuk: [
      "Mahasiswa", "Karyawan & fresh graduate", "Ibu rumah tangga",
      "Freelancer (penghasilan tidak tetap)", "Pengguna paylater & e-wallet", "Siapa saja yang ingin mulai rapi keuangan",
    ],

    catatan: "Planner ini alat bantu mencatat, bukan nasihat keuangan. Lisensi untuk pemakaian pribadi, tidak untuk dijual atau dibagikan ulang.",
  },


  /* ----------------------------- MORE ----------------------------------- */
  // Untuk menambah produk/karya baru: salin satu blok { ... }, tempel di bawahnya,
  // lalu ubah isinya. Jangan lupa tanda koma di antara blok.
  lainnya: [
    {
      ikon: "🌱",
      judul: "Karya Baru Segera Hadir",
      deskripsi: "Sesuatu yang manis sedang disiapkan.",
      link: "",
    },
    // {
    //   ikon: "🎨",
    //   judul: "Template Canva",
    //   deskripsi: "Template infografis siap pakai.",
    //   link: "https://...",
    // },
  ],


  /* ---------------------------- KONTAK ---------------------------------- */
  kontak: {
    instagram: "raatiara_",  // username saja, tanpa @
    whatsapp: "",            // nomor diawali 62, tanpa + dan tanpa spasi   contoh: "6281234567890"
    pesanWhatsapp: "Halo Tiara, aku mampir dari Tiara's Corner ♡",
    email: "",               // opsional, contoh: "tiara@email.com"
  },

  footer: "Dibuat dengan ♡ oleh Tiara",
};
