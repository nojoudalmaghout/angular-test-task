(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+AP3":
/*!************************************!*\
  !*** ./src/app/here-map/Marker.ts ***!
  \************************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
class Marker {
    constructor(lat, lng, data, icon) {
        this.lat = 0;
        this.lng = 0;
        this.data = '';
        this.icon = '';
        this.lat = lat;
        this.lng = lng;
        this.data = data;
        this.icon = icon;
    }
}


/***/ }),

/***/ "/GcI":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular-test\src\main.ts */"zUnb");


/***/ }),

/***/ "5Jak":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "/GcI");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "7a4G":
/*!******************************************************!*\
  !*** ./src/app/add-vehicle/add-vehicle.component.ts ***!
  \******************************************************/
/*! exports provided: AddVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _common_bad_input_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/bad-input-error */ "HFuo");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/vehicle.service */ "D1vo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AddVehicleComponent_ng_template_0_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "license is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddVehicleComponent_ng_template_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddVehicleComponent_ng_template_0_div_9_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.license.errors == null ? null : ctx_r3.f.license.errors.required);
} }
function AddVehicleComponent_ng_template_0_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Device is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddVehicleComponent_ng_template_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddVehicleComponent_ng_template_0_div_14_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.device.errors == null ? null : ctx_r4.f.device.errors.required);
} }
function AddVehicleComponent_ng_template_0_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Capacity is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddVehicleComponent_ng_template_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddVehicleComponent_ng_template_0_div_19_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.capacity.errors == null ? null : ctx_r5.f.capacity.errors.required);
} }
function AddVehicleComponent_ng_template_0_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Type is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddVehicleComponent_ng_template_0_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddVehicleComponent_ng_template_0_div_30_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f.type.errors == null ? null : ctx_r6.f.type.errors.required);
} }
function AddVehicleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add new vehicle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddVehicleComponent_ng_template_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "License");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddVehicleComponent_ng_template_0_div_9_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddVehicleComponent_ng_template_0_div_14_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Capacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddVehicleComponent_ng_template_0_div_19_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Car");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Truck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddVehicleComponent_ng_template_0_div_30_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.license.touched && ctx_r1.f.license.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.f.device == null ? null : ctx_r1.f.device.touched) && (ctx_r1.f.device == null ? null : ctx_r1.f.device.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.f.capacity == null ? null : ctx_r1.f.capacity.touched) && (ctx_r1.f.capacity == null ? null : ctx_r1.f.capacity.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.type.touched && ctx_r1.f.type.invalid);
} }
class AddVehicleComponent {
    constructor(service, modalService) {
        this.service = service;
        this.modalService = modalService;
        this.newVehicleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeResult = '';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            license: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            device: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult =
                `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    get f() {
        return this.form.controls;
    }
    submit() {
        let vehicle = this.addVehicle(this.form.value);
        this.newVehicleEvent.emit(vehicle);
        this.modalService.dismissAll("");
    }
    addVehicle(vehicle) {
        this.service.addVehicle(vehicle).subscribe(response => {
            vehicle = response;
            vehicle.lat = Math.random() * (53.539 - 53.439) + 53.439;
            vehicle.lng = Math.random() * (-2.321 - -2.221) + -2.221;
        }, (error) => {
            if (error instanceof _common_bad_input_error__WEBPACK_IMPORTED_MODULE_3__["BadInputError"])
                alert(error.originalError);
            else
                throw error;
        });
        return vehicle;
    }
}
AddVehicleComponent.ɵfac = function AddVehicleComponent_Factory(t) { return new (t || AddVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
AddVehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddVehicleComponent, selectors: [["add-vehicle"]], outputs: { newVehicleEvent: "newVehicleEvent" }, decls: 4, vars: 0, consts: [["addVehicle", ""], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "license"], ["formControlName", "license", "id", "license", "type", "text", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "device"], ["formControlName", "device", "id", "device", "type", "number", 1, "form-control"], ["for", "capacity"], ["formControlName", "capacity", "id", "capacity", "type", "number", 1, "form-control"], ["for", "type"], ["formControlName", "type", "id", "type", 1, "form-control"], ["value", "", "disabled", "", "selected", ""], ["value", "CAR"], ["value", "TRUCK"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function AddVehicleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddVehicleComponent_ng_template_0_Template, 33, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddVehicleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ADD Vehicle\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".btn[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC12ZWhpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYWRkLXZlaGljbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddVehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-vehicle',
                templateUrl: './add-vehicle.component.html',
                styleUrls: ['./add-vehicle.component.css']
            }]
    }], function () { return [{ type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, { newVehicleEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "9SCS":
/*!**********************************************************!*\
  !*** ./src/app/list-vehicles/list-vehicles.component.ts ***!
  \**********************************************************/
/*! exports provided: ListVehiclesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVehiclesComponent", function() { return ListVehiclesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_bad_input_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/bad-input-error */ "HFuo");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");
/* harmony import */ var _here_map_Marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../here-map/Marker */ "+AP3");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/vehicle.service */ "D1vo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _edit_vehicle_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-vehicle/edit-vehicle.component */ "LN+q");









function ListVehiclesComponent_tr_13_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListVehiclesComponent_tr_13_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListVehiclesComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListVehiclesComponent_tr_13_td_7_Template, 2, 0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListVehiclesComponent_tr_13_td_8_Template, 2, 0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "edit-vehicle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newItemEvent", function ListVehiclesComponent_tr_13_Template_edit_vehicle_newItemEvent_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.update($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListVehiclesComponent_tr_13_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const vehicle_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.delete(vehicle_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r1.license);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r1.device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vehicle_r1.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vehicle_r1.type === "CAR" || vehicle_r1.type == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vehicle_r1.type === "TRUCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vehicle", vehicle_r1);
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class ListVehiclesComponent {
    constructor(service) {
        this.service = service;
        this.newMarkersEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentIndex = -1;
        this.page = 1;
        this.pageSize = 9;
        this.count = 0;
        this.markers = [];
    }
    ngOnInit() {
        this.retrieveVehicles();
    }
    retrieveVehicles() {
        this.service.getVehicles(this.page, this.pageSize).subscribe(value => {
            this.vehicleResponse = value;
            this.vehicleResponse.content.forEach(vehicle => {
                vehicle.lat = Math.random() * (53.539 - 53.439) + 53.439;
                vehicle.lng = Math.random() * (-2.321 - -2.221) + -2.221;
            });
            this.count = this.vehicleResponse.totalElements;
            this.setMarkers(this.vehicleResponse.content);
            this.newMarkersEvent.emit(this.markers);
        }, (error) => {
            if (error instanceof _common_bad_input_error__WEBPACK_IMPORTED_MODULE_1__["BadInputError"])
                alert(error.originalError);
            else
                throw error;
        });
    }
    update(vehicle) {
        this.service.updateVehicle(vehicle).subscribe(response => {
            let index = this.vehicleResponse.content.indexOf(vehicle);
            this.vehicleResponse.content.splice(index, 0, vehicle);
            this.setMarkers(this.vehicleResponse.content);
            this.newMarkersEvent.emit(this.markers);
        }, (error) => {
            if (error instanceof _common_bad_input_error__WEBPACK_IMPORTED_MODULE_1__["BadInputError"])
                alert(error.originalError);
            else
                throw error;
        });
    }
    delete(vehicle) {
        if (confirm("Are you sure to delete " + vehicle.license)) {
            this.service.deleteVehicle(vehicle.id).subscribe(response => {
                let index = this.vehicleResponse.content.indexOf(vehicle);
                this.vehicleResponse.content.splice(index, 1);
                this.setMarkers(this.vehicleResponse.content);
                this.newMarkersEvent.emit(this.markers);
            }, (error) => {
                if (error instanceof _common_not_found_error__WEBPACK_IMPORTED_MODULE_2__["NotFoundError"])
                    alert(error.originalError);
                else
                    throw error;
            });
        }
    }
    handlePageChange(event) {
        this.page = event;
        this.retrieveVehicles();
    }
    setMarkers(vehicles) {
        this.markers = [];
        let marker;
        vehicles.forEach(vehicle => {
            let data = '<div style="font-size:14px;"><p>{</br>license: ' + vehicle.license + ' </br>device: ' + vehicle.device + '</br>capacity: ' +
                vehicle.capacity + '</br>type: ' + vehicle.type + '</br>}</p></div>';
            let icon = '';
            if (vehicle.type == "CAR" || vehicle.type == null) {
                icon = 'https://img.icons8.com/ios/48/000000/car--v1.png';
            }
            else {
                icon = 'https://img.icons8.com/material-outlined/48/000000/truck.png';
            }
            marker = new _here_map_Marker__WEBPACK_IMPORTED_MODULE_3__["Marker"](vehicle.lat, vehicle.lng, data, icon);
            this.markers.splice(0, 0, marker);
        });
    }
}
ListVehiclesComponent.ɵfac = function ListVehiclesComponent_Factory(t) { return new (t || ListVehiclesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"])); };
ListVehiclesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListVehiclesComponent, selectors: [["vehicle"]], outputs: { newMarkersEvent: "newMarkersEvent" }, decls: 16, vars: 9, consts: [["responsive", "true", 1, "table", "table-responsive"], [4, "ngFor", "ngForOf"], ["previousLabel", "Prev", "nextLabel", "Next", 3, "responsive", "pageChange"], [4, "ngIf"], [3, "vehicle", "newItemEvent"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], ["src", "https://img.icons8.com/ios/48/000000/car--v1.png"], ["src", "https://img.icons8.com/material-outlined/48/000000/truck.png"]], template: function ListVehiclesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListVehiclesComponent_tr_13_Template, 13, 6, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pagination-controls", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ListVehiclesComponent_Template_pagination_controls_pageChange_15_listener($event) { return ctx.handlePageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 2, ctx.vehicleResponse.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, ctx.pageSize, ctx.page, ctx.count)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _edit_vehicle_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["EditVehicleComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXZlaGljbGVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListVehiclesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vehicle',
                templateUrl: './list-vehicles.component.html',
                styleUrls: ['./list-vehicles.component.css']
            }]
    }], function () { return [{ type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] }]; }, { newMarkersEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "9oUL":
/*!*************************************!*\
  !*** ./src/app/common/PageTable.ts ***!
  \*************************************/
/*! exports provided: PageTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTable", function() { return PageTable; });
class PageTable {
    constructor() {
        this.pageNumber = 0;
        this.pageSize = 0;
    }
}


/***/ }),

/***/ "AytR":
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

/***/ "D1vo":
/*!*********************************************!*\
  !*** ./src/app/services/vehicle.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_bad_input_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/bad-input-error */ "HFuo");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");









class VehicleService {
    constructor(http) {
        this.http = http;
        this.url = "https://jms.safee.xyz/api/vehicles";
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Authorization", "Basic dXNlcjoxMjNxd2U=").append("Content-Type", "application/json");
    }
    getVehicles(page, size) {
        return this.http.get(this.url + "?page=" + page + "&size=" + size, { headers: this.header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.status === 400)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_bad_input_error__WEBPACK_IMPORTED_MODULE_4__["BadInputError"](error.json()));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error.json()));
        }));
        ;
    }
    addVehicle(vehicle) {
        return this.http.post(this.url, JSON.stringify(vehicle), { headers: this.header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.status === 400)
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_bad_input_error__WEBPACK_IMPORTED_MODULE_4__["BadInputError"](error.json()));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error.json()));
        }));
    }
    updateVehicle(vehicle) {
        return this.http.put(this.url + "/" + vehicle.id, JSON.stringify(vehicle), { headers: this.header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.status === 400)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_bad_input_error__WEBPACK_IMPORTED_MODULE_4__["BadInputError"](error.json()));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error.json()));
        }));
    }
    deleteVehicle(vehicleId) {
        return this.http.delete(this.url + "/" + vehicleId, { headers: this.header }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error.status === 400)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_bad_input_error__WEBPACK_IMPORTED_MODULE_4__["BadInputError"](error.json()));
            if (error.status === 404)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_6__["NotFoundError"](error.json()));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error.json()));
        }));
    }
}
VehicleService.ɵfac = function VehicleService_Factory(t) { return new (t || VehicleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
VehicleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VehicleService, factory: VehicleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VehicleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HFuo":
/*!*******************************************!*\
  !*** ./src/app/common/bad-input-error.ts ***!
  \*******************************************/
/*! exports provided: BadInputError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInputError", function() { return BadInputError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "/GcI");

class BadInputError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "Jzm7":
/*!************************************************!*\
  !*** ./src/app/here-map/here-map.component.ts ***!
  \************************************************/
/*! exports provided: HereMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HereMapComponent", function() { return HereMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/vehicle.service */ "D1vo");




const _c0 = ["map"];
class HereMapComponent {
    constructor(service) {
        this.service = service;
        this.markers = [];
    }
    ngOnChanges() {
        this.resetMarkers();
        this.initInfoBubble();
        this.putMarkers();
    }
    ngOnInit() {
        this.platform = new H.service.Platform({
            "apikey": this._apikey
        });
    }
    ngAfterViewInit() {
        let defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(this.mapElement.nativeElement, defaultLayers.vector.normal.map, {
            zoom: 10,
            center: { lat: this.lat, lng: this.lng },
            pixelRatio: window.devicePixelRatio || 1
        });
        // MapEvents enables the event system
        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
        // create default UI with layers provided by the platform
        this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
        this.initInfoBubble();
        this.putMarkers();
    }
    initInfoBubble() {
        this.group = new H.map.Group();
        this.map.addObject(this.group);
        var ui = this.ui;
        // add 'tap' event listener, that opens info bubble, to the group
        this.group.addEventListener('tap', function (evt) {
            // event target is the marker itself, group is a parent event target
            // for all objects that it contains
            var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                // read custom data
                content: evt.target.getData()
            });
            // show info bubble
            ui.addBubble(bubble);
        }, false);
    }
    addMarker(coordinate, html, icon) {
        var iconobject = new H.map.Icon(icon);
        var marker = new H.map.Marker(coordinate, { icon: iconobject });
        marker.setData(html);
        this.group.addObject(marker);
    }
    resetMarkers() {
        this.map.removeObjects(this.map.getObjects());
    }
    putMarkers() {
        this.markers.forEach(marker => {
            this.addMarker({ lat: marker.lat, lng: marker.lng }, marker.data, marker.icon);
        });
    }
}
HereMapComponent.ɵfac = function HereMapComponent_Factory(t) { return new (t || HereMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__["VehicleService"])); };
HereMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HereMapComponent, selectors: [["here-map"]], viewQuery: function HereMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    } }, inputs: { markers: "markers", _apikey: "_apikey", lat: "lat", lng: "lng", width: "width", height: "height" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 4, consts: [["map", ""]], template: function HereMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZXJlLW1hcC5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HereMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'here-map',
                templateUrl: './here-map.component.html',
                styleUrls: ['./here-map.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_1__["VehicleService"] }]; }, { markers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mapElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["map"]
        }], _apikey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lng: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "LN+q":
/*!********************************************************!*\
  !*** ./src/app/edit-vehicle/edit-vehicle.component.ts ***!
  \********************************************************/
/*! exports provided: EditVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehicleComponent", function() { return EditVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






function EditVehicleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit vehicle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditVehicleComponent_ng_template_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "License");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditVehicleComponent_ng_template_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.vehicle.license = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditVehicleComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.vehicle.device = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Capacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditVehicleComponent_ng_template_0_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.vehicle.capacity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditVehicleComponent_ng_template_0_Template_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.vehicle.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Select your option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Car");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Truck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.vehicle.license);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.vehicle.device);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.vehicle.capacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.vehicle.type);
} }
class EditVehicleComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeResult = '';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            license: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            device: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            capacity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult =
                `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    ngOnInit() {
    }
    submit() {
        let updatedVehicle = this.form.value;
        updatedVehicle.id = this.vehicle.id;
        updatedVehicle.lat = this.vehicle.lat;
        updatedVehicle.lng = this.vehicle.lng;
        this.newItemEvent.emit(updatedVehicle);
        this.modalService.dismissAll("");
    }
}
EditVehicleComponent.ɵfac = function EditVehicleComponent_Factory(t) { return new (t || EditVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
EditVehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditVehicleComponent, selectors: [["edit-vehicle"]], inputs: { vehicle: "vehicle" }, outputs: { newItemEvent: "newItemEvent" }, decls: 4, vars: 0, consts: [["editVehicle", ""], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "license"], ["formControlName", "license", "id", "license", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "device"], ["formControlName", "device", "id", "device", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "capacity"], ["formControlName", "capacity", "id", "capacity", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type"], ["formControlName", "type", "id", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], ["value", "CAR"], ["value", "TRUCK"], ["type", "submit", 1, "btn", "btn-primary"]], template: function EditVehicleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditVehicleComponent_ng_template_0_Template, 29, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditVehicleComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".btn[_ngcontent-%COMP%] {width: 57px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdmVoaWNsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sV0FBVyxDQUFDIiwiZmlsZSI6ImVkaXQtdmVoaWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7d2lkdGg6IDU3cHg7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditVehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'edit-vehicle',
                templateUrl: './edit-vehicle.component.html',
                styleUrls: ['./edit-vehicle.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, { newItemEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], vehicle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_VehicleResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/VehicleResponse */ "Yz1q");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "7a4G");
/* harmony import */ var _list_vehicles_list_vehicles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-vehicles/list-vehicles.component */ "9SCS");
/* harmony import */ var _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./here-map/here-map.component */ "Jzm7");






class AppComponent {
    constructor() {
        this.title = 'angular-test-task';
        this.markers = [];
        this.vehicleResponse = new _common_VehicleResponse__WEBPACK_IMPORTED_MODULE_1__["VehicleResponse"]();
    }
    setMarkers($event) {
        this.markers = $event;
    }
    addVehicle($event) {
        this.vehicleResponse.content.push($event);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 1, consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-5", "col-sm-12"], [3, "newVehicleEvent"], [3, "newMarkersEvent"], [1, "col-md-7", "col-sm-12"], ["_apikey", "OWXZq6rTlYUPp9YTo_HkiOYPdzSXxKYl7pkKzBaFP10", "lat", "53.439", "lng", "-2.221", "width", "100%", "height", "100%", 3, "markers"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "add-vehicle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newVehicleEvent", function AppComponent_Template_add_vehicle_newVehicleEvent_3_listener($event) { return ctx.addVehicle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "vehicle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newMarkersEvent", function AppComponent_Template_vehicle_newMarkersEvent_4_listener($event) { return ctx.setMarkers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "here-map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("markers", ctx.markers);
    } }, directives: [_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_2__["AddVehicleComponent"], _list_vehicles_list_vehicles_component__WEBPACK_IMPORTED_MODULE_3__["ListVehiclesComponent"], _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_4__["HereMapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TMt5":
/*!*********************************************!*\
  !*** ./src/app/common/app-error-handler.ts ***!
  \*********************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
class AppErrorHandler {
    handleError(error) {
        //alert ('UnExpected Error');
    }
}


/***/ }),

/***/ "Yz1q":
/*!*******************************************!*\
  !*** ./src/app/common/VehicleResponse.ts ***!
  \*******************************************/
/*! exports provided: VehicleResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleResponse", function() { return VehicleResponse; });
/* harmony import */ var _PageTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTable */ "9oUL");

class VehicleResponse {
    constructor() {
        this.totalPages = 0;
        this.totalElements = 0;
        this.pageable = new _PageTable__WEBPACK_IMPORTED_MODULE_0__["PageTable"]();
        this.content = [];
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/vehicle.service */ "D1vo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _list_vehicles_list_vehicles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-vehicles/list-vehicles.component */ "9SCS");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./here-map/here-map.component */ "Jzm7");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "7a4G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _edit_vehicle_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-vehicle/edit-vehicle.component */ "LN+q");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _common_app_error_handler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/app-error-handler */ "TMt5");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _common_app_error_handler__WEBPACK_IMPORTED_MODULE_16__["AppErrorHandler"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _list_vehicles_list_vehicles_component__WEBPACK_IMPORTED_MODULE_6__["ListVehiclesComponent"],
        _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_8__["HereMapComponent"],
        _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_11__["AddVehicleComponent"],
        _edit_vehicle_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_14__["EditVehicleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _list_vehicles_list_vehicles_component__WEBPACK_IMPORTED_MODULE_6__["ListVehiclesComponent"],
                    _here_map_here_map_component__WEBPACK_IMPORTED_MODULE_8__["HereMapComponent"],
                    _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_11__["AddVehicleComponent"],
                    _edit_vehicle_edit_vehicle_component__WEBPACK_IMPORTED_MODULE_14__["EditVehicleComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]
                ],
                providers: [
                    _services_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _common_app_error_handler__WEBPACK_IMPORTED_MODULE_16__["AppErrorHandler"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map