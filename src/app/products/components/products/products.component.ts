import { Product } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  filteredProducts: Product[] = [];
  category: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.productService
    .getAll()
    .switchMap(products => { // du Observable naudojame switchMap
      this.products = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category'); // perduodame [queryParams]="{ category: c.$key }"

      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :  this.products;
    });
  }
}
