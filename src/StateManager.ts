import { Injectable } from '@angular/core';

@Injectable()
export class StateManager {
    private _locStorVar: string = 'ng2-data-table-pagination';

    getPagination(rowsOnPage: number) : number {
        let pagePref = window.localStorage.getItem(this._locStorVar);
        if (pagePref) {
            return parseInt(pagePref);
        }
        else {
            return rowsOnPage;
        }
    }

    setPagination(pagePref: string) : void {
        window.localStorage.setItem(this._locStorVar, pagePref);
    }
}