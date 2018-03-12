import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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
  public defaultDropdownHeight: number;
  public _selectedOption: IDropdownInput;

  @Input() data: IDropdownInput[];
  @Input() disabled: boolean;
  @Input() dTitle: string;
  @Input() selectedOption: ISelectedOption;

  @Output()
  selectedOptionChange: EventEmitter<object> = new EventEmitter<object>();

  // References of HTML
  @ViewChild("dropdownMenu") private dropdownMenu: ElementRef;
  @ViewChild("dropdownButton") private dropdownButton: ElementRef;

  constructor() {
    this.ifContainerFocused = false;
  }

  ngOnChanges() {
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

    if (!this.data) return;
    this.defaultDropdownHeight = this.data.length * 22 + 2;
  }

  setDefaultOption() {
    this._selectedOption = this.data[0];
  }

  setContainerDimensions() {
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

    // If the space below is more than the dropdown height
    if (distanceFromBottom > this.defaultDropdownHeight) {
      // Un-reversify the list of array
      this.containerFocusedStyles = {
        top: distanceFromTop + "px",
        left: distanceFromLeft + "px",
        right: distanceFromRight + "px",
        'flex-direction': 'column'
      };
    }
    // If the space above is more than the dropdown height
    else if (distanceFromTop > this.defaultDropdownHeight) {
      // Reversify the list of array
      this.containerFocusedStyles = {
        bottom: distanceFromBottom + "px",
        left: distanceFromLeft + "px",
        right: distanceFromRight + "px",
        'flex-direction': 'column-reverse'
      };
    }
    // If space above and below both are less, show where it is maximum
    else {
      // When space below is more
      if (distanceFromBottom > distanceFromTop) {
        this.containerFocusedStyles = {
          top: distanceFromTop + "px",
          bottom: "20px",
          left: distanceFromLeft + "px",
          right: distanceFromRight + "px",
          'flex-direction': 'column'
        };
      }
      // When space above is more
      else {
        this.containerFocusedStyles = {
          top: "20px",
          bottom: distanceFromBottom + "px",
          left: distanceFromLeft + "px",
          right: distanceFromRight + "px",
          'flex-direction': 'column-reverse'
        };
      }
    }
  }

  onDropdownItemSelect($event: MouseEvent, option: IDropdownInput) {
    this._selectedOption = option;

    if (this.selectedOption.hasOwnProperty("id"))
      this.selectedOption = { id: this._selectedOption.id };
    else
      this.selectedOption = { name: this._selectedOption.name };

    // Broadcast Event
    this.selectedOptionChange.emit(this.selectedOption);
    this.hideDropdown();
  }

  onDropdownMenuClick($event: MouseEvent) {
    console.log("Dropdown button clicked.");
    this.setContainerDimensions();
    this.showDropdown();
  }

  onDropdownBlur() {
    this.ifContainerFocused=false;
    this.hideDropdown();
  }

  showDropdown() {
    this.dropdownMenu.nativeElement.focus();
  }

  hideDropdown() {
    this.dropdownMenu.nativeElement.blur();
  }
}
