import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { DropdownComponent } from './dropdown.component';
import { GetSelectedNamePipe } from "./dropdown.pipe";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DropdownComponent, GetSelectedNamePipe],
  exports: [DropdownComponent]
})
export class DropdownModule {}
