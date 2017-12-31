import { Action } from './../types';

const actions: Action[] = [
    {
        regexp: /echo/,
        callback: (msg, match, bot) => {
            const chatId = msg.chat.id;
            const text = msg.text || '';
            bot.sendMessage(chatId, text);
        },
    },
];
export default actions;
