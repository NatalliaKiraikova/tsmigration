var express = require('express'),
    app = express();

var Parser = require('./parser');
var parser = new Parser();

app.get('/violations', function (req, res) {
    res.json(parser.getViolations());
});

app.use('/database', function (reg, res) {
    res.json(parser.getDatabase());
});

app.get('/violations-from-database', function (req, res) {
    res.json(parser.getViolationsFromDatabase());
});

app.get('/', function (req, res) {
    res.send('New nodejs server!');
});

app.listen(3000);

console.log('Server running on port 3000.');