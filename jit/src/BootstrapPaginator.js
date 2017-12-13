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
import * as _ from "lodash";
var BootstrapPaginator = (function () {
    function BootstrapPaginator() {
        this.rowsOnPageSet = [];
        this.minRowsOnPage = 0;
    }
    BootstrapPaginator.prototype.ngOnChanges = function (changes) {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet);
        }
    };
    __decorate([
        Input("rowsOnPageSet"),
        __metadata("design:type", Object)
    ], BootstrapPaginator.prototype, "rowsOnPageSet", void 0);
    __decorate([
        Input("mfTable"),
        __metadata("design:type", DataTable)
    ], BootstrapPaginator.prototype, "mfTable", void 0);
    BootstrapPaginator = __decorate([
        Component({
            selector: "mfBootstrapPaginator",
            template: "\n    <mfPaginator #p [mfTable]=\"mfTable\">\n        <nav class=\"pagination\" *ngIf=\"p.dataLength > p.rowsOnPage\">\n            <li [class.disabled]=\"p.activePage <= 1\" (click)=\"p.setPage(1)\">\n                <a style=\"cursor: pointer\">&laquo;</a>\n            </li>\n            <li *ngIf=\"p.activePage > 4 && p.activePage + 1 > p.lastPage\" (click)=\"p.setPage(p.activePage - 4)\">\n                <a style=\"cursor: pointer\">{{p.activePage-4}}</a>\n            </li>\n            <li *ngIf=\"p.activePage > 3 && p.activePage + 2 > p.lastPage\" (click)=\"p.setPage(p.activePage - 3)\">\n                <a style=\"cursor: pointer\">{{p.activePage-3}}</a>\n            </li>\n            <li *ngIf=\"p.activePage > 2\" (click)=\"p.setPage(p.activePage - 2)\">\n                <a style=\"cursor: pointer\">{{p.activePage-2}}</a>\n            </li>\n            <li *ngIf=\"p.activePage > 1\" (click)=\"p.setPage(p.activePage - 1)\">\n                <a style=\"cursor: pointer\">{{p.activePage-1}}</a>\n            </li>\n            <li class=\"active\">\n                <a style=\"cursor: pointer\">{{p.activePage}}</a>\n            </li>\n            <li *ngIf=\"p.activePage + 1 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 1)\">\n                <a style=\"cursor: pointer\">{{p.activePage+1}}</a>\n            </li>\n            <li *ngIf=\"p.activePage + 2 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 2)\">\n                <a style=\"cursor: pointer\">{{p.activePage+2}}</a>\n            </li>\n            <li *ngIf=\"p.activePage + 3 <= p.lastPage && p.activePage < 3\" (click)=\"p.setPage(p.activePage + 3)\">\n                <a style=\"cursor: pointer\">{{p.activePage+3}}</a>\n            </li>\n            <li *ngIf=\"p.activePage + 4 <= p.lastPage && p.activePage < 2\" (click)=\"p.setPage(p.activePage + 4)\">\n                <a style=\"cursor: pointer\">{{p.activePage+4}}</a>\n            </li>\n            <li [class.disabled]=\"p.activePage >= p.lastPage\" (click)=\"p.setPage(p.lastPage)\">\n                <a style=\"cursor: pointer\">&raquo;</a>\n            </li>\n        </nav>\n        <nav class=\"pagination pull-right\" *ngIf=\"p.dataLength > minRowsOnPage\">\n            <li *ngFor=\"let rows of rowsOnPageSet\" [class.active]=\"p.rowsOnPage===rows\" (click)=\"p.setRowsOnPage(rows)\">\n                <a style=\"cursor: pointer\">{{rows}}</a>\n            </li>\n        </nav>\n    </mfPaginator>\n    "
        })
    ], BootstrapPaginator);
    return BootstrapPaginator;
}());
export { BootstrapPaginator };
//# sourceMappingURL=BootstrapPaginator.js.map