import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';
import { MyCartComponent } from 'src/app/widget/my_cart/my-cart.component';
import * as $ from 'jquery';

@Component({
  selector: 'product-details',
  templateUrl: './product.component.html',
  styleUrls: [
    './product.component.scss'
  ]
})

export class ProductComponent {
    
    productLink = 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product';

    product:any = {};
    productCurrency = '$';
    productSizeOptions: any;

    selectedSize: any;
    
    errorMessage = 'Please select a size first';

    subscriptions$: Subscription[] = [];

    constructor(
        private ProductService: ProductService,
        public MyCartComponent: MyCartComponent
    ) { }

    ngOnInit() {
        
        this.ProductService.getProduct(this.productLink).subscribe((response: any) => {
            this.product.image = response.imageURL;
            this.product.name = response.title;
            this.product.price = response.price
            this.product.description = response.description;

            var sizeArray = Object.keys(response.sizeOptions).map(index => {
                let size = response.sizeOptions[index];
                return size;
            });

            this.product.sizes = sizeArray;

            this.MyCartComponent.loadProduct(this.product);

        })
    }

    toggleSize(sizeID:any) {
        
        if ($('#size-'+sizeID).hasClass('toggled')) {

            $('#size-' + sizeID).removeClass('toggled');
            delete this.selectedSize;

            return;
        }

        for(let item of this.product.sizes) {
            $('#size-' + item.id).removeClass('toggled');
        }
        
        $('#size-' + sizeID).addClass('toggled');
        this.selectedSize = sizeID;
    }

    addToCart() {

        var hasToggle = false;

        if ($('.product-container-right__container-size__item').hasClass('toggled')) {

            hasToggle = true;
        }

        if (!hasToggle) {

            alert(this.errorMessage);
            return;
        }

        this.buildProductCart();
        this.MyCartComponent.processCartItems(this.product);
    }

    buildProductCart() {

        for(let item of this.product.sizes) {
            
            if (item.id === this.selectedSize) {
                this.product.selectedSize = {
                    id: item.id,
                    size: item.label
                }
            }
        }
    }
}
