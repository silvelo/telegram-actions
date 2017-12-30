#Example

Install Dev 

```bash
npm install node-telegram-bot-api --save
npm install @types/node-telegram-bot-api --save-dev
```

Install 

```bash
npm install --save telegram-actions
```

Use it

```typescript
import { TelegramActions, Telegram, Action } from 'telegram-actions';

const actions = new TelegramActions(true);
const token = process.env.TOKEN || '';

const bot = new Telegram(token);
bot.start(actions);
```

- Action: Action interface

- Telegram Actions: Create actions instance.

- Telegram : Create a new bot instance