const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./nodemailer')

const app = express()

const PORT = 80
let user = undefined

// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({ extended: false }))
app.post('/registration', (req, res) => { 
    console.log(req.body)
    if(!req.body.name || !req.body.phone) return res.sendStatus(400)   
    const message = {        
        to: 'ko1p@ya.ru',
        subject: 'Новая заявка',
        html: `
        <h2>Пришла новая заявка</h2>
        
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
    // user = req.body 
    // res.redirect('/registration') 
})
// app.get('/registration', (req, res) => { 
//     if(typeof user !== 'object') return res.sendFile(__dirname + '/registration.html')   
//     res.send(`Регистрация прошла успешно! Данные учетной записи отправлены на email: ${user.email}`) 
//     user = undefined  
// })
// app.get('/unsubscribe/:email', (req, res) => {
//     console.log(`${req.params.email} unsubscribed`)
//     res.send(`Ваш email: ${req.params.email} удален из списка рассылки!`)
// })

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}/registration`))