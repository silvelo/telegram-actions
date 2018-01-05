"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TelegramBot = require("node-telegram-bot-api");
var actions_1 = require("./actions");
var TelegramActions = /** @class */ (function () {
    function TelegramActions(token, addDefaultActions) {
        this.token = token;
        this.addDefaultActions = addDefaultActions;
        this.actions = [];
        if (this.addDefaultActions) {
            this.addActions(actions_1.defaultActions);
        }
    }
    TelegramActions.prototype.start = function () {
        this.bot = new TelegramBot(this.token, { polling: true });
        this.createActions();
    };
    TelegramActions.prototype.addActions = function (actions) {
        this.actions = this.actions.concat(actions);
    };
    TelegramActions.prototype.createActions = function () {
        var _this = this;
        this.actions.forEach(function (action) {
            _this.bot.onText(action.regexp, function (msg) {
                action.callback(msg, _this.bot);
            });
        });
    };
    return TelegramActions;
}());
exports.TelegramActions = TelegramActions;
//# sourceMappingURL=telegram-actions.js.map