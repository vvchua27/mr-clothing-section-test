import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { MyCartModule } from '../widget/my_cart/my-cart.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MyCartModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
})
export class HeaderModule { }
