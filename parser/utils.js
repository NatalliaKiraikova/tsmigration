var _ = require('lodash');

var Utils = function () {
};

Utils.prototype.violationsFromDatabase = function(violations, database){
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

module.exports = Utils;