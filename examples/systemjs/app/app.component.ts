import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent implements OnInit {

    private data;
    private index;

    selectedEntities: any[];

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.index = 0;
        this.data = new Array<any>();
        this.http.get("/app/data.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 5000);
            });
    }

    public setSelectedEntities($event) {
        this.selectedEntities = $event;
        console.dir(this.selectedEntities);
    }

    private toInt(num: string) {
        return +num;
    }

    private sortByWordLength = (a: any) => {
        return a.name.length;
    }

    public addData() {
        this.data.push(  
            {
            "name": "Newly Added Item " + this.index++,
            "email": "tellus.eu.augue@arcu.com",
            "regDate": "2016-01-09T14:48:34-08:00",
            "city": "Paglieta",
            "age": 25
            }
        )
    }

    public removeData() {
        this.data.pop();
    }

}
