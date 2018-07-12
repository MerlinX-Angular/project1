import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  product: Product;
   data= [];
   quantity: number;
   itemCount;
   cartPrice;
   cart$;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
   this.cartService.getItems().subscribe(data => this.data = data);
  }

  get getTotal(){
    this.itemCount = 0;
    this.cartPrice = 0;
    this.data.forEach(l => {
      this.itemCount = (parseFloat(this.itemCount) + parseFloat(l.quantity));
      this.cartPrice += (l.quantity * l.product.price);
    });
    return this.cartPrice;
  }

  removeFromCartItem(product) {
      this.cartService.removeFromCartItem(product);
  }

  addToCartItem(product) {
     this.cartService.addToCartItem(product);
   }

   removeFromCartProduct(product) {
      this.cartService.removeFromCartProduct(product);
   }

   delete(product) {
     if (!confirm('Are you sure you want to delete this product?')) {return; }

     this.cartService.removeFromCartItem(product);
   }







}
