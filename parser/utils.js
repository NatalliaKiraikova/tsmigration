var _ = require('lodash');

var Utils = function () {
};

Utils.prototype.oldViolationsFromDatabase = function (violations, database) {
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

Utils.prototype.violationsFromDatabase = function (violations, database) {
    var carsMap = getCarsMap(database);

    //find violations, where number matched with any value in carsMap
    var matchedArray = [];
    _(violations).forEach(function (violation) {
        if (!_.isUndefined(carsMap[violation.number])) {
            matchedArray.push(violation);
        }
    });

    return matchedArray;
};

Utils.prototype.getViolationsFromDatabaseByPeriod = function (violations, database, startDate, endDate) {
    var carsMap = getCarsMap(database);

    //find violations, where number matched with any value in carsMap and is in selected period
    var matchedArray = [];
    _(violations).forEach(function (violation) {
        if (!_.isUndefined(carsMap[violation.number]) && isInSelectedPeriod(violation.date, startDate, endDate)) {
            matchedArray.push(violation);
        }
    });

    //console.log("matchedArray", matchedArray);
    return matchedArray;
};

Utils.prototype.getNamesFromViolationsFromDatabaseByPeriod = function (violations, database, startDate, endDate) {
    var carsWithNameMap = getCarsWithNameMap(database);
    var matchedArray = [];
    _(violations).forEach(function (violation) {
        if (!_.isUndefined(carsWithNameMap[violation.number]) && isInSelectedPeriod(violation.date, startDate, endDate)) {
            matchedArray.push(carsWithNameMap[violation.number]);
        }
    });

    return matchedArray;
};

Utils.prototype.getDatabaseItemsBySubstring = function (database, str) {
    //search by 3 fields: name, cars name and cars number
    var matchedArr = [];
    _(database).forEach(function (item) {
        if (_.includes(item.name, str) || isSubstrInCarsArray(item.cars, str)) {
            matchedArr.push(item);
        }
    });
    return matchedArr;
};

Utils.prototype.getSuggestionsFromDatabaseByStr = function (database, str) {
    var matchedArr = [];

    _(database).forEach(function (item) {
        if (_.includes(item.name, str) && !_.includes(matchedArr, item.name)) {
            matchedArr.push(item.name);
        }
        _(item.cars).forEach(function (car) {
            if (_.includes(car.name, str) && !_.includes(matchedArr, car.name)) {
                matchedArr.push(car.name);
            }
        });
    });

    return matchedArr;
};

function isSubstrInCarsArray(cars, str) {
    return _.find(cars, function (car) {
        return _.includes(car.name, str) || _.includes(String(car.number), str);
    });
}

function isInSelectedPeriod(vDate, startDate, endDate) {
    var violationDateInTime = (new Date(vDate).getTime());
    return (startDate <= violationDateInTime && violationDateInTime <= endDate);
}

function getCarsMap(database) {
    var carsMap = [];
    //create cars Map with data about cars in database
    _(database).forEach(function (o) {
        _(o.cars).forEach(function (car) {
            carsMap[car.number] = car;
        });
    });
    return carsMap;
}

function getCarsWithNameMap(database) {
    var carWithNameMap = [];
    //create cars Map with driver name cars in database
    _(database).forEach(function (o) {
        _(o.cars).forEach(function (car) {
            carWithNameMap[car.number] = o.name;
        });
    });
    return carWithNameMap;
}

module.exports = Utils;