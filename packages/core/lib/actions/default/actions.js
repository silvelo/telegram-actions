"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions = [
    {
        callback: (msg, bot) => {
            const chatId = msg.chat.id;
            const text = msg.text || '';
            bot.sendMessage(chatId, text);
        },
        regexp: /^echo/,
    },
];
exports.default = actions;
//# sourceMappingURL=actions.js.map