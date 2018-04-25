import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule } from './modules/dropdown/dropdown.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DropdownModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
