
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var consign = require('consign')
var helmet = require('helmet')
var compression = require('compression')
var cors = require('cors')

app.set('view engine', 'ejs')
app.set('views', 'app/views');
app.use(express.static('app/static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet())
app.use(compression())
app.use(cors())

consign({ verbose: false })
    .include('app/src/controller')
    .into(app)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

module.exports = app;