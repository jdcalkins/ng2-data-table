import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {DataTableModule} from "ng2-data-table";

@NgModule({
    imports: [BrowserModule, HttpModule, DataTableModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
