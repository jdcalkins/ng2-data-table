var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var StateManager = (function () {
    function StateManager() {
        this._locStorVar = 'ng2-data-table-pagination';
    }
    StateManager.prototype.getPagination = function (rowsOnPage) {
        var pagePref = window.localStorage.getItem(this._locStorVar);
        if (pagePref) {
            return parseInt(pagePref);
        }
        else {
            return rowsOnPage;
        }
    };
    StateManager.prototype.setPagination = function (pagePref) {
        window.localStorage.setItem(this._locStorVar, pagePref);
    };
    StateManager = __decorate([
        Injectable()
    ], StateManager);
    return StateManager;
}());
export { StateManager };
//# sourceMappingURL=StateManager.js.map