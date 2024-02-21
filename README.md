# VisiTel Project

## Deskripsi
VisiTel adalah aplikasi pelaporan kunjungan yang dirancang untuk memudahkan Account Manager (AM) dan Manager dalam melaporkan hasil kunjungan mereka. Aplikasi ini memungkinkan pengguna untuk menginput data kunjungan, melihat ringkasan laporan, dan mengelola data pelanggan secara efisien dan efektif. Dibangun menggunakan Laravel untuk backend serta React JS yang diintegrasikan melalui Inertia, VisiTel menawarkan pengalaman pengguna yang mulus antara aplikasi web dan fungsionalitasnya.

## Fitur Utama
- **Manajemen Kunjungan**: Input dan pelacakan hasil kunjungan oleh AM.
- **Dashboard**: Ringkasan data kunjungan dan laporan.
- **Manajemen Pelanggan**: Kemudahan dalam mengelola informasi pelanggan.

## Teknologi yang Digunakan
- **[Laravel](https://laravel.com/)**: Framework PHP untuk konstruksi server-side aplikasi.
- **[React JS](https://reactjs.org/)**: Library JavaScript untuk membangun antarmuka pengguna.
- **[Inertia.js](https://inertiajs.com/)**: Library yang memungkinkan pembuatan aplikasi single-page tanpa perlu meninggalkan kenyamanan Laravel.

## Persyaratan Sistem
- PHP >= 7.3
- Composer
- Node.js dan NPM
- Database MySQL

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal VisiTel di lingkungan pengembangan Anda:

1. **Klon Repositori**
```bash
git clone https://github.com/yourusername/visitel-project.git
cd visitel-project
```

2. **Instal Dependensi PHP dan NPM**
```bash
composer install
npm install
```

3. **Konfigurasi Environment**
- Duplikat file .env.example dan ubah namanya menjadi .env.
- Sesuaikan pengaturan database dalam file .env.
```bash
cp .env.example .env
```

4. **Konfigurasi Database**. Buka file `.env` dan atur konfigurasi database Anda:
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=visitel_project
DB_USERNAME=root
DB_PASSWORD=
FAKER_LOCATE=id_ID
JML_WITEL=10
JML_USER=30
JML_CLIENT=100
JML_REPORT=150
```
- Konfigurasi ini hanya berjalan di local
- Konfigirasi akan segera diupdate

5. **Jalankan Migrasi Database**
```bash
php artisan migrate --seed
```

6. **Jalankan Aplikasi**
```bash
// Terminal 1
php artisan serve

// Terminal 2
npm run dev
```

9. **Buka Aplikasi**
Buka browser dan akses `http://localhost:8000` untuk memulai menggunakan VisiTel.


