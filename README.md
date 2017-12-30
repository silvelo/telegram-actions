# Telegram Actions

__Install__

```bash
npm install node-telegram-bot-api telegram-actions --save
npm install @types/node-telegram-bot-api --save-dev
```

## Example

```typescript
import { TelegramActions, Telegram, Action } from 'telegram-actions';

const actions = new TelegramActions(true);
const token = process.env.TOKEN || '';

const bot = new Telegram(token);
bot.start(actions);
```

## Reference

- Action: Action interface

- Telegram
    - constructor(token)
    - start(TelegramActions)

- TelegramActions
    - constructor(boolean)
    - addActions(Action[])

