let express = require('express');
let app = express();

console.log('Hello World');

const absolutePath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
    res.send(absolutePath);
});

module.exports = app;
