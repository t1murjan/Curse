const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const server = require('http').Server(app)

app.use(express.json())

const PORT = process.env.PORT || 9999

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/static/index.html', (err, data) => {
        if (err) {
            throw err
        }
        res.end(data)
    })
})


async function start() {
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(__dirname + '/static'))
    }
    server.listen(PORT, (err) => {
        if (err) {
            throw Error(err);
        }
        console.log(`server has been started at ${PORT}`)
    })
}

start()
