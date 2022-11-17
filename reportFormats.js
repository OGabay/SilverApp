const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');


var reportFormats = ["סיכומי אימונים"], mainMenu = "ראשי";

//menu
function ReportsMenu(chatId)
{
    bot.telegram.sendMessage(chatId, reportFormats[0],{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'סיכום אימון כס"ף'},
                    {text: 'סיכום אימון גדודי'}
                ],
                [
                    {text: mainMenu}
                ]
            ],
            resize_keyboard: true
        }
    })
}

function kesefReport(chatId)
{
    bot.telegram.sendDocument(chatId, {source: "Media/Docs/kesefReport.pdf"});
}

function gdudiReport(chatId)
{
    //add document then uncomment below statment
    bot.telegram.sendMessage(chatId, "ממלא מקום");
    //bot.telegram.sendDocument(chatId, {source: "Media/Docs/gdudiReport.pdf"})
}

module.exports = {ReportsMenu, kesefReport, gdudiReport};