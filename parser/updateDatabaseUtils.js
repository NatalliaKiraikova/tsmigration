var _ = require('lodash');

var UpdateDatabaseUtils = function () {
};

UpdateDatabaseUtils.prototype.populateViolationsWithDate = function(violations){
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

module.exports = UpdateDatabaseUtils;