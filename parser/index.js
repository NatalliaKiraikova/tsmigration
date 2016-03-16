var _ = require('lodash'),
    fs = require('fs');

var Utils = require('./utils');
var utils = new Utils();

var violations, database;

var Parser = function () {
    fs.readFile('./db/violations.json', function (err, data) {
        // If an error occurred, throwing it will
        // display the exception and kill our app.
        if (err) throw err;

        violations = parseLodash(data.toString());
        // console.log("violationsFromJSON", violations);
    });

    fs.readFile('./db/database.json', function (err, data) {
        if (err) throw err;
        database = JSON.parse(data.toString());
    });
};

function parseLodash(str) {
    return _.attempt(JSON.parse.bind(null, str));
}

Parser.prototype.getViolations = function () {
    return violations;
};

Parser.prototype.getDatabase = function () {
    return database;
};

Parser.prototype.getViolationsFromDatabase = function () {
    return utils.violationsFromDatabase(violations, database);
};

Parser.prototype.populateViolationsWithDate = function () {
    var populatedViolations = utils.populateViolationsWithDate(violations);
    fs.writeFile('./db/violations.json', JSON.stringify(populatedViolations));
    return populatedViolations;
};

module.exports = Parser;
