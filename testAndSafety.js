const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const chatId = 1746153600;
const path = require('path');
const directory = './Texts/TestsNSafety/';
const readdirSorted = require('readdir-sorted');


var testsAndSafety = ["מבחנים ובטיחות"], mainMenu = "ראשי", textReader = [""];

//menu
function testsAndSafetyMenu()
{
    bot.telegram.sendMessage(chatId, testsAndSafety[0],{
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: "גדוד 7086"},
                    {text: 'גדוד 924'},
                    {text: "גדוד 8173"},
                    {text: "גדוד 710"},
                ],
                [
                    {text: "גדוד 7071"},
                    {text: 'גדוד 5280'},
                    {text: "גדוד 271"},
                    {text: "גדוד 8219"},
                ],
                [
                    {text: "גדוד 749"},
                    {text: 'גדוד 9227'},
                    {text: "גדוד 8170"},
                    {text: "גדוד"},
                ],
                [
                    {text: mainMenu}
                ]
            ],
            resize_keyboard: true
        }
    })
}

fs.readdir(directory, (err, files) => {
    let n = 0;
    for (let i = 0; i <files.length; i++)
    {
        console.log(files[i]);
        fs.readFile(directory + files[i], 'utf8', (err, text) => {
            if (err) {console.error(err); return;}
            textReader[i] = text;
            console.log(textReader[i]);   
            });
    }
  });
    
//test send functions
function gdud7086()
{
    bot.telegram.sendMessage(chatId, textReader[0]);
}

function gdud924()
{
    bot.telegram.sendMessage(chatId, textReader[1]);
}

function gdud8173()
{
    bot.telegram.sendMessage(chatId, textReader[2]);
}

function gdud710()
{
    bot.telegram.sendMessage(chatId, textReader[3]);
}

function gdud7071()
{
    bot.telegram.sendMessage(chatId, textReader[4]);
}

function gdud5280()
{
    bot.telegram.sendMessage(chatId, textReader[5]);
}

function gdud271()
{
    bot.telegram.sendMessage(chatId, textReader[6]);
}

function gdud8219()
{
    bot.telegram.sendMessage(chatId, textReader[7]);
}

function gdud749()
{
    bot.telegram.sendMessage(chatId, textReader[8]);
}

function gdud9227()
{
    bot.telegram.sendMessage(chatId, textReader[9]);
}

function gdud8170()
{
    bot.telegram.sendMessage(chatId, textReader[10]);
}


module.exports = {testsAndSafetyMenu, gdud7086, gdud924, gdud8173, gdud710, gdud7071, gdud5280, gdud271, gdud8219, gdud749, gdud9227, gdud8170};