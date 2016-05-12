var express = require('express'),
    _ = require('lodash'),
    config = require('./config'),
    jwt = require('jsonwebtoken'),
    data = require(config.rootPath + '/server/data.json');

var app = express.Router();

app.get('/blog', function(req, res) {
    res.status(200).send(data);
});

app.get('/blog/:id', function(req, res) {
    var post = _.find(data, ['id', parseInt(req.params.id, 10)]);
    res.status(200).send(post);
})

// Will be Miongo DB or something else
var users = [{
    id: 1,
    email: 'finch',
    password: 'finch'
}];

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secret, {
        expiresIn: 9000000
    });
}

app.post('/register', function(req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }
    if (_.find(users, {
            username: req.body.email
        })) {
        return res.status(400).send("A user with that username already exists");
    }

    var profile = _.pick(req.body, 'email', 'password');
    profile.id = _.max(users, 'id').id + 1;

    users.push(profile);

    res.status(201).send({
        id_token: createToken(profile)
    });
});

app.post('/login', function(req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send("You must send the username and the password");
    }

    var user = _.find(users, {
        email: req.body.email
    });
    if (!user) {
        return res.status(401).send("The username or password don't match");
    }

    if (!user.password === req.body.password) {
        return res.status(401).send("The username or password don't match");
    }

    res.status(201).send({
        id_token: createToken(user)
    });
});

module.exports = app;
