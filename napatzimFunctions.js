const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const chatId = 1746153600;

//napazim buttons
var electricNapatz = ["נפץ חשמלי"] , kraviNapatz = ["נפץ קרבי"], mainMenu = "ראשי", napatzim = ["נפצים", "חזרה לנפצים"], habala = "חבלה";

//napazim menu
function napatzimMenu()
{
    bot.telegram.sendMessage(chatId, napatzim[0],{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: kraviNapatz[0]},
                    {text: electricNapatz[0]},
                ],
                [
                    {text: mainMenu},
                    {text: 'חזרה ל' + habala},
                ],
            ],
            resize_keyboard: true
        }
    })
}

// electric napatz function
function electricNapatzAction()
{
    bot.telegram.sendMessage(chatId, electricNapatz[1] , {
        keyboard:
            [
                [
                    {text: mainMenu},
                    {text: napatzim[1]},
                ],
            ],
    })
}


//kravi napatz function
function kraviNapatzAction()
{
    bot.telegram.sendMessage(chatId, kraviNapatz[1] , 
        {
            inline_keyboard:
            [
                [
                    {text: "בטיחות", callback_data: "בטיחות נפץ קרבי"},
                    {text: 'סד"פ הפעלה', callback_data: "סדפ נפץ קרבי"}
                ]
            ],
            keyboard:
                [
                    [
                        {text: mainMenu},
                        {text: napatzim[1]},
                    ],
                ],
        }
    );
}

//electric napatz txt message read 
fs.readFile('./Texts/Habala/Enapatz.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    electricNapatz[1] = text;
    });

//kravi napatz txt message read 
fs.readFile('./Texts/Habala/Knapatz.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    kraviNapatz[1] = text;
    });

module.exports = {kraviNapatzAction, electricNapatzAction, napatzimMenu};