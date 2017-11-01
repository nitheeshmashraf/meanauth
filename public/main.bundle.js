webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n\t<flash-messages></flash-messages>\r\n\t<router-outlet></router-outlet>\t\t\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__techiediaries_ngx_qrcode__ = __webpack_require__("../../../../@techiediaries/ngx-qrcode/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_16__techiediaries_ngx_qrcode__["a" /* NgxQRCodeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    background-color: #525252;\r\n}\r\n.centered-form{\r\n\tmargin-top: 60px;\r\n}\r\n\r\n.centered-form .panel{\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tbox-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"showops()\" *ngIf=\"mine\" >Operations</button>\n<button (click)=\"showmine()\" *ngIf=\"ops\" >Mine</button> -->\n\n<input type=\"button\" style=\"float:right;\"  class=\"btn btn-primary\" (click)=\"showops()\" *ngIf=\"mine\" value=\"Operations\" name=\"Operations\">\n<div *ngIf=\"user.role!='admin'\">\n\t\n<input type=\"button\"  style=\"float:right;\" class=\"btn btn-primary\" (click)=\"showmine()\" *ngIf=\"ops\" value=\"MyDash\" name=\"Mine\">\n</div>\n\n<div *ngIf=\"user.role=='admin'\">\n\t\n<input type=\"button\"  style=\"float:right;\" class=\"btn btn-primary\" (click)=\"showmine()\" *ngIf=\"ops\" value=\"All Orders\" name=\"Mine\">\n</div>\n\n<div id=\"operations\" [hidden]=\"!ops\">\n\t\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\"><h1>Options</h1></div>\n\t</div>\n\n\t<div class=\"row\" style=\"align-items: center\">\n\t\t<div class=\"col-sm-3\"  *ngFor=\"let item of operations\" (click)=\"intoitem(item.foption)\"  style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); border-radius: 6px; margin-right: 30px;    width: 200px; height: 200px;\"  [hidden]=\"item.foption=='Guests'&&user.role!='admin'\" >\n\t\t\t<div ><h3 align=\"center\">{{item.foption}}</h3></div>\n\t\t\t<img style=\"padding: 35px; width: 150px; height: 150px;\" src=\"{{item.imgurl}}\">\n\t\t</div> \n\t</div>\n\n\t\n\n</div>\n\n<div id=\"futhermore\" [hidden]=\"!boptions\">\n\t<button class=\"btn btn-warning\" (click)=\"outtofront(boption)\">back</button>\n\t<div class=\"row\" *ngIf=\"boptions\">\n\t\t\n\t\t<div class=\"col-sm-12\"><h1>{{boption}}<div style=\"float: right;\"><div [hidden]=\"user.role!='admin'\"\t><button class=\"btn btn-primary\" (click) =\"visAddNewDivfn(boption)\">{{visbtnvalue}}</button></div></div></h1></div>\n\t</div>\n\n\t<div class=\"row\" *ngIf=\"boption=='Guests'\" >\n\t\t<div [hidden]=\"!visAddNewDiv\" class=\"col-sm-12\"  style=\"margin-top: 10px; margin-bottom: 20px; color: inherit; background-color: rgba(117, 123, 124, 0.3);  border-radius: 6px; font-size: 20px; \"  *ngFor=\"let item of users\">Email:{{item.email}}&nbsp;&nbsp;&nbsp;&nbsp;Username:{{item.username}}<br>PhoneNo:{{item.PhoneNo}}&nbsp;&nbsp;&nbsp;&nbsp;RegistrationNo:{{item.RegistrationNo}}&nbsp;&nbsp;&nbsp;&nbsp;RoomNo:{{item.RoomNo}}</div>\n\t\t<div [hidden]=\"user.role!='admin'\">\n\t\t\t<div [hidden]=\"visAddNewDiv\">\n\t\t\t\tRegistration process\n\n\n\t\t\t\t<div class=\"container\">\n\t\t        <div class=\"row centered-form\">\n\t\t        <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\n\t\t        \t<div class=\"panel panel-default\">\n\t\t        \t\t<div class=\"panel-heading\" style=\"background-color: #f4760d\">\n\t\t\t\t\t    \t\t<h3 class=\"panel-title\" style=\"text-align: center; background-color: #f4760d\">Registration</h3>\n\t\t\t\t\t \t\t\t</div>\n\t\t\t\t\t \t\t\t<div class=\"panel-body\" style=\"text-align: center; padding: 40px 20px 40px 20px;\">\n\t\t\t\t\t \t\t\t\t<form role=\"form\" (submit)=\"onRegisterSubmit()\">\n\t\t\t\t\t \t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t\t\t\t<input type=\"text\" name=\"name\" id=\"name\" class=\"form-control input-sm\" placeholder=\"name\" [(ngModel)]=\"name\" >\n\t\t\t\t\t    \t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" class=\"form-control input-sm\" placeholder=\"username\" [(ngModel)]=\"username\" >\n\t\t\t\t\t    \t\t\t</div>\n\n\t\t\t\t\t    \t\t<div class=\"form-group\">\n\t\t\t\t\t    \t\t\t\t<input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"email\" [(ngModel)]=\"email\" >\n\t\t\t\t\t    \t\t\t</div>\n\n\t\t\t\t\t    \t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t\t\t\t<input type=\"number\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Phone No\" [(ngModel)]=\"PhoneNo\" >\n\t\t\t\t\t    \t\t\t</div>\n\n\t\t\t\t\t    \t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t\t\t\t<input type=\"text\" name=\"RegistrationNo\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Registration No\" [(ngModel)]=\"RegistrationNo\" >\n\t\t\t\t\t    \t\t\t</div>\n\n\t\t\t\t\t    \t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t\t\t\t<input type=\"text\" name=\"RoomNo\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Room No\" [(ngModel)]=\"RoomNo\" >\n\t\t\t\t\t    \t\t\t</div>\n\n\t\t\t\t\t    \t\t\n\t\t\t\t\t    \t\t\t<div class=\"row\">\n\t\t\t\t\t    \t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6\">\n\t\t\t\t\t    \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"password\">\n\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t    \t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6\">\n\t\t\t\t\t    \t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t    \t\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"password1\" name=\"password1\" id=\"password1\" class=\"form-control input-sm\" placeholder=\"confirm password\">\n\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t    \t\t\t\t</div>\n\t\t\t\t\t    \t\t\t</div>\n\n\t\t\t\t\t    \t\t\t\n\n\t\t\t    \t\t\t    <input type=\"submit\" value=\"Register\" class=\"btn btn-info btn-block\">\n\t\t\t\t\t    \t\t\n\t\t\t\t\t    \t\t</form>\n\t\t\t\t\t    \t</div>\n\t\t\t    \t\t</div>\n\t\t    \t\t</div>\n\t\t    \t</div>\n\t\t    \t<!-- <ngx-qrcode \n\t\t        qrc-element-type=\"http://localhost:4200/Register\" \n\t\t        [qrc-value] = \"value\"\n\t\t        qrc-version = \"5\">\n\t\t        </ngx-qrcode> -->\n\t\t    </div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\t\n\n\t<div class=\"row\" *ngIf=\"boption=='Spa'\" >\n\t\t<!-- {{boption}} -->\n\t\t<div [hidden]=\"!visAddNewDiv\" class=\"col-sm-12\"  style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); margin-bottom: 20px;  border-radius: 6px; font-size: 20px; \"  *ngFor=\"let item of spadeals\" (click)=\"addOrder(item.session,user.username,item.ItemPrice)\"><h3>session:{{item.session}}&nbsp;&nbsp;&nbsp;&nbsp;duration:{{item.duration}}&nbsp;&nbsp;&nbsp;&nbsp;Price:{{item.price}}</h3><div style=\"padding: 10px\"></div></div>\n\n<div [hidden]=\"user.role!='admin'\"\t>\n\t\t<div class=\"row\" [hidden]=\"visAddNewDiv\">\n\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<label name=\"cuisine\">session:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"spadeal.session\" placeholder=\"session\" name=\"session\">\n\t\t\t\t<label name=\"FoodType\">duration:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"spadeal.duration\" placeholder=\"duration\" name=\"duration\">\n\t\t\t\t<label name=\"ItemName\">Price:</label>\n\t\t\t\t<input type=\"number\" class=\"form-control\" [(ngModel)]=\"spadeal.price\" placeholder=\"Price\" name=\"Price\">\n\t\t\t\t\n\t\t\t\t<br>\n\t\t\t\t<button class=\"form-control\" (click)=\"AddSpaDeal()\">Add</button>\n\t\t\t\t<br>\n\t\t\t\t<button class=\"form-control\" (click)=\"ClearSpaDeal()\">Clear</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\"></div>\n\t\t</div>\n</div>\n\t</div>\n\n\n\t<div class=\"row\" *ngIf=\"boption=='Menu'\" >\n\t\t<!-- {{boption}} -->\n\t\t<div  [hidden]=\"!visAddNewDiv\" class=\"col-sm-12\"  style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); margin-bottom: 20px;  border-radius: 6px; font-size: 20px; \"  *ngFor=\"let item of menus\" (click)=\"addOrder(item.FoodType,user.username,item.ItemPrice)\"><h3>Cuisine:{{item.cuisine}}&nbsp;&nbsp;&nbsp;&nbsp;type:{{item.FoodType}}&nbsp;&nbsp;&nbsp;&nbsp;ItemName:{{item.ItemName}}&nbsp;&nbsp;&nbsp;&nbsp;ItemPrice:{{item.ItemPrice}}</h3><div style=\"padding: 10px\"><img src=\"{{item.imgurl}}\" [hidden]=\"item.imgurl==null\" style=\"width: 150px; height: 150px; float: right;\" ></div></div>\n\n<div [hidden]=\"user.role!='admin'\"\t>\n\t\t<div class=\"row\" [hidden]=\"visAddNewDiv\">\n\t\t\t<div class=\"col-sm-2\"></div>\n\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t<label name=\"cuisine\">cuisine:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"RoomMenu.cuisine\" placeholder=\"cuisine\" name=\"cuisine\">\n\t\t\t\t<label name=\"FoodType\">FoodType:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"RoomMenu.FoodType\" placeholder=\"FoodType\" name=\"FoodType\">\n\t\t\t\t<label name=\"ItemName\">ItemName:</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"RoomMenu.ItemName\" placeholder=\"ItemName\" name=\"ItemName\">\n\t\t\t\t<label name=\"ItemPrice\">ItemPrice:</label>\n\t\t\t\t<input type=\"number\" class=\"form-control\" [(ngModel)]=\"RoomMenu.ItemPrice\" placeholder=\"ItemPrice\" name=\"ItemPrice\">\n\t\t\t\t<br>\n\t\t\t\t<button class=\"form-control\" (click)=\"AddMenuItem()\">Add</button>\n\t\t\t\t<br>\n\t\t\t\t<button class=\"form-control\" (click)=\"ClearMenuItem()\">Clear</button>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\"></div>\n\t\t</div>\n</div>\n\t</div>\n\n</div>\n<div id=\"orders\" [hidden]=\"!mine\">\n\t\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12\"><h1>Your Orders</h1></div>\n\t</div>\n\t<div [hidden]=\"user.role=='admin'\">\n\t<h2>Ordered</h2>\n\n\t<div class=\"row\"  *ngFor=\"let item of ordersplaced\" style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); border-radius: 6px; margin-right: 30px;\">\n\t\t<div class=\"col-sm-12\" *ngIf=\"item.UserName==user.username\"><h3 *ngIf=\"item.status=='ordered'\"\t>Service Item:{{item.ItemName}} <br>Customer Name:{{item.UserName}}</h3><div style=\"padding: 10px\">\n<!-- <input type=\"button\" name=\"\" value=\"cancel\" class=\".btn-danger\" style=\"float: right;\"  (click)=\"deleteorder(item._id)\">\n -->\t\t</div></div>\n\t</div>\n\t<h2>Processing</h2>\n\n\t<div class=\"row\"  *ngFor=\"let item of ordersplaced\" style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); border-radius: 6px; margin-right: 30px;\">\n\t\t<div class=\"col-sm-12\"  *ngIf=\"item.UserName==user.username\"><h3 *ngIf=\"item.status=='taken'\"\t>Service Item:{{item.ItemName}} <br>Customer Name:{{item.UserName}}</h3><div style=\"padding: 10px\"></div></div>\n\t</div>\n\t<h2>Delivered</h2>\n\t<div class=\"row\"  *ngFor=\"let item of ordersplaced\" style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); border-radius: 6px; margin-right: 30px;\">\n\t\t<div class=\"col-sm-12\"  *ngIf=\"item.UserName==user.username\"><h3 *ngIf=\"item.status=='delivered'\"\t>Service Item:{{item.ItemName}} <br>Customer Name:{{item.UserName}}</h3><div style=\"padding: 10px\"></div></div>\n\t</div>\n</div>\n\t<div [hidden]=\"user.role!='admin'\">\n\t\t\n\t\t<h2>Ordered</h2>\n\n\t<div class=\"row\"  *ngFor=\"let item of ordersplaced\" style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); border-radius: 6px; margin-right: 30px;\">\n\t\t<div class=\"col-sm-12\"><h3 *ngIf=\"item.status=='ordered'\"\t>Service Item:{{item.ItemName}} <br>Customer Name:{{item.UserName}}</h3><div style=\"padding: 10px\"></div></div>\n\t</div>\n\t<h2>Processing</h2>\n\n\t<div class=\"row\"  *ngFor=\"let item of ordersplaced\" style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); border-radius: 6px; margin-right: 30px;\">\n\t\t<div class=\"col-sm-12\"><h3 *ngIf=\"item.status=='taken'\"\t>Service Item:{{item.ItemName}} <br>Customer Name:{{item.UserName}}</h3><div style=\"padding: 10px\"></div></div>\n\t</div>\n\t<h2>Delivered</h2>\n\t<div class=\"row\"  *ngFor=\"let item of ordersplaced\" style=\"margin-top: 10px; color: inherit; background-color: rgba(117, 123, 124, 0.3); border-radius: 6px; margin-right: 30px;\">\n\t\t<div class=\"col-sm-12\"><h3 *ngIf=\"item.status=='delivered'\"\t>Service Item:{{item.ItemName}} <br>Customer Name:{{item.UserName}}</h3><div style=\"padding: 10px\"></div></div>\n\t</div>\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(validateService, authService, router, flashMessages) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
        this.mine = false;
        this.ops = true;
        this.boptions = false;
        this.visAddNewDiv = true;
        this.visAddNewDivMenu = true;
        this.RoomMenu = {
            cuisine: '',
            FoodType: '',
            ItemName: '',
            ItemPrice: ''
        };
        this.spadeal = {
            session: '',
            duration: '',
            price: ''
        };
        this.OrderPlaced = {
            ItemName: '',
            UserName: '',
            Description: '',
            price: '',
            status: ''
        };
        this.elementType = 'url';
        this.value = 'http://localhost:4200/login';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spadeal = {
            session: '',
            duration: '',
            price: ''
        };
        this.RoomMenu = {
            cuisine: '',
            FoodType: '',
            ItemName: '',
            ItemPrice: ''
        };
        this.authService.getOrders().subscribe(function (data) {
            console.log(data);
            _this.order = data;
        }, function (err) { console.log(err); return false; });
        this.authService.getOptions().subscribe(function (data) {
            console.log(data);
            _this.operations = data;
        }, function (err) { console.log(err); return false; });
        this.authService.getUsers().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        }, function (err) { console.log(err); return false; });
        this.authService.getMenus().subscribe(function (data) {
            console.log(data);
            _this.menus = data;
        }, function (err) { console.log(err); return false; });
        this.authService.getSpaDeals().subscribe(function (data) {
            console.log(data);
            _this.spadeals = data;
        }, function (err) { console.log(err); return false; });
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) { console.log(err); return false; });
        this.authService.getPlacedOrders().subscribe(function (data) {
            console.log(data);
            _this.ordersplaced = data;
        }, function (err) { console.log(err); return false; });
        if (this.user.role) {
            var AdminUser = true;
        }
        else {
            var AdminUser = false;
        }
    };
    DashboardComponent.prototype.addOrder = function (itemName, userName, itemprice) {
        var _this = this;
        console.log("username:" + this.user.username);
        var OrderPlaced = {
            ItemName: itemName,
            UserName: this.user.username,
            Description: "Normal",
            price: itemprice,
            status: "ordered"
        };
        this.authService.addOrderedItem(OrderPlaced).subscribe(function (profile) {
            _this.OrderPlaced = profile.UserId;
            _this.flashMessages.show("Order placed", { cssClass: 'alert-warning', timeout: 3000 });
        }, function (err) { console.log(err); return false; });
        this.authService.getPlacedOrders().subscribe(function (data) {
            console.log(data);
            _this.ordersplaced = data;
        }, function (err) { console.log(err); return false; });
    };
    DashboardComponent.prototype.showops = function () {
        this.mine = !this.mine;
        this.ops = !this.ops;
    };
    DashboardComponent.prototype.menurefresh = function () {
        this.ngOnInit();
        this.RoomMenu = {
            cuisine: '',
            FoodType: '',
            ItemName: '',
            ItemPrice: ''
        };
    };
    DashboardComponent.prototype.showmine = function () {
        this.ops = !this.ops;
        this.mine = !this.mine;
    };
    DashboardComponent.prototype.intoitem = function (boption) {
        this.boption = boption;
        this.boptions = true;
        this.ops = false;
        this.mine = false;
        if (this.boption == 'Guests') {
            this.visbtnvalue = "Create User";
        }
        else {
            this.visbtnvalue = "Create Item";
        }
    };
    DashboardComponent.prototype.ClearMenuItem = function () {
        this.RoomMenu = {
            cuisine: '',
            FoodType: '',
            ItemName: '',
            ItemPrice: ''
        };
    };
    DashboardComponent.prototype.outtofront = function (boption) {
        this.boption = '';
        this.boptions = false;
        this.ops = true;
        this.mine = false;
        this.visAddNewDiv = true;
    };
    DashboardComponent.prototype.AddMenuItem = function () {
        var _this = this;
        this.authService.AddMenuItem(this.RoomMenu).subscribe(function (data) {
            console.log(data);
            _this.menu = data;
        }, function (err) { console.log(err); return false; });
        this.menurefresh();
    };
    DashboardComponent.prototype.AddSpaDeal = function () {
        var _this = this;
        console.log(this.spadeal);
        this.authService.addspadeal(this.spadeal).subscribe(function (data) {
            console.log(data);
            _this.spa = data;
        }, function (err) { console.log(err); return false; });
        this.menurefresh();
    };
    DashboardComponent.prototype.visAddNewDivfn = function (boption) {
        if (this.user.role == 'admin') {
            if (this.boption == 'Guests') {
                this.visAddNewDiv = !this.visAddNewDiv;
                if (!this.visAddNewDiv)
                    this.visbtnvalue = "Show Users";
                else
                    this.visbtnvalue = "Create Users";
            }
            else {
                this.visAddNewDiv = !this.visAddNewDiv;
                if (!this.visAddNewDiv)
                    this.visbtnvalue = "Show Item";
                else
                    this.visbtnvalue = "Create Item";
            }
        }
    };
    DashboardComponent.prototype.visAddNewDivfnMenu = function () {
        this.visAddNewDivMenu = !this.visAddNewDivMenu;
        if (!this.visAddNewDivMenu)
            this.visbtnvalue = "Show Menu";
        else
            this.visbtnvalue = "Create Item";
    };
    DashboardComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log(this.name, this.username, this.password, this.email);
        if (this.password == this.password1) {
            var user = {
                name: this.name,
                username: this.username,
                password: this.password,
                email: this.email,
                PhoneNo: this.PhoneNo,
                RegistrationNo: this.RegistrationNo,
                RoomNo: this.RoomNo
            };
            // required fields
            if (!this.validateService.validateRegister(user)) {
                // console.log("please fill in all the fields");
                this.flashMessages.show("please fill in all the fields", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            // required email
            if (!this.validateService.ValidateEmail(user.email)) {
                // console.log("please use valid email");
                this.flashMessages.show("please use valid email", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            // register user
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    // alert("Registration successfull");
                    _this.flashMessages.show("Registration successfull", { cssClass: 'alert-success', timeout: 3000 });
                    // this.router.navigate(['/dashboard']);
                    _this.visAddNewDiv = !_this.visAddNewDiv;
                }
                else {
                    // alert("Registration unsuccessfull");
                    _this.flashMessages.show("Registration unsuccessfull", { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/register']);
                }
            });
        }
        else {
            this.flashMessages.show("Passwords are different!!", { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\t<h1>Costa App</h1>\n\t<p class=\"lead\">Customer service App</p>\n\t<div *ngIf=\"!authService.loggedIn()\">\n\t\t<!-- <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a> -->\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n\t</div>\n</div>\n\n<div class=\"row\" style=\"text-align: center\">\n\t<div class=\"col-sm-4\">\n\t\t<h3>Customer</h3>\n\t\t<p>Walk into the an hotel as your native one.</p>\n\t</div>\n\t<div class=\"col-sm-4\">\n\t\t<h3>Service</h3>\n\t\t<p>Your language Your Order.</p>\n\t</div>\n\t<div class=\"col-sm-4\">\n\t\t<h3>Acknowledgment</h3>\n\t\t<p>Service at its maximum</p>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));\r\n}\r\n\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n}\r\n\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n}\r\n\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n}\r\n\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n}\r\n\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n}\r\n\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n}\r\n\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\"col-sm-8\" style=\"margin: 0 auto 25px; margin-top: 50px;\">\n\t<div class=\"jumbotron text-center\">\n\t<h1>Costa App</h1>\n\t<p class=\"lead\">Customer service App</p>\n\t<div *ngIf=\"authService.loggedIn()\">\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n\t</div>\n</div>\n<br>\n<div class=\"row\" style=\"text-align: center\">\n\t<div class=\"col-sm-4\">\n\t\t<h3>Customer</h3>\n\t\t<p>Walk into the an hotel as you own it.</p>\n\t</div>\n\t<div class=\"col-sm-4\">\n\t\t<h3>Service</h3>\n\t\t<p>Your language Your Order.</p>\n\t</div>\n\t<div class=\"col-sm-4\">\n\t\t<h3>Acknowledgment</h3>\n\t\t<p>Service at its maximum.</p>\n\t</div>\n</div>\n</div>\n\n<div class=\"col-sm-4\">\n\t<!-- <form (submit)=\"onLoginSubmit()\" id=\"loginForm\">\n\t    <div class=\"form-group\" >\n\t        <label for=\"username\">Username</label>\n\t        <input type=\"text\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Your username\" />\n\t    </div>\n\t    <div class=\"form-group\">\n\t        <label for=\"password\">Email</label>\n\t        <input type=\"password\" placeholder=\"\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Your email address\" />\n\t    </div>\n\t    \n\t        <button class=\"btn btn-block btn-success btn-lg\" type=\"submit\" >Send Password</button>\n\t        \n    </form> -->\n    <!-- <div class=\"container\"> -->\n        <div class=\"card card-container\">\n            <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n            <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n            <p id=\"profile-name\" class=\"profile-name-card\"></p>\n            <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n                <span id=\"reauth-email\" class=\"reauth-email\"></span>\n                <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control\" placeholder=\"username\" required autofocus>\n                <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"password\" required>\n                <div id=\"remember\" class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" value=\"remember-me\"> Remember me\n                    </label>\n                </div>\n                <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n            </form><!-- /form -->\n            <a href=\"#\" class=\"forgot-password\">\n                Forgot the password?\n            </a>\n        </div><!-- /card-container -->\n    <!-- </div>/container -->\n</div>\n   <!--  <br>\n    <button class=\"btn btn-block btn-warning btn-lg\" (click)=\"clearprestine()\">Cancel</button>\n -->\n<!-- <div class=\"col-sm-4\"></div> -->\n\t\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log(this.username);
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                // alert("Login Successfull");
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                // alert(data.msg);
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent.prototype.clearprestine = function () {
        this.username = null;
        this.password = null;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">CostaApp</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  [routerLink]=\"['/']\">Home</a></li>\n            \n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  [routerLink]=\"['/dashboard']\">dashboard</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  [routerLink]=\"['/profile']\">Profile</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  [routerLink]=\"['/login']\">Login</a></li>\n            <!-- <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  [routerLink]=\"['/register']\">Register</a></li> -->\n            <li *ngIf=\"authService.loggedIn()\"><a  (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessages.show("Logged Out", { cssClass: 'alert-warning', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\n\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\n\t</ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) { console.log(err); return false; });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    background-color: #525252;\r\n}\r\n.centered-form{\r\n\tmargin-top: 60px;\r\n}\r\n\r\n.centered-form .panel{\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tbox-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <div id=\"container_demo\" > -->\n\t<!-- hidden anchor to stop jump http://www.css3create.com/Astuce-Empecher-le-scroll-avec-l-utilisation-de-target#wrap4  -->\n\t<!-- <a class=\"hiddenanchor\" id=\"toregister\"></a>\n\t<a class=\"hiddenanchor\" id=\"tologin\"></a>\n\t<div id=\"wrapper\">\n\t\t<div class=\"row\">\n\t\t\t\n\t\t\t<div class=\"col-sm-4\"></div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div id=\"register\" class=\"animate form\">\n\t\t\t\t\t<form  (submit)=\"onRegisterSubmit()\" autocomplete=\"on\"> \n\t\t\t\t\t\t<h1> Sign up </h1> \n\t\t\t\t\t\t<p> \n\t\t\t\t\t\t\t<label for=\"usernamesignup\" class=\"name\" data-icon=\"u\">Name</label>\n\t\t\t\t\t\t\t<input id=\"namesignup\" [(ngModel)]=\"name\" style=\"float:right;\" name=\"username\" required=\"required\" type=\"text\" placeholder=\"name\" />\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p> \n\t\t\t\t\t\t\t<label for=\"usernamesignup\" class=\"uname\" data-icon=\"u\">Your username</label>\n\t\t\t\t\t\t\t<input id=\"usernamesignup\" [(ngModel)]=\"username\" style=\"float:right;\" name=\"username\" required=\"required\" type=\"text\" placeholder=\"username\" />\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p> \n\t\t\t\t\t\t\t<label for=\"emailsignup\" class=\"youmail\" data-icon=\"e\" > Your email</label>\n\t\t\t\t\t\t\t<input id=\"emailsignup\" [(ngModel)]=\"email\" style=\"float:right;\"  name=\"email\" required=\"required\" type=\"email\" placeholder=\"mail@domain.com\"/> \n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p> \n\t\t\t\t\t\t\t<label for=\"passwordsignup\" class=\"youpasswd\" data-icon=\"p\">Your password </label>\n\t\t\t\t\t\t\t<input id=\"passwordsignup\" [(ngModel)]=\"password\" style=\"float:right;\"  name=\"password\" required=\"required\" type=\"password\" placeholder=\"password\"/>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p> \n\t\t\t\t\t\t\t<label for=\"passwordsignup_confirm\" class=\"youpasswd\" data-icon=\"p\">Please confirm your password </label>\n\t\t\t\t\t\t\t<input id=\"passwordsignup_confirm\" [(ngModel)]=\"password1\" style=\"float:right;\"  name=\"passwordsignup_confirm\" required=\"required\" type=\"password\" placeholder=\"confirm password\"/>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\"></div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<p class=\"signin button\" > \n\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" value=\"Sign up\"/> \n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"change_link\">  \n\t\t\t\t\t\t\tAlready a member ?\n\t\t\t\t\t\t\t<a [routerLink]=\"['/login']\" class=\"to_register\"> Go and log in </a>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\n\n\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\"></div>\n\n\t\t</div>\n\t</div>\n</div>  -->\n\n<div class=\"container\">\n        <div class=\"row centered-form\">\n        <div class=\"col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4\">\n        \t<div class=\"panel panel-default\">\n        \t\t<div class=\"panel-heading\" style=\"background-color: #f4760d\">\n\t\t\t    \t\t<h3 class=\"panel-title\" style=\"text-align: center; background-color: #f4760d\">Registration</h3>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t\t<div class=\"panel-body\" style=\"text-align: center; padding: 40px 20px 40px 20px;\">\n\t\t\t \t\t\t\t<form role=\"form\" (submit)=\"onRegisterSubmit()\">\n\t\t\t \t\t\t\t<div class=\"form-group\">\n\t\t\t    \t\t\t\t<input type=\"text\" name=\"name\" id=\"name\" class=\"form-control input-sm\" placeholder=\"name\" [(ngModel)]=\"name\" >\n\t\t\t    \t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t    \t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" class=\"form-control input-sm\" placeholder=\"username\" [(ngModel)]=\"username\" >\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t<div class=\"form-group\">\n\t\t\t    \t\t\t\t<input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"email\" [(ngModel)]=\"email\" >\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"form-group\">\n\t\t\t    \t\t\t\t<input type=\"number\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Phone No\" [(ngModel)]=\"PhoneNo\" >\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"form-group\">\n\t\t\t    \t\t\t\t<input type=\"text\" name=\"RegistrationNo\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Registration No\" [(ngModel)]=\"RegistrationNo\" >\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t<div class=\"form-group\">\n\t\t\t    \t\t\t\t<input type=\"text\" name=\"RoomNo\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Room No\" [(ngModel)]=\"RoomNo\" >\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\n\t\t\t    \t\t\t<div class=\"row\">\n\t\t\t    \t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6\">\n\t\t\t    \t\t\t\t\t<div class=\"form-group\">\n\t\t\t                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"password\">\n\t\t\t    \t\t\t\t\t</div>\n\t\t\t    \t\t\t\t</div>\n\t\t\t    \t\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6\">\n\t\t\t    \t\t\t\t\t<div class=\"form-group\">\n\t\t\t    \t\t\t\t\t\t<input type=\"password\" [(ngModel)]=\"password1\" name=\"password1\" id=\"password1\" class=\"form-control input-sm\" placeholder=\"confirm password\">\n\t\t\t    \t\t\t\t\t</div>\n\t\t\t    \t\t\t\t</div>\n\t\t\t    \t\t\t</div>\n\n\t\t\t    \t\t\t\n\n\t    \t\t\t    <input type=\"submit\" value=\"Register\" class=\"btn btn-info btn-block\">\n\t\t\t    \t\t\n\t\t\t    \t\t</form>\n\t\t\t    \t</div>\n\t    \t\t</div>\n    \t\t</div>\n    \t</div>\n    \t<!-- <ngx-qrcode \n        qrc-element-type=\"http://localhost:4200/Register\" \n        [qrc-value] = \"value\"\n        qrc-version = \"5\">\n        </ngx-qrcode> -->\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessages) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
        this.elementType = 'url';
        this.value = 'http://localhost:4200/login';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log(this.name, this.username, this.password, this.email);
        if (this.password == this.password1) {
            var user = {
                name: this.name,
                username: this.username,
                password: this.password,
                email: this.email,
                PhoneNo: this.PhoneNo,
                RegistrationNo: this.RegistrationNo,
                RoomNo: this.RoomNo
            };
            // required fields
            if (!this.validateService.validateRegister(user)) {
                // console.log("please fill in all the fields");
                this.flashMessages.show("please fill in all the fields", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            // required email
            if (!this.validateService.ValidateEmail(user.email)) {
                // console.log("please use valid email");
                this.flashMessages.show("please use valid email", { cssClass: 'alert-danger', timeout: 3000 });
                return false;
            }
            // register user
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    // alert("Registration successfull");
                    _this.flashMessages.show("Registration successfull", { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    // alert("Registration unsuccessfull");
                    _this.flashMessages.show("Registration unsuccessfull", { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/register']);
                }
            });
        }
        else {
            this.flashMessages.show("Passwords are different!!", { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authServices, router) {
        this.authServices = authServices;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authServices.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    // token =localStorage.getItem('id_token');
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        // return this.http.post('users/register',user,{headers: headers})
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.AddMenuItem = function (MenuItem) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        // return this.http.post('users/register',user,{headers: headers})
        return this.http.post('users/addmenuitem', MenuItem, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addspadeal = function (SpaDeal) {
        console.log(SpaDeal);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        // return this.http.post('users/register',user,{headers: headers})
        return this.http.post('users/addspadeal', SpaDeal, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addOrderedItem = function (OrderPlaced) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        headers.append('Content-Type', 'application/json');
        // return this.http.post('users/register',user,{headers: headers})
        return this.http.post('users/addordereditem', OrderPlaced, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserById = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/getUserById', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getOrders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/getorders', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPlacedOrders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/getPlacedOrders', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/getusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/getoptions', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getMenus = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/getmenus', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSpaDeals = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"];
        this.loadToken();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.authToken);
        return this.http.get('users/getspadeals', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        // console.log(tokenNotExpired('id_token'));
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
        //   if(localStorage.getItem('id_token'))
        //   return true;
        // else
        //   return false;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.password == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.ValidateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map