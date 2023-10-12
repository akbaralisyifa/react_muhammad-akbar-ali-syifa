1. Pengertian REST:

REST (Representational State Transfer): Arsitektur berbasis standar HTTP yang digunakan untuk merancang dan mengelola aplikasi web.
Resource: Data atau layanan yang dapat diakses melalui URI (Uniform Resource Identifier).
2. Karakteristik RESTful API:

Stateless: Setiap permintaan dari klien ke server harus mencakup semua informasi yang diperlukan untuk memahami dan memproses permintaan tersebut.
Client-Server Architecture: Pembagian antara klien yang mengonsumsi layanan dan server yang menyediakan layanan.
Cacheability: Respon server dapat dicache untuk meningkatkan kinerja.
Layered System: Arsitektur dapat terdiri dari beberapa lapisan, dengan setiap lapisan memiliki tanggung jawab tertentu.
3. Ressource dan URI:

Resource: Representasi data atau layanan yang dapat diakses melalui URI.
URI (Uniform Resource Identifier): Alamat yang digunakan untuk mengidentifikasi sumber daya.
4. Metode HTTP:

GET: Mendapatkan informasi dari sumber daya.
POST: Membuat sumber daya baru.
PUT: Memperbarui sumber daya atau membuat jika tidak ada.
DELETE: Menghapus sumber daya.
PATCH: Memperbarui sebagian dari sumber daya.
5. Representasi:

JSON (JavaScript Object Notation): Format data yang umum digunakan dalam RESTful API.
XML (eXtensible Markup Language): Format alternatif untuk pertukaran data.
6. Status Code:

200 OK: Permintaan berhasil.
201 Created: Sumber daya baru berhasil dibuat.
204 No Content: Permintaan berhasil, tetapi tidak ada konten yang dikembalikan.
400 Bad Request: Permintaan tidak valid.
404 Not Found: Sumber daya yang diminta tidak ditemukan.
500 Internal Server Error: Kesalahan server.
7. HATEOAS (Hypermedia As The Engine Of Application State):

Konsep yang menekankan penggunaan hyperlink untuk membantu klien menjelajahi aplikasi secara dinamis.
8. Keamanan:

Authentication dan Authorization: Pengamanan akses ke sumber daya dengan autentikasi dan otorisasi.
9. Endpoint:

URL atau URI yang digunakan untuk mengakses sumber daya atau layanan tertentu di API.