const TelegramBot = require('7621477076:AAFpUiXkgn4-KeMmlZw1-9nVNHJozTOfNX4');

// Your bot token from BotFather
const token = 'YOUR_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// When user sends /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const webAppUrl = 'https://ashilara2007.github.io/telegram-mini-app/'; // <- Your Mini App URL

    bot.sendMessage(chatId, 'Click the button below to open the Mini App!', {
        reply_markup: {
            keyboard: [
                [
                    {
                        text: '🚀 Open Mini App',
                        web_app: { url: webAppUrl }
                    }
                ]
            ],
            resize_keyboard: true
        }
    });
});
