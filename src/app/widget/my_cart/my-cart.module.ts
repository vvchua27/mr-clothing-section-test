import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyCartComponent } from './my-cart.component';

@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    MyCartComponent
  ],
  providers: [],
})
export class MyCartModule { }
