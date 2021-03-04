(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-status-module"],{

/***/ "JgC0":
/*!***********************************************!*\
  !*** ./src/app/PAGES/status/status.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0dXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Xspm":
/*!***********************************************!*\
  !*** ./src/app/PAGES/status/status.module.ts ***!
  \***********************************************/
/*! exports provided: StatusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPageModule", function() { return StatusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status-routing.module */ "j48K");
/* harmony import */ var _status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status.page */ "afsc");







let StatusPageModule = class StatusPageModule {
};
StatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _status_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatusPageRoutingModule"]
        ],
        declarations: [_status_page__WEBPACK_IMPORTED_MODULE_6__["StatusPage"]]
    })
], StatusPageModule);



/***/ }),

/***/ "afsc":
/*!*********************************************!*\
  !*** ./src/app/PAGES/status/status.page.ts ***!
  \*********************************************/
/*! exports provided: StatusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPage", function() { return StatusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_status_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./status.page.html */ "nmvG");
/* harmony import */ var _status_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.page.scss */ "JgC0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let StatusPage = class StatusPage {
    constructor() { }
    ngOnInit() {
    }
};
StatusPage.ctorParameters = () => [];
StatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-status',
        template: _raw_loader_status_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_status_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StatusPage);



/***/ }),

/***/ "j48K":
/*!*******************************************************!*\
  !*** ./src/app/PAGES/status/status-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StatusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPageRoutingModule", function() { return StatusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status.page */ "afsc");




const routes = [
    {
        path: '',
        component: _status_page__WEBPACK_IMPORTED_MODULE_3__["StatusPage"]
    }
];
let StatusPageRoutingModule = class StatusPageRoutingModule {
};
StatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StatusPageRoutingModule);



/***/ }),

/***/ "nmvG":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES/status/status.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>status</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=status-status-module.js.map