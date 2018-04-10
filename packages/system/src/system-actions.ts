import { IAction } from '@telegram-actions/core';
import * as child from 'child_process';
import * as TelegramBot from 'node-telegram-bot-api';

const excuteCommand = (msg: TelegramBot.Message, bot: TelegramBot) => {
    if (msg && msg.text) {
        const messageArray = msg.text.split(' ');
        messageArray.shift();
        try {
            const output = child.execSync(messageArray.join(' ')).toString();
            bot.sendMessage(msg.chat.id, output);
        } catch (error) {
            bot.sendMessage(msg.chat.id, JSON.stringify(error));
        }

    }
};

const actions: IAction[] = [
    {
        callback: excuteCommand,
        regexp: /^execute/,
    },
];

export default actions;
