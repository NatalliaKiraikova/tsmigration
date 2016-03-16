var _ = require('lodash');

var Utils = function () {
};

Utils.prototype.oldViolationsFromDatabase = function(violations, database){
    //create sorted numbers array form database
    var numbers = _.map(database, function (o) {
        return _.map(o.cars, 'number');
    });
    numbers = _.flattenDeep(numbers);
    numbers = _.sortBy(numbers);

    //find violations, where number matched with any value in numbers
    var matchedArray = [];
    _(violations).forEach(function (violation) {
        if (_.indexOf(numbers, violation.number) > -1) {
            matchedArray.push(violation);
        }
    });

    console.log("numbers", matchedArray);
    return matchedArray;
};

Utils.prototype.violationsFromDatabase = function(violations, database){
    var carsMap = [];
    //create cars Map with data about cars in database
    _(database).forEach(function (o) {
        _(o.cars).forEach(function (car) {
            carsMap[car.number] = car;
        });
    });
    //find violations, where number matched with any value in carsMap
    var matchedArray = [];
    _(violations).forEach(function (violation) {
        if(!_.isUndefined(carsMap[violation.number])){
            matchedArray.push(violation);
        }
    });

    console.log("matchedArray", matchedArray);
    return matchedArray;
};

Utils.prototype.populateViolationsWithDate = function(violations){
    _(violations).forEach(function (violation) {
        violation.date = generateDateInLastThreeMonths();
    });
    return violations;
};

function generateDateInLastThreeMonths (){
    var d = new Date();
    d.setTime(d.getTime() - getRandomArbitrary(0, threeMonthsInMsec));
    return d;
};
var threeMonthsInMsec = 7889238000;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = Utils;