import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../../environments/environment';

import { ProductsComponent } from './products.component';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from 'shared/services/product.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { CategoryService } from 'shared/services/category.service';
import { Observable } from 'rxjs/Observable';

const data = [{
  '$key': '-Kv66JcBHsBADPmGH9im',
  ​​product: {
  ​​​category: 'fruits',
  ​​​descriptions: 'rem Ipsum.',
  ​​​imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png',
  ​​​imageUrl1: 'http://webdizainas.eu/images/firebase/mandarin1.jpg',
  ​​​imageUrl1a: 'http://webdizainas.eu/images/firebase/mandarin1a.jpg',
  ​​​imageUrl2: 'http://webdizainas.eu/images/firebase/mandarin2.jpg',
  ​​​price: 2.2​​​,
  rating: 4.8,
  ​​​title: 'Mandarins'​​​},
  ​​quantity: 4,
  ​​title: 'Mandarins',
}];

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsComponent,
        ProductFilterComponent
       ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterTestingModule
      ],
      providers: [
        ProductService,
        ShoppingCartService,
        CategoryService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('check if getAll is called and products get the right information', () => {
    const other = TestBed.get(ProductService);
    const spy1 = spyOn(other, 'getAll').and.returnValue(Observable.of(data));
    component.ngOnInit();
    expect(component.products).toEqual(data);
    expect(spy1).toHaveBeenCalled();
  });
});
