import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';

const product = [{
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

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterTestingModule
     ],
      providers: [ ShoppingCartService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get cartPrice from getTotal function', () => {
    component.data = [{title: 'tekstas', quantity: '2', product: {price: '2.2'}}];
    // tslint:disable-next-line:no-unused-expression
    component.getTotal;
    expect(component.cartPrice).toBe(4.4);
  });

  it('should check if spy is called and if product gets data', () => {
    const shop = TestBed.get(ShoppingCartService);
    const spy1 = spyOn(shop, 'getItems').and.returnValue(Observable.of(product));
    component.ngOnInit();
    expect(spy1).toHaveBeenCalled();
    expect(component.data).toEqual(product);
  });

});
