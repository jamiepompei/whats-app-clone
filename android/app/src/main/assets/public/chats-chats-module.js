(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-chats-module"],{

/***/ "+ZUu":
/*!*****************************************************!*\
  !*** ./src/app/PAGES/chats/chats-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageRoutingModule", function() { return ChatsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.page */ "xQtm");




const routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_3__["ChatsPage"]
    }
];
let ChatsPageRoutingModule = class ChatsPageRoutingModule {
};
ChatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatsPageRoutingModule);



/***/ }),

/***/ "3TR/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PAGES/chats/chats.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div *ngFor= \"let chat of chats; index as i\">\n    <div class=\"chats\" (click)=\"selectChat(chat)\">\n      <ion-avatar class=\"chats_avatar\">\n        <img class=\"chats_profile_pic\"\n        src= \"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\" />\n      </ion-avatar>\n      <div class=\"chats_name\">\n        <div><strong>{{ chat.name }}</strong></div>\n        <div><p>{{ getLastMessage(i) }}</p></div>\n      </div>\n      <div class=\"chat_time\">{{ getLastMessageTime(i) | date: 'shortTime' }}</div>\n    </div>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "JJmw":
/*!*********************************************!*\
  !*** ./src/app/PAGES/chats/chats.module.ts ***!
  \*********************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chats-routing.module */ "+ZUu");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats.page */ "xQtm");







let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatsPageRoutingModule"]
        ],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
    })
], ChatsPageModule);



/***/ }),

/***/ "eQ47":
/*!*********************************************!*\
  !*** ./src/app/PAGES/chats/chats.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chats {\n  color: black;\n  display: flex;\n  justify-content: space-around;\n  margin: 4px;\n  padding: 4px;\n  border-bottom: solid #e7e5e5 0.5px;\n}\n\n.chats_name {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-left: 2px;\n  margin-top: 4px;\n}\n\n.chats_avatar {\n  width: 50px;\n  height: 50px;\n  margin-right: 0px;\n}\n\n.chats_profile_pic {\n  object-fit: contain;\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUoiLCJmaWxlIjoiY2hhdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRze1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbjogNHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCByZ2IoMjMxLCAyMjksIDIyOSkgMC41cHg7XG59XG4uY2hhdHNfbmFtZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cbi5jaGF0c19hdmF0YXJ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuLmNoYXRzX3Byb2ZpbGVfcGlje1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "xQtm":
/*!*******************************************!*\
  !*** ./src/app/PAGES/chats/chats.page.ts ***!
  \*******************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chats.page.html */ "3TR/");
/* harmony import */ var _chats_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats.page.scss */ "eQ47");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_SERVICES_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/SERVICES/api.service */ "F5oV");






let ChatsPage = class ChatsPage {
    constructor(navCtl, api) {
        this.navCtl = navCtl;
        this.api = api;
        this.chats = [];
        this.messages = [];
    }
    ngOnInit() {
        this.getAllChats();
    }
    selectChat(chat) {
        let navigationExtra = {
            state: {
                chat: chat
            }
        };
        this.navCtl.navigateForward('messages', navigationExtra);
    }
    getAllChats() {
        this.api.getChats()
            .subscribe(resp => {
            this.chats = resp;
        });
    }
    getLastMessage(index) {
        this.messages = this.chats[index].messages;
        if (this.messages.length == 0)
            return '';
        return this.messages[this.messages.length - 1].message;
    }
    getLastMessageTime(index) {
        this.messages = this.chats[index].messages;
        if (this.messages.length == 0)
            return '';
        return this.date = this.messages[this.messages.length - 1].time;
    }
};
ChatsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_SERVICES_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
ChatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chats',
        template: _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chats_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatsPage);



/***/ })

}]);
//# sourceMappingURL=chats-chats-module.js.map