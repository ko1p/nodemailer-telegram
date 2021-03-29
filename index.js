const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')

const app = express()

const PORT = process.env.PORT || 80

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/send', (req, res) => { 
    console.log(req.body)
    if(!req.body.name || !req.body.phone) return res.sendStatus(400)   
    const message = {        
        to: 'ko1p@ya.ru',
        subject: 'Новая заявка',
        html: `
        <h2>Новая заявка</h2>
        
        <i>Контактная информация клиента:</i>
        <ul>
            <li>Имя: ${req.body.name}</li>
            <li>Телефон: ${req.body.phone}</li>
            <li>email: ${req.body.email}</li>
        </ul>
        `
    }

    res.status(200).send(`Заявка успешно ушла на почту ${message.to}`)
    mailer(message)
})

app.listen(PORT, () => console.log(`Сервер запустился на ${PORT} порту`))