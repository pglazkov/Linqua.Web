import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './auth-token.interceptor';
import { LoginControlComponent } from './login-control/login-control.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [LoginControlComponent],
  declarations: [LoginControlComponent],
  providers: []
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthTokenInterceptor,
          multi: true
        }
      ]
    };
  }
}
