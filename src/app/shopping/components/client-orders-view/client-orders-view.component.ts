import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from 'shared/services/product.service';


@Component({
  selector: 'app-client-orders-view',
  templateUrl: './client-orders-view.component.html',
  styleUrls: ['./client-orders-view.component.css']
})
export class ClientOrdersViewComponent {
   id: string;
   order = {
     shipping: ''
   };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
       route.paramMap.subscribe(params => this.id = params.get('id'));
       this.productService.getOrderId(this.id).subscribe(order => this.order = order);
    }

}
