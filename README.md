# angular-dropdown-component
## A full featured dropdown component for Angular (4 and above) from the creator of angular-tabs-component.

Even though a dropdown (select-option) is a pretty common utility but it still doesn't support basics such as search.

So, i decided to build one for Angular, with all the basic features-
* Simple to use
* Well Documented
* Customizable CSS
* NGC compatible
* Supports AOT
* Supports disabling, two-way binding, custom header and filter.
* Easily styled (comes with very minimal styling)

If you like this, support the project by starring it!

## Angular supported version
angular-dropdown-component supports 4.X.X releases (above), and AoT compilation.

## Example
To install the library:
```
npm install angular-dropdown-component
```

Include the library into your app module-
```
import 'DropdownModule' from 'angular-tabs-component';
```

Add it to your @NgModule imports-
```
@NgModule({
  imports: [
    BrowserModule
    ...,
    ...,
    DropdownModule
  ],
  declarations: [...],
  ...
})
```

## Usage
```
dummyData = [{
  id: 1,
  name: "Foo"
}, {
  id: 2,
  name: "Bar"
}]
<ng-dropdown [data]="dummyData"></ng-dropdown>
```

## Options

Apart from the default settings, there are a number of options that can be
specified for the dropdown components. Options are specified by directly adding it to the
element as attribute with property binding, attribute binding and event binding.
Possible options are:

  * `data` (property): To set the data of that dropdown (required).
  * `selectedOption` (property, supports two way binding): To set any option as the selected option -
  Usage:
    ```
    <ng-dropdown [data]="dummyData" [(selectedOption)]="dummyOption"></ng-dropdown>
    ```
  * `disabled` (property): To set the dropdown disabled.
  Usage:
    ```
    <ng-dropdown [data]="dummyData" [disabled]="true"></ng-dropdown>
    ```
  * `dTitle` (property): To set the header.
  Usage:
    ```
    <ng-dropdown [data]="dummyData" dTitle="Custom Dropdown Example"></ng-dropdown>
    ```
  * `filter` (property): To set the filter on/off.
  Usage:
    ```
    <ng-dropdown [data]="dummyData" [filter]="true"></ng-dropdown>
    ```

## What's next
I would always love to hear suggestions for features & improvements - just open an issue.

Some things on our mind down the road:
* Add more tests
* Add more examples

## Github
[Repository Link](https://github.com/karanhudia/angular-dropdown-component/)

Please check the issues / project before starting to work on a feature / bug to make sure it's not already in progress.
