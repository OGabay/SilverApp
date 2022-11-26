const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');


var mikush = ["מיקוש", "חזרה למיקוש"] , mainMenu = "ראשי", homerM = ["חומר מקצועי" , "חזרה לחומר מקצועי"];
var aTank = ["נגד טנקים"], inUseAT = ['מוקשי נ"ט בשימוש'];
var aPersonal = ["נגד אדם"];

//Head function of mikush tree
function mikushHead(chatId) 
{
    bot.telegram.sendMessage(chatId, mikush[2], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: aTank[0]},
                    {text: aPersonal[0]}
                ],
                [
                    {text: mainMenu},
                    {text: homerM[1]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

//anti tank branch head function
function aTHead(chatId)
{
    bot.telegram.sendMessage(chatId,aTank[1], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'נ"ט בשימוש'},
                    {text: 'נ"ט לא בשימוש'},
                ],
                [
                    {text: mainMenu},
                    {text: mikush[1]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function aTNotInUse(chatId)
{
    bot.telegram.sendMessage(chatId,aTank[2], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'נ"ט בשימוש'},
                    {text: 'נ"ט לא בשימוש'},
                ],
                [
                    {text: mainMenu},
                    {text: mikush[1]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function aTInUse(chatId)
{
    bot.telegram.sendMessage(chatId,inUseAT[0], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: "29 א'"},
                    {text: 'M-29'},
                    {text: 'M-15'}
                ],
                [
                    {text: mainMenu},
                    {text: "חזרה ל" + aTank[0]},
                ]
            ],
            resize_keyboard: true
        }
    })
}

function alaf29(chatId)
{
    bot.telegram.sendMessage(chatId,inUseAT[1], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: "29 א'"},
                    {text: 'M-29'},
                    {text: 'M-15'}
                ],
                [
                    {text: mainMenu},
                    {text: "חזרה ל" + aTank[0]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function M29(chatId)
{
    bot.telegram.sendMessage(chatId,inUseAT[2], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: "29 א'"},
                    {text: 'M-29'},
                    {text: 'M-15'}
                ],
                [
                    {text: mainMenu},
                    {text: "חזרה ל" + aTank[0]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function M15(chatId)
{
    bot.telegram.sendMessage(chatId,inUseAT[3], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: "29 א'"},
                    {text: 'M-29'},
                    {text: 'M-15'}
                ],
                [
                    {text: mainMenu},
                    {text: "חזרה ל" + aTank[0]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function aPHead(chatId)
{
    bot.telegram.sendMessage(chatId,aPersonal[1], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'הגדרה מוקש נ"א'}
                ], 
                [
                    {text: 'מוקש תאורה'},
                    {text: "4 א'"},
                    {text: 'נ"א לא בשימוש'},
                ],
                [
                    {text: mainMenu},
                    {text: mikush[1]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function lightMine(chatId)
{
    bot.telegram.sendMessage(chatId,aPersonal[2], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'הגדרה מוקש נ"א'}
                ], 
                [
                    {text: 'מוקש תאורה'},
                    {text: "4 א'"},
                    {text: 'נ"א לא בשימוש'},
                ],
                [
                    {text: mainMenu},
                    {text: mikush[1]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function Alef4(chatId)
{
    bot.telegram.sendMessage(chatId,aPersonal[3], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'הגדרה מוקש נ"א'}
                ], 
                [
                    {text: 'מוקש תאורה'},
                    {text: "4 א'"},
                    {text: 'נ"א לא בשימוש'},
                ],
                [
                    {text: mainMenu},
                    {text: mikush[1]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

function APNotInUse(chatId)
{
    bot.telegram.sendMessage(chatId,aPersonal[4], {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'הגדרה מוקש נ"א'}
                ], 
                [
                    {text: 'מוקש תאורה'},
                    {text: "4 א'"},
                    {text: 'נ"א לא בשימוש'},
                ],
                [
                    {text: mainMenu},
                    {text: mikush[1]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
    })
}

//txt read 
fs.readFile('./Texts/Mikush/MikushIntro.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    mikush[2] = text;
}); 

fs.readFile('./Texts/Mikush/ATIntro.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    aTank[1] = text;
}); 

fs.readFile('./Texts/Mikush/29Alef.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    inUseAT[1] = text;
}); 

fs.readFile('./Texts/Mikush/M29.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    inUseAT[2] = text;
}); 

fs.readFile('./Texts/Mikush/M15.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    inUseAT[3] = text;
}); 

fs.readFile('./Texts/Mikush/ATNotInUse.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    aTank[2] = text;
});

fs.readFile('./Texts/Mikush/APIntro.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    aPersonal[1] = text;
});

fs.readFile('./Texts/Mikush/LightMine.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    aPersonal[2] = text;
});

fs.readFile('./Texts/Mikush/4Alef.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    aPersonal[3] = text;
});

fs.readFile('./Texts/Mikush/APNotInUse.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    aPersonal[4] = text;
});


module.exports = {mikushHead, aTHead, aTInUse, aTNotInUse, M15, M29, alaf29, aPHead, APNotInUse, Alef4, lightMine};