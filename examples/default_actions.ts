import { IAction, TelegramActions } from 'telegram-actions';

const token = process.env.TOKEN || '';
const telegramActions = new TelegramActions(token, true);
telegramActions.start();
