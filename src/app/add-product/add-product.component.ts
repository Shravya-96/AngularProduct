import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService,Product } from '../myservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  [x: string]: any;
  obj2:any;
  message: string;
  product: Product;
  constructor(private myservice: MyserviceService,private router: Router) {
  }
   

  ngOnInit(): void {
  }
  onSubmit(addproduct:Product):any{
    console.log(addproduct);
    this.myservice.onSubmit(addproduct).subscribe( data => {alert(data)});
    this.router.navigate(['']); 
    }
handleSuccessfulResponse(response: any)
{
  this.product=response;
}
}
