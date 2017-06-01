// // import {describe, it, expect, beforeEach, async} from "@angular/core/testing";
// // import {} from 'jasmine';
// import {SimpleChange} from "@angular/core";
// import {DataTable} from "./DataTable";
// import {RowSelector} from "./RowSelector";

// describe("DataTable directive tests", ()=> {
//     let datatable: DataTable;

//     beforeEach(()=> {
//         datatable = new DataTable();
//         datatable.inputData = [
//             {
//                 id: 3,
//                 name: 'Poland'
//             },
//             {
//                 id: 1,
//                 name: 'Slovakia'
//             },
//             {
//                 id: 2,
//                 name: 'Czech'
//             },
//             {
//                 id: 5,
//                 name: 'Hungary'
//             },
//             {
//                 id: 4,
//                 name: 'Ukraine'
//             },
//             {
//                 id: 6,
//                 name: 'prune'   
//             },
//             {
//                 id: 7,
//                 name: 'player'
//             }
//         ];
//     });

//     describe("initializing", ()=> {

//         it("data should be empty array if inputData is undefined or null", () => {
//             let datatable = new DataTable();
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([]);
//         });

//         it("data should be equal to inputData", ()=> {
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual(datatable.inputData);
//         });

//         it("data should be 2 first items", ()=> {
//             datatable.rowsOnPage = 2;
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([{
//                 id: 3,
//                 name: 'Poland'
//             }, {
//                 id: 1,
//                 name: 'Slovakia'
//             }]);
//         });

//         it("data should be 3. and 4. items", ()=> {
//             datatable.rowsOnPage = 2;
//             datatable.activePage = 2;
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([{
//                 id: 2,
//                 name: 'Czech'
//             }, {
//                 id: 5,
//                 name: 'Hungary'
//             }]);
//         });

//         it("shouldn't recalculate data when no changes", ()=> {
//             datatable.ngDoCheck();
//             let data = datatable.data;
//             datatable.ngDoCheck();
//             expect(datatable.data).toBe(data);
//         });
//     });

//     describe("pagination", ()=> {

//         beforeEach(()=> {
//             datatable.rowsOnPage = 2;
//             datatable.ngDoCheck();
//         });

//         it("should return current page settings", ()=> {
//             expect(datatable.getPage()).toEqual({
//                 activePage: 1,
//                 rowsOnPage: 2,
//                 dataLength: 5
//             });
//         });

//         it("data should be 3. and 4. items when page change", ()=> {
//             datatable.setPage(2, 2);
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([{
//                 id: 2,
//                 name: 'Czech'
//             }, {
//                 id: 5,
//                 name: 'Hungary'
//             }]);
//         });

//         it("data should be three first items when page change", ()=> {
//             datatable.setPage(1, 3);
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([{
//                 id: 3,
//                 name: 'Poland'
//             }, {
//                 id: 1,
//                 name: 'Slovakia'
//             }, {
//                 id: 2,
//                 name: 'Czech'
//             }]);
//         });

//         it("data should be two last items when page change", ()=> {
//             datatable.setPage(2, 3);
//             datatable.setPage(2, 3);
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([{
//                 id: 5,
//                 name: 'Hungary'
//             }, {
//                 id: 4,
//                 name: 'Ukraine'
//             }]);
//         });
//     });

//     describe("sorting", ()=> {

//         it("id should return current sort setting", () => {
//             datatable.setSort("id", "desc");
//             expect(datatable.getSort()).toEqual({
//                 sortBy: "id",
//                 sortOrder: "desc"
//             });
//         });

//         it("shouldn't refresh data when set page with same settings", ()=> {
//             datatable.setSort("name", "asc");
//             datatable.ngDoCheck();
//             let data = datatable.data;
//             datatable.setSort("name", "asc");
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual(data);
//         });

//         it("should sort case insensitive data ascending by name", ()=> {
//             datatable.setSort("name", "asc");
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([
//                 {
//                     id: 2,
//                     name: 'Czech'
//                 },
//                 {
//                     id: 5,
//                     name: 'Hungary'
//                 },
//                 {
//                     id: 7,
//                     name: 'player'
//                 },
//                 {
//                     id: 3,
//                     name: 'Poland'
//                 },
//                 {
//                     id: 6,
//                     name: 'prune'
//                 },
//                 {
//                     id: 1,
//                     name: 'Slovakia'
//                 },
//                 {
//                     id: 4,
//                     name: 'Ukraine'
//                 }
//             ])
//         });
//     });

//     describe("row selecting", ()=> {

//         it("selected entities should only contain entities that are selected", () => {
//             let entities = datatable.inputData;
//             datatable.ngDoCheck();

//             let rowselectors = new Array<RowSelector>();
//             entities.forEach(x => {
//                 let rowSelector = new RowSelector(datatable);
//                 rowSelector.entity = x;
//                 rowselectors.push(rowSelector);
//             });

//             // Fake the interaction between the datatable directive
//             // and rowselector component that would normally be
//             // provided through angular2 template.
//             rowselectors[0].onChange();
//             datatable.addRemoveSelectedEntity(rowselectors[0].entity);
//             rowselectors[1].onChange();
//             datatable.addRemoveSelectedEntity(rowselectors[1].entity);
//             rowselectors[0].onChange();
//             datatable.addRemoveSelectedEntity(rowselectors[0].entity);

//             expect(datatable.selectedEntities.length).toEqual(1);
//         });

//         it("should select all entities when all rows are selected", () => {
//             datatable.selectAllRows();
//             expect(datatable.selectedEntities.length).toEqual(5);
//         });

//         it("should deselect all entities when all rows are deselected", () => {
//             datatable.selectAllRows();
//             datatable.deselectAllRows();
//             expect(datatable.selectedEntities.length).toEqual(0);
//         });

//     });

//     describe("adding input data", ()=> {

//         it("should add a row of data to the table", () => {
//             let newData = {
//                 id: 6,
//                 name: 'United States'
//             }
//             datatable.ngDoCheck();
//             datatable.inputData.push(newData);
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([
//                 {
//                     id: 3,
//                     name: 'Poland'
//                 },
//                 {
//                     id: 1,
//                     name: 'Slovakia'
//                 },
//                 {
//                     id: 2,
//                     name: 'Czech'
//                 },
//                 {
//                     id: 5,
//                     name: 'Hungary'
//                 },
//                 {
//                     id: 4,
//                     name: 'Ukraine'
//                 },
//                 {
//                     id: 6,
//                     name: 'United States'
//                 }
//             ])
//         });

//     });

//     describe("removing input data", ()=> {

//         it("should remove a row of data from the table", () => {
//             datatable.ngDoCheck();
//             datatable.inputData.pop();
//             datatable.ngDoCheck();
//             expect(datatable.data).toEqual([
//                 {
//                     id: 3,
//                     name: 'Poland'
//                 },
//                 {
//                     id: 1,
//                     name: 'Slovakia'
//                 },
//                 {
//                     id: 2,
//                     name: 'Czech'
//                 },
//                 {
//                     id: 5,
//                     name: 'Hungary'
//                 }
//             ])
//         });

//     });
// });
