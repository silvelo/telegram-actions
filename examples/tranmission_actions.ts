import { IAction, TelegramActions } from 'telegram-actions';
import { transmissionActions } from 'telegram-actions/dist/actions/transmission';

const token = process.env.TOKEN || '';

const telegramActions = new TelegramActions(token, true);

telegramActions.addActions(transmissionActions);
telegramActions.start();
