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
var RowSelectorHead = (function () {
    function RowSelectorHead(mfTable) {
        var _this = this;
        this.mfTable = mfTable;
        this.isChecked = false;
        mfTable.onDataChange.subscribe(function () {
            _this.isChecked = false;
        });
        mfTable.onSelectChange.subscribe(function () {
            _this.isChecked = false;
        });
    }
    RowSelectorHead.prototype.onChange = function ($event) {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
            this.mfTable.selectAllRows();
        }
        else {
            this.mfTable.deselectAllRows();
        }
    };
    __decorate([
        Input("checkboxId"),
        __metadata("design:type", String)
    ], RowSelectorHead.prototype, "checkboxId", void 0);
    RowSelectorHead = __decorate([
        Component({
            selector: "mfRowSelectorHead",
            template: "\n        <input type=\"checkbox\" id=\"{{checkboxId}}\" [checked]=\"isChecked\" (change)=\"onChange($event)\" />\n        <label attr.for=\"{{checkboxId}}\"></label>\n        "
        }),
        __metadata("design:paramtypes", [DataTable])
    ], RowSelectorHead);
    return RowSelectorHead;
}());
export { RowSelectorHead };
//# sourceMappingURL=RowSelectorHead.js.map