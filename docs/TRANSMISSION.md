First you need to install transmission package.

> The main program doesnt include to avoid add antoher dependency.

```
npm install transmission
```

After that you can add transmission actions to program, the default actions are:
    
- __transmission status__ : List all torrents and show basic info.
- __transmission add__ [magnet_link]: Add the magnet link to transmission.
- __transmission file__ : Add torrent file.

Add File Configure
------
To use add file torrents you must enabled and edit **incomplete-dir** and **watch-dir** properties on settings.json. The **incomplete-dir**  and **watch-dir** will be same path. The torrent file will download is that path and transmission load automatically.

Transmission settings
------------
If you need to change settings of transmission you can set it by this ways:
- To add configure byt enviroment only need set TRANSMISSION_CONFIG variable.
- To add configure by json file only need to set TRANSMISSION_PATH variable.

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