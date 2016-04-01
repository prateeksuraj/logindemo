System.register(['angular2/core', '../service/data.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, data_service_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router, _data) {
                    this._router = _router;
                    this._data = _data;
                }
                HomeComponent.prototype.logout = function () {
                    this._data.setUser(null);
                    this._router.navigate(['Login']);
                };
                HomeComponent.prototype.ngOnInit = function () {
                    if (this._data.getUser() == null) {
                        this._router.navigate(['Login']);
                    }
                    else {
                        this.user = this._data.getUser();
                    }
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'my-home',
                        template: "\n        <nav>\n            <a (click)= \"logout()\" >Logout</a>\n        </nav>\n       <h1>Hello {{user.username}}!</h1>\n       <h3>Welcome to Menumate Technologies...</h3>\n       <h3>Your role is: {{user.role}}</h3>     \n               "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map