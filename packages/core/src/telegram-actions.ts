import * as TelegramBot from 'node-telegram-bot-api';
import { defaultActions } from './actions';
import { IAction } from './types';

export class TelegramActions extends TelegramBot {
    private actions: IAction[] = [];

    constructor(
        private token: string,
        private addDefaultActions: boolean = true,
        private options: TelegramBot.ConstructorOptions = {},
    ) {
        super(token, options);
        if (this.addDefaultActions) {
            this.addActions(defaultActions);
        }
    }

    public enableActions() {
        this.createActions();
    }

    public addActions(actions: IAction[]) {
        this.actions = [...this.actions, ...actions];
    }

    private createActions() {
        this.actions.forEach((action) => {
            this.onText(action.regexp, (msg) => {
                action.callback(msg, this);
            });
        });
    }
}
