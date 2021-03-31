module.exports.sendMsg = (req, res, mail) => {
    require('dotenv').config();
    const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env;
    let http = require('request')
    let reqBody = req.body
    //каждый элемент обьекта запихиваем в массив
    let fields = [
        'Новая заявка:' + '\n',
        '<b>Имя</b>: ' + reqBody.name,
        '<b>Телефон</b>: ' + reqBody.phone,
        '<b>Email</b>: ' + reqBody.email,
    ]
    let msg = ''
    //проходимся по массиву и склеиваем все в одну строку
    fields.forEach(field => {
        msg += field + '\n'
    });
    //кодируем результат в текст, понятный адресной строке
    msg = encodeURI(msg)
    //делаем запрос
    fetch()
    // http.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&parse_mode=html&text=${msg}`, function (error, response, body) {
    //     //не забываем обработать ответ
    //     console.log('error:', error);
    //     console.log('statusCode:', response && response.statusCode);
    //     console.log('body:', body);
    //     if (response.statusCode === 200) {
    //         res.status(200).send(`Заявка успешно ушла на почту ${mail} и в телеграмм канал "https://t.me/joinchat/7qyONgUwFno2Yjli"`)
    //     }
    //     if (response.statusCode !== 200) {
    //         res.status(400).json({ status: 'error', message: 'Произошла ошибка!', response });
    //     }
    // });

}