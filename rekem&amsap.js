const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');



var mainMenu = "ראשי", homerM = ["חומר מקצועי" , "חזרה לחומר מקצועי"], rekemAndAmsap = ['רקם ואמס"פ', 'חזרה לרקם ואמס"פ'], rekem = ['רק"מ' , 'חזרה לרק"מ'];
var amsap = ['אמס"פ' , 'חזרה לאמס"פ'];
var zapash = ['צפ"ש']; 
var rizuf = ['ריצוף'];
var snatcher = ["חטפן"];

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
                    {text: 'פומ"ה'},
                    {text: 'נגמ"ש'}
                ],
                [
                    {text: mainMenu},
                    {text: rekemAndAmsap[1]},
                ]
            ],
            resize_keyboard: true
        },
        parse_mode: 'HTML'
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
    bot.telegram.sendMessage(chatId, zapash[1], {
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

function zapashIns(chatId)
{
    bot.telegram.sendMessage(chatId, zapash[3], {
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

function rizufMenu(chatId)
{
    bot.telegram.sendMessage(chatId, rizuf[1], {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור ריצוף'},
                    {text: 'בטיחות', callback_data: 'בטיחות ריצוף'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה ריצוף'},
                ]

            ],
        }
    })
}

function rizufSafety(chatId)
{
    bot.telegram.sendMessage(chatId, rizuf[2], {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור ריצוף'},
                    {text: 'בטיחות', callback_data: 'בטיחות ריצוף'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה ריצוף'},
                ]

            ],
           
        },
        parse_mode: 'HTML'
    })
}

function rizufIns(chatId)
{
    bot.telegram.sendMessage(chatId, rizuf[3], {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור ריצוף'},
                    {text: 'בטיחות', callback_data: 'בטיחות ריצוף'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה ריצוף'},
                ]

            ],
           
        },
        parse_mode: 'HTML'
    })
}

function rizufVid(chatId)
{
    //change to rizuf vid
    bot.telegram.sendVideo(chatId, {source: 'Media/Vids/zapashActivation.mp4'}, {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור ריצוף'},
                    {text: 'בטיחות', callback_data: 'בטיחות ריצוף'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה ריצוף'},
                ]
            ],
        },
    })
}

function snatcherMenu(chatId)
{
    bot.telegram.sendMessage(chatId, snatcher[1], {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור חטפן'},
                    {text: 'בטיחות', callback_data: 'בטיחות חטפן'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה חטפן'},
                ]

            ],
        }
    })
}

function snatcherSafety(chatId)
{
    bot.telegram.sendMessage(chatId, snatcher[2], {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור חטפן'},
                    {text: 'בטיחות', callback_data: 'בטיחות חטפן'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה חטפן'},
                ]

            ],
           
        },
        parse_mode: 'HTML'
    })
}

function snatcherIns(chatId)
{
    bot.telegram.sendMessage(chatId, snatcher[3], {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור חטפן'},
                    {text: 'בטיחות', callback_data: 'בטיחות חטפן'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה חטפן'},
                ]

            ],
           
        },
        parse_mode: 'HTML'
    })
}

function snatcherVid(chatId)
{
    //change to snatcher vid
    bot.telegram.sendVideo(chatId, {source: 'Media/Vids/zapashActivation.mp4'}, {
        reply_markup:
        {
            inline_keyboard:
            [
                [
                    {text: 'סד"פ הרכבה' , callback_data: 'חיבור חטפן'},
                    {text: 'בטיחות', callback_data: 'בטיחות חטפן'},
                    
                ],
                [
                    {text: 'סרטון הפעלה', callback_data: 'הפעלה חטפן'},
                ]
            ],
        },
    })
}

fs.readFile('./Texts/Rekem&Amsap/safetyZapash.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapash[2] = text;
});

fs.readFile('./Texts/Rekem&Amsap/introZapash.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapash[1] = text;
});

fs.readFile('./Texts/Rekem&Amsap/insZapash.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapash[3] = text;
});

fs.readFile('./Texts/Rekem&Amsap/safetyRizuf.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    rizuf[2] = text;
});

fs.readFile('./Texts/Rekem&Amsap/introRizuf.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    rizuf[1] = text;
});

fs.readFile('./Texts/Rekem&Amsap/insRizuf.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    rizuf[3] = text;
});

fs.readFile('./Texts/Rekem&Amsap/safetySnatcher.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    snatcher[2] = text;
});

fs.readFile('./Texts/Rekem&Amsap/introSnatcher.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    snatcher[1] = text;
});

fs.readFile('./Texts/Rekem&Amsap/insSnatcher.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    snatcher[3] = text;
});

module.exports = {rekemAmsapHead, rekemHead, amsapHead, zapashMenu, zapashSafety,zapashVid, zapashIns,
                 rizufMenu, rizufSafety, rizufVid, rizufIns, snatcherMenu, snatcherSafety, snatcherVid, snatcherIns};