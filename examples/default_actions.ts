import { IAction, TelegramActions } from '@telegram-actions/core';

const token = process.env.TOKEN || '';
const telegramActions = new TelegramActions(token, true);
telegramActions.start();
