const express = require('express');

const app = express();

app.use(express.static('./dist/myNewApp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/myNewApp/'}),
);

app.listen(process.env.PORT || 8080);
console.log('Deploy Success!!')