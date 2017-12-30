import { Action, TelegramActions } from './../index';

const token = process.env.TOKEN || '';
const bot = new TelegramActions(token, true);
bot.start();