const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const raamLib = require("./raamFunctions") , eFrameLib = require("./exploadingFrameFunctions") , zapahLib = require("./zapahFunctions");
const napatzimLib = require("./napatzimFunctions") , rekemAmsapLib = require("./rekem&amsap"), diagnosisLib = require("./diagnosisMenu");
const testsAndSafetyLib = require("./testAndSafety"), equipListLib = require("./equipmentListMenu"), activationLib = require("./activationsMenu");
const ptilimLib = require("./ptilimMenu");
const ctx = require('ctx');


//activations and napatzim
var electricNapatz = ["נפץ חשמלי"] , kraviNapatz = ["נפץ קרבי"];
var kraviActivation = ["הפעלה קרבית", 'סד"פ הפעלה קרבית' , "סרטון הפעלה קרבית"] , electricActivation = ["הפעלה חשמלית", 'סרטון הפעלה חשמלית' , 'סד"פ הפעלה חשמלית'];
//keyboard buttons
var welcomeMessage , badah = 'בד"חים', homerM = "חומר מקצועי", habala = "חבלה", mikush = "מיקוש" , mainMenu = "ראשי";
var testsAndSafety = ["מבחנים ובטיחות"], pakaKesef = 'פק"א אימון כס"ף';
var rekemAndAmsap = ['רקם ואמס"פ', 'חזרה לרקם ואמס"פ'], diagnosis = ["אבחונים", "אבחון גדוד", "אבחון פלוגה"];
//habala buttons
var ptilim = "פתילים ומאיצים", napatzim = ["נפצים", "חזרה לנפצים"], activations = "הפעלות";
var specialCharges = ["מטענים ייעודים", "חזרה למטענים ייעודים"], mainChargesTable = "טבלת מטענים עיקרים";
//ptilim buttons
var ptilRoem = ["פתיל רועם"],ptilHashaya = ["פתיל השהייה"], kosit10 = ["כוסית ייזום(טן)"];
var excelerentN3 = ["מאיץ מספר 3"];
//special charges buttons
var exploadingFrame = ["מסגרת פריצה"], zapah = ['צפ"ח'], raam = ["מטען רעם"];
//rekem&amsap buttons
var rekem = ['רק"מ' , 'חזרה לרק"מ'], amsap = ['אמס"פ' , 'חזרה לאמס"פ'];
//equipList buttons
var equipList = ['רשמ"צים', 'רשמ"צ כללי', 'רשמ"צ חתימת חבלה', 'רשמ"צ מטווח ירי', 'רשמ"צ מטווח חבלה'];


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
                    {text: 'רשמ"צים'},
                    {text: diagnosis[0]}
                ],
                [
                    {text: pakaKesef},
                    {text: 'סיכומי אימונים'},
                    {text: testsAndSafety[0]}
                ],
                [
                    {text: 'צמ"ה'}
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
                    {text: 'רשמ"צים'},
                    {text: diagnosis[0]}
                ],
                [
                    {text: pakaKesef},
                    {text: 'סיכומי אימונים'},
                    {text: testsAndSafety[0]}
                ],
                [
                    {text: 'צמ"ה'}
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

//diganosis menu
bot.hears(diagnosis[0], ctx =>{diagnosisLib.diagnosisMenu(ctx.chat.id);}) //menu
bot.hears(diagnosis[1], ctx =>{diagnosisLib.batilionDiag(ctx.chat.id);}) //batilion diagnosis file send
bot.hears(diagnosis[2], ctx =>{diagnosisLib.squadDiag(ctx.chat.id);}) //squad diagnosis file send

//testsNSafety menu
bot.hears(testsAndSafety[0], ctx => {testsAndSafetyLib.testsAndSafetyMenu(ctx.chat.id)}) // menu
bot.hears("גדוד 7086", ctx => {testsAndSafetyLib.gdud7086(ctx.chat.id);})
bot.hears("גדוד 924", ctx => {testsAndSafetyLib.gdud924(ctx.chat.id);})
bot.hears("גדוד 8173", ctx => {testsAndSafetyLib.gdud8173(ctx.chat.id);})
bot.hears("גדוד 710", ctx => {testsAndSafetyLib.gdud710(ctx.chat.id);})
bot.hears("גדוד 7071", ctx => {testsAndSafetyLib.gdud7071(ctx.chat.id);})
bot.hears("גדוד 5280", ctx => {testsAndSafetyLib.gdud5280(ctx.chat.id);})
bot.hears("גדוד 271", ctx => {testsAndSafetyLib.gdud271(ctx.chat.id);})
bot.hears("גדוד 8219", ctx => {testsAndSafetyLib.gdud8219(ctx.chat.id);})
bot.hears("גדוד 749", ctx => {testsAndSafetyLib.gdud749(ctx.chat.id);})
bot.hears("גדוד 9227", ctx => {testsAndSafetyLib.gdud9227(ctx.chat.id);})
bot.hears("גדוד 8170", ctx => {testsAndSafetyLib.gdud8170(ctx.chat.id);})
bot.hears("גדוד 7107", ctx => {testsAndSafetyLib.gdud7107(ctx.chat.id);})

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
                    {text: rekemAndAmsap[0]},
                ],
                [
                    {text: mainMenu},
                ],
            ],
            resize_keyboard: true
        }
    })
})

//Rekem&amsap tree
bot.hears([rekemAndAmsap[0], rekemAndAmsap[1]], ctx =>{rekemAmsapLib.rekemAmsapHead(ctx.chat.id);}) // Head of tree
bot.hears([rekem[0], rekem[1]], ctx => {rekemAmsapLib.rekemHead(ctx.chat.id);}) // rekem branch start 
bot.hears([amsap[0], amsap[1]], ctx => {rekemAmsapLib.amsapHead(ctx.chat.id);}) // amsap branch start
bot.hears('צפ"ש', ctx => {rekemAmsapLib.zapashMenu(ctx.chat.id);}) //live zapash head
bot.action('בטיחות צפש', ctx => {rekemAmsapLib.zapashSafety(ctx.chat.id);}) //zapash safety 
bot.action('הפעלה צפש', ctx => {rekemAmsapLib.zapashVid(ctx.chat.id);}) // zapash activation vid 

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
                    {text: activations},
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
bot.hears(ptilim, ctx => {ptilimLib.ptilimMenu(ctx.chat.id)})
bot.hears(ptilRoem[0], ctx => {ptilimLib.ptilRoemfunc(ctx.chat.id)})
bot.hears(ptilHashaya[0], ctx => {ptilimLib.ptilHashayafunc(ctx.chat.id)})
bot.hears(kosit10[0], ctx => {ptilimLib.kosit10func(ctx.chat.id)})
bot.hears(excelerentN3[0], ctx => {ptilimLib.excelerent3func(ctx.chat.id)})

//napatzim menu
bot.hears([napatzim[0] , napatzim[1]], ctx => {napatzimLib.napatzimMenu(ctx.chat.id);})
bot.hears(electricNapatz[0], ctx => {napatzimLib.electricNapatzAction(ctx.chat.id);}) //נפץ חשמלי
bot.hears(kraviNapatz[0], ctx => {napatzimLib.kraviNapatzAction(ctx.chat.id);}) //נפץ קרבי

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
bot.hears(raam[0], ctx => {raamLib.raamAction(ctx.chat.id);})
bot.action('בטיחות רעם', ctx =>{raamLib.raamSafety(ctx.chat.id);}) //safety function

//exploding frame
bot.hears(exploadingFrame[0], ctx => {eFrameLib.eFrameAction(ctx.chat.id);})
bot.action('בטיחות מסגרת', ctx =>{eFrameLib.eFrameSafety(ctx.chat.id);}) //safety function
bot.action('סד"פ מסגרת', ctx =>{eFrameLib.eFrameInst(ctx.chat.id);}) // 

//zapah
bot.hears(zapah[0], ctx => {zapahLib.zapahAction(ctx.chat.id)})
bot.action('בטיחות צפח', ctx =>{zapahLib.zapahSafety(ctx.chat.id)}) //safety function
bot.action('סד"פ צפח', ctx => {zapahLib.zapahIns(ctx.chat.id)})
bot.action('הפעלה צפח', ctx => {zapahLib.zapahExploasion(ctx.chat.id)})

//תפריט הפעלות
bot.hears(activations, ctx => {activationLib.activationsMenu(ctx.chat.id)})
bot.hears(electricActivation[0], ctx => {activationLib.eActivation(ctx.chat.id)})
bot.hears(kraviActivation[0], ctx => {activationLib.kActivation(ctx.chat.id)})
bot.action(kraviActivation[1], ctx => {activationLib.kActivationIns(ctx.chat.id)})
bot.action(kraviActivation[2], ctx => {activationLib.kActivationVid(ctx.chat.id)})
bot.action(electricActivation[1], ctx => {activationLib.eActivationVid(ctx.chat.id)})
bot.action(electricActivation[2], ctx => {activationLib.eActivationIns(ctx.chat.id)})

//טבלת מטענים עיקריים
bot.hears(mainChargesTable, ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {source: 'Media/Images/mainChargesTable.jpeg'});
    bot.telegram.sendPhoto(ctx.chat.id, {source: 'Media/Images/mainChargesTable2.jpeg'});
    ctx.sendMessage('לבנת חבלה 10 עד חצי ק"ג טווח בטיחות 75מ' + "'");
})

//פק"א אימון כסף
bot.hears(pakaKesef, ctx => {bot.telegram.sendDocument(ctx.chat.id, {source: 'Media/Docs/PakaKesef.pdf'});})

//רשמ"צים
bot.hears(equipList[0], ctx => {equipListLib.equipmentListMenu(ctx.chat.id)})
bot.hears(equipList[1], ctx => {equipListLib.generalList(ctx.chat.id)})
bot.hears(equipList[2], ctx => {equipListLib.explosivesRequirement(ctx.chat.id)})
bot.hears(equipList[3], ctx => {equipListLib.gunRangeEquipment(ctx.chat.id)})
bot.hears(equipList[4], ctx => {equipListLib.explosivesRangeEquipment(ctx.chat.id)})

//Messages
welcomeMessage = 'שלום וברוכים הבאים לסילבראפ של ענף הנדסה מלי 500\n באפליקציה זו תוכלו למצוא תשובות לשאלות מקצועיות ובטיחותיות\n הניווט מתבצע בעזרת הכפתורים בתחתית המסך \n פותח ע"י עומרי גבאי - 0544704404';

bot.launch();
