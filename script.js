/* Tiara's Corner — mesin halaman. Tidak perlu diubah.
   Semua isi diambil dari config.js */

(function () {
  "use strict";

  // Jika config.js rusak (misalnya ada koma/kutip yang terhapus), tampilkan pesan ramah.
  if (typeof CONFIG === "undefined") {
    document.getElementById("home").innerHTML =
      '<div class="config-error"><b>Ups, ada yang salah di file config.js.</b><br><br>' +
      "Biasanya karena tanda kutip \" atau tanda koma , terhapus saat mengedit. " +
      "Periksa lagi baris yang terakhir kamu ubah, lalu simpan ulang.</div>";
    return;
  }

  const C = CONFIG;
  const P = C.planner || {};
  const home = document.getElementById("home");
  const planner = document.getElementById("planner");
  const toastEl = document.getElementById("toast");

  /* ------------------------------ Alat bantu ------------------------------ */
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function linkAttrs(url) {
    url = String(url || "").trim();
    if (!url || url === "#") return 'href="#" data-empty="1"';
    const external = /^(https?:|mailto:)/i.test(url);
    return 'href="' + esc(url) + '"' + (external && !/^mailto:/i.test(url) ? ' target="_blank" rel="noopener"' : "");
  }

  const show = (v) => v && v.tampilkan !== false;

  const ICON = {
    blog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 8 19.3Z"/><path d="M9 9.2c.3 2.2 2.4 4.4 4.8 4.8l1.1-1.1 1.9.9-.4 1.5c-3.8.4-7.4-3.2-7-7l1.5-.4.9 1.9Z" fill="currentColor" stroke="none"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
  };

  /* ---------------------------- Halaman utama ----------------------------- */
  function renderHome() {
    let h = "";

    h += '<header class="profile reveal">' +
      '<div class="avatar">' +
      (C.fotoProfil ? '<img src="' + esc(C.fotoProfil) + '" alt="Foto profil ' + esc(C.nama) + '">' : "<span>" + esc(C.inisial || "T") + "</span>") +
      "</div>" +
      '<h1 class="site-name">' + esc(C.nama) + "</h1>" +
      '<p class="tagline">' + esc(C.tagline) + "</p>" +
      (C.sapaan ? '<p class="greeting">' + esc(C.sapaan) + "</p>" : "") +
      "</header>";

    h += '<div class="stack">';

    // Blog
    if (show(C.blog)) {
      const b = C.blog;
      h += '<section class="card reveal"><div class="card-row">' +
        '<span class="icon">' + ICON.blog + "</span>" +
        '<div class="card-body"><p class="eyebrow">' + esc(b.label) + "</p>" +
        "<h2>" + esc(b.judul) + '</h2><p class="desc">' + esc(b.deskripsi) + "</p></div></div>" +
        '<a class="btn" ' + linkAttrs(b.link) + ">" + esc(b.tombol) + " " + ICON.arrow + "</a></section>";
    }

    // Buku
    if (show(C.buku)) {
      const k = C.buku;
      h += '<section class="card reveal"><div class="card-row">' +
        (k.cover
          ? '<div class="cover has-img"><img src="' + esc(k.cover) + '" alt="Cover buku ' + esc(k.judul) + '" loading="lazy" onerror="this.parentNode.classList.remove(\'has-img\');this.parentNode.textContent=this.alt.replace(\'Cover buku \',\'\')"></div>'
          : '<div class="cover" aria-hidden="true">' + esc(k.judul) + "</div>") +
        '<div class="card-body"><p class="eyebrow">' + esc(k.label) + "</p>" +
        "<h2>" + esc(k.judul) + '</h2><p class="desc">' + esc(k.deskripsi) + "</p></div></div>" +
        '<a class="btn" ' + linkAttrs(k.link) + ">" + ICON.cart + " " + esc(k.tombol) + "</a></section>";
    }

    // Produk digital (membuka halaman detail)
    if (show(P)) {
      h += '<a id="card-planner" class="card card-feature reveal" href="#planner" aria-label="Lihat detail ' + esc(P.nama) + '">' +
        '<p class="eyebrow">' + esc(P.label) + "</p>" +
        "<h2>" + esc(P.nama) + "</h2>" +
        '<p class="desc">' + esc(P.ringkas) + "</p>" +
        (P.gambarKartu ? '<div class="feature-shot"><img src="' + esc(P.gambarKartu) + '" alt="Tampilan ' + esc(P.nama) + '" loading="lazy"></div>' : "") +
        '<div class="pill-row"><span class="pill">' + (P.hargaCoret ? "<s>" + esc(P.hargaCoret) + "</s> " : "") + "<b>" + esc(P.harga) + "</b></span>" +
        (P.format ? '<span class="pill pill-ghost">' + esc(P.format) + "</span>" : "") + "</div>" +
        '<span class="btn">Lihat Detail Produk ' + ICON.arrow + "</span></a>";
    }
    h += "</div>";

    // More
    const more = (C.lainnya || []).filter(Boolean);
    if (more.length) {
      h += '<h2 class="section-title reveal">More</h2><div class="stack">';
      more.forEach((m) => {
        h += '<a class="link-row reveal" ' + linkAttrs(m.link) + ">" +
          '<span class="emoji" aria-hidden="true">' + esc(m.ikon || "✨") + "</span>" +
          "<span><strong>" + esc(m.judul) + "</strong>" + (m.deskripsi ? "<small>" + esc(m.deskripsi) + "</small>" : "") + "</span>" +
          '<span class="arrow">' + ICON.arrow.replace("<svg", '<svg width="18" height="18"') + "</span></a>";
      });
      h += "</div>";
    }

    // Kontak
    const k = C.kontak || {};
    const ig = String(k.instagram || "").replace(/^@/, "").trim();
    const wa = String(k.whatsapp || "").replace(/[^0-9]/g, "");
    const waLink = wa ? "https://wa.me/" + wa + (k.pesanWhatsapp ? "?text=" + encodeURIComponent(k.pesanWhatsapp) : "") : "";
    h += '<h2 class="section-title reveal">Say hi ♡</h2><div class="contact reveal">' +
      '<a class="btn btn-outline" ' + linkAttrs(ig ? "https://instagram.com/" + ig : "") + ">" + ICON.ig + " Instagram</a>" +
      '<a class="btn btn-outline" ' + linkAttrs(waLink) + ">" + ICON.wa + " WhatsApp</a>" +
      (k.email ? '<a class="btn btn-soft full" ' + linkAttrs("mailto:" + k.email) + ">" + ICON.mail + " Email</a>" : "") +
      "</div>";

    h += '<p class="footer">' + esc(C.footer) + "</p>";
    home.innerHTML = h;
  }

  /* ------------------------ Halaman detail planner ------------------------ */
  function priceHTML() {
    return '<p class="price">' + (P.hargaCoret ? "<s>" + esc(P.hargaCoret) + "</s>" : "") + esc(P.harga) + "</p>" +
      (P.labelPromo && P.hargaCoret ? '<span class="promo">' + esc(P.labelPromo) + "</span>" : "");
  }

  function mockPreview() {
    const bars = [["Makan", 40], ["Transport", 20], ["Belanja", 18], ["Tagihan", 15], ["Lainnya", 7]];
    return '<div class="mock" aria-label="Contoh ilustrasi tampilan planner">' +
      '<div class="mock-top"><i></i><i></i><i></i><b>Financial Planner · Oktober</b></div>' +
      '<div class="mock-sum"><div><small>Pemasukan</small><strong>Rp 5.000.000</strong></div>' +
      "<div><small>Pengeluaran</small><strong>Rp 3.250.000</strong></div>" +
      "<div><small>Sisa uang</small><strong>Rp 1.750.000</strong></div></div>" +
      '<div class="mock-table">' +
      '<div><span class="muted">01 Okt</span><span>Gaji bulanan</span><span class="in">+5.000.000</span></div>' +
      '<div><span class="muted">02 Okt</span><span>Makan siang</span><span class="out">−45.000</span></div>' +
      '<div><span class="muted">03 Okt</span><span>Bensin</span><span class="out">−30.000</span></div>' +
      '<div><span class="muted">05 Okt</span><span>Token listrik</span><span class="out">−350.000</span></div>' +
      "</div>" +
      '<div class="mock-chart"><p>Grafik pengeluaran</p>' +
      bars.map((b) => '<div class="bar"><small>' + b[0] + '</small><span><em style="width:' + b[1] + '%"></em></span><small>' + b[1] + "%</small></div>").join("") +
      "</div></div>" +
      '<p class="note">Contoh ilustrasi tampilan planner.</p>';
  }

  function renderPlanner() {
    if (!show(P)) return;
    const list = (arr) => (arr || []).map((x) => "<li>" + esc(x) + "</li>").join("");
    const imgs = (P.gambarPreview || []).filter(Boolean).map((g) => (typeof g === "string" ? { gambar: g } : g)).filter((g) => g.gambar);
    let h = "";

    h += '<a class="back" href="#">' + ICON.back + " Kembali</a>";

    h += '<header class="p-hero reveal"><p class="eyebrow">' + esc(P.label) + "</p>" +
      "<h1>" + esc(P.nama) + "</h1>" +
      '<p class="desc">' + esc(P.ringkas) + "</p>" +
      (P.format ? '<span class="format">' + esc(P.format) + "</span>" : "") +
      (P.gambarKartu ? '<button class="hero-shot" type="button" data-zoom="' + esc(P.gambarKartu) + '" aria-label="Perbesar gambar"><img src="' + esc(P.gambarKartu) + '" alt="Ringkasan keuangan di ' + esc(P.nama) + '"></button>' : "") +
      priceHTML() +
      '<a class="btn" ' + linkAttrs(P.link) + ">" + ICON.cart + " " + esc(P.tombol) + "</a></header>";

    if (P.apaItu) h += '<section class="p-section reveal"><h3>Apa itu ' + esc(P.nama) + '?</h3><p>' + esc(P.apaItu) + "</p></section>";

    if ((P.kenapaPerlu || []).length)
      h += '<section class="p-section reveal"><h3>Kenapa perlu mencatat pemasukan & pengeluaran?</h3><ul class="checklist">' + list(P.kenapaPerlu) + "</ul></section>";

    if ((P.masalah || []).length)
      h += '<section class="p-section reveal"><h3>Pernah mengalami ini?</h3><div class="problems">' +
        P.masalah.map((m) => '<div class="problem"><strong>' + esc(m.masalah) + "</strong><span>" + esc(m.solusi) + "</span></div>").join("") +
        "</div></section>";

    if ((P.fitur || []).length)
      h += '<section class="p-section reveal"><h3>Yang ada di dalam planner</h3><div class="features">' +
        P.fitur.map((f) => '<div class="feature"><span class="emo" aria-hidden="true">' + esc(f.ikon) + "</span><strong>" + esc(f.judul) + "</strong><p>" + esc(f.isi) + "</p></div>").join("") +
        "</div></section>";

    h += '<section class="p-section reveal"><h3>Intip tampilannya</h3>' +
      (imgs.length
        ? '<div class="gallery">' + imgs.map((g, i) =>
            '<figure><button type="button" data-zoom="' + esc(g.gambar) + '" aria-label="Perbesar gambar"><img src="' + esc(g.gambar) + '" alt="' + esc(g.keterangan || "Preview planner " + (i + 1)) + '" loading="lazy"></button>' +
            (g.keterangan ? "<figcaption>" + esc(g.keterangan) + "</figcaption>" : "") + "</figure>").join("") + "</div>" +
          '<p class="note">Ketuk gambar untuk memperbesar' + (imgs.length > 1 ? " · geser untuk melihat lainnya →" : "") + "</p>"
        : mockPreview()) +
      "</section>";

    if ((P.caraPakai || []).length)
      h += '<section class="p-section reveal"><h3>Cara menggunakannya</h3><ol class="steps">' + list(P.caraPakai) + "</ol></section>";

    if ((P.isiPaket || []).length)
      h += '<section class="p-section reveal"><h3>Yang kamu dapatkan</h3><ul class="checklist">' + list(P.isiPaket) + "</ul></section>";

    if ((P.cocokUntuk || []).length)
      h += '<section class="p-section reveal"><h3>Cocok untuk siapa?</h3><div class="chips">' +
        P.cocokUntuk.map((c) => '<span class="chip">' + esc(c) + "</span>").join("") + "</div></section>";

    h += '<section class="cta-box reveal"><h3>Yuk, mulai rapikan keuanganmu ♡</h3>' +
      "<p>Sekali beli, bisa dipakai terus setiap bulan.</p>" + priceHTML() +
      '<a class="btn" ' + linkAttrs(P.link) + ">" + ICON.cart + " " + esc(P.tombol) + "</a></section>" +
      (P.catatan ? '<p class="note fine">' + esc(P.catatan) + "</p>" : "");

    h += '<div class="sticky-buy"><div class="inner"><div><small>' + esc(P.nama) + "</small>" + (P.hargaCoret ? "<s>" + esc(P.hargaCoret) + "</s> " : "") + "<strong>" + esc(P.harga) + "</strong></div>" +
      '<a class="btn" ' + linkAttrs(P.link) + ">" + esc(P.tombol) + "</a></div></div>";

    planner.innerHTML = h;
  }

  /* ------------------------------ Navigasi -------------------------------- */
  function route() {
    const onPlanner = location.hash === "#planner" && show(P);
    home.hidden = onPlanner;
    planner.hidden = !onPlanner;
    document.body.classList.toggle("on-planner", onPlanner);
    document.title = onPlanner ? P.nama + " · " + C.nama : C.nama;

    if (onPlanner) {
      window.scrollTo(0, 0);
    } else if (route.wasPlanner) {
      const card = document.getElementById("card-planner");
      if (card) card.scrollIntoView({ block: "center" });
    }
    route.wasPlanner = onPlanner;
    reveal();
  }

  /* ------------------------------ Animasi --------------------------------- */
  let io = null;
  function reveal() {
    const items = document.querySelectorAll(".page:not([hidden]) .reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("in")); return; }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -6% 0px" });
    }
    items.forEach((el, i) => { el.style.transitionDelay = Math.min(i, 6) * 60 + "ms"; io.observe(el); });
  }

  /* -------------------------------- Toast --------------------------------- */
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2400);
  }

  // Perbesar gambar preview
  const box = document.createElement("div");
  box.className = "lightbox"; box.hidden = true;
  box.innerHTML = '<button type="button" class="lb-close" aria-label="Tutup">✕</button><div class="lb-scroll"><img alt=""></div><p>Geser untuk melihat seluruh gambar · ketuk ✕ untuk menutup</p>';
  document.body.appendChild(box);
  const closeBox = () => { box.hidden = true; document.body.style.overflow = ""; };
  box.addEventListener("click", (e) => { if (e.target === box || e.target.closest(".lb-close")) closeBox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeBox(); });
  document.addEventListener("click", (e) => {
    const z = e.target.closest("[data-zoom]");
    if (!z) return;
    box.querySelector("img").src = z.getAttribute("data-zoom");
    box.querySelector("img").alt = (z.querySelector("img") || {}).alt || "";
    box.hidden = false; document.body.style.overflow = "hidden";
  });

  // Tombol yang link-nya belum diisi tetap bisa diklik dan memberi pesan.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-empty]");
    if (a) { e.preventDefault(); toast("Segera hadir ya ♡"); }
  });

  renderHome();
  renderPlanner();
  window.addEventListener("hashchange", route);
  route();
})();
