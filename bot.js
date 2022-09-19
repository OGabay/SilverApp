const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const raamLib = require("./raamFunctions");
const { isBoxedPrimitive } = require('util/types');


//keyboard buttons
var welcomeMessage , badah = 'בד"חים', homerM = "חומר מקצועי", habala = "חבלה", mikush = "מיקוש" , mainMenu = "ראשי", rekemAndAmsap = 'רקם ואמס"פ';
//habala buttons
var ptilim = "פתילים ומאיצים", napatzim = ["נפצים", "חזרה לנפצים"], activations = ["הפעלות", "חזרה להפעלות"], specialCharges = ["מטענים ייעודים", "חזרה למטענים ייעודים"], mainChargesTable = "טבלת מטענים עיקרים";
//ptilim buttons
var ptilRoem = "פתיל רועם", ptilRoemBody = " " ,ptilHashaya = ["פתיל השהייה"], kosit10 = ["כוסית ייזום(טן)"] , excelerentN3 = ["מאיץ מספר 3"];
//napazim buttons
var electricNapatz = ["נפץ חשמלי"] , kraviNapatz = ["נפץ קרבי"];
//special charges buttons
var raam = ["מטען רעם"], exploadingFrame = ["מסגרת פריצה"], zapah = ['צפ"ח'], amonal = ["אמונל"];
//zama buttons
var zamaSafety = ['בטיחות צמ"ה'], unitAnalysis = ["אבחון כוח"];

//code
//Bot start command
bot.command("start", ctx =>
{
    bot.telegram.sendPhoto(ctx.chat.id, {source: 'Media/Images/anafHandasaLogo.jpeg'});
    bot.telegram.sendMessage(ctx.chat.id, welcomeMessage, {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: homerM},
                ],
                [
                    {text: badah},
                    {text: 'רשמ"צים'}
                ]
            ],
            resize_keyboard: true
        }
    })
})

//Main menu cluse
bot.hears(mainMenu, ctx => { 
    bot.telegram.sendPhoto(ctx.chat.id, {source: 'Media/Images/anafHandasaLogo.jpeg'});
    bot.telegram.sendMessage(ctx.chat.id, welcomeMessage, {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: homerM},
                ],
                [
                    {text: badah},
                    {text: 'רשמ"צים'}
                ]
            ],
            resize_keyboard: true
        }
    })
})

//בדחים ראשי
bot.hears([badah, 'חזרה ל' + badah], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, badah, {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'ממלא מקום'},
                ],
                [
                    {text: mainMenu},
                ],
            ],
            resize_keyboard: true
        }
    })
})

//חומר מקצועי 
bot.hears([homerM, 'חזרה ל' + homerM], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, homerM, {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: habala},
                ],
                [
                    {text: mikush},
                    {text: rekemAndAmsap},
                ],
                [
                    {text: mainMenu},
                ],
            ],
            resize_keyboard: true
        }
    })
})

//חבלה ראשי
bot.hears([habala, 'חזרה ל' + habala], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, habala, {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: ptilim},
                    {text: napatzim[0]},
                ],
                [
                    {text: activations[0]},
                    {text: specialCharges[0]},
                ],
                [
                    {text: mainChargesTable},
                ],
                [
                    {text: mainMenu},
                    {text: 'חזרה ל' + homerM},
                ],
            ],
            resize_keyboard: true
        }
    })
})

//פתילים ומאיצים
bot.hears([ptilim, 'חזרה ל' + ptilim], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, ptilim,{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: ptilRoem},
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
        }
    })
})

//פתיל רועם
bot.hears(ptilRoem, ctx => {
    bot.telegram.sendMessage(ctx.chat.id , ptilRoemBody,{
        keyboard:
            [
                [
                    {text: mainMenu},
                    {text: 'חזרה ל' + ptilim},
                ],
            ]
    })
})

//פתיל השהייה
bot.hears(ptilHashaya[0], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, ptilHashaya[1] , {
        keyboard:
            [
                [
                    {text: mainMenu},
                    {text: 'חזרה ל' + ptilim},
                ],
            ],
    })
})

//כוסית טן
bot.hears(kosit10[0], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, kosit10[1] , {
        keyboard:
            [
                [
                    {text: mainMenu},
                    {text: 'חזרה ל' + ptilim},
                ],
            ],
    })
})

//מאיץ מספר 3
bot.hears(excelerentN3[0], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, excelerentN3[1] , {
        keyboard:
            [
                [
                    {text: mainMenu},
                    {text: 'חזרה ל' + ptilim},
                ],
            ],
    })
})

//napatzim menu
bot.hears([napatzim[0] , napatzim[1]], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, napatzim[0],{
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
})

//נפץ חשמלי
bot.hears(electricNapatz[0], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, electricNapatz[1] , {
        keyboard:
            [
                [
                    {text: mainMenu},
                    {text: napatzim[1]},
                ],
            ],
    })
})

//נפץ חשמלי
bot.hears(kraviNapatz[0], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, kraviNapatz[1] , 
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
    })
})

//תפריט מטענים ייעודים
bot.hears([specialCharges[0] , specialCharges[1]], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, specialCharges[0] ,{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: raam[0]},
                    {text: exploadingFrame[0]},
                ],
                [
                    {text: amonal[0]},
                    {text: zapah[0]},
                ],
                [
                    {text: mainMenu},
                    {text: 'חזרה ל' + habala},
                ],
            ],
            resize_keyboard: true
        }
    })
})

//raam
bot.hears(raam[0], ctx => {raamLib.raamAction();})
bot.action('בטיחות רעם', ctx =>{raamLib.raamSafety();}) //safety function

//exploding frame
bot.hears(exploadingFrame[0], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, exploadingFrame[0],{
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
})

//safety exploadingFrame
bot.action('בטיחות מסגרת', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, exploadingFrame[1],{
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
})

//zapah
bot.hears(zapah[0], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, zapah[0],{
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
        }
    })
})

//safety zapah
bot.action('בטיחות צפח', ctx =>{
    bot.telegram.sendMessage(ctx.chat.id, zapah[1],{
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
        }
    })
    console.log(ctx.chat.id);
})

//תפריט הפעלות
/*bot.hears([activations[0] , activations[1]], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, activations[0],{
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
})*/

//טבלת מטענים עיקריים
bot.hears(mainChargesTable, ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {source: 'Media/Images/mainChargesTable.jpeg'});
    bot.telegram.sendPhoto(ctx.chat.id, {source: 'Media/Images/mainChargesTable2.jpeg'});
    ctx.sendMessage('לבנת חבלה 10 עד חצי ק"ג טווח בטיחות 75מ' + "'");
})


//Messages
welcomeMessage = 'שלום וברוכים הבאים לסילבראפ של ענף הנדסה מלי 500\n באפליקציה זו תוכלו למצוא תשובות לשאלות מקצועיות ובטיחותיות\n הניווט מתבצע בעזרת הכפתורים בתחתית המסך';

//ptil roem txt message read
fs.readFile('./Texts/Habala/ptilRoem.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    ptilRoemBody = text;
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

//raam safety text read 
fs.readFile('./Texts/Habala/specialCharges/safetyRaam.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    raam[1] = text;
    });

//exploading frame safety text read 
fs.readFile('./Texts/Habala/specialCharges/safetyEFrame.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    exploadingFrame[1] = text;
    });

//exploading frame safety text read 
fs.readFile('./Texts/Habala/specialCharges/safetyZapah.txt', 'utf8', (err, text) => {
    if (err) {console.error(err); return;}
    zapah[1] = text;
    });


bot.launch();