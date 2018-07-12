import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  shoppingCartItemCount: number;

  constructor(private auth: AuthService, private cartService: ShoppingCartService) {  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

     /* iš firebase paimame atitinkamą krepšelį */
     /* sužinome kiek krepšelyje yra skirtingų produktų ir atvaizduojame bendrą quantity */
    const cart$ = await this.cartService.getCart();
     cart$.subscribe(cart => {
       this.shoppingCartItemCount = 0;
       for (const productId in cart.items) {
         if (cart.items.hasOwnProperty(productId)) {
           this.shoppingCartItemCount += cart.items[productId].quantity; } }
    });
  }

  logout() {
    this.auth.logout();
  }

}
