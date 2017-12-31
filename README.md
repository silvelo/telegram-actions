# Telegram Actions

[![CircleCI](https://circleci.com/gh/silvelo/telegram-actions/tree/transmission-actions.svg?style=svg)](https://circleci.com/gh/silvelo/telegram-actions/tree/transmission-actions)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/silvelo)

Control your Telegram bot with comands.

__Install__

```bash
npm install node-telegram-bot-api telegram-actions --save
npm install @types/node-telegram-bot-api --save-dev
```

Example
------------
```typescript
import { TelegramActions, Action } from 'telegram-actions';

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
* Transmission Actions

    > To use this actions you should install transmission package.

```
npm install --save transmission
```
Issues
------

Feel free to submit issues and enhancement requests.

Contributing
------------

Please refer to each project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

Donation
--------
If this project help you reduce time to develop, you can give me a cup of coffee :)

## License

**The MIT License (MIT)**

Copyright © 2017 Silvelo