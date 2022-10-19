const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
const fs = require('fs');
const util = require('util');
const { ParseMode } = require('messaging-api-telegram/dist/TelegramTypes');
const path = require('path');
const directory = './Texts/TestsNSafety/';


var testsAndSafety = ["מבחנים ובטיחות"], mainMenu = "ראשי", textReader = [""];

//menu
function testsAndSafetyMenu(chatId)
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
                    {text: "גדוד 7107"},
                ],
                [
                    {text: mainMenu}
                ]
            ],
            resize_keyboard: true
        }
    })
}

/*function readD()
{
    fs.readdir(directory, (err, files) => {
        let d = files;
        return d;
        /*for (let i = 0; i <files.length; i++)
        {
            d[i] = files[i];
            /*fs.readFile(directory + d[i], 'utf8', (err, text) => {
                if (err) {console.error(err); return;}
                textReader[i] = text;
                console.log(textReader[i]);   
                })     
        }
        
        })
    
}

function readF()
{
    let d = readD();
    console.log(d);
    /*for(let i = 0; i < d.length ; i++)
    {
        fs.readFile(directory + d[i], 'utf8', (err, text) => {
            if (err) {console.error(err); return;}
            textReader[i] = text;
            console.log(textReader[i]);   
            })   
    }
}*/

//file read 
fs.readFile(directory + "a - gdud7086.txt", 'utf8', (err, text) => { //7086
    if (err) {console.error(err); return;}
    textReader[0] = text;
    })   

fs.readFile(directory + "b - gdud924.txt", 'utf8', (err, text) => { //924
    if (err) {console.error(err); return;}
    textReader[1] = text;
    })   

fs.readFile(directory + "c - gdud8173.txt", 'utf8', (err, text) => { //8173
    if (err) {console.error(err); return;}
    textReader[2] = text;
    })   

fs.readFile(directory + "d - gdud710.txt", 'utf8', (err, text) => { //710
    if (err) {console.error(err); return;}
    textReader[3] = text;
    })   

fs.readFile(directory + "e - gdud7071.txt", 'utf8', (err, text) => { //7071
    if (err) {console.error(err); return;}
    textReader[4] = text;
    })   

fs.readFile(directory + "f - gdud5280.txt", 'utf8', (err, text) => { //5280
    if (err) {console.error(err); return;}
    textReader[5] = text;
    })   

fs.readFile(directory + "g - gdud271.txt", 'utf8', (err, text) => { //271
    if (err) {console.error(err); return;}
    textReader[6] = text;
    })   

fs.readFile(directory + "h - gdud8219.txt", 'utf8', (err, text) => { //8219
    if (err) {console.error(err); return;}
    textReader[7] = text;
    })   

fs.readFile(directory + "i - gdud749.txt", 'utf8', (err, text) => { //749
    if (err) {console.error(err); return;}
    textReader[8] = text;
    })   

fs.readFile(directory + "j - gdud9227.txt", 'utf8', (err, text) => { //9227
    if (err) {console.error(err); return;}
    textReader[9] = text;
    })   

fs.readFile(directory + "k - gdud8170.txt", 'utf8', (err, text) => { //8170
    if (err) {console.error(err); return;}
    textReader[10] = text;
    })   

fs.readFile(directory + "l - gdud7107.txt", 'utf8', (err, text) => { //7107
    if (err) {console.error(err); return;}
    textReader[11] = text;
    })   

//test send functions
function gdud7086(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[0]);
}

function gdud924(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[1]);
}

function gdud8173(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[2]);
}

function gdud710(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[3]);
}

function gdud7071(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[4]);
}

function gdud5280(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[5]);
}

function gdud271(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[6]);
}

function gdud8219(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[7]);
}

function gdud749(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[8]);
}

function gdud9227(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[9]);
}

function gdud8170(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[10]);
}

function gdud7107(chatId)
{
    bot.telegram.sendMessage(chatId, textReader[11]);
}


module.exports = {testsAndSafetyMenu, gdud7086, gdud924, gdud8173, gdud710, gdud7071, gdud5280, gdud271, gdud8219, gdud749, gdud9227, gdud8170, gdud7107};