var _ = require('lodash'),
    fs = require('fs');

var Utils = require('./utils');
var utils = new Utils();
var UpdateDatabaseUtils = require('./updateDatabaseUtils.js');
var updateDatabaseUtils = new UpdateDatabaseUtils();

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

Parser.prototype.getAllViolationsFromDatabase = function () {
    return utils.violationsFromDatabase(violations, database);
};

Parser.prototype.getDatabaseItemsBySubstring = function (str) {
    return utils.getDatabaseItemsBySubstring(database, str);
};

Parser.prototype.getSuggestionsStringFromDatabaseByStr = function(str) {
    return utils.getSuggestionsStringFromDatabaseByStr(database, str);
};

Parser.prototype.getSuggestionsObjectFromDatabaseByStr = function (str){
    return utils.getSuggestionsObjectFromDatabaseByStr(database, str);
};

Parser.prototype.getViolationsFromDatabaseByPeriod = function (startDate, endDate) {
    return utils.getViolationsFromDatabaseByPeriod(violations, database, startDate, endDate);
};

Parser.prototype.getNamesFromViolationsFromDatabaseByPeriod = function (startDate, endDate) {
    return utils.getNamesFromViolationsFromDatabaseByPeriod(violations, database, startDate, endDate);
};

Parser.prototype.populateViolationsWithDate = function () {
    var populatedViolations = updateDatabaseUtils.populateViolationsWithDate(violations);
    fs.writeFile('./db/new_violations.json', JSON.stringify(populatedViolations));
    return populatedViolations;
};

module.exports = Parser;
