import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MyCartModule } from 'src/app/widget/my_cart/my-cart.module';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyCartModule
  ],
  exports: [
    ProductComponent
  ],
  providers: [],
})
export class ProductModule { }
