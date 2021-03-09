(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    {
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'PhumlaniArendse';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 138, vars: 0, consts: [[1, "nav"], [1, "links"], ["href", "#home"], ["href", "#about"], ["href", "#work"], ["href", "#contact"], ["id", "mobileNav", 1, "mobile"], ["href", "javascript:void(0)", "onclick", "closeNav()", 1, "closebtn"], [1, "mobile-content"], ["href", "#home", "onclick", "closeNav()"], ["href", "#about", "onclick", "closeNav()"], ["href", "#work", "onclick", "closeNav()"], ["href", "#contact", "onclick", "closeNav()"], [1, "hamburger"], [1, "burger"], ["onclick", "openNav()", 2, "cursor", "pointer"], [1, "background"], ["id", "home", 1, "info"], ["href", "https://github.com/PhumlaniDev?tab=repositories", "target", "_blank"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/phumlani-arendse/", "target", "_blank"], [1, "fab", "fa-linkedin"], [2, "font-size", "65px", "color", "white"], [2, "color", "white", "font-size", "18px"], [1, "container"], ["id", "about", 1, "about"], ["src", "../../assets/WhatsApp Image 2021-01-08 at 19.59.01.jpeg", "alt", "Phumlani Arendse"], [1, "details"], [1, "line"], [1, "skills"], ["id", "work", 1, "projects"], [1, "work"], ["src", "../../assets/gesture machine learning.png", "alt", "Gesture Machine Learning"], ["href", "http://gesture.herokuapp.com/"], ["src", "../../assets/greet app placeholder.png", "alt", "Greet app"], ["href", "https://greetwebapp.herokuapp.com/hello"], ["src", "../../assets/Employee Manangement System.jpg", "alt", "Employeee Management System"], ["href", "https://github.com/PhumlaniDev/Employee-Management-Systemme"], ["src", "../../assets/Eat Cup Cake.jpg", "alt", "Eat Cup Cake"], ["href", "https://github.com/PhumlaniDev/EatCupcake"], ["src", "../../assets/Rock Paper Scicors.png", "alt", "Rock Paper Scicors"], ["href", "https://github.com/PhumlaniDev/Rock-Paper-Scissors"], ["src", "../../assets/hangman.png", "alt", "hangman"], ["href", "https://github.com/PhumlaniDev/Hangman"], ["src", "../../assets/eHealth.jpg", "alt", "eHealth"], ["href", "https://ehealth-care.herokuapp.com/"], ["id", "contact", 1, "contact"], ["action", "https://formspree.io/f/xpzobqzj", "method", "POST", "target", "_blank"], ["type", "text", "name", "Name", "placeholder", "Name & Surname"], ["type", "text", "name", "Email", "placeholder", "Email"], ["type", "text", "name", "Phone", "placeholder", "Phone"], ["name", "Message", "placeholder", "Message"], ["type", "submit"], ["href", "https://jarod-britz-profile.web.app/"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phumlani Arendse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "I'm a Web Developer with extensive experience for over 3 years. My expertise is to create and design websites, Apps, Mockups and many moire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "About Me.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "I am a self-motivated mobile and back-end developer. I enjoy collaborating with people and adapt well to challenges. I am keen to learn new technologies as tech changes everyday. My programming experience has offer a lot of knowledge in solving the problems, programming, developing and deploying web applications using Github & Git, Heroku with PostgreSQL. I have developed web apps with HTML,CSS and Java.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Firebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "PostgreSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Adobe XD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Gesture ML Hackathon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique eaque iure id illum assumenda incidunt, unde, harum eos fugit commodi quibusdam aut nostrum? Dolor numquam modi facere iste autem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Greet App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique eaque iure id illum assumenda incidunt, unde, harum eos fugit commodi quibusdam aut nostrum? Dolor numquam modi facere iste autem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Employeee Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique eaque iure id illum assumenda incidunt, unde, harum eos fugit commodi quibusdam aut nostrum? Dolor numquam modi facere iste autem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Eat Cup Cake");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique eaque iure id illum assumenda incidunt, unde, harum eos fugit commodi quibusdam aut nostrum? Dolor numquam modi facere iste autem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Rock Paper Scicors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique eaque iure id illum assumenda incidunt, unde, harum eos fugit commodi quibusdam aut nostrum? Dolor numquam modi facere iste autem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Hangman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique eaque iure id illum assumenda incidunt, unde, harum eos fugit commodi quibusdam aut nostrum? Dolor numquam modi facere iste autem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "eHealth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique eaque iure id illum assumenda incidunt, unde, harum eos fugit commodi quibusdam aut nostrum? Dolor numquam modi facere iste autem! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Contact Me.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "form", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "textarea", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Designed and Developed by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Jarod Britz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  background-color: rgba(0, 0, 0, 0.781);\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n.mobile[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.hamburger[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  line-height: 80px;\r\n  margin: 20px 2%;\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\r\n  width: 560px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: dodgerblue;\r\n  text-decoration: none;\r\n  right: 0;\r\n  line-height: 100px;\r\n  font-size: 30px;\r\n  margin: 0 5%;\r\n}\r\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: rgb(17, 100, 184);\r\n}\r\n.nav[_ngcontent-%COMP%]   .resume[_ngcontent-%COMP%] {\r\n  border: solid 1px #ffc100;\r\n  padding: 2%;\r\n  border-radius: 5px;\r\n}\r\n.background[_ngcontent-%COMP%] {\r\n  background: url('background.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.background[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n.info[_ngcontent-%COMP%] {\r\n  padding: 10%;\r\n  width: 600px;\r\n  margin-left: 10%;\r\n}\r\n.info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  margin-right: 2%;\r\n  cursor: pointer;\r\n  font-size: 30px;\r\n  color: dodgerblue;\r\n}\r\n.info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\r\n  color: rgb(17, 100, 184);\r\n}\r\n.info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: dodgerblue;\r\n  color: white;\r\n  border-radius: 12px;\r\n  border: none;\r\n  height: 40px;\r\n  width: 150px;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n.info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(17, 100, 184);\r\n}\r\n.line[_ngcontent-%COMP%] {\r\n  border-bottom: solid 3px rgb(17, 100, 184);\r\n  width: 150px;\r\n  margin: 0;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  background-color: rgb(43, 43, 43);\r\n}\r\n.about[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr;\r\n  text-align: center;\r\n  padding: 10%;\r\n}\r\n.about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  border-radius: 12px;\r\n  box-shadow: 5px 10px 18px rgb(17, 100, 184);\r\n}\r\n.about[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.about[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n}\r\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n.about[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr;\r\n}\r\n.projects[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.projects[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  margin-bottom: 2%;\r\n}\r\n.projects[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 50px;\r\n}\r\n.work[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr;\r\n  text-align: center;\r\n  padding-bottom: 10%;\r\n}\r\n.work[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  padding: 5%;\r\n}\r\n.work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  color: dodgerblue;\r\n}\r\n.work[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  height: 250px;\r\n}\r\n.contact[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background: url('contactbackground.png');\r\n  background-size: cover;\r\n  background-position: center;\r\n  padding: 10%;\r\n}\r\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: 50px;\r\n}\r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  margin: 0 auto;\r\n}\r\n.contact[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n  border-bottom: solid 3px rgb(17, 100, 184);\r\n  width: 150px;\r\n  margin: 0 auto;\r\n  margin-bottom: 2%;\r\n}\r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n  padding: 5px;\r\n}\r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  margin-bottom: 10px;\r\n  background-color: rgb(43, 43, 43);\r\n  border: none;\r\n  border-bottom: solid 2px dodgerblue;\r\n  border-left: solid 2px dodgerblue;\r\n  border-radius: 12px;\r\n  color: rgb(114, 114, 114);\r\n}\r\n.contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: rgb(43, 43, 43);\r\n  border: none;\r\n  border-bottom: solid 2px dodgerblue;\r\n  border-left: solid 2px dodgerblue;\r\n  height: 100px;\r\n  border-radius: 12px;\r\n  color: rgb(114, 114, 114);\r\n}\r\n.contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  background-color: dodgerblue;\r\n  color: white;\r\n  border-radius: 12px;\r\n  border: none;\r\n  height: 40px;\r\n  width: 150px;\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n.contact[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(17, 100, 184);\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n  background-color: rgb(43, 43, 43);\r\n  text-align: center;\r\n  height: 40px;\r\n}\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  line-height: 30px;\r\n}\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: dodgerblue;\r\n  text-decoration: none;\r\n}\r\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: rgb(17, 100, 184);\r\n}\r\n@media screen and (max-width: 1000px) {\r\n  .work[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr;\r\n  }\r\n}\r\n@media screen and (max-width: 750px) {\r\n  .nav[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  .mobile[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 0%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.959);\r\n    overflow-y: hidden;\r\n    transition: 0.5s;\r\n  }\r\n  .hamburger[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: rgb(43, 43, 43);\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n  }\r\n  .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    line-height: 60px;\r\n    margin: 0 2%;\r\n    cursor: pointer;\r\n    color: dodgerblue;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 30px;\r\n    font-size: 30px;\r\n  }\r\n  .mobile-content[_ngcontent-%COMP%] {\r\n    color: dodgerblue;\r\n    position: relative;\r\n    top: 20%;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 30px;\r\n  }\r\n  .mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    font-size: 50px;\r\n    color: dodgerblue;\r\n    display: block;\r\n    transition: 0.3s;\r\n    line-height: 1.3;\r\n  }\r\n  .mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n    color: #f1f1f1;\r\n  }\r\n\r\n  .mobile[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 10%;\r\n    font-size: 50px;\r\n    color: dodgerblue;\r\n  }\r\n\r\n  .info[_ngcontent-%COMP%] {\r\n    padding: 30% 0;\r\n    width: 300px;\r\n    margin-left: 0;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n\r\n  .about[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1.5fr;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n  }\r\n  .about[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .about[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n  }\r\n\r\n  .work[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n  }\r\n\r\n  .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n  .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixNQUFNO0FBQ1I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUNBQTRDO0VBQzVDLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtF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RUFDL0I7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTs7SUFFRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzgxKTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG4ubW9iaWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5oYW1idXJnZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5hdiBpbWcge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogMjBweCAyJTtcclxufVxyXG4ubmF2IC5saW5rcyB7XHJcbiAgd2lkdGg6IDU2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmF2IGEge1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICByaWdodDogMDtcclxuICBsaW5lLWhlaWdodDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbjogMCA1JTtcclxufVxyXG4ubmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTcsIDEwMCwgMTg0KTtcclxufVxyXG4ubmF2IC5yZXN1bWUge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmMxMDA7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuLmJhY2tncm91bmQgYnV0dG9uIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBwYWRkaW5nOiAxMCU7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuLmluZm8gaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBkb2RnZXJibHVlO1xyXG59XHJcbi5pbmZvIGk6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTcsIDEwMCwgMTg0KTtcclxufVxyXG4uaW5mbyBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW5mbyBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTAwLCAxODQpO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IHJnYigxNywgMTAwLCAxODQpO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgNDMpO1xyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuLmFib3V0IGltZyB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCByZ2IoMTcsIDEwMCwgMTg0KTtcclxufVxyXG4uYWJvdXQgLmRldGFpbHMge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmFib3V0IGgxLFxyXG5wLFxyXG5saSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hYm91dCBoMSB7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbi5hYm91dCBwLFxyXG5saSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5hYm91dCAuc2tpbGxzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxufVxyXG5cclxuLnByb2plY3RzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2plY3RzIC5saW5lIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG4ucHJvamVjdHMgaDEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuLndvcmsge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxufVxyXG4ud29yayBkaXYge1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcbi53b3JrIGgyIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG4ud29yayBpbWcge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvY29udGFjdGJhY2tncm91bmQucG5nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuLmNvbnRhY3QgaDEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuLmNvbnRhY3QgZm9ybSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb250YWN0IC5saW5lIHtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggcmdiKDE3LCAxMDAsIDE4NCk7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5jb250YWN0IGZvcm0gaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jb250YWN0IGZvcm0gaW5wdXQge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGRvZGdlcmJsdWU7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCBkb2RnZXJibHVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6IHJnYigxMTQsIDExNCwgMTE0KTtcclxufVxyXG4uY29udGFjdCBmb3JtIHRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBkb2RnZXJibHVlO1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggZG9kZ2VyYmx1ZTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6IHJnYigxMTQsIDExNCwgMTE0KTtcclxufVxyXG4uY29udGFjdCBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFjdCBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNywgMTAwLCAxODQpO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbmZvb3RlciBwIHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5mb290ZXIgYSB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmZvb3RlciBhOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDE3LCAxMDAsIDE4NCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC53b3JrIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgLm5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTU5KTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIC5oYW1idXJnZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA0Myk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgLmhhbWJ1cmdlciBzcGFuIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwIDIlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLm1vYmlsZS1jb250ZW50IHtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5tb2JpbGUgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgfVxyXG4gIC5tb2JpbGUgYTpob3ZlcixcclxuICAubW9iaWxlIGE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlIC5jbG9zZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBwYWRkaW5nOiAzMCUgMDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMS41ZnI7XHJcbiAgfVxyXG4gIC5hYm91dCAubGluZSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmFib3V0IC5kZXRhaWxzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmFib3V0IGltZyB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgfVxyXG5cclxuICAud29yayB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICB9XHJcblxyXG4gIC5jb250YWN0IGZvcm0ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICAuY29udGFjdCBmb3JtIGlucHV0LFxyXG4gIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aphum\OneDrive\Documents\My Docs\My Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map