require('dotenv').config();
const { PASSWORD, EMAIL_FROM } = process.env;

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_FROM,
            pass: PASSWORD
        }
    },
    {
        from: 'На сайте новая заявка <zaavkan@gmail.com>'
    }
)

const mailer = (req, res) => {
    const message = {        
        to: 'vadim1ivanov@yandex.ru',
        subject: 'Новая заявка',
        html: `
        <h2>Новая заявка</h2>
        
        <i>Контактная информация клиента:</i>
        <ul>
            <li><b>Имя:</b> ${req.body.name}</li>
            <li><b>Телефон:</b> ${req.body.phone}</li>
            <li><b>email:</b> ${req.body.email}</li>
        </ul>
        `
    }

    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Информация о сообщении: ', info)
    })
}

module.exports = mailer