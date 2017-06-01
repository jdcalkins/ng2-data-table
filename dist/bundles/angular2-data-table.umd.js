(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('lodash')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'lodash'], factory) :
	(factory((global.angular2 = global.angular2 || {}, global.angular2.data = global.angular2.data || {}, global.angular2.data.table = global.angular2.data.table || {}),global.ng.core,global.ng.common,global._));
}(this, (function (exports,_angular_core,_angular_common,_) { 'use strict';

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.DataTable = (function () {
    function DataTable() {
        this.inputData = [];
        this.sortBy = "";
        this.sortOrder = "asc";
        this.rowsOnPage = 1000;
        this.activePage = 1;
        this.selectedEntitiesEmitter = new _angular_core.EventEmitter();
        this.selectedEntities = [];
        this.mustRecalculateData = false;
        this.onDataChange = new _angular_core.EventEmitter();
        this.onSortChange = new _angular_core.EventEmitter();
        this.onPageChange = new _angular_core.EventEmitter();
        this.onSelectChange = new _angular_core.EventEmitter();
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
    return DataTable;
}());
__decorate$2([
    _angular_core.Input("mfData"),
    __metadata$1("design:type", Array)
], exports.DataTable.prototype, "inputData", void 0);
__decorate$2([
    _angular_core.Input("mfRowsOnPage"),
    __metadata$1("design:type", Object)
], exports.DataTable.prototype, "rowsOnPage", void 0);
__decorate$2([
    _angular_core.Input("mfActivePage"),
    __metadata$1("design:type", Object)
], exports.DataTable.prototype, "activePage", void 0);
__decorate$2([
    _angular_core.Output("mfSelectedEntities"),
    __metadata$1("design:type", Object)
], exports.DataTable.prototype, "selectedEntitiesEmitter", void 0);
exports.DataTable = __decorate$2([
    _angular_core.Directive({
        selector: 'table[mfData]',
        exportAs: 'mfDataTable'
    })
], exports.DataTable);

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.BootstrapPaginator = (function () {
    function BootstrapPaginator() {
        this.rowsOnPageSet = [];
        this.minRowsOnPage = 0;
    }
    BootstrapPaginator.prototype.ngOnChanges = function (changes) {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet);
        }
    };
    return BootstrapPaginator;
}());
__decorate$1([
    _angular_core.Input("rowsOnPageSet"),
    __metadata("design:type", Object)
], exports.BootstrapPaginator.prototype, "rowsOnPageSet", void 0);
__decorate$1([
    _angular_core.Input("mfTable"),
    __metadata("design:type", exports.DataTable)
], exports.BootstrapPaginator.prototype, "mfTable", void 0);
exports.BootstrapPaginator = __decorate$1([
    _angular_core.Component({
        selector: "mfBootstrapPaginator",
        template: "\n    <mfPaginator #p [mfTable]=\"mfTable\">\n        <nav class=\"pagination\" *ngIf=\"p.dataLength > p.rowsOnPage\">\n            <li [class.disabled]=\"p.activePage <= 1\" (click)=\"p.setPage(1)\">\n                <a style=\"cursor: pointer\">&laquo;</a>\n            </li>\n            <li *ngIf=\"p.activePage > 4 && p.activePage + 1 > p.lastPage\" (click)=\"p.setPage(p.activePage - 4)\">\n                <a style=\"cursor: pointer\">{{p.activePage-4}}</a>\n            </li>\n            <li *ngIf=\"p.activePage > 3 && p.activePage + 2 > p.lastPage\" (click)=\"p.setPage(p.activePage - 3)\">\n                <a style=\"cursor: pointer\">{{p.activePage-3}}</a>\n            </li>\n            <li *ngIf=\"p.activePage > 2\" (click)=\"p.setPage(p.activePage - 2)\">\n                <a style=\"cursor: pointer\">{{p.activePage-2}}</a>\n            </li>\n            <li *ngIf=\"p.activePage > 1\" (click)=\"p.setPage(p.activePage - 1)\">\n                <a style=\"cursor: pointer\">{{p.activePage-1}}</a>\n            </li>\n            <li class=\"active\">\n                <a style=\"cursor: pointer\">{{p.activePage}}</a>\n            </li>\n            <li *ngIf=\"p.activePage + 1 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 1)\">\n                <a style=\"cursor: pointer\">{{p.activePage+1}}</a>\n            </li>\n            <li *ngIf=\"p.activePage + 2 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 2)\">\n                <a style=\"cursor: pointer\">{{p.activePage+2}}</a>\n            </li>\n            <li *ngIf=\"p.activePage + 3 <= p.lastPage && p.activePage < 3\" (click)=\"p.setPage(p.activePage + 3)\">\n                <a style=\"cursor: pointer\">{{p.activePage+3}}</a>\n            </li>\n            <li *ngIf=\"p.activePage + 4 <= p.lastPage && p.activePage < 2\" (click)=\"p.setPage(p.activePage + 4)\">\n                <a style=\"cursor: pointer\">{{p.activePage+4}}</a>\n            </li>\n            <li [class.disabled]=\"p.activePage >= p.lastPage\" (click)=\"p.setPage(p.lastPage)\">\n                <a style=\"cursor: pointer\">&raquo;</a>\n            </li>\n        </nav>\n        <nav class=\"pagination pull-right\" *ngIf=\"p.dataLength > minRowsOnPage\">\n            <li *ngFor=\"let rows of rowsOnPageSet\" [class.active]=\"p.rowsOnPage===rows\" (click)=\"p.setRowsOnPage(rows)\">\n                <a style=\"cursor: pointer\">{{rows}}</a>\n            </li>\n        </nav>\n    </mfPaginator>\n    "
    })
], exports.BootstrapPaginator);

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.DefaultSorter = (function () {
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
    return DefaultSorter;
}());
__decorate$3([
    _angular_core.Input("by"),
    __metadata$2("design:type", String)
], exports.DefaultSorter.prototype, "sortBy", void 0);
exports.DefaultSorter = __decorate$3([
    _angular_core.Component({
        selector: "mfDefaultSorter",
        template: "\n        <a style=\"cursor: pointer\" (click)=\"sort()\" class=\"text-nowrap\">\n            <ng-content></ng-content>\n            <span *ngIf=\"isSortedByMeAsc\" class=\"glyphicon glyphicon-triangle-top\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"isSortedByMeDesc\" class=\"glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span>\n        </a>"
    }),
    __metadata$2("design:paramtypes", [exports.DataTable])
], exports.DefaultSorter);

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.Paginator = (function () {
    function Paginator(injectMfTable) {
        var _this = this;
        this.injectMfTable = injectMfTable;
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
        this.mfTable.setPage(this.activePage, rowsOnPage);
    };
    return Paginator;
}());
__decorate$4([
    _angular_core.Input("mfTable"),
    __metadata$3("design:type", exports.DataTable)
], exports.Paginator.prototype, "inputMfTable", void 0);
exports.Paginator = __decorate$4([
    _angular_core.Component({
        selector: "mfPaginator",
        template: "<ng-content></ng-content>"
    }),
    __param(0, _angular_core.Optional()),
    __metadata$3("design:paramtypes", [exports.DataTable])
], exports.Paginator);

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.RowSelector = (function () {
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
    return RowSelector;
}());
__decorate$5([
    _angular_core.Input(),
    __metadata$4("design:type", Object)
], exports.RowSelector.prototype, "entity", void 0);
__decorate$5([
    _angular_core.Input(),
    __metadata$4("design:type", String)
], exports.RowSelector.prototype, "checkboxId", void 0);
exports.RowSelector = __decorate$5([
    _angular_core.Component({
        selector: "mfRowSelector",
        template: "\n        <input type=\"checkbox\" id=\"{{checkboxId}}\" [checked]=\"isChecked\" (change)=\"onChange()\" />\n        <label attr.for=\"{{checkboxId}}\"></label>\n        "
    }),
    __metadata$4("design:paramtypes", [exports.DataTable])
], exports.RowSelector);

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.RowSelectorHead = (function () {
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
    return RowSelectorHead;
}());
__decorate$6([
    _angular_core.Input("checkboxId"),
    __metadata$5("design:type", String)
], exports.RowSelectorHead.prototype, "checkboxId", void 0);
exports.RowSelectorHead = __decorate$6([
    _angular_core.Component({
        selector: "mfRowSelectorHead",
        template: "\n        <input type=\"checkbox\" id=\"{{checkboxId}}\" [checked]=\"isChecked\" (change)=\"onChange($event)\" />\n        <label attr.for=\"{{checkboxId}}\"></label>\n        "
    }),
    __metadata$5("design:paramtypes", [exports.DataTable])
], exports.RowSelectorHead);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.DataTableModule = (function () {
    function DataTableModule() {
    }
    return DataTableModule;
}());
exports.DataTableModule = __decorate([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule],
        declarations: [exports.BootstrapPaginator, exports.DataTable, exports.DefaultSorter, exports.Paginator, exports.RowSelector, exports.RowSelectorHead],
        exports: [exports.BootstrapPaginator, exports.DataTable, exports.DefaultSorter, exports.Paginator, exports.RowSelector, exports.RowSelectorHead]
    })
], exports.DataTableModule);

Object.defineProperty(exports, '__esModule', { value: true });

})));
