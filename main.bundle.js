webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".app-container {\n  width:200px\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <ng-dropdown dTitle=\"Custom Header\" [disabled]=\"true\" [data]=\"dummyData\" [filter]=\"true\" [(selectedOption)]=\"dummyOption\" (selectedOptionChange)=\"dummyChange($event)\"></ng-dropdown>\n  <ng-dropdown dTitle=\"Custom Header\" [editable]=\"true\" [data]=\"dummyData\" [filter]=\"true\" selectedOption=\"karan\" (selectedOptionChange)=\"dummyChange($event)\"></ng-dropdown>\n  <ng-dropdown dTitle=\"Custom Header\" [editable]=\"true\" [data]=\"dummyData\" [filter]=\"true\" [selectedOption]=\"dummyOption\" (selectedOptionChange)=\"dummyChange($event)\"></ng-dropdown>\n  <ng-dropdown dTitle=\"Custom Header\" [data]=\"dummyData\" [filter]=\"true\" [(selectedOption)]=\"dummyOption\" (selectedOptionChange)=\"dummyChange($event)\"></ng-dropdown>\n  <ng-dropdown dTitle=\"Custom Header\" [data]=\"dummyData\" [(selectedOption)]=\"dummyOption\" (selectedOptionChange)=\"dummyChange($event)\"></ng-dropdown>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app";
        this.dummyData = [
            {
                name: "No1",
                id: 2
            },
            {
                name: "No2",
                id: 4
            },
            {
                name: "No3",
                id: 1
            },
            {
                name: "No4",
                id: 3
            },
            {
                name: "Fooasda",
                id: 3
            },
            {
                name: "Karans",
                id: 3
            },
            {
                name: "Hudiiiia",
                id: 3
            },
            {
                name: "Rinbaar",
                id: 3
            },
            {
                name: "This is a very long condition with a relatively long ttext",
                id: 3
            }
        ];
        this.dummyOption = {
            name: "No3"
        };
    }
    AppComponent.prototype.dummyChange = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_dropdown_dropdown_module__ = __webpack_require__("./src/app/modules/dropdown/dropdown.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__modules_dropdown_dropdown_module__["a" /* DropdownModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/dropdown/dropdown.component.css":
/***/ (function(module, exports) {

module.exports = ".ng-dropdown {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  padding-bottom: 10px;\n}\n.ng-dropdown .ng-dropdown__title {\n  padding-bottom: 5px;\n}\n.ng-dropdown .ng-dropdown__button {\n  background: white;\n  border: 1px solid #C9C9C9;\n  padding: 2px 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  height: 18px;\n}\n.ng-dropdown .ng-dropdown__button span, .ng-dropdown__container>li a span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ng-dropdown .ng-dropdown__button img {\n  height: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ng-dropdown .ng-dropdown__button input,.ng-dropdown .ng-dropdown__container li input.ng-dropdown__container--editable {\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ng-dropdown .ng-dropdown__button.disabled {\n  pointer-events: none;\n  opacity: 0.7;\n}\n.ng-dropdown .ng-dropdown__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: white;\n  list-style-type: none;\n  border: 1px solid #C9C9C9;\n  position: fixed;\n  left: -10000px;\n  outline: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 100000;\n  padding: 0;\n  margin: 0;\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n          box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n.ng-dropdown .ng-dropdown__container:focus {\n  left: 0;\n}\n.ng-dropdown .ng-dropdown__container:focus + .ng-dropdown__button {\n  pointer-events: none;\n}\n.ng-dropdown .ng-dropdown__container li:hover {\n  background-color: #e0e0e0;\n  color: black;\n}\n.ng-dropdown .ng-dropdown__container>li:first-child a {\n  height: 100%;\n}\n.ng-dropdown .ng-dropdown__container>li:first-child, .ng-dropdown__container--list>li:first-child {\n  position: fixed;\n  background-color: white;\n}\n.ng-dropdown .ng-dropdown__container>li:first-child a, .ng-dropdown__container--list>li:first-child a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.ng-dropdown .ng-dropdown__container>li:first-child a img, .ng-dropdown__container--list>li:first-child a img {\n  height: 10px;\n}\n.ng-dropdown .ng-dropdown__container>li:first-child:hover, .ng-dropdown__container--list>li:first-child:hover {\n  color: initial;\n}\n.ng-dropdown .ng-dropdown__container li a,.ng-dropdown__container--list>li:first-child li a {\n  padding: 0 10px;\n  height: 22px;\n  line-height: 22px;\n  cursor: pointer;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  display: block;\n  text-align: left;\n}\n.ng-dropdown .ng-dropdown__container li input.ng-dropdown__container--list__filter {\n  width: 100%;\n  padding: 0 9px;\n  height: 22px;\n  outline: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  border-top: 1px solid #e0e0e0;\n}\n.ng-dropdown .ng-dropdown__container ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  overflow: auto;\n}\n.ng-dropdown__container--list__sublist li:first-child {\n  position: initial;\n}\n.ng-dropdown__container--list__sublist li.active {\n  background-color: #6FBBFF;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/modules/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <div class=\"ng-dropdown\">\n    <span *ngIf=\"dTitle\" [innerText]=\"dTitle\" class=\"ng-dropdown__title\"></span>\n    <ul class=\"ng-dropdown__container\" tabindex=\"0\" (focus)=\"ifContainerFocused=true\" (blur)=\"onDropdownBlur($event)\" [ngStyle]=\"ifContainerFocused ? containerFocusedStyles: {}\"\n      #dropdownMenu>\n      <li [ngStyle]=\"ifContainerFocused ? selectedItemFocusedStyles: {}\">\n        <a (click)=\"hideDropdown()\">\n          <span *ngIf=\"!editable; else ifEditableList\" (focus)=\"onInputFocus($event)\" [innerText]=\"_selectedOption?.name\"></span>\n          <ng-template #ifEditableList>\n            <input class=\"ng-dropdown__container--editable\" [ngModel]=\"_selectedOption | GetSelectedNamePipe\" (focus)=\"onInputFocus($event)\"/>\n          </ng-template>\n          <img src=\"assets/downPopup.png\" />\n        </a>\n      </li>\n      <ul class=\"ng-dropdown__container--list\" [ngStyle]=\"ifContainerFocused ? restOfListFocusedStyles: {}\">\n        <li *ngIf=\"filter\" [ngStyle]=\"ifContainerFocused ? selectedItemFocusedStyles: {}\">\n          <input #dropdownFilter class=\"ng-dropdown__container--list__filter\" placeholder=\"Search\" (keyup)=\"onFilterSearch($event)\" (blur)=\"onDropdownBlur($event)\" />\n        </li>\n        <ul class=\"ng-dropdown__container--list__sublist\" [ngStyle]=\"ifContainerFocused ? restOfListWithoutFilterFocusedStyles: {}\">\n          <ng-container *ngIf=\"_data?.length else noResults\">\n            <li *ngFor=\"let option of _data\" [ngClass]=\"_selectedOption?.name == option.name ? 'active' : ''\">\n              <a [innerText]=\"option.name\" (click)=\"onDropdownItemSelect($event, option)\"></a>\n            </li>\n          </ng-container>\n          <ng-template #noResults>\n            <li>\n              <a>No Results Found</a>\n            </li>\n          </ng-template>\n        </ul>\n      </ul>\n    </ul>\n    <div class=\"ng-dropdown__button\" [ngClass]=\"disabled ? 'disabled' : ''\" (mouseup)=\"onDropdownMenuClick($event)\" #dropdownButton>\n      <span *ngIf=\"!editable; else ifEditable\" [innerText]=\"_selectedOption?.name\"></span>\n      <ng-template #ifEditable>\n        <input #dropdownInput (keyup)=\"onInputChange($event)\" [ngModel]=\"_selectedOption | GetSelectedNamePipe\" />\n      </ng-template>\n      <img src=\"assets/downPopup.png\" />\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/modules/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.selectedOptionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.ifContainerFocused = false;
    }
    DropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.mutationObserverDOM = new MutationObserver(function (mutations) {
            _this.setContainerDimensions();
        });
        this.mutationObserverDOM.observe(this.dropdownMenu.nativeElement, {
            childList: true
        });
        this.mutationObserverDOM.observe(this.dropdownMenu.nativeElement.children[1], {
            childList: true
        });
        if (this.filter)
            this.mutationObserverDOM.observe(this.dropdownMenu.nativeElement.children[1].children[1], {
                childList: true
            });
        else
            this.mutationObserverDOM.observe(this.dropdownMenu.nativeElement.children[1].children[0], {
                childList: true
            });
    };
    DropdownComponent.prototype.ngOnChanges = function (simpleChanges) {
        var _this = this;
        if (simpleChanges.hasOwnProperty("data")) {
            this._data = this.data;
        }
        if (this.data && !this.selectedOption)
            this.setDefaultOption();
        else if (this.data && this.selectedOption) {
            if (this.selectedOption.hasOwnProperty("id")) {
                this.data.forEach(function (obj) {
                    if (obj.id == _this.selectedOption["id"])
                        _this._selectedOption = obj;
                });
            }
            else if (this.selectedOption.hasOwnProperty("name")) {
                this.data.forEach(function (obj) {
                    if (obj.name == _this.selectedOption["name"])
                        _this._selectedOption = obj;
                });
            }
            else if (this.editable) {
                this._selectedOption = this.selectedOption;
                return;
            }
            if (!this._selectedOption)
                this.setDefaultOption();
        }
    };
    DropdownComponent.prototype.setDefaultOption = function () {
        if (this.editable)
            this._selectedOption = "";
        else
            this._selectedOption = this.data[0];
    };
    DropdownComponent.prototype.setContainerDimensions = function () {
        var defaultDropdownHeight = this.dropdownMenu.nativeElement.children[0].offsetHeight;
        var actualList;
        if (this.filter) {
            defaultDropdownHeight += this.dropdownMenu.nativeElement.children[1].children[0].offsetHeight;
            actualList = this.dropdownMenu.nativeElement.children[1].children[1].children;
        }
        else
            actualList = this.dropdownMenu.nativeElement.children[1].children[0].children;
        defaultDropdownHeight += Array.from(actualList).reduce(function (accumulator, currentValue) { return accumulator + currentValue["offsetHeight"]; }, 0);
        var dropdownButtonElement = this.dropdownButton.nativeElement;
        var dropdownButtonRect = dropdownButtonElement.getBoundingClientRect();
        var dropdownFilterHeight = this.filter ? this.dropdownFilter.nativeElement.offsetHeight : 0;
        var distanceFromTop = dropdownButtonRect.top;
        var distanceFromLeft = dropdownButtonRect.left;
        var distanceFromBottom = window.innerHeight - distanceFromTop - dropdownButtonElement.offsetHeight;
        var distanceFromRight = window.innerWidth - distanceFromLeft - dropdownButtonElement.offsetWidth;
        this.selectedItemFocusedStyles = {
            "width": dropdownButtonElement.offsetWidth - 2 + "px",
            "height": dropdownButtonElement.offsetHeight - 2 + "px"
        };
        this.restOfListWithoutFilterFocusedStyles = { "margin-top": dropdownFilterHeight + "px" };
        // If the space below is more than the dropdown height
        if (distanceFromBottom > defaultDropdownHeight) {
            // Un-reversify the list of array
            this.containerFocusedStyles = {
                "top": distanceFromTop + "px",
                "left": distanceFromLeft + "px",
                "width": dropdownButtonElement.offsetWidth + 'px',
                "flex-direction": "column"
            };
            this.restOfListFocusedStyles = { "margin-top": dropdownButtonElement.offsetHeight + "px" };
        }
        else if (distanceFromTop > defaultDropdownHeight) {
            // If the space above is more than the dropdown height
            // Reversify the list of array
            this.containerFocusedStyles = {
                "bottom": distanceFromBottom + "px",
                "left": distanceFromLeft + "px",
                "width": dropdownButtonElement.offsetWidth + 'px',
                "flex-direction": "column-reverse"
            };
            this.restOfListFocusedStyles = { "margin-bottom": dropdownButtonElement.offsetHeight + "px" };
            this.selectedItemFocusedStyles = __assign({}, this.selectedItemFocusedStyles, { "border-top": "1px solid #e0e0e0" });
        }
        else {
            // If space above and below both are less, show where it is maximum
            // When space below is more
            if (distanceFromBottom > distanceFromTop) {
                this.containerFocusedStyles = {
                    "top": distanceFromTop + "px",
                    "bottom": "20px",
                    "left": distanceFromLeft + "px",
                    "width": dropdownButtonElement.offsetWidth + 'px',
                    "flex-direction": "column"
                };
                this.restOfListFocusedStyles = { "margin-top": dropdownButtonElement.offsetHeight + "px" };
            }
            else {
                // When space above is more
                this.containerFocusedStyles = {
                    "top": "20px",
                    "bottom": distanceFromBottom + "px",
                    "left": distanceFromLeft + "px",
                    "width": dropdownButtonElement.offsetWidth + 'px',
                    "flex-direction": "column-reverse"
                };
                this.restOfListFocusedStyles = { "margin-bottom": dropdownButtonElement.offsetHeight + "px" };
                this.selectedItemFocusedStyles = __assign({}, this.selectedItemFocusedStyles, { "border-top": "1px solid #e0e0e0" });
            }
        }
    };
    DropdownComponent.prototype.onFilterSearch = function ($event) {
        this.setSearchedItems($event.target.value);
    };
    DropdownComponent.prototype.setSearchedItems = function (value) {
        this._data = this.data.filter(function (element) { return element.name
            .toLowerCase()
            .indexOf(value.toLowerCase()) !== -1; });
    };
    DropdownComponent.prototype.onInputFocus = function ($event) {
        this.dropdownInput.nativeElement.focus();
        this.ifContainerFocused = false;
    };
    DropdownComponent.prototype.onInputChange = function ($event) {
        this._selectedOption = $event.target.value;
        // Broadcast Event
        this.selectedOptionChange.emit(this._selectedOption);
    };
    DropdownComponent.prototype.onDropdownItemSelect = function ($event, option) {
        this._selectedOption = option;
        // if (this.selectedOption.hasOwnProperty("id"))
        //   this.selectedOption = { id: this._selectedOption.id };
        // else this.selectedOption = { name: this._selectedOption.name };
        // Broadcast Event
        this.selectedOptionChange.emit(option);
        this.hideDropdown();
    };
    DropdownComponent.prototype.onDropdownMenuClick = function ($event) {
        this.clearSearchFilter();
        this.setContainerDimensions();
        if ($event.target instanceof HTMLInputElement)
            return;
        else
            this.showDropdown();
    };
    DropdownComponent.prototype.onDropdownBlur = function ($event) {
        if (this.dropdownFilter && $event.relatedTarget == this.dropdownFilter.nativeElement && $event.relatedTarget instanceof HTMLInputElement)
            return;
        this.ifContainerFocused = false;
        this.hideDropdown();
    };
    DropdownComponent.prototype.clearSearchFilter = function () {
        if (!this.dropdownFilter)
            return;
        this.dropdownFilter.nativeElement.value = "";
        this.setSearchedItems("");
    };
    DropdownComponent.prototype.showDropdown = function () {
        this.dropdownMenu.nativeElement.focus();
    };
    DropdownComponent.prototype.hideDropdown = function () {
        this.dropdownMenu.nativeElement.blur();
    };
    DropdownComponent.prototype.ngOnDestroy = function () {
        this.mutationObserverDOM.disconnect();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], DropdownComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "dTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "selectedOption", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "filter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "editable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], DropdownComponent.prototype, "selectedOptionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])("dropdownMenu"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], DropdownComponent.prototype, "dropdownMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])("dropdownButton"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], DropdownComponent.prototype, "dropdownButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])("dropdownInput"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], DropdownComponent.prototype, "dropdownInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])("dropdownFilter"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], DropdownComponent.prototype, "dropdownFilter", void 0);
    DropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ng-dropdown",
            template: __webpack_require__("./src/app/modules/dropdown/dropdown.component.html"),
            styles: [__webpack_require__("./src/app/modules/dropdown/dropdown.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/modules/dropdown/dropdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_component__ = __webpack_require__("./src/app/modules/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dropdown_pipe__ = __webpack_require__("./src/app/modules/dropdown/dropdown.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dropdown_component__["a" /* DropdownComponent */], __WEBPACK_IMPORTED_MODULE_4__dropdown_pipe__["a" /* GetSelectedNamePipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__dropdown_component__["a" /* DropdownComponent */]]
        })
    ], DropdownModule);
    return DropdownModule;
}());



/***/ }),

/***/ "./src/app/modules/dropdown/dropdown.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetSelectedNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetSelectedNamePipe = /** @class */ (function () {
    function GetSelectedNamePipe() {
    }
    GetSelectedNamePipe.prototype.transform = function (selectedOption) {
        return typeof selectedOption == 'object' ? selectedOption.name : selectedOption;
    };
    GetSelectedNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({ name: 'GetSelectedNamePipe' })
    ], GetSelectedNamePipe);
    return GetSelectedNamePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map