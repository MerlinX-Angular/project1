import { Component, OnInit } from '@angular/core';
import { ProductService } from 'shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   sale;

  constructor(public productService: ProductService) {
   }

  ngOnInit() {
    this.sale = this.productService.getSale();
    }
  }
