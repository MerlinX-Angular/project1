import { TestBed, inject } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';

import { UserService } from 'shared/services/user.service';


describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ UserService ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
       ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
