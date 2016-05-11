var express = require('express'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/../'),
    app = express();

app.use(express.static(rootPath + '/client'));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
