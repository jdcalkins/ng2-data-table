import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BootstrapPaginator } from "./BootstrapPaginator";
import { DataTable } from "./DataTable";
import { DefaultSorter } from "./DefaultSorter";
import { Paginator } from "./Paginator";
import { RowSelector } from "./RowSelector";
import { RowSelectorHead } from "./RowSelectorHead";
import { StateManager } from "./StateManager";

@NgModule({
    imports: [CommonModule],
    declarations: [BootstrapPaginator, DataTable, DefaultSorter, Paginator, RowSelector, RowSelectorHead, StateManager],
    exports: [BootstrapPaginator, DataTable, DefaultSorter, Paginator, RowSelector, RowSelectorHead, StateManager]
})
export class DataTableModule {
}
