import {Component, Input} from "@angular/core";
import {DataTable} from "./DataTable";

@Component({
    selector: "mfRowSelectorHead",
    template: `
        <input type="checkbox" id="{{checkboxId}}" [checked]="isChecked" (change)="onChange($event)" />
        <label attr.for="{{checkboxId}}"></label>
        `
})
export class RowSelectorHead {
    @Input("checkboxId") checkboxId: string;

    isChecked: boolean = false;

    public constructor(private mfTable: DataTable) {
        mfTable.onDataChange.subscribe(() => {
            // always uncheck the header checkbox if the
            // data has changed in the table
            this.isChecked = false;
        });
        mfTable.onSelectChange.subscribe(() => {
            // always uncheck when an item checkbox
            // was interacted with
            this.isChecked = false;
        });
    }

    onChange($event: any) {
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
            this.mfTable.selectAllRows();
        }
        else {
            this.mfTable.deselectAllRows();
        }
    }
}
