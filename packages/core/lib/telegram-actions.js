"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TelegramBot = require("node-telegram-bot-api");
const actions_1 = require("./actions");
class TelegramActions extends TelegramBot {
    constructor(token, addDefaultActions = true, options = {}) {
        super(token, options);
        this.token = token;
        this.addDefaultActions = addDefaultActions;
        this.options = options;
        this.actions = [];
        if (this.addDefaultActions) {
            this.addActions(actions_1.defaultActions);
        }
    }
    enableActions() {
        this.createActions();
    }
    addActions(actions) {
        this.actions = [...this.actions, ...actions];
    }
    createActions() {
        this.actions.forEach((action) => {
            this.onText(action.regexp, (msg) => {
                action.callback(msg, this);
            });
        });
    }
}
exports.TelegramActions = TelegramActions;
//# sourceMappingURL=telegram-actions.js.map