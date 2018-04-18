import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

// Import interfaces
import { IDropdownInput } from '../../interfaces/dropdown';

@Component({
  selector: "ng-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent {
  public ifContainerFocused: boolean;

  public containerFocusedStyles: object;
  public selectedItemFocusedStyles: object;
  public restOfListFocusedStyles: object;
  public restOfListWithoutFilterFocusedStyles: object;

  public _selectedOption: IDropdownInput | string;
  public _data: IDropdownInput[];
  public mutationObserverDOM: MutationObserver;

  @Input() data: IDropdownInput[];
  @Input() disabled: boolean;
  @Input() dTitle: string;
  @Input() selectedOption: IDropdownInput | string;
  @Input() filter: boolean;
  @Input() editable: boolean;

  @Output() selectedOptionChange: EventEmitter<object | string> = new EventEmitter<object | string>();

  // References of HTML
  @ViewChild("dropdownMenu") private dropdownMenu: ElementRef;
  @ViewChild("dropdownButton") private dropdownButton: ElementRef;
  @ViewChild("dropdownInput") private dropdownInput: ElementRef;
  @ViewChild("dropdownFilter") private dropdownFilter: ElementRef;

  constructor() {
    this.ifContainerFocused = false;
  }

  ngAfterViewInit() {
    this.mutationObserverDOM = new MutationObserver(mutations => {
      this.setContainerDimensions();
    });

    this.mutationObserverDOM.observe(this.dropdownMenu.nativeElement, {
      childList: true
    });
    this.mutationObserverDOM.observe( this.dropdownMenu.nativeElement.children[1], {
      childList: true
    });
    if (this.filter) this.mutationObserverDOM.observe(this.dropdownMenu.nativeElement.children[1].children[1], {
      childList: true
    });
    else this.mutationObserverDOM.observe(this.dropdownMenu.nativeElement.children[1].children[0], {
      childList: true
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.hasOwnProperty("data")) {
      this._data = this.data;
    }
    if (this.data && !this.selectedOption) this.setDefaultOption();
    else if (this.data && this.selectedOption) {
      if (this.selectedOption.hasOwnProperty("id")) {
        this.data.forEach(obj => {
          if (obj.id == this.selectedOption["id"]) this._selectedOption = obj;
        });
      } else if (this.selectedOption.hasOwnProperty("name")){
        this.data.forEach(obj => {
          if (obj.name == this.selectedOption["name"]) this._selectedOption = obj;
        });
      } else if (this.editable) {
        this._selectedOption = this.selectedOption;
        return;
      }
      if (!this._selectedOption) this.setDefaultOption();
    }
  }

  setDefaultOption() {
    if (this.editable) this._selectedOption = "";
    else this._selectedOption = this.data[0];
  }

  setContainerDimensions() {
    console.log("Setting container dimensions", this.dropdownMenu.nativeElement.children);
    let defaultDropdownHeight = this.dropdownMenu.nativeElement.children[0].offsetHeight;
    let actualList;
    if (this.filter) {
      defaultDropdownHeight += this.dropdownMenu.nativeElement.children[1].children[0].offsetHeight;
      actualList = this.dropdownMenu.nativeElement.children[1].children[1].children;
    }
    else actualList = this.dropdownMenu.nativeElement.children[1].children[0].children;

    defaultDropdownHeight += Array.from(actualList).reduce((accumulator, currentValue) => accumulator + currentValue["offsetHeight"], 0);

    console.log(defaultDropdownHeight);
    let dropdownButtonElement = this.dropdownButton.nativeElement;
    let dropdownButtonRect = dropdownButtonElement.getBoundingClientRect();
    let dropdownFilterHeight = this.filter ? this.dropdownFilter.nativeElement.offsetHeight : 0;

    let distanceFromTop = dropdownButtonRect.top;
    let distanceFromLeft = dropdownButtonRect.left;
    let distanceFromBottom =
      window.innerHeight - distanceFromTop - dropdownButtonElement.offsetHeight;
    let distanceFromRight =
      window.innerWidth - distanceFromLeft - dropdownButtonElement.offsetWidth;

    this.selectedItemFocusedStyles = {
      "width": dropdownButtonElement.offsetWidth - 2 + "px",
      "height": dropdownButtonElement.offsetHeight -2 + "px"
    };
    this.restOfListWithoutFilterFocusedStyles = { "margin-top": dropdownFilterHeight + "px" };
    // If the space below is more than the dropdown height
    if (distanceFromBottom > defaultDropdownHeight) {
      // Un-reversify the list of array
      this.containerFocusedStyles = {
        "top": distanceFromTop + "px",
        "left": distanceFromLeft + "px",
        "width": dropdownButtonElement.offsetWidth +'px',
        "flex-direction": "column"
      };
      this.restOfListFocusedStyles = { "margin-top": dropdownButtonElement.offsetHeight + "px" };
    } else if (distanceFromTop > defaultDropdownHeight) {
      // If the space above is more than the dropdown height
      // Reversify the list of array
      this.containerFocusedStyles = {
        "bottom": distanceFromBottom + "px",
        "left": distanceFromLeft + "px",
        "width": dropdownButtonElement.offsetWidth +'px',
        "flex-direction": "column-reverse"
      };
      this.restOfListFocusedStyles = { "margin-bottom": dropdownButtonElement.offsetHeight + "px" };
      this.selectedItemFocusedStyles = { ...this.selectedItemFocusedStyles, "border-top": "1px solid #e0e0e0" };
    } else {
      // If space above and below both are less, show where it is maximum
      // When space below is more
      if (distanceFromBottom > distanceFromTop) {
        this.containerFocusedStyles = {
          "top": distanceFromTop + "px",
          "bottom": "20px",
          "left": distanceFromLeft + "px",
          "width": dropdownButtonElement.offsetWidth +'px',
          "flex-direction": "column"
        };
        this.restOfListFocusedStyles = { "margin-top": dropdownButtonElement.offsetHeight + "px" };
      } else {
        // When space above is more
        this.containerFocusedStyles = {
          "top": "20px",
          "bottom": distanceFromBottom + "px",
          "left": distanceFromLeft + "px",
          "width": dropdownButtonElement.offsetWidth +'px',
          "flex-direction": "column-reverse"
        };
        this.restOfListFocusedStyles = { "margin-bottom": dropdownButtonElement.offsetHeight + "px" };
        this.selectedItemFocusedStyles = { ...this.selectedItemFocusedStyles, "border-top": "1px solid #e0e0e0" };
      }
    }
  }

  onFilterSearch($event) {
    console.log("Searching");
    this.setSearchedItems($event.target.value)
  }

  setSearchedItems(value) {
    this._data = this.data.filter(element => element.name
    .toLowerCase()
    .indexOf(value.toLowerCase()) !== -1);
  }

  onInputFocus($event) {
    console.log($event);
    this.dropdownInput.nativeElement.focus();
    this.ifContainerFocused = false;
  }

  onInputChange($event) {
    console.log($event);
    this._selectedOption = $event.target.value;

    // Broadcast Event
    this.selectedOptionChange.emit(this._selectedOption);
  }

  onDropdownItemSelect($event: MouseEvent, option: IDropdownInput) {
    if (this.editable) this._selectedOption = option.name;
    else this._selectedOption = option;

    // if (this.selectedOption.hasOwnProperty("id"))
    //   this.selectedOption = { id: this._selectedOption.id };
    // else this.selectedOption = { name: this._selectedOption.name };

    // Broadcast Event
    this.selectedOptionChange.emit(option);
    this.hideDropdown();
  }

  onDropdownMenuClick($event: MouseEvent) {
    console.log("Dropdown button clicked.");
    this.clearSearchFilter();
    this.setContainerDimensions();
    if ($event.target instanceof HTMLInputElement) return;
    else this.showDropdown();
  }

  onDropdownBlur($event) {
    if (this.dropdownFilter && $event.relatedTarget == this.dropdownFilter.nativeElement && $event.relatedTarget instanceof HTMLInputElement) return;
    this.ifContainerFocused = false;
    this.hideDropdown();
  }

  clearSearchFilter() {
    if (!this.dropdownFilter) return;
    this.dropdownFilter.nativeElement.value = "";
    this.setSearchedItems("");
  }

  showDropdown() {
    this.dropdownMenu.nativeElement.focus();
  }

  hideDropdown() {
    this.dropdownMenu.nativeElement.blur();
  }

  ngOnDestroy() {
    this.mutationObserverDOM.disconnect();
  }
}
