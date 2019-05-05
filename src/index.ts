import TelegramBot from "node-telegram-bot-api";
import _ from "lodash";
import Config from "./config";


const bot = new TelegramBot(Config.get('telegram_bot:token'),{polling: true});
const stubText = Config.get('text');
const masters = Config.get('telegram_bot:masters');

if (!stubText) process.exit(-1);

// Start broadcasting
_.each(masters, (masterId) => {
    bot.sendMessage(masterId, stubText).then(
        (msg) => {console.log('Message to '+ msg.chat.id + ' with stubText delivered')},
        (err) => {console.log('Message to '+ masterId +' is not delivered with error: "' + err.message + '"')}
    );
});

// On somebody write a message
bot.on('message', (reqMsg) => {
    console.log('Request from ' + reqMsg.chat.id + ' with message "'+ reqMsg.text + '" received');
    bot.sendMessage(reqMsg.chat.id, stubText).then((resMsg) => {
        console.log('Response to ' + resMsg.chat.id + ' with stubText delivered');
    });
});
