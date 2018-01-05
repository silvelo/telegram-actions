# Transmission Actions


## Available Expression
- __transmission status__ : List all torrents and show basic info.

![alt text](http://res.cloudinary.com/arturosilvelo/image/upload/v1515169185/Telegram-actions/transmission/status_zoanzr.jpg)

- __transmission add__ [magnet_link]: Add the magnet link to transmission.

![alt text](http://res.cloudinary.com/arturosilvelo/image/upload/v1515169242/Telegram-actions/transmission/link_ds6dbx.jpg)

- __transmission file__ : Add torrent file.

![alt text](http://res.cloudinary.com/arturosilvelo/image/upload/v1515169209/Telegram-actions/transmission/file_kaqobv.jpg)


## Edit transmission [settings.json](https://github.com/transmission/transmission/wiki/Configuration-Files)

To add file torrents, first you need to edit transmission settings config.

- Edit **incomplete-dir** and **watch-dir** properties with same path.
- Edit **incomplete-dir-enabled** and **watch-dir-enabled** properties to true.

Now you can add files and automatically will be load.

## Transmission settings

If you need to change settings of transmission you can set it by this ways:
- Set **TRANSMISSION_PATH** enviroment variable with the absolute path to json config.
- Set **TRANSMISSION_CONFIG** enviroment variable with the configure. (not recommended)


The interface of configure is:

> Only the keys in configure will be overwrite.

```typescript
interface ITransmissionConfig {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    ssl?: boolean;
    url?: string;
}
```
