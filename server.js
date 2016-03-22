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
    res.json(parser.getAllViolationsFromDatabase());
});
//http://localhost:3000/suggestions-from-database-by-str/?str='a'
app.get('/suggestions-from-database-by-str', function (req, res) {
    var str = req.query.str;
    res.json(parser.getSuggestionsFromDatabaseByStr(str));
});


//http://localhost:3000/violations-from-database-by-period/?startDate=1456402158936&endDate=1458216558936

app.get('/violations-from-database-by-period/', function (req, res) {
   //read parameters from query string
    var startDate = req.query.startDate
    var endDate = req.query.endDate;

   /* var startDate = (new Date()).getTime();
    var weekInMsec = 604800000;
    var endDate = now - (weekInMsec * 3);*/

    res.json(parser.getViolationsFromDatabaseByPeriod(startDate, endDate));
});

//http://localhost:3000/names-from-violations-by-period/?startDate=1456402158936&endDate=1458216558936
app.get('/names-from-violations-by-period', function (req, res) {
    //read parameters from query string
    var startDate = req.query.startDate
    var endDate = req.query.endDate;

    res.json(parser.getNamesFromViolationsFromDatabaseByPeriod(startDate, endDate));
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