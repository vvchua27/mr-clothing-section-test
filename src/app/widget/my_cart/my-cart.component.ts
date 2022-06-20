import { Component, AfterViewInit, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
    selector: 'my-cart',
    templateUrl: './my-cart.component.html',
    styleUrls: [
        './my-cart.component.scss'
    ]
})

export class MyCartComponent implements OnInit, AfterViewInit {
    
    cartQuantityText = '';
    cartQuantity = 0;
    currentProduct:any = {};
    currentCart:any = {};
    currentCartArray: any;
    sizeQuantity = 1;
    isModalShow = false;

    ngOnInit() {
        this.checkCartItems();
    }

    ngAfterViewInit() {
        this.checkCartItems();
    }

    toggleModal() {

        this.isModalShow = (this.isModalShow) ? false : true;
    }

    processCartItems(product:any) {

        var selectedSize = product.selectedSize;

        if (!(selectedSize.id in this.currentCart)) {

            this.currentCart[selectedSize.id] = selectedSize;
            this.currentCart[selectedSize.id].quantity = this.sizeQuantity;

            this.checkCartItems();
            return;
        } 

        this.currentCart[selectedSize.id].quantity += this.sizeQuantity;
        this.checkCartItems();
    }

    checkCartItems() {

        this.cartQuantity = Object.keys(this.currentCart).length;
        this.cartQuantityText = `My Cart ( ${this.cartQuantity} )`;

        this.currentCartArray = Object.keys(this.currentCart).map(index => {
            let product = this.currentCart[index];
            return product;
        });

        $('.cart-container-label').html(this.cartQuantityText);
    }

    loadProduct(product:any) {
        this.currentProduct = product;
    }
}
