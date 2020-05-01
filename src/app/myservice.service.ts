import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateproduct: Product;
  constructor(private httpService: HttpClient) { }
  public getProduct() {
    console.log("ins service get product");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Product>("http://localhost:8569/product/GetAllProduct");
  }

  public addProduct(addproduct: Product) {
    console.log("ins service add");
    console.log(addproduct);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8569/product/ProductCreation", addproduct,  { headers, responseType: 'text'});
  }
  
  public updateProduct(updateproduct: Product) {
    this.updateproduct = updateproduct;
  }
  public updateMethod() {
    return this.updateproduct;
  }
  public onUpdate(updateproduct: Product) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:8569/product/UpdateProduct", updateproduct,  { headers, responseType: 'text'});
  }
  delete(productId: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:8569/product/DeleteProduct/" + productId,  { headers, responseType: 'text'});
  }

}
export class Product {
  productId: number;
  productName: string;
  productBrand: string;
  productPrice: number;
}