import { IAction, TelegramActions } from './../index';

const token = process.env.TOKEN || '';
const telegramActions = new TelegramActions(token, true);
telegramActions.start();
