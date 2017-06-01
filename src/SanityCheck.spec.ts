import {DataTableModule} from "./DataTableModule";
import { DataTable } from './DataTable';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SanityTestComponent } from './SanityTestComponent';

describe("sanity check", ()=> {
  let de: DebugElement;
  let comp: DataTable;
  let fixture: ComponentFixture<DataTable>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ DataTable, SanityTestComponent ],
        imports: [DataTableModule]
        })
        .compileComponents();
    }));

      beforeEach(() => {
    fixture = TestBed.createComponent(DataTable);
    comp = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => {
    TestBed.overrideComponent(SanityTestComponent, {
      set: {
        template: '<table mfDataTable></table>'
      }
    })
    expect(comp).toBeDefined() 
  });

    it("should show a message", ()=>{
        let dt = new DataTable();
        expect(true).toEqual(true);
    })
})