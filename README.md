# Telegram Actions

Control your Telegram bot with comands.

__Install__

```bash
npm install node-telegram-bot-api telegram-actions --save
npm install @types/node-telegram-bot-api --save-dev
```

## Example

```typescript
import { TelegramActions, Action } from 'telegram-actions';

const token = process.env.TOKEN || '';
const bot = new TelegramActions(token, true);
bot.start();
```

More [examples](https://github.com/silvelo/telegram-actions/tree/master/examples)

## Reference

- Action: Action interface

- TelegramActions
    - constructor(token, defaultActions)
    - start(TelegramActions)
    - addActions(Action[])


## License

**The MIT License (MIT)**

Copyright © 2017 Silvelo