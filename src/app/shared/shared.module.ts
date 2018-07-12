import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { OrderService } from 'shared/services/order.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { UserService } from 'shared/services/user.service';
import { AuthGuard } from 'shared/services/auth-guard.service';
import { AuthService } from 'shared/services/auth.service';

import { ShoppingCartComponent } from 'shared/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from '../shopping/components/check-out/check-out.component';


export const sharedRoutes: Routes = [
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(sharedRoutes)
  ],
  declarations: [
    ShoppingCartComponent,
    CheckOutComponent
  ],
  exports: [
    ShoppingCartComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
