const models = require('../models');
const { Produk, Produsen }= models

module.exports = {
    produkA: async (req, res) => {
        const data = await Produk.findAll({include : Produsen})
                
        res.status(200).json({
            message: "success",
            data: data
        })
    },
    produkB: async (req, res) =>{
        try {
            const id = req.params.id
            const data = await Produk.findOne({
                where: {
                  id: id,
                }
            })
            res.status(200).json({
                message: "success",
                data: data
            })
        } catch (error) {
            
        }
    },
    produkC: async (req, res) => {
        try {
            const {name, stok} = req.body
            const add = await Produk.create({name,stok})
            res.status(200).json({
                message: "success",
                data: add
            })  
        } catch (error) {
            res.status(500).json({
                message: error.message
            })  
        }
        
    },
    produkD: async (req, res)=>{
        try {
            const id = req.params.id
            await Produk.destroy({
                where: {id}
              });
            res.status(200).json({
                message: "success",
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    },
    produkE: async (req, res) => {
        try {
            const id = req.params.id
            const {name, stok} = req.body
            const produk = await Produk.findOne({
                where: {
                  id: id,
                },
            })
            const data = await Produk.update({ name, stok}, {
                where: {
                  id: produk.id
                }
            });
            res.status(200).json({
                message: "success",
            })
        } catch (error) {
            res.status(500).json({
                message:error.message
            })
        }
    }
}

/* 
const models = require('../models'); - Mengimpor model Sequelize dari jalur yang ditentukan.
const { Produk, Produsen } = models; - Merusak objek model yang diimpor untuk mengakses model Produk dan Produsen.
module.exports = { - Mengekspor metode-metode yang ditentukan sebagai sebuah objek, yang memungkinkan mereka untuk diimpor dan digunakan di modul lain.
Di dalam setiap metode yang diekspor, terdapat operasi standar untuk berinteraksi dengan database:

produkA mengambil semua data produk, termasuk data produsen terkait, dari basis data dan mengembalikannya dalam respons.
produkB mengambil satu record produk berdasarkan parameter id yang disediakan dan mengembalikannya dalam respons.
produkC membuat record produk baru di database dengan parameter nama dan stok yang disediakan, dan mengembalikan record yang dibuat dalam respon.
produkD menghapus record produk dari database berdasarkan parameter id yang disediakan, dan mengembalikan pesan sukses dalam respon.
produkE memperbarui record produk yang ada di database dengan parameter nama dan stok yang disediakan, dan mengembalikan record yang diperbarui dalam respons.
Metode-metode ini menangani potensi kesalahan dengan mengembalikan kode status 500 dan pesan kesalahan ketika terjadi kesalahan.

*/