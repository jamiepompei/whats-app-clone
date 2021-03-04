(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PAGES-registration-registration-module"],{

/***/ "1L6Q":
/*!***********************************************************!*\
  !*** ./src/app/PAGES/registration/registration.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form {\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.registration_form {\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  padding: 8px;\n  align-items: center;\n  height: 100%;\n}\n\n.registration_form input {\n  margin: 8px;\n  padding: 10px;\n  border: lightgray solid 1px;\n  border-radius: 20px;\n  background-color: #f5f5f5;\n}\n\n.registration_form input:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBR1I7O0FBREk7RUFDSSxhQUFBO0FBR1IiLCJmaWxlIjoicmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnJlZ2lzdHJhdGlvbl9mb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaW5wdXR7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6IGxpZ2h0Z3JheSBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgfVxuICAgIGlucHV0OmZvY3Vze1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "BqOx":
/*!*******************************************************************!*\
  !*** ./src/app/PAGES/registration/registration-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "t5x1");




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ "LB1E":
/*!***********************************************************!*\
  !*** ./src/app/PAGES/registration/registration.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "BqOx");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "t5x1");







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })
], RegistrationPageModule);



/***/ }),

/***/ "NTHF":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES/registration/registration.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"form\">\n    <form action=\"\" class=\"registration_form\">\n      <ion-label>Username</ion-label>\n      <input type=\"text\" placeholder=\"User Name\" name=\"input\" [(ngModel)]=\"username\">\n      <ion-button color=\"primary\" (click)=\"onSubmit()\">Register</ion-button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "t5x1":
/*!*********************************************************!*\
  !*** ./src/app/PAGES/registration/registration.page.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration.page.html */ "NTHF");
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.page.scss */ "1L6Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_SERVICES_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/SERVICES/api.service */ "F5oV");
/* harmony import */ var src_app_SERVICES_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/SERVICES/authentication.service */ "7+Hy");







let RegistrationPage = class RegistrationPage {
    constructor(api, authService, navCtrl) {
        this.api = api;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.username = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        let obj = {
            name: this.username
        };
        this.api.postChats(obj)
            .subscribe(resp => {
            alert("User has been registered");
            this.authService.saveUser(resp);
            this.navCtrl.navigateForward('home');
        });
    }
};
RegistrationPage.ctorParameters = () => [
    { type: src_app_SERVICES_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_SERVICES_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrationPage);



/***/ })

}]);
//# sourceMappingURL=PAGES-registration-registration-module.js.map