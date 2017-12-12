import { Injectable } from '@angular/core';

@Injectable()
export class StateManager {
    private _locStorVar: string = 'ng2-data-table-pagination';

    getPagination() : number {
        let pagePref = window.localStorage.getItem(this._locStorVar);
        if (pagePref) {
            return parseInt(pagePref);
        }
        else {
            return 1000;
        }
    }

    setPagination(pagePref: string) : void {
        window.localStorage.setItem(this._locStorVar, pagePref);
    }
}