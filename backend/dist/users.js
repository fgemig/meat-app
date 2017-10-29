"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
        ;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'fabio@gmail.com': new User('fabio@gmail.com', 'Fabio', 'fabio123'),
    'martinelli@gmail.com': new User('martinelli@gmail.com', 'Martinelli', 'martinelli123')
};
