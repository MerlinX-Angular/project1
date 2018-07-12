import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ClientOrdersViewComponent } from './components/client-orders-view/client-orders-view.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AuthGuard } from 'shared/services/auth-guard.service';

export const shoppingRoutes: Routes = [
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'my/orders/:id', component: ClientOrdersViewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(shoppingRoutes)
  ],
  declarations: [
    OrderSuccessComponent,
    MyOrdersComponent,
    ClientOrdersViewComponent
  ]
})
export class ShoppingModule { }
