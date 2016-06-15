var express = require('express');
var app = express();

app.use(express.static('src/static'));

app.listen(process.env.PORT || 8091);
