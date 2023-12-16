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

router.use("/produk",produkRouter)
router.use("/produsen",produsenRouter)


module.exports = router