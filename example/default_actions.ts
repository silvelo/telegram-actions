import { TelegramActions, Telegram } from './../index';


const actions = new TelegramActions(true);
const token = process.env.TOKEN || '';

const bot = new Telegram(token);
bot.start(actions);