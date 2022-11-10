const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');

//equipList buttons
var ptilim = "פתילים ומאיצים", mainMenu = "ראשי" , habala = "חבלה";
//ptilim buttons
var ptilRoem = ["פתיל רועם"] ,ptilHashaya = ["פתיל השהייה"], kosit10 = ["כוסית ייזום(טן)"];
var excelerentN3 = ["מאיץ מספר 3"];

//menu
function ptilimMenu(chatId)
{
    bot.telegram.sendMessage(chatId, ptilim,{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: ptilRoem[0]},
                    {text: ptilHashaya[0]},
                ],
                [
                    {text: kosit10[0]},
                    {text: excelerentN3[0]},
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

function ptilRoemfunc(chatId)
{
    bot.telegram.sendMessage(chatId, ptilRoem[1]);
}

function ptilHashayafunc(chatId)
{
    bot.telegram.sendMessage(chatId, ptilHashaya[1]);
}

function kosit10func(chatId)
{
    bot.telegram.sendMessage(chatId, kosit10[1]);
}

function excelerent3func(chatId)
{
    bot.telegram.sendMessage(chatId, excelerentN3[1]);
}

//ptil roem txt message read
fs.readFile('./Texts/Habala/ptilRoem.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    ptilRoem[1] = text;
     });

//ptil hashaya txt message read
fs.readFile('./Texts/Habala/ptilHashaya.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    ptilHashaya[1] = text;
    });

//kosit ten txt message read
fs.readFile('./Texts/Habala/kosit10.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    kosit10[1] = text;
    });

//excelerent 3 txt message read 
fs.readFile('./Texts/Habala/excelerent3.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    excelerentN3[1] = text;
    });


module.exports = {ptilimMenu, ptilHashayafunc, ptilRoemfunc, kosit10func, excelerent3func};