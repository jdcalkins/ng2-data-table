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
var DefaultSorter = (function () {
    function DefaultSorter(mfTable) {
        var _this = this;
        this.mfTable = mfTable;
        this.isSortedByMeAsc = false;
        this.isSortedByMeDesc = false;
        mfTable.onSortChange.subscribe(function (event) {
            _this.isSortedByMeAsc = (event.sortBy === _this.sortBy && event.sortOrder === "asc");
            _this.isSortedByMeDesc = (event.sortBy === _this.sortBy && event.sortOrder === "desc");
        });
    }
    DefaultSorter.prototype.sort = function () {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, "desc");
        }
        else {
            this.mfTable.setSort(this.sortBy, "asc");
        }
    };
    __decorate([
        Input("by"),
        __metadata("design:type", String)
    ], DefaultSorter.prototype, "sortBy", void 0);
    DefaultSorter = __decorate([
        Component({
            selector: "mfDefaultSorter",
            template: "\n        <a style=\"cursor: pointer\" (click)=\"sort()\" class=\"text-nowrap\">\n            <ng-content></ng-content>\n            <span *ngIf=\"isSortedByMeAsc\" class=\"glyphicon glyphicon-triangle-top\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"isSortedByMeDesc\" class=\"glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span>\n        </a>"
        }),
        __metadata("design:paramtypes", [DataTable])
    ], DefaultSorter);
    return DefaultSorter;
}());
export { DefaultSorter };
//# sourceMappingURL=DefaultSorter.js.map