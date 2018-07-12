import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AdminOrdersComponent } from './admin-orders.component';

import { OrderService } from 'shared/services/order.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../../environments/environment';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

class RouterStub {
    navigate(params) {
    }
}

describe('AdminOrdersComponent', () => {
  let component: AdminOrdersComponent;
  let fixture: ComponentFixture<AdminOrdersComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrdersComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        OrderService,
        ShoppingCartService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the "admin/orders/" ', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.details(1);

    expect(spy).toHaveBeenCalledWith(['admin/orders/' + 1]);
  });
});
