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
const chai_1 = require("chai");
const TelegramTest = require("telegram-test");
const _1 = require("../");
const token = process.env.BOT_TOKEN || '';
const telegramActions = new _1.TelegramActions(token);
telegramActions.enableActions();
describe('Testing Telegram Actions', () => {
    const telegramTest = new TelegramTest(telegramActions);
    const testChat = 1;
    it('Test echo', () => __awaiter(this, void 0, void 0, function* () {
        const message = 'echo test';
        const data = yield telegramTest.sendUpdate(testChat, message);
        return chai_1.expect(data.text).to.equal(message);
    }));
});
//# sourceMappingURL=index.js.map