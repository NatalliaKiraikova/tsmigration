var users = require('./users');

var Parser = function() {
};

Parser.prototype.getAll = function() {

    for (var i = 0; i <users.users.length; i++){
        console.log( users.users[i]);
    }
};

module.exports = Parser;
