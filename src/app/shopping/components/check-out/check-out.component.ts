import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  data= [];
  userId;
  shipping = {
    firstName: '',
    lastName: '',
    city: '',
    street: '',
    phone: '',
    email: ''
   };
  itemCount;
  cartPrice;
  cartSubscription: Subscription;
  userSubscription: Subscription;


  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartSubscription =  this.shoppingCartService.getItems().subscribe(data => this.data = data);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

async placeOrder() {
    const order = {                       // sukuriame order objektą
      datePlaced: new Date().getTime(),  // objekto sukūrimo data
      shipping: this.shipping,         // perduodame reikšmes iš formos
      items: this.data.map(i => {
        return {
          product: {
            title: i.product.title,
            price: i.product.price,
            quantity: i.quantity
          }

        };
      }),
      userId: this.userId.uid,
      totalPrice: this.getTotal
      };
       const result = await this.orderService.storeOrder(order);  // perduodame duomenis į orderService
       this.router.navigate(['/order-success', result.key]);
  }

  get getTotal(){
    this.itemCount = 0;
    this.cartPrice = 0;
    this.data.forEach(l => {
      this.itemCount = (parseFloat(this.itemCount) + parseFloat(l.quantity));
      this.cartPrice += (l.quantity * l.product.price);
    });
    return parseFloat(this.cartPrice).toFixed(2);
  }

  get getCartPrice(){
     this.cartPrice = 0;
     this.data.forEach(l => {
       this.cartPrice += (l.quantity * l.product.price);
     });
     return this.cartPrice;
   }




}
