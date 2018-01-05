# Telegram Actions

[![CircleCI](https://circleci.com/gh/silvelo/telegram-actions.svg?&style=shield)](https://circleci.com/gh/silvelo/telegram-actions/tree/transmission-actions)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/silvelo)

Control your Telegram bot with comands.

__Install__

```bash
npm install @telegram-actions/core --save
```

Example
------------
```typescript
import { IAction, TelegramActions } from '@telegram-actions/core';

const token = process.env.TOKEN || '';
const telegramActions = new TelegramActions(token, true);
telegramActions.start();
```

> Note: Remember define bot token.[more info](https://telegram.me/botfather)


More [examples](https://github.com/silvelo/telegram-actions/blob/master/examples)

## [Default Actions](https://github.com/silvelo/telegram-actions/blob/master/docs)


Donation
--------
If this project help you reduce time to develop, you can give me a cup of coffee :)

## License

**The MIT License (MIT)**

Copyright © 2017 Silvelo