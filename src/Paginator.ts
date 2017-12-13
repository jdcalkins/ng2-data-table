import { Component, Input, SimpleChange, OnChanges, Optional } from "@angular/core";
import { DataTable, PageEvent } from "./DataTable";
import { StateManager } from "./StateManager";

@Component({
    selector: "mfPaginator",
    template: `<ng-content></ng-content>`
})
export class Paginator implements OnChanges {

    @Input("mfTable") inputMfTable: DataTable;
    @Input("savePagination") saveRowsOnPage: boolean;

    private mfTable: DataTable;

    public activePage: number;
    public rowsOnPage: number;
    public dataLength: number = 0;
    public lastPage: number;

    public constructor(
        @Optional() private injectMfTable: DataTable,
        private stateManager: StateManager
    ) { }

    public ngOnChanges(changes: {[key: string]: SimpleChange}): any {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    }

    public setPage(pageNumber: number): void {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    }

    public setRowsOnPage(rowsOnPage: number): void {
        this.mfTable.setPage(this.activePage, rowsOnPage);
        if (this.saveRowsOnPage) {
            this.stateManager.setPagination(rowsOnPage.toString());
        }
    }

    private onPageChangeSubscriber = (event: PageEvent)=> {
        this.activePage = event.activePage;
        this.rowsOnPage = event.rowsOnPage;
        this.dataLength = event.dataLength;
        this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
    };
}