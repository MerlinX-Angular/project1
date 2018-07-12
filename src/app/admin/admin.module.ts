import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminOrdersViewComponent } from './components/admin-orders-view/admin-orders-view.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { AuthGuard } from 'shared/services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';


export const adminRoutes: Routes = [
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/orders/:id',
    component: AdminOrdersViewComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    FormsModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [
    AdminOrdersComponent,
    AdminOrdersViewComponent,
    AdminProductsComponent,
    ProductFormComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
