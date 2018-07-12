import { TestBed, inject } from '@angular/core/testing';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';



describe('AdminAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        RouterTestingModule
     ],
      providers: [
        AdminAuthGuard,
        AuthService,
        UserService
      ]
    });
  });

  it('should be created', inject([AdminAuthGuard], (service: AdminAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
