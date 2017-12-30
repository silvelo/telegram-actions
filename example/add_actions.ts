import { Action, TelegramActions, Telegram } from './../index';

let newAction: Action = {
    regexp: /receive/,
    callback: (msg, match, bot) => {
        bot.sendMessage(msg.chat.id, 'Message Receive');
    }
}

const actions = new TelegramActions(true);
actions.addActions([newAction]);
const token = process.env.TOKEN || '';

const bot = new Telegram(token);
bot.start(actions);