# Table component with sorting, pagination, and row/multi-row select for Angular2

## Installation

```
npm install --save ng2-data-table
```

## Usage example

app.module.ts
```typescript
import { NgModule } fro m "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { DataTableModule } from "ng2-data-table";

@NgModule({
    imports: [BrowserModule, HttpModule, DataTableModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

app.component.ts
```typescript
 import {Component} from '@angular/core';

 @Component({
     selector: 'app',
     templateUrl: 'app.component.html'
 })
 export class AppComponent {
     // data supplied to the data table
     private data: any[];
     // array of currently selected entities in the data table
     selectedEntities: any[];

     // function to handle data/entities selected/deselected in the table 
     public setSelectedEntities($event: any) {
        this.selectedEntities = $event;
    }
 }
```

app.component.html
```html
<table [mfData]="data" #mf="mfDataTable" [mfRowsOnPage]="5" [mfSaveRowsOnPage]="true" (mfSelectedEntities)="setSelectedEntities($event)">
    <thead>
        <tr>
            <th>
                <mfRowSelectorHead></mfRowSelectorHead>
            </th>
            <th style="width: 20%">
                <mfDefaultSorter by="name">Name</mfDefaultSorter>
            </th>
            <th style="width: 50%">
                <mfDefaultSorter by="email">Email</mfDefaultSorter>
            </th>
            <th style="width: 10%">
                <mfDefaultSorter by="age">Age</mfDefaultSorter>
            </th>
            <th style="width: 20%">
                <mfDefaultSorter by="city">City</mfDefaultSorter>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let item of mf.data; let ndx = index">
            <td><mfRowSelector [entity]="item" [checkboxId]="ndx"></mfRowSelector></td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.age}}</td>
            <td>{{item.city | uppercase}}</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">
                <mfBootstrapPaginator [rowsOnPageSet]="[5,10,25]"></mfBootstrapPaginator>
            </td>
        </tr>
    </tfoot>
</table>
```

## API

### `mfData` directive

 - selector: `table[mfData]`
 - exportAs: `mfDataTable`
 - inputs
   - `mfData: any[]` - array of data to display on table
   - `mfRowsOnPage: number` - number of rows should be displayed on page (default: 1000)
   - `mfActivePage: number` - page number should be displayed on init (default: 1)
   - `mfSaveRowsOnPage: boolean` - pagination should be saved in local storage (default: false)
 - outputs
   - `mfSelectedEntities: any[]` - array of data in the table that is currently selected with checkboxes

### `mfDefaultSorter` component

 - selector: `mfDefaultSorter`
 - inputs
   - `by: any` - specify how to sort data (argument for lodash function [_.sortBy ](https://lodash.com/docs#sortBy))

### `mfBootstrapPaginator` component
Displays buttons for changing current page and number of displayed rows using bootstrap template (css for bootstrap is required). If array length is smaller than current displayed rows on page then it doesn't show button for changing page. If array length is smaller than min value rowsOnPage then it doesn't show any buttons.

 - selector: `mfBootstrapPaginator`
 - inputs
   - `rowsOnPageSet: number` - specify values for buttons to change number of displayed rows

### `mfRowSelectorHead` component
Displays a header checkbox for the table. Clicking the checkbox toggles select/deselect of all the items in the data table.

 - selector: `mfRowSelectorHead`
 - inputs:
   - `checkboxId: string` - optionally specify the id used by the header checkbox's "id" attribute and the checkbox label's "for" attribute

### `mfRowSelector` component
Displays a checkbox for the row. When checked, the entity in the row is added to the mfDataTable's mfSelectedEntities. The mfSelectedEntities then emits the array of entities currently checked in the mfDataTable.

 - selector: `mfRowSelector`
 - inputs:
   - `entity: any` - the data entity in the current row
   - `checkboxId: string` - optionally specify the id used by the checkbox's "id" attribute and the checkbox label's "for" attribute

### Saving State
The Pagination preference is stored in the localStorage key `ng2-data-table-pagination`. You may want to remove this key in a logout handler.
