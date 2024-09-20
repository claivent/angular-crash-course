import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductRepresentation} from "../models/product-representation";

@Injectable({
  providedIn: 'app-root'
})
export class ProductService {

  //private baseUrl = 'https://fakestoreapi.com/';
  private baseUrl = 'http://localhost:8222/';


  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    const productsUrl = `${this.baseUrl}api/v1/products`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  getAllProductsWithLimit(limit = 5) {
    const productsUrl = `${this.baseUrl}api/v1/products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product: ProductRepresentation) {
    const productsUrl = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
}
