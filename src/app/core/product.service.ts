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
        return this.httpClient.get(productLink);
    }
}