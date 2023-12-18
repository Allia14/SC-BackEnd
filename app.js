const express = require('express')
/*
const: Mendefinisikan variabel konstan (pada kode server, nilainya tidak dapat diubah setelah deklarasi).
express: Nama variabel untuk menyimpan modul yang diimpor.
require: Fungsi bawaan Node.js untuk mengimpor modul eksternal.
('express'): Argumen yang diteruskan ke require berisi string 'express' - nama modul yang ingin diimpor.

*/
const app = express()
/*
const adalah kata kunci yang digunakan untuk mendeklarasikan konstanta.
app adalah nama variabel yang akan menyimpan objek router baru.
express() adalah fungsi yang digunakan untuk membuat objek router baru.

*/

const port = 3000
/*
Sintaks const port = 3000 digunakan untuk mendeklarasikan konstanta port dengan nilai 3000. Konstanta port ini akan digunakan untuk menentukan port yang akan digunakan oleh server.
Dalam kasus ini, nilai 3000 adalah port standar yang digunakan oleh server Node.js.

*/

const Route = require('./routes');
/*
const adalah kata kunci yang digunakan untuk mendeklarasikan konstanta.
Route adalah nama variabel yang akan berisi objek router.
require() adalah fungsi yang digunakan untuk mengimport modul.
'./routes' adalah nama modul yang ingin diimport. Modul tersebut berada di folder yang sama dengan file yang sedang dijalankan.

*/

app.use(express.json())
/* 
app adalah variabel yang berisi objek aplikasi Express.
use() adalah metode yang digunakan untuk menambahkan middleware ke aplikasi.
express.json() adalah fungsi yang mengembalikan objek middleware body-parser yang dikonfigurasikan untuk mem-parsing body request HTTP dengan format JSON.

*/


app.use(Route)
/*
app adalah objek aplikasi Express.
use() adalah metode yang digunakan untuk menambahkan router ke aplikasi.
Route adalah objek yang berisi rute-rute yang akan ditangani oleh aplikasi.

*/

app.listen (port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
app.listen:

app adalah objek aplikasi Express yang telah diinisialisasi sebelumnya.
listen adalah metode dari objek aplikasi yang digunakan untuk memulai server.
(port, () => {} ):

Ini adalah argument untuk metode listen.
port: Ini adalah integer yang menentukan port tempat server akan berjalan (misalnya: 3000).
() => {}: Ini adalah fungsi callback yang akan dieksekusi setelah server berhasil dimulai.
**console.log(Example app listening on port port‘)‘∗∗:∗Ini adalah kode di dalam fungsi callback yang mencetak pesan ke konsol yang menyatakan bahwa server telah dimulai pada port tertentu. 
‘port‘ dapat diakses di dalam fungsi callback menggunakan templating literal ‘{port}`.

*/
