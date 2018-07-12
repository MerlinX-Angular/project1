import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router) {
      this.orders$ = authService.user$.switchMap(u => orderService.getOrdersByUser(u.uid));
    }

  details(id) {
    this.router.navigate(['my/orders/' + id]);
  }
}
