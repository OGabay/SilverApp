const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');


//napazim buttons
var mainMenu = "ראשי", homerM = ["חומר מקצועי" , "חזרה לחומר מקצועי"], rekemAndAmsap = ['רקם ואמס"פ', 'חזרה לרקם ואמס"פ'], rekem = ['רק"מ' , 'חזרה לרק"מ'], amsap = ['אמס"פ' , 'חזרה לאמס"פ'];
var zapash = ['צפ"ש' , 'חזרה לצפ"ש']; 
var rizuf = ['ריצוף', 'חזרה לריצוף'];
var snatcher = ["חטפן", "חזרה לחטפן"];

//The head branch of rekem&amsap tree
function rekemAmsapHead(chatId) 
{
    bot.telegram.sendMessage(chatId, rekemAndAmsap[0], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: rekem[0]},
                    {text: amsap[0]}
                ],
                [
                    {text: mainMenu},
                    {text: homerM[1]},
                ]
            ],
            resize_keyboard: true
        }
    })
}

function rekemHead(chatId)
{
    bot.telegram.sendMessage(chatId,rekem[0], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: "ממלא מקום"}
                ],
                [
                    {text: mainMenu},
                    {text: rekemAndAmsap[1]},
                ]
            ],
            resize_keyboard: true
        }
    })
}

function amsapHead(chatId)
{
    bot.telegram.sendMessage(chatId,amsap[0], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: zapash[0]},
                ],
                [
                    {text: rizuf[0]},
                    {text: snatcher[0]},
                ],
                [
                    {text: mainMenu},
                    {text: rekemAndAmsap[1]},
                ]
            ],
            resize_keyboard: true
        }
    })
}

function zapashMenu(chatId)
{
    bot.telegram.sendMessage(chatId, zapash[0], {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור צפש'},
                    {text: 'בטיחות', callback_data: 'בטיחות צפש'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה צפש'},
                ]

            ],
        }
    })
}

function zapashSafety(chatId)
{
    bot.telegram.sendMessage(chatId, zapash[2], {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור צפש'},
                    {text: 'בטיחות', callback_data: 'בטיחות צפש'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה צפש'},
                ]

            ],
           
        },
        parse_mode: 'HTML'
    })
}

function zapashVid(chatId)
{
    bot.telegram.sendVideo(chatId, {source: 'Media/Vids/zapashActivation.mp4'}, {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור צפש'},
                    {text: 'בטיחות', callback_data: 'בטיחות צפש'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה צפש'},
                ]

            ],
           
        },
    })
}


fs.readFile('./Texts/Rekem&Amsap/safetyZapash.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapash[2] = text;
    });


module.exports = {rekemAmsapHead, rekemHead, amsapHead, zapashMenu, zapashSafety,zapashVid};