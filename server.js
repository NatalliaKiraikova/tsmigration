var express = require('express'),
    app = express();

//var Parser = require('./parser');
//var parser = new Parser();
//parser.getAll();

// Load the fs (filesystem) module.
var fs = require('fs');
var usersInfo;
// Read the contents of the file into memory.
fs.readFile('./parser/users.json', function (err, logData) {

    // If an error occurred, throwing it will
    // display the exception and kill our app.
    if (err) throw err;

    usersInfo = logData.toString();
    console.log("textFromJSON", usersInfo);
});

//app.use(express.static(__dirname + '/public'));

app.use('/users', function (req, res) {
    res.send(usersInfo);
});

app.get('/', function (req, res) {
    res.send('New nodejs server!');
});

app.listen(3000);

console.log('Server running on port 3000.');