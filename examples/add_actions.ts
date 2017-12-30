import { Action, TelegramActions } from './../index';

const token = process.env.TOKEN || '';
const bot = new TelegramActions(token, true);

let newAction: Action = {
    regexp: /receive/,
    callback: (msg, match, bot) => {
        bot.sendMessage(msg.chat.id, 'Message Receive');
    }
}

bot.addActions([newAction]);
bot.start();