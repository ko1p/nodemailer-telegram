const rooms = (reqBody) => {
    const message = []
    if (reqBody.oneRoom) {
        message.push('однокомнатную')
    } 
    if (reqBody.twoRoom) {
        message.push('двухкомнатную')
    } 
    if (reqBody.threeRoom) {
        message.push('трехкомнатную')
    } 
    if (reqBody.fourPlusRoom) {
        message.push('четырехкомнатную и более')
    }
    return message.join(', ')
}

const costs = (reqBody) => {
    const message = []
    if (reqBody.priceFiveTwelve) {
        message.push('5 - 12 млн.')
    } 
    if (reqBody.priceTwelveTwenty) {
        message.push('12 - 20 млн.')
    } 
    if (reqBody.priceTwentyThirtyFive) {
        message.push('20 - 35 млн.')
    } 
    if (reqBody.priceThirtyFivePlus) {
        message.push('35 млн. и более')
    }
    return message.join(', ')
}

const types = (reqBody) => {
    const message = []
    if (reqBody.forMyself) {
        message.push('себя')
    } 
    if (reqBody.investment) {
        message.push('инвестиций')
    } 
    if (reqBody.forChildren) {
        message.push('детей')
    } 
    if (reqBody.notDecide) {
        message.push('неопрелеленных целей')
    }
    return message.join(', ')
}

const decorations = (reqBody) => {
    const message = []
    if (reqBody.repair) {
        message.push('готовый ремонт')
    } 
    if (reqBody.prefinishing) {
        message.push('предчистовая')
    } 
    if (reqBody.roughFinish) {
        message.push('черновая')
    } 
    return message.join(', ')
}

module.exports = {
    rooms, costs, types, decorations
}