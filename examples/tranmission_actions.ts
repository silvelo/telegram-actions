import { Action, TelegramActions, transmissionActions } from './../index';

/* const token = process.env.TOKEN || ''; */
const token = '362906191:AAHBvXkgNZlkgaPdqwcQoRNs6Pds8Xmm2pY';
const bot = new TelegramActions(token, true);


bot.addActions(transmissionActions);
bot.start();