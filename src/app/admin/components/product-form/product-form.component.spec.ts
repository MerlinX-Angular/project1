import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ProductFormComponent } from './product-form.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoryService } from 'shared/services/category.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../../environments/environment';
import { ProductService } from 'shared/services/product.service';
import { Observable } from 'rxjs/Observable';



describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        FormsModule,
        RouterTestingModule
     ],
      providers: [
        CategoryService,
        ProductService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
