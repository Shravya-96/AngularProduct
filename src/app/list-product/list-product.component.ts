import { Component, OnInit } from '@angular/core';
import { MyserviceService ,Product} from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  message: string;
  product: Product[];
  constructor(private myservice: MyserviceService, private router: Router) {
  }

  ngOnInit(): any {
    this.myservice.getProduct().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.product = response;
  }
  update(updateproduct: Product) {
    this.myservice.updateProduct(updateproduct);
    this.router.navigate(['/updateproduct']);
  }
  delete(deleteproduct: Product): any {
    this.myservice.delete(deleteproduct.productId).subscribe(data => {
      this.message = data
    });
    this.router.navigate(['/listproduct']);
  }


}
