import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DropdownModule as MyD } from './modules/dropdown/dropdown.module';
import { QuarkXpressNgModule } from "@quark/xpressng";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyD, QuarkXpressNgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
