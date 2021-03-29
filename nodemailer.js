require('dotenv').config();
const { PASSWORD, EMAIL } = process.env;

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    },
    {
        from: 'На сайте новая заявка <zaavkan@gmail.com>'
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Информация о сообщении: ', info)
    })
}

module.exports = mailer