import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
    constructor(
        private httpClient: HttpClient
    ) {}

    getProduct(productLink: string) {
        console.log(productLink);
        return this.httpClient.get(productLink);
    }
}