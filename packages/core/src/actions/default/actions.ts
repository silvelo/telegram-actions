import { IAction } from './../../types';

const actions: IAction[] = [
    {
        callback: (msg, bot) => {
            const chatId = msg.chat.id;
            const text = msg.text || '';
            bot.sendMessage(chatId, text);
        },
        regexp: /^echo/,
    },
];
export default actions;
