import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/core/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product.component.html',
  styleUrls: [
    './product.component.scss'
  ]
})

export class ProductComponent {
    
    productLink = 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product';

    productImage = '';
    productName = '';
    productCurrency = '$';
    productPrice: any;
    productDescription = '';
    productSizeOptions: any;

    constructor(
        private ProductService: ProductService
    ) { }

    ngOnInit() {
        
        this.ProductService.getProduct(this.productLink).subscribe((response: any) => {
            this.productImage = response.imageURL;
            this.productName = response.title;
            this.productPrice = response.price;
            this.productDescription = response.description;

            var sizeArray = Object.keys(response.sizeOptions).map(index => {
                let size = response.sizeOptions[index];
                return size;
            });

            this.productSizeOptions = sizeArray;
        })

    }

    ngAfterViewInit() {
        
    }

    toggleModal() {

    }

    displaySize(a:any) {
        console.log(a);
    }
}
