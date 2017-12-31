import * as TelegramBot from 'node-telegram-bot-api';

export interface IAction {
    regexp: RegExp;
    callback: (msg: TelegramBot.Message, match: RegExpExecArray | null, bot: TelegramBot) => void;
}

export interface ITransmissionConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    ssl: boolean;
    url: string;
}
