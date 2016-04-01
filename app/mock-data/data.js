System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var USERS;
    return {
        setters:[],
        execute: function() {
            exports_1("USERS", USERS = [
                { username: 111, password: 'aaa', role: 'admin' },
                { username: 222, password: 'bbb', role: 'supervisor' },
                { username: 333, password: 'ccc', role: 'manager' },
                { username: 444, password: 'ddd', role: 'Pos Operater' }
            ]);
        }
    }
});
//# sourceMappingURL=data.js.map