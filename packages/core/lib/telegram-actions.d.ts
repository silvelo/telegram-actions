import { IAction } from './types';
export declare class TelegramActions {
    private token;
    private addDefaultActions;
    private bot;
    private actions;
    constructor(token: string, addDefaultActions?: boolean | undefined);
    start(): void;
    addActions(actions: IAction[]): void;
    private createActions();
}
