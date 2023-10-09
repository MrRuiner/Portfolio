// Imports
import path from 'path'
import express from 'express'

// Constant's
const app = express()
const __dirname = path.resolve()

// Uses
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// URL's

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/index.html'))
})

app.get('/design-for-portfolio.vercel.app', (req, res) => {
    res.redirect('https://design-for-portfolio.vercel.app')
})

app.get('/design-for-tg-figma.vercel.app', (req, res) => {
    res.redirect('https://design-for-tg-figma.vercel.app')
})

app.get('/design-for-tg.vercel.app', (req, res) => {
    res.redirect('https://design-for-tg.vercel.app')
})

app.get('/design-01-gamma.vercel.app', (req, res) => {
    res.redirect('https://design-01-gamma.vercel.app')
})

app.get('/t.me/@SaidovAliakbar', (req, res) => {
    res.redirect('https:///t.me/@SaidovAliakbar')
})

app.get('https://www.instagram.com/a_devv_s/', (req, res) => {
    res.redirect('https://www.instagram.com/a_devv_s/')
})

app.get('https://github.com/MrRuiner', (req, res) => {
    res.redirect('https://github.com/MrRuiner')
})

app.get('https://discordapp.com/users/960061651690848276/', (req, res) => {
    res.redirect('https://discordapp.com/users/960061651690848276/')
})

// Start Server

app.listen(3000, () => {
    console.log('Server is ruuning on: http://localhost:3000');
})

//Html Elements

