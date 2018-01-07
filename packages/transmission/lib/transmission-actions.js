"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transmission = require("transmission");
const configPath = process.env.TRANSMISSION_PATH;
let transmission;
let watchDir = '';
function loadFileConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        if (configPath) {
            return yield Promise.resolve().then(() => require(configPath));
        }
        return {};
    });
}
function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        let defaultConfig = {};
        try {
            defaultConfig = yield loadFileConfig();
        }
        catch (e) {
            console.error(`Transmission config can't be load: ${e.message}`);
        }
        const transmissionConfig = process.env.TRANSMISSION_CONFIG || defaultConfig;
        transmission = new Transmission(transmissionConfig);
        transmission.session((err, args) => {
            watchDir = args && args['incomplete-dir'];
        });
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
    const url = msg.text.split(' ')[urlPos];
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
    bot.on('document', (args) => __awaiter(this, void 0, void 0, function* () {
        bot.sendMessage(msg.chat.id, 'Downloading File....');
        const download = yield bot.downloadFile(args.document.file_id, watchDir);
        bot.removeAllListeners('document');
        bot.sendMessage(msg.chat.id, ` File downloaded in : ${download}`);
    }));
};
const actions = [
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
exports.default = actions;
//# sourceMappingURL=transmission-actions.js.map