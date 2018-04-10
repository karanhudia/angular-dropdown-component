import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

// Import interfaces
import { IDropdownInput, ISelectedOption } from '../../interfaces/dropdown';

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

  public _selectedOption: IDropdownInput;
  public _data: IDropdownInput[];
  public mutationObserverDOM: MutationObserver;

  @Input() data: IDropdownInput[];
  @Input() disabled: boolean;
  @Input() dTitle: string;
  @Input() selectedOption: ISelectedOption;
  @Input() filter: boolean;

  @Output()
  selectedOptionChange: EventEmitter<object> = new EventEmitter<object>();

  // References of HTML
  @ViewChild("dropdownMenu") private dropdownMenu: ElementRef;
  @ViewChild("dropdownButton") private dropdownButton: ElementRef;

  constructor() {
    this.ifContainerFocused = false;
  }

  ngOnInit() {
    this.mutationObserverDOM = new MutationObserver(mutations => {
      this.setContainerDimensions();
    });

    this.mutationObserverDOM.observe(this.dropdownMenu.nativeElement, {
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
          if (obj.id == this.selectedOption.id) this._selectedOption = obj;
        });
      } else {
        this.data.forEach(obj => {
          if (obj.name == this.selectedOption.name) this._selectedOption = obj;
        });
      }
      if (!this._selectedOption) this.setDefaultOption();
    }
  }

  setDefaultOption() {
    this._selectedOption = this.data[0];
  }

  setContainerDimensions() {
    console.log("Setting container dimensions");
    let defaultDropdownHeight = Array.from(
      this.dropdownMenu.nativeElement.children
    ).reduce(
      (accumulator, currentValue) => accumulator + currentValue["offsetHeight"],
      0
    );
    console.log(defaultDropdownHeight);
    let dropdownButtonElement = this.dropdownButton.nativeElement;

    var dropdownButtonRect = dropdownButtonElement.getBoundingClientRect();
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let distanceFromTop = dropdownButtonRect.top + scrollTop;
    let distanceFromLeft = dropdownButtonRect.left + scrollLeft;
    let distanceFromBottom =
      window.innerHeight - distanceFromTop - dropdownButtonElement.offsetHeight;
    let distanceFromRight =
      window.innerWidth - distanceFromLeft - dropdownButtonElement.offsetWidth;

    this.selectedItemFocusedStyles = {
      width: dropdownButtonElement.offsetWidth - 2 + "px",
    };
    // If the space below is more than the dropdown height
    if (distanceFromBottom > defaultDropdownHeight) {
      // Un-reversify the list of array
      this.containerFocusedStyles = {
        top: distanceFromTop + "px",
        left: distanceFromLeft + "px",
        right: distanceFromRight + "px",
        "flex-direction": "column"
      };
      this.restOfListFocusedStyles = { "margin-top": dropdownButtonElement.offsetHeight + "px" };
    } else if (distanceFromTop > defaultDropdownHeight) {
      // If the space above is more than the dropdown height
      // Reversify the list of array
      this.containerFocusedStyles = {
        bottom: distanceFromBottom + "px",
        left: distanceFromLeft + "px",
        right: distanceFromRight + "px",
        "flex-direction": "column-reverse"
      };
      this.restOfListFocusedStyles = { "margin-bottom": dropdownButtonElement.offsetHeight + "px" };
    } else {
      // If space above and below both are less, show where it is maximum
      // When space below is more
      if (distanceFromBottom > distanceFromTop) {
        this.containerFocusedStyles = {
          top: distanceFromTop + "px",
          bottom: "20px",
          left: distanceFromLeft + "px",
          right: distanceFromRight + "px",
          "flex-direction": "column"
        };
        this.restOfListFocusedStyles = { "margin-top": dropdownButtonElement.offsetHeight + "px" };
      } else {
        // When space above is more
        this.containerFocusedStyles = {
          top: "20px",
          bottom: distanceFromBottom + "px",
          left: distanceFromLeft + "px",
          right: distanceFromRight + "px",
          "flex-direction": "column-reverse"
        };
        this.restOfListFocusedStyles = { "margin-bottom": dropdownButtonElement.offsetHeight + "px" };
      }
    }
  }

  onFilterSearch($event) {
    console.log("Searching");
    this._data = this.data.filter(
      element =>
        element.name
          .toLowerCase()
          .indexOf($event.target.value.toLowerCase()) !== -1
    );
  }

  onDropdownItemSelect($event: MouseEvent, option: IDropdownInput) {
    this._selectedOption = option;

    if (this.selectedOption.hasOwnProperty("id"))
      this.selectedOption = { id: this._selectedOption.id };
    else this.selectedOption = { name: this._selectedOption.name };

    // Broadcast Event
    this.selectedOptionChange.emit(this.selectedOption);
    this.hideDropdown();
  }

  onDropdownMenuClick($event: MouseEvent) {
    console.log("Dropdown button clicked.");
    this.setContainerDimensions();
    this.showDropdown();
  }

  onDropdownBlur($event) {
    if ($event.relatedTarget instanceof HTMLInputElement) return;
    this.ifContainerFocused = false;
    this.hideDropdown();
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
