const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const chatId = 1746153600;

var  zapah = ['צפ"ח'];

//zapah menu
function zapahAction()
{
    bot.telegram.sendMessage(chatId, zapah[0],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'בטיחות', callback_data: 'בטיחות צפח'},
                    {text: 'סד"פ', callback_data: 'סד"פ צפח'},
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה צפח'},
                    {text: 'סרטון הנחה', callback_data: 'הנחה צפח'},
                ],
            ],
            resize_keyboard: true
        }
    })
}


//safety zapah function
function zapahSafety()
{
    bot.telegram.sendMessage(chatId, zapah[1],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'בטיחות', callback_data: 'בטיחות צפח'},
                    {text: 'סד"פ', callback_data: 'סד"פ צפח'},
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה צפח'},
                    {text: 'סרטון הנחה', callback_data: 'הנחה צפח'},
                ],
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

//zapah safety text read  
fs.readFile('./Texts/Habala/specialCharges/safetyZapah.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapah[1] = text;
    });

module.exports = {zapahAction, zapahSafety};