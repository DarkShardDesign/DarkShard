'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// first try to serve a static asset
app.use(express.static(path.resolve('/site')))

// if that fails server the index.html file
// and let the client app handle the routing
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);