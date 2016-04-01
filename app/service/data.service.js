System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataService;
    return {
        setters:[],
        execute: function() {
            DataService = (function () {
                function DataService() {
                }
                DataService.prototype.isAuthenticated = function () {
                    if (this.user != null) {
                        console.log("user present");
                        return true;
                    }
                    else {
                        console.log("user not present");
                        return false;
                    }
                };
                DataService.prototype.getUser = function () {
                    return this.user;
                };
                DataService.prototype.setUser = function (inUser) {
                    this.user = inUser;
                };
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map