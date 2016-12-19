#Changelog

## 0.7.0 (2016-12-19)

Breaking changes:

    - mfRowSelectorHead no longer has an input [mfTable]
    - mfRowSelector no longer has an output (selectEntity) 

Bugfixes:

    - header checkbox deselects when an item is added to data table or an item is
      unchecked in the data table

## 0.6.0 (2016-11-06)

Breaking changes:

    - mfRowSelector component removed [selectedEntities]. 

Bugfixes:

    - removing data item from inputData also removes data item from selectedEntities  

## 0.5.11 (2016-10-26)

Bugfixes:

    - adding and removing data from inputData now properly refreshes table accordingly

## 0.5.9 (2016-10-24)

Feature:

    - add support for AOT compilation
    - update to Angular 2.0.0 release version

## 0.4.2 (2016-05-11)

Breaking changes:

    - update angular library to 2.0.0-rc.0

## 0.3.0 (2016-05-08)

Breaking changes:

    - move `rowsOnPage` and `activePage` input from BootstrapPaginator to DataTable directive

Bugfixes:

    - fix error when mfData input is undefined
    - add src so map files should have correct paths

## 0.2.5 (2016-04-19)

Bugfixes:

    - fix not visible paginator

## 0.2.4 (2016-04-19)

Bugfixes:

    - add import for lodash in file `DataTable.ts`

## 0.2.3 (2016-03-21)

Bugfixes:

    - remove `href` attribute from DefaultSorter
    - add style `cursor: pointer` to links in DefaultSorter and BootstrapPaginator
    
## 0.2.2 (2016-03-21)

Bugfixes:

    - remove `href` attribute from BootstrapPaginator template
    
