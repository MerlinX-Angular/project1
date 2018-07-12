import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { RatingComponent } from './components/rating/rating.component';

import { CategoryService } from 'shared/services/category.service';


export const productsRoutes: Routes = [
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductDetailsComponent }

];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(productsRoutes)
  ],
  declarations: [
    ProductsComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    RatingComponent
  ],
  providers: [ CategoryService ]
})
export class ProductsModule {}
