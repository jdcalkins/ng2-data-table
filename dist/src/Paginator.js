var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Optional } from "@angular/core";
import { DataTable } from "./DataTable";
import { StateManager } from "./StateManager";
var Paginator = (function () {
    function Paginator(injectMfTable, stateManager) {
        var _this = this;
        this.injectMfTable = injectMfTable;
        this.stateManager = stateManager;
        this.dataLength = 0;
        this.onPageChangeSubscriber = function (event) {
            _this.activePage = event.activePage;
            _this.rowsOnPage = event.rowsOnPage;
            _this.dataLength = event.dataLength;
            _this.lastPage = Math.ceil(_this.dataLength / _this.rowsOnPage);
        };
    }
    Paginator.prototype.ngOnChanges = function (changes) {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    };
    Paginator.prototype.setPage = function (pageNumber) {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    };
    Paginator.prototype.setRowsOnPage = function (rowsOnPage) {
        debugger;
        this.mfTable.setPage(this.activePage, rowsOnPage);
        if (this.saveRowsOnPage) {
            this.stateManager.setPagination(rowsOnPage.toString());
        }
    };
    __decorate([
        Input("mfTable"),
        __metadata("design:type", DataTable)
    ], Paginator.prototype, "inputMfTable", void 0);
    __decorate([
        Input("saveRowsOnPage"),
        __metadata("design:type", Boolean)
    ], Paginator.prototype, "saveRowsOnPage", void 0);
    Paginator = __decorate([
        Component({
            selector: "mfPaginator",
            template: "<ng-content></ng-content>"
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [DataTable,
            StateManager])
    ], Paginator);
    return Paginator;
}());
export { Paginator };
//# sourceMappingURL=Paginator.js.map