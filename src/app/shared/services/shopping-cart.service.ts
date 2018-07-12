import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from 'shared/models/product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';


@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

    /* Firebase sukuriame naują krepšelį */
  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

    /* paimame sukurtą cartId iš database */
  async getCart() {
    const cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }

    /* paimame cartId iš localStorage, arba sukuriame naują ir paimame iš Firebase */
  private  getOrCreateCartId()  {
      const cartId = localStorage.getItem('cartId');
      if (cartId) {return cartId; }

      const result = this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
  }

    /* supaprastiname metodą addToCart */
  private getItemsProduct(cartId: string, product: string) {
       return this.db.object('/shopping-carts/' + cartId + '/items/' + product);
  }

    /* įdedame į krepšelį pasirinktą prekę */
 async addToCart(product: Product) {
       const cartId = await this.getOrCreateCartId();
       const item$ = this.getItemsProduct(cartId, product.$key);
           item$.take(1).subscribe(item => {
             if (item.$exists()) {item$.update({ quantity: item.quantity + 1 }); } else {
              item$.set({ product: product, quantity: 1, title: product.title});
           }});
  }

   getItems() {
      const cartId = this.getOrCreateCartId();
      return  this.db.list('/shopping-carts/' + cartId + '/items/');
  }

 async removeFromCartItem(product: Product) {
    this.updateItem(product, -1);
 }

 async addToCartItem(product: Product) {
    this.updateItem(product, 1);
  }

 async removeFromCartProduct(product) {
    const cartId = await this.getOrCreateCartId();
    const itm = this.getItemsProduct(cartId, product.$key).remove();
 }

  private async updateItem(product: Product, change: number) {
      const cartId = await this.getOrCreateCartId();
      const item$ = this.getItemsProduct(cartId, product.$key);
      item$.take(1).subscribe(item => {
        const quantity = (item.quantity || 0) + change;
        if (quantity === 0) {
          item$.remove();
        } else {
          item$.update({
          title: item.product.title,
          imageUrl1: item.product.imageUrl1,
          price: item.product.price,
          quantity: quantity
        }); }
      });
    }

    async clearCart() {
      const cartId = await this.getOrCreateCartId();
      this.db.object('/shopping-carts/' + cartId + '/items').remove();
    }

}
