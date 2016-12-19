import {Component, Input, Output, EventEmitter, OnInit, DoCheck} from "@angular/core";
import {DataTable} from "./DataTable";

@Component({
    selector: "mfRowSelector",
    template: `
        <input type="checkbox" id="{{checkboxId}}" [checked]="isChecked" (change)="onChange()" />
        <label attr.for="{{checkboxId}}"></label>
        `
})
export class RowSelector implements OnInit, DoCheck {
    @Input() entity: any = Object;
    @Input() checkboxId: string;

    isChecked: boolean = false;

    public constructor(private mfTable: DataTable) {
    }

    public ngOnInit() {
        this.getIsChecked();
    }

    public ngDoCheck() {
        this.getIsChecked();
    }

    private getIsChecked() {
        this.isChecked = this.entity.__isSelected__;
    }

    onChange() {
        this.entity.__isSelected__ = !this.entity.__isSelected__;
        this.mfTable.addRemoveSelectedEntity(this.entity);
    }
}
