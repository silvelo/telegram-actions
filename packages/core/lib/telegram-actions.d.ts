/// <reference types="node-telegram-bot-api" />
import * as TelegramBot from 'node-telegram-bot-api';
import { IAction } from './types';
export declare class TelegramActions extends TelegramBot {
    private token;
    private addDefaultActions;
    private options;
    private actions;
    constructor(token: string, addDefaultActions?: boolean, options?: TelegramBot.ConstructorOptions);
    enableActions(): void;
    addActions(actions: IAction[]): void;
    private createActions();
}
