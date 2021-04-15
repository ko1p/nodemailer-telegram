const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./messangers/nodemailer')
const sendTelegramMes = require('./messangers/telegramBot');
const { messageCreator } = require('./utils/messageCreator')
const cors = require('cors')

const app = express()

app.use(cors())

const PORT = process.env.PORT || 80

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({
        message: 'Информация получена'
    })
})

app.post('/send', (req, res) => {
    const reqBody = req.body
    reqBody.apiType = 'send'

    if (!reqBody.name || !reqBody.telephone) {
        return res.status(400).send('Не переданы обязательные поля')
    }
    const message = messageCreator(reqBody)

    mailer(message.email)
    sendTelegramMes(req, res, message.telegram)
})

app.post('/call', (req, res) => {
    const reqBody = req.body
    reqBody.apiType = 'call'

    if (!reqBody.name || !reqBody.telephone) {
        return res.status(400).send('Не переданы обязательные поля name или telephone')
    }
    const message = messageCreator(reqBody)
    mailer(message.email)
    sendTelegramMes(req, res, message.telegram)
})

app.listen(PORT, () => console.log(`Сервер запустился на ${PORT} порту`))
