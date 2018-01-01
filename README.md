# Telegram Actions

[![CircleCI](https://circleci.com/gh/silvelo/telegram-actions/tree/transmission-actions.svg?style=svg)](https://circleci.com/gh/silvelo/telegram-actions/tree/transmission-actions)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/silvelo)

Control your Telegram bot with comands.

__Install__

```bash
npm install telegram-actions --save
```

Example
------------
```typescript
import { TelegramActions, IAction } from 'telegram-actions';

const token = process.env.TOKEN || '';
const bot = new TelegramActions(token, true);
bot.start();
```

More [examples](https://github.com/silvelo/telegram-actions/tree/master/examples)

Reference
------------
- Action: Action interface

- TelegramActions
    - constructor(token, defaultActions)
    - start(TelegramActions)
    - addActions(Action[])


* defaultActions: The default action is echo function. If you write echo .... the bot response with the same message.

Extra Actions
------------
You can found configure [Wiki](https://github.com/silvelo/telegram-actions/wiki).


Donation
--------
If this project help you reduce time to develop, you can give me a cup of coffee :)

## License

**The MIT License (MIT)**

Copyright © 2017 Silvelo