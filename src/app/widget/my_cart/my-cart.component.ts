import { Component, AfterViewInit, OnInit } from '@angular/core';

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
    isModalShow = false;

    ngOnInit() {
        this.cartQuantityText = '( ' + this.cartQuantity +' )';
    }

    ngAfterViewInit() {
       
    }

    toggleModal() {

        this.isModalShow = (this.isModalShow) ? false : true;
    }
}
