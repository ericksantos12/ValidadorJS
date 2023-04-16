const express = require('express')
const path = require('path')
const router = express.Router()


router.get('/images/gani', (req, res) => {
    res.sendFile('/images/gani.png', {root: path.join(__dirname, "../")})
})
router.get('/images/erick', (req, res) => {
    res.sendFile('/images/erick.png', {root: path.join(__dirname, "../")})
})
router.get('/images/gui', (req, res) => {
    res.sendFile('/images/gui.jpg', {root: path.join(__dirname, "../")})
})
router.get('/images/fundo', (req, res) => {
    res.sendFile('/images/fundo.jpg', {root: path.join(__dirname, "../")})
})
router.get('/images/erro', (req, res) => {
    res.sendFile('/images/erro.png', {root: path.join(__dirname, "../")})
})
router.get('/images/texto', (req, res) => {
    res.sendFile('/images/texto.png', {root: path.join(__dirname, "../")})
})
router.get('/images/js', (req, res) => {
    res.sendFile('/images/js.png', {root: path.join(__dirname, "../")})
})
router.get('/images/search', (req, res) => {
    res.sendFile('/images/search.png', {root: path.join(__dirname, "../")})
})
router.get('/images/botao', (req, res) => {
    res.sendFile('/images/botao.png', {root: path.join(__dirname, "../")})
})
router.get('/images/noRoute', (req, res) => {
    res.sendFile('/images/noRoute.png', {root: path.join(__dirname, "../")})
})
router.get('/images/server', (req, res) => {
    res.sendFile('/images/server.svg', {root: path.join(__dirname, "../")})
})

module.exports = router;