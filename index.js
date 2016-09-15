const express = require('express');
const serveStatic = require('serve-static');
const stringReplace = require('string-replace-middleware');

const port = 8080;
const app = express();

app.use(stringReplace({
    'business': 'party',
    'the way you do business': 'everything',
    'end': 'start',
    'end-to-end': 'Full stack'
}));

app.use(serveStatic('public'));

app.listen(port);
console.log(`Listening on http://localhost:${port}`);