# PATRION - Pahlawan (Puzzle)

## Deskripsi Game

**PATRION - Pahlawan (Puzzle)** adalah sebuah game puzzle interaktif yang mengangkat tema pahlawan nasional Indonesia. Dalam game ini, pemain akan dihadapkan pada tantangan untuk menyusun potongan-potongan gambar pahlawan Indonesia yang terkenal, seperti Soekarno, Mohammad Hatta, Cut Nyak Dien, dan lainnya. Game ini dirancang untuk mendidik sekaligus menghibur, dengan menggabungkan elemen puzzle klasik dengan nilai-nilai sejarah dan patriotisme.

Game ini cocok untuk semua usia, terutama anak-anak dan remaja, untuk belajar tentang tokoh-tokoh penting dalam sejarah Indonesia melalui permainan yang menyenangkan.

## Fitur Utama

- **Puzzle Interaktif**: Susun potongan gambar pahlawan nasional dengan cara drag-and-drop.
- **Tokoh Pahlawan**: Fokus pada 8 pahlawan nasional Indonesia, termasuk Soekarno, Hatta, Cut Nyak Dien, Diponegoro, Kartini, Hasanuddin, Imam Bonjol, dan Pattimura.
- **Efek Suara**: Suara latar belakang yang menarik, serta efek suara untuk aksi seperti klik tombol, drag, drop, jawaban benar/salah, kemenangan, dan game over.
- **Visual Menarik**: Gambar-gambar berkualitas tinggi dengan latar belakang batik yang khas Indonesia.
- **Responsif**: Dapat dimainkan di berbagai perangkat, termasuk desktop dan mobile.

## Cara Bermain

1. **Mulai Game**: Buka file `index.html` di browser web Anda.
2. **Pilih Level**: Pilih tingkat kesulitan atau pahlawan yang ingin disusun.
3. **Susun Puzzle**: Gunakan mouse atau sentuhan untuk menarik dan menjatuhkan potongan gambar ke tempat yang tepat.
4. **Skor dan Waktu**: Selesaikan puzzle dalam waktu yang ditentukan untuk mendapatkan skor tinggi.
5. **Kemenangan**: Jika berhasil menyusun puzzle dengan benar, Anda akan mendengar suara kemenangan dan melihat animasi khusus.

## Instalasi dan Menjalankan

Game ini adalah aplikasi web sederhana yang tidak memerlukan instalasi khusus. Ikuti langkah berikut:

1. **Unduh atau Clone Repository**: Pastikan Anda memiliki semua file dalam folder proyek.
2. **Buka di Browser**: Klik dua kali pada file `index.html` atau buka melalui server lokal (misalnya, menggunakan Live Server di VS Code).
3. **Jika Menggunakan Server Lokal**:
   - Install ekstensi Live Server di VS Code.
   - Klik kanan pada `index.html` dan pilih "Open with Live Server".

## Struktur Proyek

```
PATRION - Pahlawan (Puzzle)/
├── index.html          # File utama HTML game
├── lib.js              # Library JavaScript untuk fungsi game
├── config/             # File konfigurasi game
├── lib/                # Library tambahan
├── assets/             # Folder aset game
│   ├── images/         # Gambar pahlawan dan latar belakang
│   │   ├── hero_soekarno.webp
│   │   ├── hero_hatta.webp
│   │   ├── hero_cut_nyak_dien.webp
│   │   ├── hero_diponegoro.webp
│   │   ├── hero_kartini.webp
│   │   ├── hero_hasanuddin.webp
│   │   ├── hero_imam_bonjol.webp
│   │   ├── hero_pattimura.webp
│   │   └── background_batik.webp
│   ├── sounds/         # File suara efek dan musik latar
│   │   ├── sfx_correct.mp3
│   │   ├── sfx_wrong.mp3
│   │   ├── sfx_timeout.mp3
│   │   ├── sfx_button_click.mp3
│   │   ├── sfx_drag_pickup.mp3
│   │   ├── sfx_drag_drop.mp3
│   │   ├── sfx_victory.mp3
│   │   ├── sfx_game_over.mp3
│   │   └── bgm_main.mp3
│   └── icons/          # Ikon aplikasi
│       └── favicon.ico
└── README.md           # File ini
```

## Teknologi yang Digunakan

- **HTML5**: Untuk struktur halaman web.
- **CSS3**: Untuk styling dan animasi.
- **JavaScript**: Untuk logika game dan interaktivitas.
- **Web Audio API**: Untuk pemutaran suara.

## Kontribusi

Jika Anda ingin berkontribusi pada pengembangan game ini, silakan fork repository ini dan buat pull request dengan perubahan Anda. Pastikan untuk mengikuti standar kode yang ada.

## Lisensi

Game ini dirilis di bawah lisensi MIT. Lihat file LICENSE untuk detail lebih lanjut.

## Kontak

Jika Anda memiliki pertanyaan atau saran, silakan hubungi pengembang melalui email atau buat issue di repository ini.

---

Selamat bermain dan belajar tentang pahlawan Indonesia!