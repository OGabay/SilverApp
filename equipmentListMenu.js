const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');

//equipList buttons
var equipList = ['רשמ"צים'], mainMenu = "ראשי";

//menu
function equipmentListMenu(chatId)
{
    bot.telegram.sendMessage(chatId, equipList[0],{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'רשמ"צ כללי'},
                    {text: 'רשמ"צ חתימת חבלה'}
                ],
                [
                    {text: 'רשמ"צ מטווח ירי'},
                    {text: 'רשמ"צ מטווח חבלה'}
                ],
                [
                    {text: mainMenu}
                ]
            ],
            resize_keyboard: true
        }
    })
}

function generalList(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: "Media/Images/equipmentList/generalEquipment.png"});
}

function explosivesRequirement(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: "Media/Images/equipmentList/explosivesRequirement.png"})
}

function gunRangeEquipment(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: "Media/Images/equipmentList/gunRangeEquipment.png"})
}

function explosivesRangeEquipment(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: "Media/Images/equipmentList/explosivesRangeEquipment.png"})
}

module.exports = {equipmentListMenu, generalList, explosivesRequirement, gunRangeEquipment,explosivesRangeEquipment};