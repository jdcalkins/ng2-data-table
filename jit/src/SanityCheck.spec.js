import { DataTableModule } from "./DataTableModule";
import { DataTable } from './DataTable';
import { async, TestBed } from '@angular/core/testing';
import { SanityTestComponent } from './SanityTestComponent';
describe("sanity check", function () {
    var de;
    var comp;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DataTable, SanityTestComponent],
            imports: [DataTableModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DataTable);
        comp = fixture.componentInstance;
    });
    it('should create component', function () {
        TestBed.overrideComponent(SanityTestComponent, {
            set: {
                template: '<table mfDataTable></table>'
            }
        });
        expect(comp).toBeDefined();
    });
    it("should show a message", function () {
        var dt = new DataTable();
        expect(true).toEqual(true);
    });
});
//# sourceMappingURL=SanityCheck.spec.js.map