import * as TelegramBot from 'node-telegram-bot-api';
import defaultActions from './actions/default-actions';
import { IAction } from './types';
export class TelegramActions {
    private bot: TelegramBot;
    private actions: IAction[] = [];

    constructor(private token: string, private addDefaultActions?: boolean) {
        if (addDefaultActions) {
            this.addActions(defaultActions);
        }
    }

    public start() {
        this.bot = new TelegramBot(this.token, { polling: true });
        this.createActions();
    }

    public addActions(actions: IAction[]) {
        this.actions = [...this.actions, ...actions];
    }

    private createActions() {
        this.actions.forEach((action) => {
            this.bot.onText(action.regexp, (msg, match) => {
                action.callback(msg, match, this.bot);
            });
        });
    }
}
