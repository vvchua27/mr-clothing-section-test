import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './section/product/product.module';
import { HeaderModule } from './header/header.module';
import { MyCartModule } from './widget/my_cart/my-cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ProductModule,
    MyCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
