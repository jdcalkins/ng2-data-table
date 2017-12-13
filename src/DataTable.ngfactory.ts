/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './DataTable';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
export class Wrapper_DataTable {
  /*private*/ _eventHandler:Function;
  context:import0.DataTable;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.DataTable(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_inputData(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.inputData = currValue;
      this._changes['inputData'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_rowsOnPage(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.rowsOnPage = currValue;
      this._changes['rowsOnPage'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_saveRowsOnPage(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.saveRowsOnPage = currValue;
      this._changes['saveRowsOnPage'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_activePage(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.activePage = currValue;
      this._changes['activePage'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) {
      if (changed) {
        this.context.ngOnChanges(this._changes);
        this._changes = {};
      }
      if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); }
      this.context.ngDoCheck();
    }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.selectedEntitiesEmitter.subscribe(_eventHandler.bind(view,'mfSelectedEntities'))); }
  }
}