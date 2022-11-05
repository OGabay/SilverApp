const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');


var diagnosis = ["אבחונים"], mainMenu = "ראשי";

//menu
function diagnosisMenu(chatId)
{
    bot.telegram.sendMessage(chatId, diagnosis[0],{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: "אבחון גדוד"},
                    {text: 'אבחון פלוגה'}
                ],
                [
                    {text: mainMenu}
                ]
            ],
            resize_keyboard: true
        }
    })
}

function squadDiag(chatId)
{
    bot.telegram.sendDocument(chatId, {source: "Media/Docs/SquadDiagnosis.pdf"});
}

function batilionDiag(chatId)
{
    bot.telegram.sendDocument(chatId, {source: "Media/Docs/BatilionDiagnosis.pdf"})
}

module.exports = {diagnosisMenu, squadDiag, batilionDiag};