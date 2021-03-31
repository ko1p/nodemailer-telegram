const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')
const sendTelegramMes = require('./telegramBot');

const app = express()

const PORT = process.env.PORT || 80

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/send', (req, res) => { 
    if (!req.body.name || !req.body.phone) {
        return res.status(400).send('Не переданы обязательные поля')
    }
    
    mailer(req, res)
    sendTelegramMes(req, res)
})

app.listen(PORT, () => console.log(`Сервер запустился на ${PORT} порту`))