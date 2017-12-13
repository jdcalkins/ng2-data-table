import { DataTable } from "./DataTable";
export declare class DefaultSorter {
    private mfTable;
    sortBy: string;
    isSortedByMeAsc: boolean;
    isSortedByMeDesc: boolean;
    constructor(mfTable: DataTable);
    sort(): void;
}
