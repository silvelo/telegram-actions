import { TelegramActions } from './telegram-actions';
import { Action } from './types';
import * as TelegramBot from 'node-telegram-bot-api';

export class Telegram {
    private bot: TelegramBot;

    constructor(private token: string) { }

    start(actions: TelegramActions) {
        this.bot = new TelegramBot(this.token, { polling: true });
        this.createActions(actions.getActions());
    }

    private createActions(actions: Action[]) {
        actions.forEach(action => {
            this.bot.onText(action.regexp, (msg, match) => action.callback(msg, match, this.bot));
        })
    }
}