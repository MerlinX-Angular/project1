import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
  orders$;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
    this.orders$ = orderService.getOrders(); // iš Firebase visi orders
  }

  details(id) {
   this.router.navigate(['admin/orders/' + id]); // id yra order.$key, nukreipiame į AdminOrdersViewComponent
  }
}
