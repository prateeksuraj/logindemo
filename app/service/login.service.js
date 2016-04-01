System.register(['../mock-data/data'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var data_1;
    var LoginService;
    return {
        setters:[
            function (data_1_1) {
                data_1 = data_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService() {
                }
                LoginService.prototype.authenticate = function (inUserName, inPassword) {
                    var i = 0;
                    var user = null;
                    while (i < data_1.USERS.length) {
                        if ((inUserName == data_1.USERS[i].username) && (inPassword == data_1.USERS[i].password)) {
                            user = data_1.USERS[i];
                            console.log(" Username: " + user.username);
                            console.log(" Password: " + user.password);
                            console.log(" Role: " + user.role);
                        }
                        i++;
                    }
                    return user;
                };
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map