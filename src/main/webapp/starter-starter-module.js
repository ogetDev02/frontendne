(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starter-starter-module"],{

/***/ "+8GT":
/*!************************************************!*\
  !*** ./src/app/starter/starter.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "5PGu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/starter/starter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ============================================================== -->\n<!-- Simple four boxes Row -->\n<!-- ============================================================== -->\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <!-- column -->    \n    <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n        <mat-card>\n            <mat-card-content>\n                <!-- Row -->\n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n                    <!-- column -->\n                    <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\n                        Nómina Electrónica desarrollada por OGET S.A.S\n                        <br/><br/>\n                        <a href=\"https://appogetws.com/\" mat-raised-button color=\"warn\">OGET Pro</a>\n                    </div>\n                </div>      \n            </mat-card-content>\n        </mat-card>\n    </div>\n    <!-- column -->    \n</div>");

/***/ }),

/***/ "L6xp":
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/*! exports provided: StarterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterComponent", function() { return StarterComponent; });
/* harmony import */ var _raw_loader_starter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./starter.component.html */ "5PGu");
/* harmony import */ var _starter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starter.component.scss */ "+8GT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StarterComponent = /** @class */ (function () {
    function StarterComponent() {
    }
    StarterComponent.prototype.ngAfterViewInit = function () { };
    StarterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-starter',
            template: _raw_loader_starter_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_starter_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], StarterComponent);
    return StarterComponent;
}());



/***/ }),

/***/ "d0p3":
/*!********************************************!*\
  !*** ./src/app/starter/starter.routing.ts ***!
  \********************************************/
/*! exports provided: StarterRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterRoutes", function() { return StarterRoutes; });
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starter.component */ "L6xp");

var StarterRoutes = [{
        path: '',
        component: _starter_component__WEBPACK_IMPORTED_MODULE_0__["StarterComponent"]
    }];


/***/ }),

/***/ "ej4Q":
/*!*******************************************!*\
  !*** ./src/app/starter/starter.module.ts ***!
  \*******************************************/
/*! exports provided: StarterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterModule", function() { return StarterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo-material-module */ "onrN");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starter.component */ "L6xp");
/* harmony import */ var _starter_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starter.routing */ "d0p3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _demo_material_module__WEBPACK_IMPORTED_MODULE_3__["DemoMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_starter_routing__WEBPACK_IMPORTED_MODULE_6__["StarterRoutes"])
            ],
            declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_5__["StarterComponent"]]
        })
    ], StarterModule);
    return StarterModule;
}());



/***/ })

}]);
//# sourceMappingURL=starter-starter-module.js.map