import { IAction, TelegramActions } from '@telegram-actions/core';
import { systemActions } from '@telegram-actions/system';

const token = process.env.TOKEN || '';

const telegramActions = new TelegramActions(token, true);

telegramActions.addActions(systemActions);
telegramActions.start();
