import { truncate } from 'fs';
import * as Transmission from 'transmission';
import { IAction } from './../types';

const transmission = new Transmission();

const actions: IAction[] = [
    {
        regexp: /transmission status/,
        callback: (msg, match, bot) => {
            const bytes = 1024;
            const ms = 1000;
            transmission.get((err, arg) => {
                if (err) {
                    const result = JSON.parse(err.result).result;
                    bot.sendMessage(msg.chat.id, result);
                    return;
                }
                let header = '*ID - Added Date - Done - Size*';
                arg.torrents.forEach((torrent) => {
                    header += `\n ${torrent.id} - ${new Date(torrent.addedDate * ms).toLocaleString()}\
                     - ${torrent.percentDone} % - ${Math.floor(torrent.totalSize / bytes)} kB`;
                });

                bot.sendMessage(msg.chat.id, header, { parse_mode: 'Markdown' });
            });
        },
    },
    {
        regexp: /transmission add/,
        callback: (msg, match, bot) => {
            const urlPos = 2;
            const url = (msg.text as string).split(' ')[urlPos];
            transmission.addUrl(url, (err, args) => {
                if (err) {
                    const result = JSON.parse(err.result).result;
                    bot.sendMessage(msg.chat.id, result);
                    return;
                }
                bot.sendMessage(msg.chat.id, args.id);
            });
        },
    },
];

export default actions;
