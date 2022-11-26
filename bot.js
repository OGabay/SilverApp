const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const ctx = require('ctx');
const raamLib = require("./raamFunctions") , eFrameLib = require("./exploadingFrameFunctions") , zapahLib = require("./zapahFunctions");
const napatzimLib = require("./napatzimFunctions") , rekemAndAmsapLib = require("./rekem&amsap"), diagnosisLib = require("./diagnosisMenu");
const testsAndSafetyLib = require("./testAndSafety"), equipListLib = require("./equipmentListMenu"), activationLib = require("./activationsMenu");
const ptilimLib = require("./ptilimMenu") , mikushLib = require("./mikush"), reportsLib = require("./reportFormats"), badahLib = require("./badahs");


//activations and napatzim
var electricNapatz = ["נפץ חשמלי"] , kraviNapatz = ["נפץ קרבי"];
var kraviActivation = ["הפעלה קרבית", 'סד"פ הפעלה קרבית' , "סרטון הפעלה קרבית"] , electricActivation = ["הפעלה חשמלית", 'סרטון הפעלה חשמלית' , 'סד"פ הפעלה חשמלית'];
//keyboard buttons
var welcomeMessage , badah = 'בד"חים', homerM = "חומר מקצועי", habala = "חבלה", mikush = ["מיקוש", "חזרה למיקוש"] , mainMenu = "ראשי";
var testsAndSafety = ["מבחנים ובטיחות"], pakaKesef = 'פק"א אימון כס"ף';
var rekemAndAmsap = ['רקם ואמס"פ', 'חזרה לרקם ואמס"פ'], diagnosis = ["אבחונים", "אבחון גדוד", "אבחון פלוגה"];
var reportFormats = ['סיכומי אימונים', 'סיכום אימון גדודי', 'סיכום אימון כס"ף'];
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
//mikush buttons
var aTank = ["נגד טנקים", "חזרה לנגד טנקים"], inUseAT = ['נ"ט בשימוש'];
var aPersonal = ["נגד אדם" , 'נ"א לא בשימוש', "4 א'", 'מוקש תאורה'];
//underGroundWFbuttons
var underGroundWF = ['תת"ק'];


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
                    {text: reportFormats[0]},
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
                    {text: reportFormats[0]},
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

//diganosis menu
bot.hears(diagnosis[0], ctx =>{diagnosisLib.diagnosisMenu(ctx.chat.id);}) //menu
bot.hears(diagnosis[1], ctx =>{diagnosisLib.batilionDiag(ctx.chat.id);}) //batilion diagnosis file 
bot.hears(diagnosis[2], ctx =>{diagnosisLib.squadDiag(ctx.chat.id);}) //squad diagnosis file 

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
                    {text: underGroundWF[0]},
                ],
                [
                    {text: mikush[0]},
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

//badah tree
bot.hears(badah, ctx => {badahLib.badahsMenu(ctx.chat.id)}) // head of function
bot.hears("נקודות לאבחון מסגרת", ctx => {badahLib.groupDiagPoints(ctx.chat.id)})
bot.hears('שיחת פתיחה לאימון', ctx => {badahLib.drillOpeningChat(ctx.chat.id)})
bot.hears('סד"פ ירידה לשטח בתחילת אימון', ctx => {badahLib.startOfDrillList(ctx.chat.id)})
bot.hears('סד"פ טרם הוצאת אימון', ctx => {badahLib.preparationList(ctx.chat.id)})
bot.hears('התנהלות בשטחי אש', ctx => {badahLib.fireGroundsRules(ctx.chat.id)})
bot.hears('ביצוע קפ"ק 3 בטיחות', ctx => {badahLib.kapak3(ctx.chat.id)})
bot.hears('סד"פ סוף יום אימון', ctx => {badahLib.endOfDayList(ctx.chat.id)})
bot.hears('סד"פ סיכום וסיום אימון', ctx => {badahLib.conclusionEndOfDrill(ctx.chat.id)})
bot.hears('בע"ת בתחום הבטיחות', ctx => {badahLib.safetyRolesTable(ctx.chat.id)})
bot.hears('הנחיות לעומס קור', ctx => {badahLib.xtremeCold(ctx.chat.id)})
bot.hears('הנחיות לעומס חום', ctx => {badahLib.xtremeHeat(ctx.chat.id)})

//reports tree
bot.hears(reportFormats[0], ctx => {reportsLib.ReportsMenu(ctx.chat.id)})
bot.hears(reportFormats[1], ctx => {reportsLib.gdudiReport(ctx.chat.id)})
bot.hears(reportFormats[2], ctx => {reportsLib.kesefReport(ctx.chat.id)})


//mikush tree
bot.hears([mikush[0], mikush[1]], ctx => {mikushLib.mikushHead(ctx.chat.id)}) //Head of tree
bot.hears([aTank[0], aTank[1]], ctx => {mikushLib.aTHead(ctx.chat.id)})
bot.hears(inUseAT[0], ctx => {mikushLib.aTInUse(ctx.chat.id)})
bot.hears("29 א'", ctx => {mikushLib.alaf29(ctx.chat.id)})
bot.hears("M-29", ctx => {mikushLib.M29(ctx.chat.id)})
bot.hears("M-15", ctx => {mikushLib.M15(ctx.chat.id)})
bot.hears('נ"ט לא בשימוש', ctx => {mikushLib.aTNotInUse(ctx.chat.id)})
bot.hears([aPersonal[0], 'הגדרה מוקש נ"א'], ctx => {mikushLib.aPHead(ctx.chat.id)})
bot.hears(aPersonal[1], ctx => {mikushLib.APNotInUse(ctx.chat.id)})
bot.hears(aPersonal[2], ctx => {mikushLib.Alef4(ctx.chat.id)})
bot.hears(aPersonal[3], ctx => {mikushLib.lightMine(ctx.chat.id)})

//Rekem&amsap tree
bot.hears([rekemAndAmsap[0], rekemAndAmsap[1]], ctx =>{rekemAndAmsapLib.rekemAmsapHead(ctx.chat.id);}) // Head of tree
bot.hears([rekem[0], rekem[1]], ctx => {rekemAndAmsapLib.rekemHead(ctx.chat.id);}) // rekem branch start 
bot.hears([amsap[0], amsap[1]], ctx => {rekemAndAmsapLib.amsapHead(ctx.chat.id);}) // amsap branch start
bot.hears('צפ"ש', ctx => {rekemAndAmsapLib.zapashMenu(ctx.chat.id);}) // zapash head branch
bot.action('בטיחות צפש', ctx => {rekemAndAmsapLib.zapashSafety(ctx.chat.id);}) 
bot.action('הפעלה צפש', ctx => {rekemAndAmsapLib.zapashVid(ctx.chat.id);}) 
bot.action('חיבור צפש', ctx => {rekemAndAmsapLib.zapashIns(ctx.chat.id)})
bot.hears('ריצוף', ctx => {rekemAndAmsapLib.rizufMenu(ctx.chat.id);}) // rizuf head branch
bot.action('בטיחות ריצוף', ctx => {rekemAndAmsapLib.rizufSafety(ctx.chat.id);}) 
bot.action('הפעלה ריצוף', ctx => {rekemAndAmsapLib.rizufVid(ctx.chat.id);}) 
bot.action('חיבור ריצוף', ctx => {rekemAndAmsapLib.rizufIns(ctx.chat.id)})
bot.hears('חטפן', ctx => {rekemAndAmsapLib.snatcherMenu(ctx.chat.id);}) // snatcher head branch
bot.action('בטיחות חטפן', ctx => {rekemAndAmsapLib.snatcherSafety(ctx.chat.id);}) 
bot.action('הפעלה חטפן', ctx => {rekemAndAmsapLib.snatcherVid(ctx.chat.id);}) 
bot.action('חיבור חטפן', ctx => {rekemAndAmsapLib.snatcherIns(ctx.chat.id)})
bot.hears('נגמ"ש', ctx => {bot.telegram.sendMessage(ctx.chat.id, "https://t.me/HirBeClickBot")})

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
bot.action('בטיחות רעם', ctx =>{raamLib.raamSafety(ctx.chat.id);}) 
bot.action('הפעלה רעם', ctx =>{raamLib.raamExplosion(ctx.chat.id);}) 
bot.action('סד"פ רעם', ctx =>{raamLib.raamInstructions(ctx.chat.id);}) 
bot.action('הנחה רעם', ctx =>{raamLib.raamPlacement(ctx.chat.id);}) 

//exploding frame
bot.hears(exploadingFrame[0], ctx => {eFrameLib.eFrameAction(ctx.chat.id);})
bot.action('בטיחות מסגרת', ctx =>{eFrameLib.eFrameSafety(ctx.chat.id);}) 
bot.action('סד"פ מסגרת', ctx =>{eFrameLib.eFrameInst(ctx.chat.id);})  
bot.action('הפעלה מסגרת', ctx =>{eFrameLib.eFrameActivation(ctx.chat.id);}) 
bot.action('הנחה מסגרת', ctx => {eFrameLib.eFramePlacement(ctx.chat.id);})

//zapah
bot.hears(zapah[0], ctx => {zapahLib.zapahAction(ctx.chat.id)})
bot.action('בטיחות צפח', ctx =>{zapahLib.zapahSafety(ctx.chat.id)}) 
bot.action('סד"פ צפח', ctx => {zapahLib.zapahIns(ctx.chat.id)})
bot.action('הפעלה צפח', ctx => {zapahLib.zapahExploasion(ctx.chat.id)})
bot.action('הנחה צפח', ctx => {zapahLib.zapahExploasion(ctx.chat.id)})


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
welcomeMessage = 'שלום וברוכים הבאים לסילבראפ של ענף הנדסה מלי 500\n באפליקציה זו תוכלו למצוא תשובות לשאלות מקצועיות ובטיחותיות\n הניווט מתבצע בעזרת הכפתורים בתחתית המסך \nמדיה יכולה לקחת זמן להיטען - אנא התעזרו בסבלנות\n פותח ע"י עומרי גבאי - 0544704404';

bot.launch();

