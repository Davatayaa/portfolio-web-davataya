# --- TAHAP 1: BUILD ---
# Menggunakan image Node.js versi 20-alpine sebagai dasar untuk membangun proyek
FROM node:20-alpine AS build

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json terlebih dahulu untuk caching
COPY package*.json ./

# Menginstal semua dependensi proyek
RUN npm install

# Menyalin sisa kode sumber aplikasi
COPY . .

# Menjalankan script build untuk membuat versi produksi
RUN npm run build


# --- TAHAP 2: PRODUKSI ---
# Menggunakan image Nginx yang ringan untuk menyajikan file statis
FROM nginx:stable-alpine

# Menyalin file build dari tahap sebelumnya ke direktori web root Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Menyalin file konfigurasi Nginx kustom kita
# Ini PENTING agar React Router berfungsi dengan benar
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Memberi tahu Docker bahwa container akan berjalan di port 80
EXPOSE 80

# Perintah untuk menjalankan Nginx saat container dimulai
CMD ["nginx", "-g", "daemon off;"]