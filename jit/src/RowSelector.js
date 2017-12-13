var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { DataTable } from "./DataTable";
var RowSelector = (function () {
    function RowSelector(mfTable) {
        this.mfTable = mfTable;
        this.entity = Object;
        this.isChecked = false;
    }
    RowSelector.prototype.ngOnInit = function () {
        this.getIsChecked();
    };
    RowSelector.prototype.ngDoCheck = function () {
        this.getIsChecked();
    };
    RowSelector.prototype.getIsChecked = function () {
        this.isChecked = this.entity.__isSelected__;
    };
    RowSelector.prototype.onChange = function () {
        this.entity.__isSelected__ = !this.entity.__isSelected__;
        this.mfTable.addRemoveSelectedEntity(this.entity);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RowSelector.prototype, "entity", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], RowSelector.prototype, "checkboxId", void 0);
    RowSelector = __decorate([
        Component({
            selector: "mfRowSelector",
            template: "\n        <input type=\"checkbox\" id=\"{{checkboxId}}\" [checked]=\"isChecked\" (change)=\"onChange()\" />\n        <label attr.for=\"{{checkboxId}}\"></label>\n        "
        }),
        __metadata("design:paramtypes", [DataTable])
    ], RowSelector);
    return RowSelector;
}());
export { RowSelector };
//# sourceMappingURL=RowSelector.js.map