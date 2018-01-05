import { IAction, TelegramActions } from '@telegram-actions/core';
import { transmissionActions } from '@telegram-actions/transmission';

const token = process.env.TOKEN || '';

const telegramActions = new TelegramActions(token, true);

telegramActions.addActions(transmissionActions);
telegramActions.start();
