import { Component, Input } from "@angular/core";
import { DataTable, SortEvent } from "./DataTable";

@Component({
    selector: "mfDefaultSorter",
    template: `
        <a style="cursor: pointer" (click)="sort()" class="text-nowrap" [ngClass]="styleClass">
            <ng-content></ng-content>
            <span *ngIf="!showSortableArrows">
                <span *ngIf="isSortedByMeAsc" class="glyphicon glyphicon-triangle-top" aria-hidden="true" [ngClass]="sortArrowStyleClass"></span>
                <span *ngIf="isSortedByMeDesc" class="glyphicon glyphicon-triangle-bottom" aria-hidden="true" [ngClass]="sortArrowStyleClass"></span>
            </span>
            <span *ngIf="showSortableArrows">
                <span *ngIf="isSortedByMeAsc" class="fa fa-fw fa-sort fa-sort-asc" aria-hidden="true" [ngClass]="sortArrowStyleClass"></span>
                <span *ngIf="isSortedByMeDesc" class="fa fa-fw fa-sort fa-sort-desc" aria-hidden="true" [ngClass]="sortArrowStyleClass"></span>
                <span *ngIf="!isSortedByMeDesc && !isSortedByMeAsc" class="fa fa-fw fa-sort" aria-hidden="true" [ngClass]="sortArrowStyleClass"></span>
            </span>
        </a>`
})
export class DefaultSorter {
    @Input("by") sortBy: string;

    // Optional inputs
    @Input("mfShowSortableArrows") public showSortableArrows = false;
    @Input("mfSortArrowStyleClass") public sortArrowStyleClass = '';
    @Input("mfStyleClass") public styleClass = '';

    isSortedByMeAsc: boolean = false;
    isSortedByMeDesc: boolean = false;

    public constructor(private mfTable: DataTable) {
        mfTable.onSortChange.subscribe((event: SortEvent) => {
            this.isSortedByMeAsc = (event.sortBy === this.sortBy && event.sortOrder === "asc");
            this.isSortedByMeDesc = (event.sortBy === this.sortBy && event.sortOrder === "desc");
        })
    }

    sort() {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, "desc");
        } else {
            this.mfTable.setSort(this.sortBy, "asc");
        }
    }
}