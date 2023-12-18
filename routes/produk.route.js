const express = require('express');
const router = express.Router()
const {
    produkA,
    produkB,
    produkC,
    produkD,
    produkE
} = require('../controllers/produkController')

router.get("/",produkA)
router.get("/:id",produkB)
router.post('/', produkC)
router.delete('/:id', produkD)
router.patch('/:id', produkE)

module.exports = router

/*

1. **`const express = require('express');`**:
    * `require` digunakan untuk mengimpor modul `express` yang digunakan untuk membuat aplikasi web.
    * `const` mendeklarasikan variabel `express` untuk menyimpan modul yang diimpor.

2. **`const router = express.Router();`**:
    * `express.Router()` digunakan untuk membuat objek router baru.
    * `const` mendeklarasikan variabel `router` untuk menyimpan objek router baru.

3. **`const { produkA, produkB, ..., produkE } = require('../controllers/produkController');`**:
    * `require` digunakan untuk mengimpor fungsi-fungsi dari modul `../controllers/produkController`.
    * `const` mendeklarasikan variabel untuk masing-masing fungsi yang diimpor (produkA, produkB, ..., produkE).
    * Destructuring assignment digunakan untuk mengekstrak fungsi-fungsi individual dari objek yang didapat dari `require`.

4. **`router.get("/", produkA);`**:
    * `router.get` digunakan untuk mendefinisikan route dengan metode HTTP GET untuk path `/`.
    * `produkA` (yang berisi fungsi dari `produkController`) akan dipanggil ketika ada permintaan GET ke path `/`.

5. **`router.get("/:id", produkB);`**:
    * `router.get` digunakan untuk mendefinisikan route dengan metode HTTP GET untuk path `/:id`.
    * `produkB` (yang berisi fungsi dari `produkController`) akan dipanggil ketika ada permintaan GET ke path `/:id`.
    * `:id` adalah parameter dinamis yang akan diteruskan ke fungsi `produkB`.

6. **`router.post('/', produkC);`**:
    * `router.post` digunakan untuk mendefinisikan route dengan metode HTTP POST untuk path `/`.
    * `produkC` (yang berisi fungsi dari `produkController`) akan dipanggil ketika ada permintaan POST ke path `/`.

7. **`router.delete('/:id', produkD);`**:
    * `router.delete` digunakan untuk mendefinisikan route dengan metode HTTP DELETE untuk path `/:id`.
    * `produkD` (yang berisi fungsi dari `produkController`) akan dipanggil ketika ada permintaan DELETE ke path `/:id`.

8. **`router.patch('/:id', produkE);`**:
    * `router.patch` digunakan untuk mendefinisikan route dengan metode HTTP PATCH untuk path `/:id`.
    * `produkE` (yang berisi fungsi dari `produkController`) akan dipanggil ketika ada permintaan PATCH ke path `/:id`.

9. **`module.exports = router;`**:
    * `module.exports` digunakan untuk mengekspor objek `router` sehingga dapat digunakan oleh file lain.

Semua fungsi yang menangani request dan response berada dalam file `../controllers/produkController`.

*/