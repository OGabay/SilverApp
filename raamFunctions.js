const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
var ctx = require('ctx');
const chatId = 1746153600;


//special charges buttons
var raam = ["מטען רעם"], exploadingFrame = ["מסגרת פריצה"], zapah = ['צפ"ח'], amonal = ["אמונל"];


function raamAction()
{
    bot.telegram.sendMessage(chatId, raam[0],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'בטיחות', callback_data: 'בטיחות רעם'},
                    {text: 'סד"פ', callback_data: 'סד"פ רעם'},
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה רעם'},
                    {text: 'סרטון הנחה', callback_data: 'הנחה רעם'},
                ],
            ],
            resize_keyboard: true
        }
    })
}


//safety raam
function raamSafety()
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/raam/raamSafetyRanges.png'});
    bot.telegram.sendMessage(chatId, raam[1],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'בטיחות', callback_data: 'בטיחות רעם'},
                    {text: 'סד"פ', callback_data: 'סד"פ רעם'},
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה רעם'},
                    {text: 'סרטון הנחה', callback_data: 'הנחה רעם'},
                ],
            ],
            resize_keyboard: true
        }
    })
}

//raam safety text read 
fs.readFile('./Texts/Habala/specialCharges/safetyRaam.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    raam[1] = text;
    });


module.exports = {raamAction, raamSafety};