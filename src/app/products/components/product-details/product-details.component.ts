import { Product } from 'shared/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase } from 'angularfire2/database';
declare let $: any;

@Component({
  selector: 'app-products-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit, AfterViewChecked {
  id;
  data: Product = {
      $key: '',
      title: '',
      price: 0,
      category: '',
      imageUrl1a: '',
      imageUrl1: '',
      imageUrl2: '',
      descriptions: '',
      rating: 0
 };

    constructor(
      private cartService: ShoppingCartService,
      private route: ActivatedRoute,
      private af: AngularFireDatabase,
      private modalService: NgbModal
    ) {
       route.paramMap.subscribe( params => {
         this.id = params.get('id'); });
         this.af.object('/products/' + this.id).subscribe( data => {
                 this.data = data; });
   }
   ngOnInit() {
 }

  ngAfterViewChecked() {
    $('#small a').click(function(eventObject) {
      $('#big img').hide().attr('src', $(this).attr('href'));
        $('#big img').load(function() {
          $(this).fadeIn(0);
        });
      eventObject.preventDefault();
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  open(content) {
      this.modalService.open(content);
  }


}
