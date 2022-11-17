const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const util = require('util');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const path = require('path');


var badahs = ['בד"חים'], mainMenu = "ראשי";

//menu
function badahsMenu(chatId)
{
    bot.telegram.sendMessage(chatId, badahs[0],{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: "נקודות לאבחון מסגרת"},
                    {text: 'שיחת פתיחה לאימון'},
                    {text: 'סד"פ ירידה לשטח בתחילת אימון'},
                ],
                [
                    {text: 'סד"פ טרם הוצאת אימון'},
                    {text: 'התנהלות בשטחי אש'},
                    {text: 'ביצוע קפ"ק 3 בטיחות'},
                    {text: 'סד"פ סוף יום אימון'},
                ],
                [
                    {text: 'סד"פ סיכום וסיום אימון'},
                    {text: 'בע"ת בתחום הבטיחות'},
                    {text: 'הנחיות לעומס קור'},
                    {text: 'הנחיות לעומס חום'},
                ],
                [
                    {text: mainMenu}
                ]
            ],
            resize_keyboard: true
        }
    })
}

//test send functions
function groupDiagPoints(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/groupDiagPoints.png'});
}

function drillOpeningChat(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/drillOpeningChat.png'});
}

function startOfDrillList(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/startOfDrill.png'});
}

function preparationList(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/preparationsList.png'});
}

function fireGroundsRules(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/fireGroundsRules.png'});
}

function kapak3(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/kapak3.png'});
}

function endOfDayList(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/endOfDay.png'});
}

function safetyRolesTable(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/safetyList.png'});
}

function xtremeCold(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/xtremeCold.png'});
}

function xtremeHeat(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/xtremeHeat.png'});
}

function conclusionEndOfDrill(chatId)
{
    bot.telegram.sendPhoto(chatId, {source: 'Media/Images/badah/drillConclusion.png'});
}

module.exports = {badahsMenu, groupDiagPoints, drillOpeningChat, startOfDrillList, preparationList, fireGroundsRules, kapak3, endOfDayList,
                    safetyRolesTable, xtremeHeat, xtremeCold, conclusionEndOfDrill};