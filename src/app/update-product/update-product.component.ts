import { Component, OnInit } from '@angular/core';
import { Product, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  obj1: any;
  product: Product;
  message: string;
  constructor(private myservice: MyserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
    
  }
  onUpdate(update: Product): any
   {
     return this.myservice.onUpdate(update).subscribe(data => {alert(data)});
    
  }
  ngOnInit(): void {
    
  }
  


}
