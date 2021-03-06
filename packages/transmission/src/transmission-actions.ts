import { IAction } from '@telegram-actions/core';
import * as Transmission from 'transmission';

const configPath = process.env.TRANSMISSION_PATH;
let transmission;
let watchDir = '';

async function loadFileConfig() {
    if (configPath) {
        return await import(configPath);
    }
    return {};
}

async function loadConfig() {
    let defaultConfig = {};
    try {
        defaultConfig = await loadFileConfig();
    } catch (e) {
        console.error(`Transmission config can't be load: ${e.message}`);
    }
    const transmissionConfig = process.env.TRANSMISSION_CONFIG || defaultConfig;
    transmission = new Transmission(transmissionConfig);

    transmission.session((err, args) => {
        watchDir = args && args['incomplete-dir'];
    });
}

loadConfig();

const validateConnection = (err, msg, bot) => {
    const result = err.result && JSON.parse(err.result).result || err.code;
    bot.sendMessage(msg.chat.id, result);
};

const listTorrents = (msg, bot) => {
    const bytes = 1024;
    const ms = 1000;
    transmission.get((err, arg) => {
        if (err) {
            validateConnection(err, msg, bot);
            return;
        }
        let header = '*ID - Added Date - Done - Size*';
        arg.torrents.forEach((torrent) => {
            header += `\n ${torrent.id} - ${new Date(torrent.addedDate * ms).toLocaleString()}\
             - ${torrent.percentDone} % - ${Math.floor(torrent.totalSize / bytes)} kB`;
        });

        bot.sendMessage(msg.chat.id, header, { parse_mode: 'Markdown' });
    });
};

const addTorrent = (msg, bot) => {
    const urlPos = 2;
    const url = (msg.text as string).split(' ')[urlPos];
    transmission.addUrl(url, (err, args) => {
        if (err) {
            validateConnection(err, msg, bot);
            return;
        }
        bot.sendMessage(msg.chat.id, args.id);
    });
};

const addTorrentFile = (msg, bot) => {
    bot.sendMessage(msg.chat.id, 'Now send file');
    bot.on('document', async (args) => {
        bot.sendMessage(msg.chat.id, 'Downloading File....');
        const download = await bot.downloadFile(args.document.file_id, watchDir);
        bot.removeAllListeners('document');
        bot.sendMessage(msg.chat.id, ` File downloaded in : ${download}`);
    });
};

const actions: IAction[] = [
    {
        callback: listTorrents,
        regexp: /^transmission status$/,

    },
    {
        callback: addTorrent,
        regexp: /^transmission add/,

    },
    {
        callback: addTorrentFile,
        regexp: /^transmission file$/,
    },
];

export default actions;
