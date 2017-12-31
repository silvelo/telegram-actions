import * as promisify from 'es6-promisify';
import { truncate } from 'fs';
import * as Transmission from 'transmission';
import { Action } from './../types';

const transmission = new Transmission();

const actions: Action[] = [
    {
        regexp: /transmission status/,
        callback: (msg, match, bot) => {
            transmission.get((err, arg) => {
                if (err) {
                    const result = JSON.parse(err.result).result;
                    bot.sendMessage(msg.chat.id, result);
                    return;
                }
                let header = '*ID - Added Date - Done - Size*';
                arg.torrents.forEach((torrent) => {
                    header += `\n ${torrent.id} - ${new Date(torrent.addedDate * 1000).toLocaleString()} - ${torrent.percentDone} % - ${Math.floor(torrent.totalSize / 1024)} kB`;
                });

                bot.sendMessage(msg.chat.id, header, { parse_mode: 'Markdown' });
            });
        },
    },
    {
        regexp: /transmission add/,
        callback: (msg, match, bot) => {
            const url = (msg.text as String).split(' ')[2];
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