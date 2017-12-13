var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as _ from "lodash";
import { StateManager } from "./StateManager";
var DataTable = (function () {
    function DataTable(stateManager) {
        this.stateManager = stateManager;
        this.inputData = [];
        this.sortBy = "";
        this.sortOrder = "asc";
        this.rowsOnPage = 1000;
        this.saveRowsOnPage = false;
        this.activePage = 1;
        this.selectedEntitiesEmitter = new EventEmitter();
        this.selectedEntities = [];
        this.mustRecalculateData = false;
        this.onDataChange = new EventEmitter();
        this.onSortChange = new EventEmitter();
        this.onPageChange = new EventEmitter();
        this.onSelectChange = new EventEmitter();
    }
    DataTable.prototype.addRemoveSelectedEntity = function ($event) {
        this.onSelectChange.emit({});
        this.updateSelectedEntities();
        this.selectedEntitiesEmitter.emit(this.selectedEntities);
    };
    DataTable.prototype.updateSelectedEntities = function () {
        this.selectedEntities = this.inputData.filter(function (x) { return x.__isSelected__; });
    };
    DataTable.prototype.selectAllRows = function () {
        this.inputData.forEach(function (data) {
            data.__isSelected__ = true;
        });
        this.updateSelectedEntities();
        this.selectedEntitiesEmitter.emit(this.selectedEntities);
    };
    DataTable.prototype.deselectAllRows = function () {
        this.inputData.forEach(function (data) {
            data.__isSelected__ = false;
        });
        this.updateSelectedEntities();
        this.selectedEntitiesEmitter.emit(this.selectedEntities);
    };
    DataTable.prototype.getSort = function () {
        return { sortBy: this.sortBy, sortOrder: this.sortOrder };
    };
    DataTable.prototype.setSort = function (sortBy, sortOrder) {
        if (this.sortBy !== sortBy || this.sortOrder !== sortOrder) {
            this.sortBy = sortBy;
            this.sortOrder = sortOrder;
            this.mustRecalculateData = true;
            this.onSortChange.emit({ sortBy: sortBy, sortOrder: sortOrder });
        }
    };
    DataTable.prototype.getPage = function () {
        return { activePage: this.activePage, rowsOnPage: this.rowsOnPage, dataLength: this.inputData.length };
    };
    DataTable.prototype.setPage = function (activePage, rowsOnPage) {
        if (this.rowsOnPage !== rowsOnPage || this.activePage !== activePage) {
            this.activePage = this.activePage !== activePage ? activePage : this.calculateNewActivePage(this.rowsOnPage, rowsOnPage);
            if (this.saveRowsOnPage && (this.rowsOnPage != rowsOnPage)) {
                this.stateManager.setPagination(rowsOnPage.toString());
            }
            this.rowsOnPage = rowsOnPage;
            this.mustRecalculateData = true;
            this.onPageChange.emit({ activePage: this.activePage, rowsOnPage: this.rowsOnPage, dataLength: this.inputData.length });
        }
    };
    DataTable.prototype.calculateNewActivePage = function (previousRowsOnPage, currentRowsOnPage) {
        var firstRowOnPage = (this.activePage - 1) * previousRowsOnPage + 1;
        var newActivePage = Math.ceil(firstRowOnPage / currentRowsOnPage);
        return newActivePage;
    };
    DataTable.prototype.ngOnInit = function () {
        this.inputDataLength = this.inputData.length;
        if (this.saveRowsOnPage) {
            var rowsOnPage = this.stateManager.getPagination(this.rowsOnPage);
            this.setPage(1, rowsOnPage);
        }
    };
    DataTable.prototype.ngOnChanges = function (changes) {
        if (changes["inputData"]) {
            this.mustRecalculateData = true;
            this.ngDoCheck();
        }
    };
    DataTable.prototype.addIsSelectedProperty = function () {
        this.inputData.forEach(function (x) {
            if (x.__isSelected__ == null) {
                Object.defineProperty(x, "__isSelected__", { value: false, writable: true });
            }
        });
    };
    DataTable.prototype.ngDoCheck = function () {
        if (this.mustRecalculateData
            || this.isInputDataChanged()) {
            this.addIsSelectedProperty();
            this.inputData = this.inputData || [];
            this.onPageChange.emit({
                activePage: this.activePage,
                rowsOnPage: this.rowsOnPage,
                dataLength: this.inputData.length
            });
            this.onDataChange.emit({
                length: this.inputData.length
            });
            this.fillData();
            this.mustRecalculateData = false;
        }
    };
    DataTable.prototype.isInputDataChanged = function () {
        var isDataLengthChanged = this.inputDataLength != this.inputData.length;
        this.inputDataLength = this.inputData.length;
        return isDataLengthChanged;
    };
    DataTable.prototype.fillData = function () {
        var _this = this;
        this.activePage = this.activePage;
        this.rowsOnPage = this.rowsOnPage;
        var offset = (this.activePage - 1) * this.rowsOnPage;
        var data = this.inputData;
        data = _.orderBy(data, function (row) {
            var value = row[_this.sortBy];
            if (value && typeof value === 'string' || value instanceof String) {
                return value.toLowerCase();
            }
            return value;
        }, [this.sortOrder]);
        data = _.slice(data, offset, offset + this.rowsOnPage);
        this.data = data;
    };
    __decorate([
        Input("mfData"),
        __metadata("design:type", Array)
    ], DataTable.prototype, "inputData", void 0);
    __decorate([
        Input("mfRowsOnPage"),
        __metadata("design:type", Object)
    ], DataTable.prototype, "rowsOnPage", void 0);
    __decorate([
        Input("mfSaveRowsOnPage"),
        __metadata("design:type", Object)
    ], DataTable.prototype, "saveRowsOnPage", void 0);
    __decorate([
        Input("mfActivePage"),
        __metadata("design:type", Object)
    ], DataTable.prototype, "activePage", void 0);
    __decorate([
        Output("mfSelectedEntities"),
        __metadata("design:type", Object)
    ], DataTable.prototype, "selectedEntitiesEmitter", void 0);
    DataTable = __decorate([
        Directive({
            selector: 'table[mfData]',
            exportAs: 'mfDataTable'
        }),
        __metadata("design:paramtypes", [StateManager])
    ], DataTable);
    return DataTable;
}());
export { DataTable };
//# sourceMappingURL=DataTable.js.map