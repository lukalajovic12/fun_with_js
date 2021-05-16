const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send( await readFile('./index.html', 'utf8') );
});

app.get('/dialog_box', async (request, response) => {
    response.send( await readFile('./dialog_box.html', 'utf8') );
});

app.get('/game', async (request, response) => {
    response.send( await readFile('./game.html', 'utf8') );
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))

