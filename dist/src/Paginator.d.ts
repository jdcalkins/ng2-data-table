import { SimpleChange, OnChanges } from "@angular/core";
import { DataTable } from "./DataTable";
import { StateManager } from "./StateManager";
export declare class Paginator implements OnChanges {
    private injectMfTable;
    private stateManager;
    inputMfTable: DataTable;
    saveRowsOnPage: boolean;
    private mfTable;
    activePage: number;
    rowsOnPage: number;
    dataLength: number;
    lastPage: number;
    constructor(injectMfTable: DataTable, stateManager: StateManager);
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): any;
    setPage(pageNumber: number): void;
    setRowsOnPage(rowsOnPage: number): void;
    private onPageChangeSubscriber;
}
