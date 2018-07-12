import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AdminProductsComponent } from './admin-products.component';
import { By } from '@angular/platform-browser';

import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from 'shared/services/product.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../../environments/environment';
import { RouterLinkWithHref } from '@angular/router';


describe('AdminProductsComponent', () => {
  let component: AdminProductsComponent;
  let fixture: ComponentFixture<AdminProductsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductsComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        DataTableModule,
        RouterTestingModule
     ],
      providers: [
        ProductService
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render data table', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('data-table').textContent).toBeTruthy();
  }));

  it('should redirect the user to the new product page if user clicks new product', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.directive(RouterLinkWithHref));
    const index = de.attributes.routerLink;
    expect(index).toContain('/admin/products/new');
  });


});
