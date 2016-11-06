import {Component, Input, Output, EventEmitter, OnInit, DoCheck} from "@angular/core";

@Component({
    selector: "mfRowSelector",
    template: `
        <input type="checkbox" id="{{checkboxId}}" [checked]="isChecked" (change)="onChange()" />
        <label attr.for="{{checkboxId}}"></label>
        `
})
export class RowSelector implements OnInit, DoCheck {
    @Output("selectEntity") rowSelected = new EventEmitter();
    @Input() entity: any = Object;
    @Input() checkboxId: string;

    isChecked: boolean = false;

    public constructor() {
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
        this.rowSelected.emit(this.entity);
    }
}
