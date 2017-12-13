import { EventEmitter, SimpleChange, DoCheck, OnInit, OnChanges } from "@angular/core";
import { StateManager } from "./StateManager";
export interface SortEvent {
    sortBy: string;
    sortOrder: string;
}
export interface PageEvent {
    activePage: number;
    rowsOnPage: number;
    dataLength: number;
}
export interface DataEvent {
    length: number;
}
export interface SelectEvent {
}
export declare class DataTable implements OnInit, DoCheck, OnChanges {
    private stateManager;
    inputData: any[];
    private inputDataLength;
    private sortBy;
    private sortOrder;
    rowsOnPage: number;
    saveRowsOnPage: boolean;
    activePage: number;
    selectedEntitiesEmitter: EventEmitter<{}>;
    selectedEntities: any[];
    private mustRecalculateData;
    data: any[];
    onDataChange: EventEmitter<DataEvent>;
    onSortChange: EventEmitter<SortEvent>;
    onPageChange: EventEmitter<PageEvent>;
    onSelectChange: EventEmitter<SelectEvent>;
    constructor(stateManager: StateManager);
    addRemoveSelectedEntity($event: any): void;
    updateSelectedEntities(): void;
    selectAllRows(): void;
    deselectAllRows(): void;
    getSort(): SortEvent;
    setSort(sortBy: string, sortOrder: string): void;
    getPage(): PageEvent;
    setPage(activePage: number, rowsOnPage: number): void;
    private calculateNewActivePage(previousRowsOnPage, currentRowsOnPage);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): any;
    private addIsSelectedProperty();
    ngDoCheck(): any;
    private isInputDataChanged();
    private fillData();
}
