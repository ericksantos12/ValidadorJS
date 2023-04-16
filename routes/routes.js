const express = require('express')
const fs = require("fs")
const path = require("path")

const router = express.Router()

const markdown_file = __dirname + '/entrada/texto.md';

router.get('/', (req, res) => {
    res.sendFile('/view/index.html', {root: path.join(__dirname, "../")})
})

router.get('/entrada', (req, res) => {
    res.sendFile('/view/entrada.html', {root: path.join(__dirname, "../")})
})

router.get('/links', (req, res) => {
    res.sendFile('/view/links.html', {root: path.join(__dirname, "../")})
})

router.get('/validar', (req, res) => {
    res.sendFile('/view/validar.html', {root: path.join(__dirname, "../")})
})

router.get('/texto', (req, res) => {
    res.sendFile('/entrada/texto.md', {root: path.join(__dirname, "../")})
})

router.get('/style.css', (req, res) => {
    res.sendFile('/view/css/style.css', {root: path.join(__dirname, "../")})
})

router.get('/pico.min.css', (req, res) => {
    res.sendFile('/view/css/pico.min.css', {root: path.join(__dirname, "../")})
})
module.exports = router;