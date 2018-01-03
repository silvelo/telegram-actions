import { IAction, TelegramActions } from '@telegram-actions/core';

const token = process.env.TOKEN || '';
const telegramActions = new TelegramActions(token, true);

const newAction: IAction = {
    regexp: /receive/,
    callback: (msg, bot) => {
        bot.sendMessage(msg.chat.id, 'Message Receive');
    },
};

telegramActions.addActions([newAction]);
telegramActions.start();
