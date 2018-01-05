"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions = [
    {
        callback: function (msg, bot) {
            var chatId = msg.chat.id;
            var text = msg.text || '';
            bot.sendMessage(chatId, text);
        },
        regexp: /^echo/,
    },
];
exports.default = actions;
//# sourceMappingURL=actions.js.map