import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutComponent } from './check-out.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { Observable } from 'rxjs/Observable';

const info = [{
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

describe('CheckOutComponent', () => {
  let component: CheckOutComponent;
  let fixture: ComponentFixture<CheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterTestingModule,
        FormsModule,
        AngularFireAuthModule
       ],
      providers: [
        ShoppingCartService,
        OrderService,
        UserService,
        AuthService
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should check if spy is called and if data gets info', () => {
    const shop = TestBed.get(ShoppingCartService);
    const spy1 = spyOn(shop, 'getItems').and.returnValue(Observable.of(info));
    component.ngOnInit();
    expect(spy1).toHaveBeenCalled();
    expect(component.data).toEqual(info);
  });


});
