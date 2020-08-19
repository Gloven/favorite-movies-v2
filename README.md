
Favorite movies (v2)
========================

Full stack app (MongoDB + NodeJs + React)
__________________________

#### RUN DEV SERVER

```bash
    cd ./favorite-movies-be
    cp ./config.sample ./default.json
    npm i
```
you should change config before run server => `./favorite-movies-be/config/default.json` 
Change `mongoUri` field (create DB => `https://cloud.mongodb.com/`)

```bash
    npm run server
```


# RUN DEV CLIENT

```bash
    cd ./favorite-movies-fe
    cp ./src/config.sample ./src/config.js
    npm i
    npm run dev
```

Open in browser http://localhost:8000/
