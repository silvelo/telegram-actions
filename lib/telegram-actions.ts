import { Action } from './types';
import * as TelegramBot from 'node-telegram-bot-api';
import defaultActions from './actions/default-actions';
export class TelegramActions {
    private bot: TelegramBot;
    private actions: Action[] = [];

    constructor(private token: string, private addDefaultActions?: boolean) {
        if (addDefaultActions) {
            this.addActions(defaultActions);
        }
    }

    start() {
        this.bot = new TelegramBot(this.token, { polling: true });
        this.createActions();
    }

    addActions(actions: Action[]) {
        this.actions = [...this.actions, ...actions];
    }

    private createActions() {
        this.actions.forEach(action => {
            this.bot.onText(action.regexp, (msg, match) => action.callback(msg, match, this.bot));
        })
    }
}