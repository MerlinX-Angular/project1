import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { Subscription } from 'rxjs/subscription';

@Component({
  selector: 'app-admin-orders-view',
  templateUrl: './admin-orders-view.component.html',
  styleUrls: ['./admin-orders-view.component.css']
})
export class AdminOrdersViewComponent implements OnInit, OnDestroy {
   id: string;

   orderSubscription: Subscription;
   order = {
     items: ''
   };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = params.get('id'));
    this.orderSubscription = this.productService.getOrderId(this.id).subscribe(order => this.order = order);
  }

  ngOnDestroy() {
    this.orderSubscription.unsubscribe();
  }

}
