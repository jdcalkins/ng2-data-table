import { OnChanges } from "@angular/core";
import { DataTable } from "./DataTable";
export declare class BootstrapPaginator implements OnChanges {
    rowsOnPageSet: never[];
    mfTable: DataTable;
    minRowsOnPage: number;
    ngOnChanges(changes: any): any;
}
