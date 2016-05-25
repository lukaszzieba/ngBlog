var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    jwt = require('express-jwt'),
    config = require('./config/config.js'),
    favicon = require('serve-favicon');

var app = express();

app.use(express.static(config.rootPath + '/client'));
app.use(favicon(config.rootPath + '/client/images/favicon.png'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(require('./config/routes.js'));

// Public API
var publicRespnese = 'Puclic responesse ;)'
app.get('/api/public', function(req, res) {
    res.status(200).send(publicRespnese);
});

// Protected API
var protectedRespnese = 'PROTECTED RESPONSE ;)';
var jwtCheck = jwt({
    secret: config.secret
});
app.get('/api/protected', jwtCheck, function(req, res) {
    res.status(200).send(protectedRespnese);
});

app.listen(config.port, function() {
    console.log('Listening on port ' + config.port);
});
