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

app.get('/populate-violations', function (req, res) {
    res.json(parser.populateViolationsWithDate());
});

app.get('/', function (req, res) {
    res.send('New nodejs server!');
});

app.use(express.static('node_modules'));
app.use(express.static('assets'));
app.use(express.static('public'));

app.listen(3000);

console.log('Server running on port 3000.');