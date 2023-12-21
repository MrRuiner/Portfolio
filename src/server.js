// Imports
import path from 'path'
import express from "express"
import { engine } from 'express-handlebars'

import { client } from '../src/Db/database.js'
import examplesRoutes from './routes/examples.js'

// Constant's
const app = express()
const __dirname = path.resolve()
const port = process.env.PORT || 3000

// Uses
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Use hbs
app.engine('.hbs', engine({ extname: ".hbs" }))
app.set('view engine', '.hbs')
app.set('views', './views')

// Use Routes
app.use(examplesRoutes)

// Database connect results
client.connect((err) => {
    if (err) {
        console.log('не работает', err.stack)
    } else {
        console.log('работает');
    }
})

// Listening server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})