const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');



//special charges buttons
var raam = ["מטען רעם"];


function raamAction(chatId)
{
    bot.telegram.sendMessage(chatId, raam[2],{
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
function raamSafety(chatId)
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
            resize_keyboard: true,         
        },
        parse_mode: `HTML`
    })
}

function raamInstructions(chatId)
{
    bot.telegram.sendMessage(chatId, raam[3],{
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
            resize_keyboard: true,         
        },
        parse_mode: `HTML`
    })
}

function raamExplosion(chatId)
{
    //change to sendVid when vid available
    bot.telegram.sendMessage(chatId, raam[3],{
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
            resize_keyboard: true,         
        },
        parse_mode: `HTML`
    })
}

function raamPlacement(chatId)
{
    //change to sendVid when vid available
    bot.telegram.sendMessage(chatId, raam[3],{
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
            resize_keyboard: true,         
        },
        parse_mode: `HTML`
    })
}

function raamInstructions(chatId)
{
    bot.telegram.sendMessage(chatId, raam[3],{
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
            resize_keyboard: true,         
        },
        parse_mode: `HTML`
    })
}

//raam safety text read 
fs.readFile('./Texts/Habala/specialCharges/safetyRaam.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    raam[1] = text;
    });

fs.readFile('./Texts/Habala/specialCharges/raamIns.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    raam[3] = text;
    });

fs.readFile('./Texts/Habala/specialCharges/introRaam.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    raam[2] = text;
    });

module.exports = {raamAction, raamSafety, raamInstructions, raamExplosion, raamPlacement};