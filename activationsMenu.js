const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const ctx = require('ctx');

var activations = "הפעלות", electricActivation = ["הפעלה חשמלית"] , kraviActivation = ["הפעלה קרבית"], mainMenu = "ראשי" , habala = "חבלה";

//activations menu
function activationsMenu(chatId)
{
    bot.telegram.sendMessage(chatId, activations,{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: kraviActivation[0]},
                    {text: electricActivation[0]},
                ],
                [
                    {text: mainMenu},
                    {text: 'חזרה ל' + habala},
                ],
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

// kravi activation functions
function kActivation(chatId)
{
    bot.telegram.sendMessage(chatId, kraviActivation[1],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'סרטון הפעלה', callback_data: 'סרטון הפעלה קרבית'},
                    {text: 'סד"פ', callback_data: 'סד"פ הפעלה קרבית'},
                ],
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function kActivationIns(chatId)
{
    bot.telegram.sendMessage(chatId, kraviActivation[2],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'סרטון הפעלה', callback_data: 'סרטון הפעלה קרבית'},
                    {text: 'סד"פ', callback_data: 'סד"פ הפעלה קרבית'},
                ],
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function kActivationVid(chatId)
{
    bot.telegram.sendMessage(chatId, "סרטון הפעלה",{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'סרטון הפעלה', callback_data: 'סרטון הפעלה קרבית'},
                    {text: 'סד"פ', callback_data: 'סד"פ הפעלה קרבית'},
                ],
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

// electric activation functions
function eActivation(chatId)
{
    bot.telegram.sendMessage(chatId, electricActivation[1],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'סרטון', callback_data: 'סרטון הפעלה חשמלית'},
                    {text: 'סד"פ', callback_data: 'סד"פ הפעלה חשמלית'},
                ],
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function eActivationIns(chatId)
{
    bot.telegram.sendMessage(chatId, electricActivation[2],{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'סרטון', callback_data: 'סרטון הפעלה חשמלית'},
                    {text: 'סד"פ', callback_data: 'סד"פ הפעלה חשמלית'},
                ],
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function eActivationVid(chatId)
{
    bot.telegram.sendMessage(chatId, "סרטון הפעלה",{
        reply_markup:
        {
            inline_keyboard:[
                [
                    {text: 'סרטון', callback_data: 'סרטון הפעלה חשמלית'},
                    {text: 'סד"פ', callback_data: 'סד"פ הפעלה חשמלית'},
                ],
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

//kravi activation messages
fs.readFile('./Texts/Habala/activations/kActivationIntro.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    kraviActivation[1] = text;
});

fs.readFile('./Texts/Habala/activations/kActivationIns.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    kraviActivation[2] = text;
}); 


//electric activation messages
fs.readFile('./Texts/Habala/activations/eActivationIntro.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    electricActivation[1] = text;
});

fs.readFile('./Texts/Habala/activations/eActivationIns.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    electricActivation[2] = text;
}); 
module.exports = {kActivation,kActivationIns,kActivationVid,eActivation,eActivationIns,eActivationVid, activationsMenu};
