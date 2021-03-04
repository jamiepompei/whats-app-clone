(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calls-calls-module"],{

/***/ "A+mI":
/*!*****************************************************!*\
  !*** ./src/app/PAGES/calls/calls-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CallsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsPageRoutingModule", function() { return CallsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calls_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calls.page */ "zyNs");




const routes = [
    {
        path: '',
        component: _calls_page__WEBPACK_IMPORTED_MODULE_3__["CallsPage"]
    }
];
let CallsPageRoutingModule = class CallsPageRoutingModule {
};
CallsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CallsPageRoutingModule);



/***/ }),

/***/ "Fkjm":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES/calls/calls.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>calls</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "fBAU":
/*!*********************************************!*\
  !*** ./src/app/PAGES/calls/calls.module.ts ***!
  \*********************************************/
/*! exports provided: CallsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsPageModule", function() { return CallsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _calls_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calls-routing.module */ "A+mI");
/* harmony import */ var _calls_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calls.page */ "zyNs");







let CallsPageModule = class CallsPageModule {
};
CallsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calls_routing_module__WEBPACK_IMPORTED_MODULE_5__["CallsPageRoutingModule"]
        ],
        declarations: [_calls_page__WEBPACK_IMPORTED_MODULE_6__["CallsPage"]]
    })
], CallsPageModule);



/***/ }),

/***/ "xD0a":
/*!*********************************************!*\
  !*** ./src/app/PAGES/calls/calls.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "zyNs":
/*!*******************************************!*\
  !*** ./src/app/PAGES/calls/calls.page.ts ***!
  \*******************************************/
/*! exports provided: CallsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallsPage", function() { return CallsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calls_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calls.page.html */ "Fkjm");
/* harmony import */ var _calls_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calls.page.scss */ "xD0a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CallsPage = class CallsPage {
    constructor() { }
    ngOnInit() {
    }
};
CallsPage.ctorParameters = () => [];
CallsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-calls',
        template: _raw_loader_calls_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calls_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CallsPage);



/***/ })

}]);
//# sourceMappingURL=calls-calls-module.js.map