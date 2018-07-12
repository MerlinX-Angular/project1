import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { ClientOrdersViewComponent } from './client-orders-view.component';
import { ProductService } from 'shared/services/product.service';
import { Observable } from 'rxjs/Observable';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClientOrdersViewComponent', () => {
  let component: ClientOrdersViewComponent;
  let fixture: ComponentFixture<ClientOrdersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrdersViewComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        RouterTestingModule
     ],
      providers: [
        ProductService,
        {
          provide: ActivatedRoute,
          useValue: {paramMap: Observable.of(convertToParamMap({id: '1'}))}
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrdersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('check if paramMap gets a value', () => {
    expect(component.id).toBe('1');
  });
});
