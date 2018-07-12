import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AdminOrdersViewComponent } from './admin-orders-view.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductService } from 'shared/services/product.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';


describe('AdminOrdersViewComponent', () => {
  let component: AdminOrdersViewComponent;
  let fixture: ComponentFixture<AdminOrdersViewComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrdersViewComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterTestingModule
     ],
     providers: [ ProductService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
