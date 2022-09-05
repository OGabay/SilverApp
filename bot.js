const {Telegraf} = require('telegraf');

const bot = new Telegraf('5649257979:AAE5MFMRszRdSgTVvR7o7EYOMjnVaa4LN3M');
var welcomeMessage;


//Bot start command
bot.command("start", ctx =>
{
    bot.telegram.sendMessage(ctx.chat.id, welcomeMessage, {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'בדחים'},
                    {text: 'חומר מקצועי'}
                ]
            ],
            resize_keyboard: true
        }
    })
})

//Main menu cluse
bot.hears('ראשי', ctx => { 
    bot.telegram.sendMessage(ctx.chat.id, "מסך ראשי", {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'בדחים'},
                    {text: 'חומר מקצועי'}
                ]
            ],
            resize_keyboard: true
        }
    })
})

//Main בדחים menu
bot.hears(['בדחים', 'חזרה לבדחים'], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "בדחים", {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'דחדח'},
                ],
                [
                    {text: 'ראשי'},
                ],
            ],
            resize_keyboard: true
        }
    })
})

//Main חומר מקצועי menu
bot.hears(['חומר מקצועי', 'חזרה לחומר מקצועי'], ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "חומר מקצועי", {
        reply_markup:
        {
            keyboard:
            [
                [
                    {text: 'חבלה'},
                ],
                [
                    {text: 'מיקוש'},
                    {text: 'רק"ם ואמס"פ'},
                ],
                [
                    {text: 'ראשי'},
                ],
            ],
            resize_keyboard: true
        }
    })
})

//Messages
welcomeMessage = "שלום וברוכים הבאים לסילבראפ של ענף הנדסה מלי 500\n באפליקציה זו תוכלו למצוא תשובות לשאלות מקצועיות ובטיחותיות\n הניווט מתבצע בעזרת הכפתורים בתחתית המסך";
bot.launch();