const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const ctx = require('ctx');

var  zapah = ['צפ"ח'];

//zapah menu
function zapahAction(chatId)
{
    bot.telegram.sendMessage(chatId, zapah[2],{
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


//safety zapah function
function zapahSafety(chatId)
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

function zapahIns(chatId)
{
    bot.telegram.sendMessage(chatId, zapah[3],{
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

function zapahExploasion(chatId)
{
    bot.telegram.sendMessage(chatId, zapah[3]/*sendVideo(chatId, {source: './Media/Vids/zapahExplosion.mp4'}*/, {
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
    })
}

function zapahPlacement(chatId)
{
    bot.telegram.sendMessage(chatId, zapah[3]/*sendVideo(chatId, {source: './Media/Vids/zapahPlacement.mp4'}*/, {
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
    })
}

//zapah safety text read  
fs.readFile('./Texts/Habala/specialCharges/safetyZapah.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapah[1] = text;
    });

fs.readFile('./Texts/Habala/specialCharges/introZapah.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapah[2] = text;
    });

fs.readFile('./Texts/Habala/specialCharges/insZapah.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapah[3] = text;
    });

module.exports = {zapahAction, zapahSafety, zapahIns, zapahExploasion, zapahPlacement};
