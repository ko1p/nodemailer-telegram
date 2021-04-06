require('dotenv').config();
const { EMAIL_TO } = process.env;
const { rooms, costs, types, decorations } = require('../utils/mesConfigurator')

module.exports.messageCreator = (reqBody) => {

    if (reqBody.apiType === 'call') {
        return {
            email: {        
                to: EMAIL_TO,
                subject: 'Новая заявка на звонок',
                html: `
                <h2>Новая заявка на звонок</h2>
                
                <i>Контактная информация клиента:</i>
                <ul>
                    <li><b>Имя:</b> ${reqBody.name}</li>
                    <li><b>Телефон:</b> ${reqBody.telephone} <a href="tel:${reqBody.telephone}"> &#9742; позвонить &#9742; </a></li>
                    ${reqBody.email ? '<li><b>Email:</b> ' + reqBody.email : ''}
                </ul>
                `
            }, 
            telegram: 
                `            
                    Новая заявка на звонок: 
                    \n<b>Имя</b>: ${reqBody.name}
                    \n<b>Телефон:</b> <a href="tel: ${reqBody.telephone}">${reqBody.telephone}</a>
                    ${reqBody.email ? '\n<b>Email</b>: ' + reqBody.email : ''}            
                `
        }
    }

    if (reqBody.apiType === 'send') {
        return {
            email: {        
                to: EMAIL_TO,
                subject: 'Новая заявка',
                html: `
                <h2>Новая заявка</h2>
                    
                <i>Контактная информация клиента:</i>
                <ul>
                    <li><b>Имя:</b> ${reqBody.name}</li>
                    <li><b>Телефон:</b> ${reqBody.telephone}</li>
                    ${reqBody.email ? '<li><b>Email:</b> ' + reqBody.email : ''}
                </ul> \n
                Клиент рассматривает ${rooms(reqBody)} квартиру, стоимостью ${costs(reqBody)} для ${types(reqBody)}. Желаемая отделка ${decorations(reqBody)}.        
                <br> \n
                ${reqBody.additionalWishes ? `Дополнительные пожелания клиента: ${reqBody.additionalWishes}.` : ''}
                `
                }, 
            telegram: 
                `            
                Новая заявка:
                \n<b>Имя</b>: ${reqBody.name}
                \n<b>Телефон</b>: ${reqBody.telephone}
                \n${reqBody.email ? '<b>Email</b>: ' + reqBody.email : ''}
                \nКлиент рассматривает ${rooms(reqBody)} квартиру, стоимостью ${costs(reqBody)} для ${types(reqBody)}. Желаемая отделка ${decorations(reqBody)}.
                ${reqBody.additionalWishes ? `\nДополнительные пожелания клиента: ${reqBody.additionalWishes}.` : ``}        
                `
        }
    }

}