const express = require('express');
//sintaks diatas berfungsi untuk mengimpor modul Express ke dalam kode ini.

const router = express.Router()
/**
 * 1. Menciptakan sebuah instance baru dari Express Router
 * 2. Memisahkan logika routing dari aplikasi utama
 * 3. Pemasangan middleware dan route handlers
 * 4. Mounting ke aplikasi Express utama
 */

const produkRouter = require('./produk.route')
const produsenRouter = require('./produsen.route')

/*

const produkRouter = require('./produk.route')
const adalah kata kunci yang digunakan untuk mendeklarasikan konstanta.
produkRouter adalah nama variabel yang akan berisi objek router untuk produk.
require() adalah fungsi yang digunakan untuk mengimport modul.
'./produk.route' adalah nama modul yang ingin diimport. Modul tersebut berada di folder yang sama dengan file yang sedang dijalankan.

const produsenRouter = require('./produsen.route')
Sintaks ini sama dengan sintaks sebelumnya, hanya saja nama modul yang diimport adalah produsen.route.

*/

router.use("/produk",produkRouter)
router.use("/produsen",produsenRouter)

/*
router.use("/produk",produkRouter)
router adalah variabel yang berisi router utama.
use() adalah metode yang digunakan untuk menambahkan router ke router utama.
/produk adalah path yang akan ditangani oleh router produk.
produkRouter adalah objek router untuk produk.

router.use("/produsen",produsenRouter)
Sintaks ini sama dengan sintaks sebelumnya, hanya saja path yang akan ditangani adalah /produsen dan router yang akan digunakan adalah produsenRouter.
*/

module.exports = router

/*
module.exports = router
module adalah variabel global yang mewakili modul saat ini.
exports adalah properti dari variabel module yang digunakan untuk mengekspor nilai dari modul.
router adalah objek router yang akan diekspor.

*/