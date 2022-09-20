const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const chatId = 1746153600;

var exploadingFrame = ["מסגרת פריצה"];

//exploading frame menu
function eFrameAction()
{
    bot.telegram.sendMessage(chatId, exploadingFrame[0],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'בטיחות', callback_data: 'בטיחות מסגרת'},
                    {text: 'סד"פ', callback_data: 'סד"פ מסגרת'},
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה מסגרת'},
                    {text: 'סרטון הנחה', callback_data: 'הנחה מסגרת'},
                ],
            ],
            resize_keyboard: true
        }
    })
}


//safety exploadingFrame
function eFrameSafety()
{
    bot.telegram.sendMessage(chatId, exploadingFrame[1],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'בטיחות', callback_data: 'בטיחות מסגרת'},
                    {text: 'סד"פ', callback_data: 'סד"פ מסגרת'},
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה מסגרת'},
                    {text: 'סרטון הנחה', callback_data: 'הנחה מסגרת'},
                ],
            ],
            resize_keyboard: true
        }
    })
}

//exploading frame safety text read  
fs.readFile('./Texts/Habala/specialCharges/safetyEFrame.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    exploadingFrame[1] = text;
    });


module.exports = {eFrameAction, eFrameSafety};