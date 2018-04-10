"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child = require("child_process");
const excuteCommand = (msg, bot) => {
    if (msg && msg.text) {
        const messageArray = msg.text.split(' ');
        messageArray.shift();
        try {
            const output = child.execSync(messageArray.join(' ')).toString();
            bot.sendMessage(msg.chat.id, output);
        }
        catch (error) {
            bot.sendMessage(msg.chat.id, JSON.stringify(error));
        }
    }
};
const actions = [
    {
        callback: excuteCommand,
        regexp: /^execute/,
    },
];
exports.default = actions;
//# sourceMappingURL=system-actions.js.map