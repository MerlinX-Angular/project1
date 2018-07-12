import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { AuthGuard } from 'shared/services/auth-guard.service';

import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { SelectiveStrategy } from 'shared/services/selective-strategy.service';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { ContactComponent } from './core/components/contact/contact.component';

import { AdminModule } from './admin/admin.module';
import { SharedModule } from 'shared/shared.module';
import { ShoppingModule } from './shopping/shopping.module';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact',  component: ContactComponent },
  {
    path: '',
    loadChildren: './products/products.module#ProductsModule', // naudojame Preloading Strategy
    data: { preload: true }
  }
 ];

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    SharedModule,
    ShoppingModule,
    FormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: SelectiveStrategy })
  ],
  providers: [
    AdminAuthGuard,
    SelectiveStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
