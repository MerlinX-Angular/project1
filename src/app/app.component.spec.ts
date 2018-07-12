import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, BsNavbarComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        RouterTestingModule.withRoutes([])
       ],
      providers: [ AuthService, UserService, ShoppingCartService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

