import { TestBed, inject } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';

import { ShoppingCartService } from 'shared/services/shopping-cart.service';

describe('ShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ShoppingCartService ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
       ]
    });
  });

  it('should be created', inject([ShoppingCartService], (service: ShoppingCartService) => {
    expect(service).toBeTruthy();
  }));
});
