require('dotenv').config();
const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID, EMAIL_TO } = process.env;
const http = require('request')

const sendMsg = (req, res, message) => {
    msg = encodeURI(message)

    http.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&parse_mode=html&text=${msg}`, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        if (response.statusCode === 200) {
            res.status(200).send('Информация отправлена')
        }
        if (response.statusCode !== 200) {
            res.status(400).json({ status: 'error', message: 'Произошла ошибка!', response });
        }
    });
}

module.exports = sendMsg