import * as TelegramBot from 'node-telegram-bot-api';
import { Action } from './types';
import defaultActions from './actions/default-actions';

export class TelegramActions {
    private actions: Action[] = [];

    constructor(private addDefaultActions?: boolean) {
        if (addDefaultActions) {
            this.addActions(defaultActions);
        }
    }

    addActions(actions: Action[]) {
        this.actions = [...this.actions, ...actions];
    }

    getActions(): Action[] {
        return this.actions;
    }
}