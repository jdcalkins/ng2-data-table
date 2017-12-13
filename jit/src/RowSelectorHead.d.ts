import { DataTable } from "./DataTable";
export declare class RowSelectorHead {
    private mfTable;
    checkboxId: string;
    isChecked: boolean;
    constructor(mfTable: DataTable);
    onChange($event: any): void;
}
