import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateproduct: Product;
  addproduct: Product;
  product: Product;
  constructor(private httpService: HttpClient) { }
  public getProduct() {
    console.log("ins service get product");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Product>("http://localhost:8568/products/GetAllProduct/");
  }
  public addProduct(addproduct: Product) {
    this.addproduct = addproduct;
  }
  public addMethod() {
    return this.addProduct;
  }
  public onSubmit(addProduct: Product) {
    console.log(addProduct);
    console.log("ins service add");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8568/products/ProductCreation/", addProduct,  { headers, responseType: 'text'});
  }

  public updateProduct(updateproduct: Product) {
    this.updateproduct = updateproduct;
  }
  public updateMethod() {
    return this.updateProduct;
  }
  public onUpdate(updateProduct: Product) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8568/products/UpdateProduct/", updateProduct,  { headers, responseType: 'text'});
  }
  delete(productId: number) {
    console.log("ins service delete");
    console.log(productId);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8568/products/DeleteProduct/" + productId,  { headers, responseType: 'text'});
  }

}
  export class Product {
    productId: number;
    productName: string;
    productBrand: string;
    productPrice: number;
    retailerId: string;
    constructor(productId: number, productName: string, productBrand: string, productPrice: number, retailerId: string)
    {
      this.productId=productId;
      this.productName=productName;
      this.productBrand=productBrand;
      this.productPrice=productPrice;
      this.retailerId=retailerId;
    }  
  }  
