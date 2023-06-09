import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthComponent } from './auth.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { environment } from './../../../environments/environment';

const ANT_DESIGN_MODULES = [NzButtonModule];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    ANT_DESIGN_MODULES
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleOAuthClientId),
          },
        ],
      } as SocialAuthServiceConfig
    }
  ],
  exports: [AuthComponent]
})
export class AuthModule {
}
