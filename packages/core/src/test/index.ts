import { expect } from 'chai';
import * as TelegramTest from 'telegram-test';
import { TelegramActions } from '../';

const token = process.env.BOT_TOKEN || '';

const telegramActions = new TelegramActions(token);

telegramActions.enableActions();

describe('Testing Telegram Actions', () => {
    const telegramTest = new TelegramTest(telegramActions);
    const testChat = 1;
    it('Test echo', async () => {

        const message = 'echo test';

        const data = await telegramTest.sendUpdate(testChat, message);
        return expect(data.text).to.equal(message);
    });
});
