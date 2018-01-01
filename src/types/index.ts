import * as TelegramBot from 'node-telegram-bot-api';

export interface IAction {
    regexp: RegExp;
    callback: (msg: TelegramBot.Message, match: RegExpExecArray | null, bot: TelegramBot) => void;
}
