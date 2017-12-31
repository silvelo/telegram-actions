import { IAction, TelegramActions, transmissionActions } from './../index';

const token = process.env.TOKEN || '';

const telegramActions = new TelegramActions(token, true);

telegramActions.addActions(transmissionActions);
telegramActions.start();
