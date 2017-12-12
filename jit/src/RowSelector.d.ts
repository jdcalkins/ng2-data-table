import { OnInit, DoCheck } from "@angular/core";
import { DataTable } from "./DataTable";
export declare class RowSelector implements OnInit, DoCheck {
    private mfTable;
    entity: any;
    checkboxId: string;
    isChecked: boolean;
    constructor(mfTable: DataTable);
    ngOnInit(): void;
    ngDoCheck(): void;
    private getIsChecked();
    onChange(): void;
}
